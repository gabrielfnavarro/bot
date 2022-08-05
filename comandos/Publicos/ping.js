const Discord = require("discord.js")

module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName('ping')
    .setDescription('Ping & Pong')
    .setDefaultMemberPermissions(Discord.PermissionFlagsBits.Administrator),

    /**
     * 
     * @param {Discord.CommandInteraction} interaction 
     */
    execute(interaction) {
        interaction.reply({content: `Pong2.`, ephemeral: true})
    }
}