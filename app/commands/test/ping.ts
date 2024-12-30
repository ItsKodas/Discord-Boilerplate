import Discord from 'discord.js'



export default {
    data: new Discord.SlashCommandSubcommandBuilder()
        .setName('ping')
        .setDescription('Test bot response'),

    async execute(interaction: Discord.ChatInputCommandInteraction) {
        interaction.reply({ content: `Responded in ${interaction.client.ws.ping}ms`, ephemeral: true })
    }
}