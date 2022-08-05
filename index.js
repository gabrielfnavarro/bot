const { Client, GatewayIntentBits, Partials, Collection } = require("discord.js")

const { Guilds, GuildMembers, GuildMessages} = GatewayIntentBits;
const { User, Message, GuildMember, ThreadMember} = Partials;

const { loadEvents } = require("./handler/eventHandler")
const { loadCommands } = require("./handler/commandHandler")
const client = new Client({
    intents: [Guilds, GuildMembers, GuildMessages],
    partials: [User, Message, GuildMember, ThreadMember]
})

client.commands = new Collection();
client.config = require("./config.json")


client.login(client.config.token).then(() => {
    loadEvents(client);
    loadCommands(client)
    client.user.setActivity(`Em ${client.guilds.cache.size} Servidores`)
})
.catch((err) => console.log(err ))
