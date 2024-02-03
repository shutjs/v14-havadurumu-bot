const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle, StringSelectMenuBuilder, PermissionsBitField, ChannelType } = require('discord.js');

module.exports = {
  config: {
    name: "havadurumu",
    description: "havadurumu",
  },
  permissions: ['SendMessages'],
  owner: false,
  run: async (client, message, args, prefix, config) => {
    if(!message.member.permissions.has('ADMINISTRATOR')) return message.channel.send("Bu komutu kullanmak için yetkiniz bulunmuyor.")
    let buton1 = new ButtonBuilder()
    .setCustomId(`bolge_akdeniz`)
    .setLabel("Akdeniz")
    .setStyle(ButtonStyle.Primary)
    let buton2 = new ButtonBuilder()
    .setCustomId(`bolge_karadeniz`)
    .setLabel("Karadeniz")
    .setStyle(ButtonStyle.Primary)
    let buton3 = new ButtonBuilder()
    .setCustomId(`bolge_dogu`)
    .setLabel("Doğu Anadolu")
    .setStyle(ButtonStyle.Primary)
    let buton4 = new ButtonBuilder()
    .setCustomId(`bolge_anadolu`)
    .setLabel("İç Anadolu Bölgesi")
    .setStyle(ButtonStyle.Primary)
    let buton5 = new ButtonBuilder()
    .setCustomId(`bolge_ege`)
    .setLabel("Ege Bölgesi")
    .setStyle(ButtonStyle.Primary)
    let buton6 = new ButtonBuilder()
    .setCustomId(`bolge_marmara`)
    .setLabel("Marmara Bölgesi")
    .setStyle(ButtonStyle.Primary)
    let buton7 = new ButtonBuilder()
    .setCustomId(`bolge_guney`)
    .setLabel("Güneydoğu Anadolu Bölgesi")
    .setStyle(ButtonStyle.Primary)
let row = new ActionRowBuilder().addComponents(
  buton1,
  buton2,
  buton3,
  buton4,
)
let row2 = new ActionRowBuilder().addComponents(
  buton5,
  buton6,
  buton7
)
    let embed = new EmbedBuilder()
    .setDescription("```\nAltta bulunan butonları seçerek istediğiniz şehrin hava durumunu öğrenebilirsiniz.```")
    .setFooter({ text: 'Developed By Shut', iconURL: `${message.guild.iconURL()}` })
    .setAuthor({ name: `${message.guild.name}`, url: 'https://github.com/shutjs' })
    .setTimestamp()
    .setColor("#2B2D31")
    .setThumbnail(`${message.guild.iconURL()}`)
   message.channel.send({embeds: [embed], components: [row, row2]})
  }
}
