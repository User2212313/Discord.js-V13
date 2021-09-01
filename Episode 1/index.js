const Discord = require('discord.js'); //Define the discord.js module
const client = new Discord.Client({
  intents: [
    "GUILDS",
    "GUILD_MEMBERS",
    "GUILD_BANS",
    "GUILD_INTEGRATIONS",
    "GUILD_WEBHOOKS",
    "GUILD_INVITES",
    "GUILD_VOICE_STATES",
    "GUILD_PRESENCES",
    "GUILD_MESSAGES",
    "GUILD_MESSAGE_REACTIONS",
    "GUILD_MESSAGE_TYPING",
    "DIRECT_MESSAGES",
    "DIRECT_MESSAGE_REACTIONS",
    "DIRECT_MESSAGE_TYPING"
  ]
});

client.on('ready', () => {
  console.log('Bot is online')
}); //on ready event

client.on('messageCreate', message => {
  if(message.content === '!ping') {
    message.channel.send('pong 🏓')
  }
})

client.login(process.env.token) //login to the bot
