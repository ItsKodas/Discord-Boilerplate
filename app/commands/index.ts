import Discord from 'discord.js'

import test from './test/index.ts'



const commands: Discord.SlashCommandSubcommandsOnlyBuilder[] = [
    test.data,
]

const response: { [key: string]: any } = {
    test: test,
}


export { commands, response }