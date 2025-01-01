import Discord from 'discord.js'

import { response } from 'discord/commands'
import Buttons from 'discord/buttons'
import Modals from 'discord/modals'
import StringSelectMenus from 'discord/stringSelectMenus'



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

    try {
        return Buttons[ext](interaction, args)
    } catch {
        return interaction.reply({ content: `No ButtonID matching \`${ext}\` was found.`, ephemeral: true })
    }
}


export function ModalSubmit(interaction: Discord.ModalSubmitInteraction) {
    const ext = interaction.customId.split('.')[0]
    const args = interaction.customId.split('.').slice(1)

    try {
        return Modals[ext](interaction, args)
    } catch {
        return interaction.reply({ content: `No ModalSubmitID matching \`${ext}\` was found.`, ephemeral: true })
    }
}


export function StringSelectMenu(interaction: Discord.StringSelectMenuInteraction) {
    const ext = interaction.customId.split('.')[0]
    const args = interaction.customId.split('.').slice(1)
    const channel = interaction.channel as Discord.TextChannel

    if (!channel) return interaction.reply({ content: `This interaction is not valid in this context.`, ephemeral: true })

    try {
        return StringSelectMenus[ext](interaction, args)
    } catch {
        return interaction.reply({ content: `No StringSelectMenu matching \`${ext}\` was found.`, ephemeral: true })
    }
}