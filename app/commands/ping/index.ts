import Discord from 'discord.js'



export default {
    data: new Discord.SlashCommandBuilder()
        .setName('ping')
        .setDescription('Test Ping'),

    async execute(interaction: Discord.ChatInputCommandInteraction) {
        interaction.reply({ content: `Responded in ${interaction.client.ws.ping}ms`, ephemeral: true })
    }
}
