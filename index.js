const Discord = require("discord.js")
const { Client, GatewayIntentBits } = require('discord.js');
require("dotenv").config()

const TOKEN = "MTA4MDY3NzY5Mzc2NDQxNTU1MA.GF5xD-.jOvRLk6MHtWKbU2RA1tilu8Xw_iDbqRnIy4hT4"

const client = new Discord.Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
    ]
})

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}`)
})

client.on("messageCreate", (message) => { 
    if (message.content == "hi"){
        message.reply("Hello World!")
    }
})

client.login(process.env.TOKEN)

