import ping from './ping/index.ts'
import test from './test/index.ts'



const commands = [
    ping.data,
    test.data,
]

const response: { [key: string]: any } = {
    ping: ping,
    test: test,
}


export { commands, response }