import ping from './ping/index.ts'
import test from './test/index.ts'
import namesearch from './namesearch/index.ts'



const commands = [
    ping.data,
    test.data,
    namesearch.data,
]

const response: { [key: string]: any } = {
    ping,
    test,
    namesearch,
}


export { commands, response }