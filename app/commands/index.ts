import ping from './ping/index.ts'
import test from './test/index.ts'
import namesearch from './namesearch/index.ts'


const commands = [
    ping,
    test,
    namesearch
]

export default commands


import fs from 'node:fs'

fs.writeFileSync('./commands.json', JSON.stringify(commands, null, '\t'))