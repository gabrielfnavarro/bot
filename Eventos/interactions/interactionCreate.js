const Discord = require("discord.js")

module.exports = {
    name: 'interactionCreate',
    /**
     * 
     * @param {Discord.CommandInteraction} interaction 
     */
    execute(interaction, client) {
        if(!interaction.isChatInputCommand()) return;

        const command = client.commands.get(interaction.commandName)

        if(!command) {
            return interaction.reply({content: `Esse comando esta bugado.`})
        }


        command.execute(interaction, client)
    }
}