import { Client as userBot } from "discord.js-selfbot-v13";
import { Client, EmbedBuilder, Events, GatewayIntentBits, TextChannel } from 'discord.js'

// First we initialize the user bot which has access to channels
const userClient = new userBot();

userClient.on("ready", async () => {
    if (userClient.user !== null) {
        console.log(`${userClient.user.username} is ready!`);
    } else {
        console.log("Error logging in with userClient")
    }

});

// This is your discord login, you can check how to get it on the README
userClient.login(
    "Here goes your user token"
);

// Then we initialize the bot client with the bot token
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, readyClient => {
    console.log(`Ready! Logged in as ${readyClient.user.tag}`);
});

// Log in to Discord with your client's token
// You can get this from discord's developer portal
client.login('Here goes your bot token');


// This is the id of the channel being scrapped, you can find it here (marked as ChannelId)
//https://discord.com/channels/{GuildId}/{ChannelId}
const channelScrapped = "ChannelId"

// List of channels you want to scrape
const sourceChannels = [
    channelScrapped,
];

// Channel where you want to send the mirrored messages
const myChat = "This is your chat id"

userClient.on("messageCreate", async (message) => {
    if (sourceChannels.includes(message.channel.id)) {

        const destinationChannel: TextChannel = await client.channels.fetch(myChat) as TextChannel;
        const messageEmbed = new EmbedBuilder()
            .setColor(0x0099FF)
            .setAuthor({ name: message.author.username as string, iconURL: message.author.displayAvatarURL() })
            .setTimestamp()
        if (message.content) {
            messageEmbed.setDescription(message.content)
        }
        if (message.attachments.first() !== undefined) {
            messageEmbed.setImage(message.attachments.first()!.url);
        }
        if (message.embeds[0] !== undefined && message.embeds[0]) {
            const botEmbed = message.embeds[0]
                .setTitle(message.content)
                .setAuthor({ name: message.author.username as string, iconURL: message.author.displayAvatarURL() })
            destinationChannel.send({ embeds: [botEmbed] })
            return
        }

        destinationChannel?.send({ embeds: [messageEmbed] })
        return
    }
})


