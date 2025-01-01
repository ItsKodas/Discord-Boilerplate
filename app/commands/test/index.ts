import Discord from 'discord.js'


import buttons from './buttons.ts'
import menus from './menus.ts'



export default {
    data: new Discord.SlashCommandBuilder()
        .setName('test')
        .setDescription('Test Commands')

        .addSubcommand(buttons.data)
        .addSubcommand(menus.data),

    subcommands: {
        buttons,
        menus
    }
}
