const loadConfig = async () => {
    const { default: Config } = await import(`../config.ts`)
    return Config
}

const config = await loadConfig()

export default config