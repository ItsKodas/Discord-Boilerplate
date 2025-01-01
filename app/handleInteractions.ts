import Discord from 'discord.js'
import { response } from 'discord/commands'



export function Commands(interaction: Discord.ChatInputCommandInteraction) {
    const command = interaction.commandName
    if (!command) return interaction.reply({ content: `No command matching ${interaction.commandName} was found.`, ephemeral: true })

    try {
        const subcommand = interaction.options.getSubcommand()
        response[command].subcommands[subcommand].execute(interaction)
    } catch {
        response[command].execute(interaction)
    }
}



export function Button(interaction: Discord.ButtonInteraction) {
    const ext = interaction.customId.split('.')[0]
    const args = interaction.customId.split('.').slice(1)

    return import(`discord/buttons/${ext}/index.ts`)
        .then(iModule => iModule.default(interaction, args))
        .catch(() => interaction.reply({ content: `No ButtonID matching \`${ext}\` was found.`, ephemeral: true }))
}


export function ModalSubmit(interaction: Discord.ModalSubmitInteraction) {
    const ext = interaction.customId.split('.')[0]
    const args = interaction.customId.split('.').slice(1)

    return import(`discord/modals/${ext}/index.ts`)
        .then(iModule => iModule.default(interaction, args))
        .catch(() => interaction.reply({ content: `No ModalSubmitID matching \`${ext}\` was found.`, ephemeral: true }))
}


export function StringSelectMenu(interaction: Discord.StringSelectMenuInteraction) {
    const ext = interaction.customId.split('.')[0]
    const args = interaction.customId.split('.').slice(1)
    const channel = interaction.channel as Discord.TextChannel

    if (!channel) return interaction.reply({ content: `This interaction is not valid in this context.`, ephemeral: true })

    return import(`discord/stringSelectMenus/${ext}/index.ts`)
        .then(iModule => iModule.default(interaction, args))
        .catch(() => interaction.reply({ content: `No StringSelectMenu matching \`${ext}\` was found.`, ephemeral: true }))
}