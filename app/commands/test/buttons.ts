import Discord from 'discord.js'



export default {
    data: new Discord.SlashCommandSubcommandBuilder()
        .setName('buttons')
        .setDescription('Test Buttons'),

    async execute(interaction: Discord.ChatInputCommandInteraction) {
        interaction.reply({
            ephemeral: true,
            components: [
                new Discord.ActionRowBuilder<Discord.MessageActionRowComponentBuilder>()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId('button1')
                            .setLabel('Button1')
                            .setStyle(Discord.ButtonStyle.Secondary)
                            .setEmoji('👆'),

                        new Discord.ButtonBuilder()
                            .setCustomId('button2')
                            .setLabel('Button2')
                            .setStyle(Discord.ButtonStyle.Secondary)
                            .setEmoji('👆'),

                        new Discord.ButtonBuilder()
                            .setCustomId('button3')
                            .setLabel('Button3')
                            .setStyle(Discord.ButtonStyle.Secondary)
                            .setEmoji('👆')
                    ),

                new Discord.ActionRowBuilder<Discord.MessageActionRowComponentBuilder>()
                    .addComponents(
                        new Discord.ButtonBuilder()
                            .setCustomId('error')
                            .setLabel('Throw Error')
                            .setStyle(Discord.ButtonStyle.Danger)
                            .setEmoji('👆'),
                    )
            ]
        })
    }
}