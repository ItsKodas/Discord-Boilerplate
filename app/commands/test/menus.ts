import Discord from 'discord.js'



export default {
    data: new Discord.SlashCommandSubcommandBuilder()
        .setName('menus')
        .setDescription('Test Menus'),

    async execute(interaction: Discord.ChatInputCommandInteraction) {
        interaction.reply({
            ephemeral: true,
            components: [
                new Discord.ActionRowBuilder<Discord.MessageActionRowComponentBuilder>()
                    .addComponents(
                        new Discord.StringSelectMenuBuilder()
                            .setCustomId('menu')
                            .addOptions([
                                { label: 'Test', value: 'test' }
                            ])
                    )
            ]
        })
    }
}