import fs from 'node:fs'

const file = fs.readFileSync('./config.json', 'utf8')
const config: Config = JSON.parse(file)

export default config