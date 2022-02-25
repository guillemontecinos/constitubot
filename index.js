require('dotenv').config()
const {Client, Intents} = require('discord.js')
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', async (message) => {
    const splitMsg = message.content.split(' ')
    if(splitMsg[0] === '!consti'){
        await message.reply('Hola soy el Constitubot!')
    }
})

client.login(process.env.DISCORD_BOT_TOKEN)