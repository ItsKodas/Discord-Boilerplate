import Discord from 'discord.js'


import ping from './ping.ts'



export default {
    data: new Discord.SlashCommandBuilder()
        .setName('test')
        .setDescription('Test Commands')
        .setDMPermission(false)

        .addSubcommand(ping.data),

    subcommands: {
        ping,
    }
}
