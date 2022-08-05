const { PermissionFlagsBits } = require("discord.js")
const Discord = require("discord.js")

const { loadCommands } = require("../../handler/commandHandler")
const { loadEvents } = require("../../handler/eventHandler")

module.exports = {
    data: new Discord.SlashCommandBuilder()
    .setName('reload')
    .setDescription('Recarregar Eventos ou Comandos.')
    .setDefaultMemberPermissions(PermissionFlagsBits.Administrator)
    .addSubcommand((options => 
        options
        .setName('eventos')
        .setDescription('Recarregar os eventos.')))
    .addSubcommand((options => 
        options
        .setName('comandos')
        .setDescription('Recarrecar os comandos.'))),

        /**
         * @param {Discord.ChatInputCommandInteraction} interaction
         */

        execute(interaction, client) {

            const sub = interaction.options.getSubcommand();

            switch(sub) {
                case 'eventos': {
                    loadEvents(client)
                    interaction.reply({content: 'Os eventos foram recarregados com sucesso.', ephemeral: true})
                }
                break;
                case 'comandos': {
                    loadCommands(client)
                    interaction.reply({content: 'Os comandos foram recarregados com sucesso.', ephemeral: true})
                }
                break;
            }
        }
}