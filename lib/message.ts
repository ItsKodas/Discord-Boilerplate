import Discord from 'discord.js'
import App from 'app'

import Colors, { Color } from 'lib/colors.ts'



interface MessageOptions {
    variant?: 'default' | 'success' | 'error'
    title: string
    description: string
    color?: Color
    components?: Discord.APIActionRowComponent<Discord.APIMessageActionRowComponent>[]
}

const defaultColor = (variant: string) => {
    switch (variant) {
        default: return Colors.primary
        case 'success': return Colors.success
        case 'error': return Colors.danger
    }
}



type MessageReturnType<T extends boolean> = T extends true ? Discord.InteractionReplyOptions : Discord.MessageCreateOptions
export function send<T extends boolean>(options: MessageOptions & { ephemeral: T }): MessageReturnType<T> {
    return {
        ephemeral: options.ephemeral || false,
        embeds: [
            new Discord.EmbedBuilder()
                .setTitle(options.title)
                .setColor(options.color ? Colors[options.color] : defaultColor(options.variant))
                .setDescription(options.description)
        ],
        components: options.components
    } as MessageReturnType<T>
}


export async function notify(options: MessageOptions): Promise<Discord.Message> {
    const channel = App.channel(App.config.channels.logs) as Discord.TextBasedChannel

    return await channel.send({
        embeds: [
            new Discord.EmbedBuilder()
                .setTitle(options.title)
                .setColor(options.color ? Colors[options.color] : defaultColor(options.variant))
                .setDescription(options.description)
        ],
        components: options.components
    })
}


export default {
    send,
    notify
}