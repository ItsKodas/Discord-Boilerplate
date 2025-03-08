import Discord from 'discord.js'


const data = [
    'Jimmy',
    'Lin',
    'Bob',
    'John',
    'Lang',
    'Tim',
    'Andrew',
    'Thomas',
    'Tred',
    'Zilo',
]


export default function TestAutocomplete(interaction: Discord.AutocompleteInteraction, args: string[]) {

    const search = interaction.options.getString('name') || ''
    const results = data.filter(name => name.toLowerCase().includes(search.toLowerCase()))
    const options = results.map(name => ({ name, value: name }))
    
    interaction.respond(options)

}