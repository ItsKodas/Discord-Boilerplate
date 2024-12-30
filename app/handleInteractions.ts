import Discord from 'discord.js'
import { response } from 'discord/commands'



export async function Commands(interaction: Discord.ChatInputCommandInteraction) {
    const command = interaction.commandName
    const subcommand = interaction.options.getSubcommand()

    if (!command) return interaction.reply({ content: `No command matching ${interaction.commandName} was found.`, ephemeral: true })

    if (!subcommand) response[command].execute(interaction)
    else response[command].subcommands[subcommand].execute(interaction)

}



export async function ModalSubmit(interaction: Discord.ModalSubmitInteraction) {
    const ext = interaction.customId.split('.')[0]
    const args = interaction.customId.split('.').slice(1)

    // if (ext === 'example') return Example(interaction)

    if (!ext) return interaction.reply({ content: `No ModalID matching ${ext} was found.`, ephemeral: true })

}



export async function Button(interaction: Discord.ButtonInteraction) {
    const ext = interaction.customId.split('.')[0]
    const args = interaction.customId.split('.').slice(1)


    // if (ext === 'example') interaction.showModal(example)

    // if (ext === 'example2') switch (args[0]) {
    //     default: return interaction.reply({ content: `No ButtonID matching ${args[0]} was found.`, ephemeral: true })

    //     case 'example': return interaction.channel?.delete()
    //     case 'example': return interaction.channel?.delete()
    //     case 'example': return example.archive(interaction)
    // }


    if (!ext) return interaction.reply({ content: `No ButtonID matching ${ext} was found.`, ephemeral: true })

}



export async function StringSelectMenu(interaction: Discord.StringSelectMenuInteraction) {
    const ext = interaction.customId.split('.')[0]
    const args = interaction.customId.split('.').slice(1)
    const channel = interaction.channel as Discord.TextChannel

    if (!channel) return interaction.reply({ content: `This interaction is not valid in this context.`, ephemeral: true })


    // if (ext === 'example') switch (args[0]) {
    //     default: return interaction.reply({ content: `No StringSelectMenu matching ${args[0]} was found.`, ephemeral: true })

    //     case 'example': return Example(interaction)
    // }


    if (!ext) return interaction.reply({ content: `No ModalID matching ${ext} was found.`, ephemeral: true })

}