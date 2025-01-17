const Discord = require('discord.js')

async function tictactoe(message, options = []) {
    let opponent = message.mentions.members.first()

    if (!opponent) return message.channel.send({ content: "Please provide the user to challenge!" })

    if (opponent.id === message.member.id) return message.channel.send({ content: "You cant play for 2 Players. Please provide the user to challenge!" });

    if (options.credit === false) {
        foot = options.embedFoot || 'Make sure to win ;)'
    } else {
        foot = '©️ Simply Develop. npm i simply-djs'
    }

    let acceptEmbed = new Discord.MessageEmbed()
        .setTitle(`Waiting for ${opponent.user.tag} to accept!`)
        .setAuthor(message.author.tag, message.author.displayAvatarURL())
        .setColor(options.embedColor || 0x075FFF)
        .setFooter(foot)

    let accept = new Discord.MessageButton()
        .setLabel('Accept')
        .setStyle('SUCCESS')
        .setCustomId('acceptttt')

    let decline = new Discord.MessageButton()
        .setLabel('Decline')
        .setStyle('DANGER')
        .setCustomId('declinettt')

    let accep = new Discord.MessageActionRow()
        .addComponents([accept, decline])
    message.channel.send({
        embeds: [acceptEmbed],
        components: [accep]
    }).then(m => {
        let filter = (button) => button.user.id == opponent.id
        const collector = m.createMessageComponentCollector({ type: 'BUTTON', time: 30000, filter: filter })
        collector.on('collect', async (button) => {
            if (button.customId == 'declinettt') {
                button.deferUpdate()
                return collector.stop('decline')
            } else if (button.customId == 'acceptttt') {
                button.deferUpdate()
                collector.stop()

                let fighters = [message.member.id, opponent.id].sort(() => (Math.random() > .5) ? 1 : -1)

                let x_emoji = options.xEmoji || "❌"
                let o_emoji = options.oEmoji || "⭕"

                let dashmoji = options.idleEmoji || "➖"

                let Args = {
                    user: 0,
                    a1: {
                        style: "SECONDARY",
                        emoji: dashmoji,
                        disabled: false
                    },
                    a2: {
                        style: "SECONDARY",
                        emoji: dashmoji,
                        disabled: false
                    },
                    a3: {
                        style: "SECONDARY",
                        emoji: dashmoji,
                        disabled: false
                    },
                    b1: {
                        style: "SECONDARY",
                        emoji: dashmoji,
                        disabled: false
                    },
                    b2: {
                        style: "SECONDARY",
                        emoji: dashmoji,
                        disabled: false
                    },
                    b3: {
                        style: "SECONDARY",
                        emoji: dashmoji,
                        disabled: false
                    },
                    c1: {
                        style: "SECONDARY",
                        emoji: dashmoji,
                        disabled: false
                    },
                    c2: {
                        style: "SECONDARY",
                        emoji: dashmoji,
                        disabled: false
                    },
                    c3: {
                        style: "SECONDARY",
                        emoji: dashmoji,
                        disabled: false
                    }
                }
                const { MessageActionRow, MessageButton } = require('discord.js');

                const xoemb = new Discord.MessageEmbed()
                    .setTitle('TicTacToe')
                    .setDescription(`**How to Play ?**\n*Wait for your turn.. If its your turn, Click one of the buttons from the table to draw your emoji at there.*`)
                    .setColor(options.embedColor || 0x075FFF)
                    .setFooter(foot)
                    .setTimestamp()
                let infomsg = await message.channel.send({ embeds: [xoemb] }).then(ms => {
                    setTimeout(() => ms.delete(), 10000)
                })

                let msg = await message.channel.send({ content: `Waiting for Input | <@!${Args.userid}>, Your Emoji: ${o_emoji}` })
                tictactoe(msg)

                async function tictactoe(m) {
                    Args.userid = fighters[Args.user]
                    let won = {
                        "<:O_:863314110560993340>": false,
                        "<:X_:863314044781723668>": false
                    }
                    if (Args.a1.emoji == o_emoji && Args.b1.emoji == o_emoji && Args.c1.emoji == o_emoji) won["<:O_:863314110560993340>"] = true
                    if (Args.a2.emoji == o_emoji && Args.b2.emoji == o_emoji && Args.c2.emoji == o_emoji) won["<:O_:863314110560993340>"] = true
                    if (Args.a3.emoji == o_emoji && Args.b3.emoji == o_emoji && Args.c3.emoji == o_emoji) won["<:O_:863314110560993340>"] = true
                    if (Args.a1.emoji == o_emoji && Args.b2.emoji == o_emoji && Args.c3.emoji == o_emoji) won["<:O_:863314110560993340>"] = true
                    if (Args.a3.emoji == o_emoji && Args.b2.emoji == o_emoji && Args.c1.emoji == o_emoji) won["<:O_:863314110560993340>"] = true
                    if (Args.a1.emoji == o_emoji && Args.a2.emoji == o_emoji && Args.a3.emoji == o_emoji) won["<:O_:863314110560993340>"] = true
                    if (Args.b1.emoji == o_emoji && Args.b2.emoji == o_emoji && Args.b3.emoji == o_emoji) won["<:O_:863314110560993340>"] = true
                    if (Args.c1.emoji == o_emoji && Args.c2.emoji == o_emoji && Args.c3.emoji == o_emoji) won["<:O_:863314110560993340>"] = true
                    if (won["<:O_:863314110560993340>"] != false) {
                        if (Args.user == 0) return m.edit({ content: `<@!${fighters[1]}> (${o_emoji}) won.. That was a nice game.`, components: [] }); else if (Args.user == 1) return m.edit({ content: `<@!${fighters[0]}> (${o_emoji}) won.. That was a nice game.`, components: [] });
                    }
                    if (Args.a1.emoji == x_emoji && Args.b1.emoji == x_emoji && Args.c1.emoji == x_emoji) won["<:X_:863314044781723668>"] = true
                    if (Args.a2.emoji == x_emoji && Args.b2.emoji == x_emoji && Args.c2.emoji == x_emoji) won["<:X_:863314044781723668>"] = true
                    if (Args.a3.emoji == x_emoji && Args.b3.emoji == x_emoji && Args.c3.emoji == x_emoji) won["<:X_:863314044781723668>"] = true
                    if (Args.a1.emoji == x_emoji && Args.b2.emoji == x_emoji && Args.c3.emoji == x_emoji) won["<:X_:863314044781723668>"] = true
                    if (Args.a3.emoji == x_emoji && Args.b2.emoji == x_emoji && Args.c1.emoji == x_emoji) won["<:X_:863314044781723668>"] = true
                    if (Args.a1.emoji == x_emoji && Args.a2.emoji == x_emoji && Args.a3.emoji == x_emoji) won["<:X_:863314044781723668>"] = true
                    if (Args.b1.emoji == x_emoji && Args.b2.emoji == x_emoji && Args.b3.emoji == x_emoji) won["<:X_:863314044781723668>"] = true
                    if (Args.c1.emoji == x_emoji && Args.c2.emoji == x_emoji && Args.c3.emoji == x_emoji) won["<:X_:863314044781723668>"] = true
                    if (won["<:X_:863314044781723668>"] != false) {
                        if (Args.user == 0) return m.edit({ content: `<@!${fighters[1]}> (${x_emoji}) won.. That was a nice game.`, components: [] }); else if (Args.user == 1) return m.edit({ content: `<@!${fighters[0]}> (${x_emoji}) won.. That was a nice game.`, components: [] });
                    }
                    let a1 = new MessageButton()
                        .setStyle(Args.a1.style)
                        .setEmoji(Args.a1.emoji)
                        .setCustomId('a1')
                        .setDisabled(Args.a1.disabled);
                    let a2 = new MessageButton()
                        .setStyle(Args.a2.style)
                        .setEmoji(Args.a2.emoji)
                        .setCustomId('a2')
                        .setDisabled(Args.a2.disabled);
                    let a3 = new MessageButton()
                        .setStyle(Args.a3.style)
                        .setEmoji(Args.a3.emoji)
                        .setCustomId('a3')
                        .setDisabled(Args.a3.disabled);
                    let b1 = new MessageButton()
                        .setStyle(Args.b1.style)
                        .setEmoji(Args.b1.emoji)
                        .setCustomId('b1')
                        .setDisabled(Args.b1.disabled);
                    let b2 = new MessageButton()
                        .setStyle(Args.b2.style)
                        .setEmoji(Args.b2.emoji)
                        .setCustomId('b2')
                        .setDisabled(Args.b2.disabled);
                    let b3 = new MessageButton()
                        .setStyle(Args.b3.style)
                        .setEmoji(Args.b3.emoji)
                        .setCustomId('b3')
                        .setDisabled(Args.b3.disabled);
                    let c1 = new MessageButton()
                        .setStyle(Args.c1.style)
                        .setEmoji(Args.c1.emoji)
                        .setCustomId('c1')
                        .setDisabled(Args.c1.disabled);
                    let c2 = new MessageButton()
                        .setStyle(Args.c2.style)
                        .setEmoji(Args.c2.emoji)
                        .setCustomId('c2')
                        .setDisabled(Args.c2.disabled);
                    let c3 = new MessageButton()
                        .setStyle(Args.c3.style)
                        .setEmoji(Args.c3.emoji)
                        .setCustomId('c3')
                        .setDisabled(Args.c3.disabled);
                    let a = new MessageActionRow()
                        .addComponents([a1, a2, a3])
                    let b = new MessageActionRow()
                        .addComponents([b1, b2, b3])
                    let c = new MessageActionRow()
                        .addComponents([c1, c2, c3])
                    let buttons = { components: [a, b, c] }

                    m.edit({ content: `Waiting for Input | <@!${Args.userid}> | Your Emoji: ${Args.user == 0 ? `${o_emoji}` : `${x_emoji}`}`, components: [a, b, c] })
                    const filter = (button) => button.user.id === Args.userid;

                    const collector = m.createMessageComponentCollector({ filter, componentType: 'BUTTON', max: 1, time: 30000 });

                    collector.on('collect', b => {

                        if (b.user.id !== Args.userid) return b.reply({ content: 'Wait for your chance.', ephemeral: true })

                        if (Args.user == 0) {
                            Args.user = 1
                            Args[b.customId] = {
                                style: "SUCCESS",
                                emoji: o_emoji,
                                disabled: true
                            }
                        } else {
                            Args.user = 0
                            Args[b.customId] = {
                                style: "DANGER",
                                emoji: x_emoji,
                                disabled: true
                            }
                        }
                        b.deferUpdate()
                        const map = (obj, fun) =>
                            Object.entries(obj).reduce(
                                (prev, [key, value]) => ({
                                    ...prev,
                                    [key]: fun(key, value)
                                }),
                                {}
                            );
                        const objectFilter = (obj, predicate) =>
                            Object.keys(obj)
                                .filter(key => predicate(obj[key]))
                                .reduce((res, key) => (res[key] = obj[key], res), {});
                        let Brgs = objectFilter(map(Args, (_, fruit) => fruit.emoji == dashmoji), num => num == true);
                        if (Object.keys(Brgs).length == 0) return m.edit({ content: 'It\'s a tie!' })
                        tictactoe(m)
                    });
                    collector.on('end', collected => {
                        if (collected.size == 0) m.edit({ content: `<@!${Args.userid}> didn\'t react in time! (30s)`, components: [] })
                    });
                }

            }
        })

        collector.on('end', (collected, reason) => {
            if (reason == 'time') {
                let embed = new Discord.MessageEmbed()
                    .setTitle('Challenge Not Accepted in Time')
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setColor(options.timeoutEmbedColor || 0xc90000)
                    .setFooter(foot)
                    .setDescription('Ran out of time!\nTime limit: 30s')
                m.edit({
                    embeds: [embed],
                    components: []
                })
            }
            if (reason == 'decline') {
                let embed = new Discord.MessageEmbed()
                    .setTitle("Game Declined!")
                    .setAuthor(message.author.tag, message.author.displayAvatarURL())
                    .setColor(options.timeoutEmbedColor || 0xc90000)
                    .setFooter(foot)
                    .setDescription(`${opponent.user.tag} has declined your game!`)
                m.edit({
                    embeds: [embed],
                    components: []
                })
            }
        })

    })
}

module.exports = tictactoe;