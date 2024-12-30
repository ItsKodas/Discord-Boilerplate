export { }

declare global {

    interface Config {
        discord: {
            client: string
            guild: string
            token: string
        }

        mongo: {
            uri: string
            db: string
        }
    }

}