const { Client } = require("discord.js")

module.exports = {
    name: "ready",
    once: true,

    /**
     * 
     * @param {Client} client 
     */

    execute(client) {
        console.log(`Logado em ${client.user.username}`)
    }
}