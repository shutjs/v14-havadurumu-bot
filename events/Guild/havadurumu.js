const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, PermissionsBitField, ChannelType } = require('discord.js');
const client = require("../../index");
const config = require("../../config/config.js");


module.exports = {
    name: "interactionCreate"
};

client.on('interactionCreate', async (i) => {
    if (i.customId == "bolge_akdeniz") {
        
       let select = new StringSelectMenuBuilder()
       .setCustomId('akdeniz')
       .setPlaceholder('Seçim yapmak için tıkla')
       .addOptions(
           new StringSelectMenuOptionBuilder()
               .setLabel('Adana')
               .setDescription('Adana ilçesi.')
               .setValue('adana'),
           new StringSelectMenuOptionBuilder()
               .setLabel('Antalya')
               .setDescription('Antalya ilçesi.')
               .setValue('antalya'),
           new StringSelectMenuOptionBuilder()
               .setLabel('Burdur')
               .setDescription('Burdur ilçesi.')
               .setValue('burdur'),
           new StringSelectMenuOptionBuilder()
               .setLabel('Hatay')
               .setDescription('Hatay ilçesi.')
               .setValue('hatay'),
           new StringSelectMenuOptionBuilder()
               .setLabel('Isparta')
               .setDescription('Isparta ilçesi.')
               .setValue('isparta'),
           new StringSelectMenuOptionBuilder()
               .setLabel('Mersin')
               .setDescription('Mersin ilçesi.')
               .setValue('mersin'),
           new StringSelectMenuOptionBuilder()
               .setLabel('Kahramanmaraş')
               .setDescription('Kahramanmaraş ilçesi.')
               .setValue('kahramanmaras'),
           new StringSelectMenuOptionBuilder()
               .setLabel('Osmaniye')
               .setDescription('Osmaniye ilçesi.')
               .setValue('osmaniye'),
       );
       const row = new ActionRowBuilder()
       .addComponents(select);
       i.reply({components: [row], ephemeral: true})
    }

    if (i.customId == "bolge_karadeniz") {
        
        let select = new StringSelectMenuBuilder()
        .setCustomId('karadeniz')
        .setPlaceholder('Seçim yapmak için tıkla')
        .addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('Bolu')
                .setDescription('Bolu ilçesi.')
                .setValue('bolu'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Düzce')
                .setDescription('Düzce ilçesi.')
                .setValue('düzce'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Zonguldak')
                .setDescription('Zonguldak ilçesi.')
                .setValue('zonguldak'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Karabük')
                .setDescription('Karabük ilçesi.')
                .setValue('karabük'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Bartın')
                .setDescription('Bartın ilçesi.')
                .setValue('bartın'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Kastamonu')
                .setDescription('Kastamonu ilçesi.')
                .setValue('kastamonu'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Çorum')
                .setDescription('Çorum ilçesi.')
                .setValue('çorum'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Sinop')
                .setDescription('Sinop ilçesi.')
                .setValue('sinop'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Samsun')
                .setDescription('Samsun ilçesi.')
                .setValue('samsun'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Amasya')
                .setDescription('Amasya ilçesi.')
                .setValue('amasya'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Tokat')
                .setDescription('Tokat ilçesi.')
                .setValue('tokat'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Ordu')
                .setDescription('Ordu ilçesi.')
                .setValue('ordu'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Giresun')
                .setDescription('Giresun ilçesi.')
                .setValue('giresun'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Gümüşhane')
                .setDescription('Gümüşhane ilçesi.')
                .setValue('gümüşhane'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Trabzon')
                .setDescription('Trabzon ilçesi.')
                .setValue('trabzon'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Bayburt')
                .setDescription('Bayburt ilçesi.')
                .setValue('bayburt'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Rize')
                .setDescription('Rize ilçesi.')
                .setValue('rize'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Artvin')
                .setDescription('Artvin ilçesi.')
                .setValue('artvin'),
        );
        const row = new ActionRowBuilder()
        .addComponents(select);
        i.reply({components: [row], ephemeral: true})
    }


    if (i.customId == "bolge_dogu") {
        
        let select = new StringSelectMenuBuilder()
        .setCustomId('dogu')
        .setPlaceholder('Seçim yapmak için tıkla')
        .addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('Ardahan')
                .setDescription('Ardahan ilçesi.')
                .setValue('ardahan'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Kars')
                .setDescription('Kars ilçesi.')
                .setValue('kars'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Iğdır')
                .setDescription('Iğdır ilçesi.')
                .setValue('ığdır'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Ağrı')
                .setDescription('Ağrı ilçesi.')
                .setValue('ağrı'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Van')
                .setDescription('Van ilçesi.')
                .setValue('van'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Hakkari')
                .setDescription('Hakkari ilçesi.')
                .setValue('hakkari'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Bitlis')
                .setDescription('Bitlis ilçesi.')
                .setValue('bitlis'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Muş')
                .setDescription('Muş ilçesi.')
                .setValue('muş'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Erzurum')
                .setDescription('Erzurum ilçesi.')
                .setValue('erzurum'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Erzincan')
                .setDescription('Erzincan ilçesi.')
                .setValue('erzincan'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Tunceli')
                .setDescription('Tunceli ilçesi.')
                .setValue('tunceli'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Bingöl')
                .setDescription('Bingöl ilçesi.')
                .setValue('bingöl'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Elazığ')
                .setDescription('Elazığ ilçesi.')
                .setValue('elazığ'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Malatya')
                .setDescription('Malatya ilçesi.')
                .setValue('malatya'),
        );

        const row = new ActionRowBuilder()
        .addComponents(select);
        i.reply({components: [row], ephemeral: true})
    }


    if (i.customId == "bolge_anadolu") {
        
        let select = new StringSelectMenuBuilder()
        .setCustomId('anadolu')
        .setPlaceholder('Seçim yapmak için tıkla')
        .addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('Ankara')
                .setDescription('Ankara ilçesi.')
                .setValue('ankara'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Eskişehir')
                .setDescription('Eskişehir ilçesi.')
                .setValue('eskişehir'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Çankırı')
                .setDescription('Çankırı ilçesi.')
                .setValue('çankırı'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Kırıkkale')
                .setDescription('Kırıkkale ilçesi.')
                .setValue('kırıkkale'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Kırşehir')
                .setDescription('Kırşehir ilçesi.')
                .setValue('kırşehir'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Konya')
                .setDescription('Konya ilçesi.')
                .setValue('konya'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Aksaray')
                .setDescription('Aksaray ilçesi.')
                .setValue('aksaray'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Nevşehir')
                .setDescription('Nevşehir ilçesi.')
                .setValue('nevşehir'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Yozgat')
                .setDescription('Yozgat ilçesi.')
                .setValue('yozgat'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Kayseri')
                .setDescription('Kayseri ilçesi.')
                .setValue('kayseri'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Sivas')
                .setDescription('Sivas ilçesi.')
                .setValue('sivas'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Niğde')
                .setDescription('Niğde ilçesi.')
                .setValue('niğde'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Karaman')
                .setDescription('Karaman ilçesi.')
                .setValue('karaman'),
        );

        const row = new ActionRowBuilder()
        .addComponents(select);
        i.reply({components: [row], ephemeral: true})
    }


    if (i.customId == "bolge_ege") {
        
        let select = new StringSelectMenuBuilder()
        .setCustomId('ege')
        .setPlaceholder('Seçim yapmak için tıkla')
        .addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('Kütahya')
                .setDescription('Kütahya ilçesi.')
                .setValue('kütahya'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Afyonkarahisar')
                .setDescription('Afyonkarahisar ilçesi.')
                .setValue('afyonkarahisar'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Uşak')
                .setDescription('Uşak ilçesi.')
                .setValue('uşak'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Denizli')
                .setDescription('Denizli ilçesi.')
                .setValue('denizli'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Muğla')
                .setDescription('Muğla ilçesi.')
                .setValue('muğla'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Aydın')
                .setDescription('Aydın ilçesi.')
                .setValue('aydın'),
            new StringSelectMenuOptionBuilder()
                .setLabel('İzmir')
                .setDescription('İzmir ilçesi.')
                .setValue('izmir'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Manisa')
                .setDescription('Manisa ilçesi.')
                .setValue('manisa'),
        );

        const row = new ActionRowBuilder()
        .addComponents(select);
        i.reply({components: [row], ephemeral: true})
    }


    if (i.customId == "bolge_marmara") {
        
        let select = new StringSelectMenuBuilder()
        .setCustomId('marmara')
        .setPlaceholder('Seçim yapmak için tıkla')
        .addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('Edirne')
                .setDescription('Edirne ilçesi.')
                .setValue('edirne'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Kırklareli')
                .setDescription('Kırklareli ilçesi.')
                .setValue('kırklarelı'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Tekirdağ')
                .setDescription('Tekirdağ ilçesi.')
                .setValue('tekirdağ'),
            new StringSelectMenuOptionBuilder()
                .setLabel('İstanbul')
                .setDescription('İstanbul ilçesi.')
                .setValue('istanbul'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Kocaeli (İzmit)')
                .setDescription('Kocaeli ilçesi.')
                .setValue('kocaeli'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Sakarya (Adapazarı)')
                .setDescription('Sakarya ilçesi.')
                .setValue('sakarya'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Bilecik')
                .setDescription('Bilecik ilçesi.')
                .setValue('bilecik'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Bursa')
                .setDescription('Bursa ilçesi.')
                .setValue('bursa'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Balıkesir')
                .setDescription('Balıkesir ilçesi.')
                .setValue('balıkesir'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Çanakkale')
                .setDescription('Çanakkale ilçesi.')
                .setValue('çanakkale'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Yalova')
                .setDescription('Yalova ilçesi.')
                .setValue('yalova'),
        );
        
        const row = new ActionRowBuilder()
        .addComponents(select);
        i.reply({components: [row], ephemeral: true})
    }

    if (i.customId == "bolge_guney") {
        
        let select = new StringSelectMenuBuilder()
        .setCustomId('guney')
        .setPlaceholder('Seçim yapmak için tıkla')
        .addOptions(
            new StringSelectMenuOptionBuilder()
                .setLabel('Şırnak')
                .setDescription('Şırnak ilçesi.')
                .setValue('şırnak'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Siirt')
                .setDescription('Siirt ilçesi.')
                .setValue('siirt'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Batman')
                .setDescription('Batman ilçesi.')
                .setValue('batman'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Mardin')
                .setDescription('Mardin ilçesi.')
                .setValue('mardin'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Diyarbakır')
                .setDescription('Diyarbakır ilçesi.')
                .setValue('diyarbakır'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Şanlıurfa')
                .setDescription('Şanlıurfa ilçesi.')
                .setValue('şanlıurfa'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Adıyaman')
                .setDescription('Adıyaman ilçesi.')
                .setValue('adıyaman'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Gaziantep')
                .setDescription('Gaziantep ilçesi.')
                .setValue('gaziantep'),
            new StringSelectMenuOptionBuilder()
                .setLabel('Kilis')
                .setDescription('Kilis ilçesi.')
                .setValue('kilis'),
        );
        
        const row = new ActionRowBuilder()
        .addComponents(select);
        i.reply({components: [row], ephemeral: true})
    }


    
})