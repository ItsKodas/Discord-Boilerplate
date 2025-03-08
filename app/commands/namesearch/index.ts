import Discord from 'discord.js'



export default {
    data: new Discord.SlashCommandBuilder()
        .setName('namesearch')
        .setDescription('Search a name')
        .addStringOption(option => option
            .setName('name')
            .setDescription('Enter a name to search')
            .setRequired(true)
            .setAutocomplete(true)
        ),

    async execute(interaction: Discord.ChatInputCommandInteraction) {
        interaction.reply({ content: `Name Selected "${interaction.options.getString('name')}"`, ephemeral: true })
    }
}
