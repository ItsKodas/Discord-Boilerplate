import config from 'config'
import Discord, { Collection } from 'discord.js'

import Colors from 'lib/colors.ts'

import ready from './ready.ts'
import messageCreate from './messageCreate.ts'
import guildMemberAdd from './guildMemberAdd.ts'
import guildMemberRemove from './guildMemberRemove.ts'
import channelUpdate from './channelUpdate.ts'
import messageUpdate from './messageUpdate.ts'
import voiceStateUpdate from './voiceStateUpdate.ts'

import * as Handle from './handleInteractions.ts'



const client = new Discord.Client({
    intents: [
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.GuildPresences,
        Discord.GatewayIntentBits.GuildVoiceStates,

        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.DirectMessages,
    ],

    partials: [
        Discord.Partials.Channel,
    ]
})

client.login(config.discord.token).catch(console.error)


client.on('ready', ready)

client.on('messageCreate', messageCreate)
client.on('messageUpdate', messageUpdate)
client.on('channelUpdate', channelUpdate)
client.on('guildMemberAdd', guildMemberAdd)
client.on('guildMemberRemove', guildMemberRemove)
client.on('voiceStateUpdate', voiceStateUpdate)

client.on('interactionCreate', interaction => {
    if (interaction.isChatInputCommand()) return Handle.Commands(interaction)
    if (interaction.isModalSubmit()) return Handle.ModalSubmit(interaction)
    if (interaction.isStringSelectMenu()) return Handle.StringSelectMenu(interaction)
    if (interaction.isButton()) return Handle.Button(interaction)
})




const DiscordController = {

    config: config.discord,
    colors: Colors,

    client: client || null,
    guild: () => client.guilds.cache.get(config.discord.guild) as Discord.Guild,
    channel: (data: string): Discord.GuildBasedChannel => {
        const guild = client.guilds.cache.get(config.discord.guild)
        if (!guild) throw new Error('Guild not found')
        return (guild.channels.cache.get(data) || guild.channels.cache.find(channel => channel.name === data)) as Discord.GuildBasedChannel
    },
    user: (id: string) => {
        const guild = client.guilds.cache.get(config.discord.guild)
        return guild?.members.cache.get(id) as Discord.GuildMember
    },

}

export default DiscordController