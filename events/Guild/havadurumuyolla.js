const { EmbedBuilder, ActionRowBuilder, ButtonBuilder, ButtonStyle, ModalBuilder, TextInputBuilder, TextInputStyle, StringSelectMenuBuilder, StringSelectMenuOptionBuilder, PermissionsBitField, ChannelType } = require('discord.js');
const client = require("../../index");
const config = require("../../config/config.js");
const axios = require('axios')

module.exports = {
  name: "interactionCreate"
};

client.on('interactionCreate', async (i) => {
    if (i.customId == "akdeniz") {
        
        const selectedCity = i.values[0];
        const weatherInfo = await getWeather(selectedCity, i.member.id);
        i.reply({ content: weatherInfo, ephemeral: true });
    }
    if (i.customId == "karadeniz") {
        
        const selectedCity = i.values[0];
        const weatherInfo = await getWeather(selectedCity, i.member.id);
        i.reply({ content: weatherInfo, ephemeral: true });
    }
    if (i.customId == "dogu") {
        
        const selectedCity = i.values[0];
        const weatherInfo = await getWeather(selectedCity, i.member.id);
        i.reply({ content: weatherInfo, ephemeral: true });
    }

    if (i.customId == "anadolu") {
        
        const selectedCity = i.values[0];
        const weatherInfo = await getWeather(selectedCity, i.member.id);
        i.reply({ content: weatherInfo, ephemeral: true });
    }

    if (i.customId == "ege") {
        
        const selectedCity = i.values[0];
        const weatherInfo = await getWeather(selectedCity, i.member.id);
        i.reply({ content: weatherInfo, ephemeral: true });
    }

    if (i.customId == "marmara") {
        
        const selectedCity = i.values[0];
        const weatherInfo = await getWeather(selectedCity, i.member.id);
        i.reply({ content: weatherInfo, ephemeral: true });
    }

    if (i.customId == "guney") {
        
        const selectedCity = i.values[0];
        const weatherInfo = await getWeather(selectedCity, i.member.id);
        i.reply({ content: weatherInfo, ephemeral: true });
    }

    async function getWeather(city, member) {
        try {
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=9085d68629e6d57983a2c93a8fa2cd66&units=metric`);
            const formattedCity = city.charAt(0).toUpperCase() + city.slice(1);
            const weatherData = response.data;
            const temperature = weatherData.main.temp;
            const feelTemperature = weatherData.main.feels_like;
            const cloudSpeed = weatherData.wind.speed;
            const description = translateWeatherDescription(weatherData.weather[0].description);
            let user = client.users.cache.get(member)
            let embed = new EmbedBuilder()
            .setDescription(`**${formattedCity} Şehrinin Hava Durumu:** ${description}
**Sıcaklık:** ${temperature}°C
**Hissedilen Sıcaklık:** ${feelTemperature}°C
**Rüzgar Hızı:** ${cloudSpeed} m/s
`)
            .setFooter({ text: 'Developed By Shut', iconURL: `${i.guild.iconURL()}` })
            .setAuthor({ name: `${user.displayName}`, iconURL: `${user.avatarURL()}`, url: 'https://github.com/shutjs' })
            .setTimestamp()
            .setColor("#2B2D31")
            .setThumbnail(`${i.guild.iconURL()}`)
            return i.reply({embeds:[embed], ephemeral: true})
        } catch (error) {
            console.log(error)
            console.error('Hava durumu bilgisi alınırken hata oluştu:', error.message);
            return 'Hava durumu bilgisi alınamadı.';
        }
    }
    function translateWeatherDescription(description) {
        switch (description.toLowerCase()) {
            case 'clear sky':
                return 'Açık Hava';
            case 'mist':
                return 'Sisli';
            case 'few clouds':
                return 'Az Bulutlu';
            case 'scattered clouds':
                return 'Parçalı Bulutlu';
            case 'broken clouds':
                return 'Kısmen Bulutlu';
            case 'overcast clouds':
                return 'Çok Bulutlu';
            case 'light rain':
                return 'Hafif Yağmurlu';
            case 'moderate rain':
                return 'Orta Şiddette Yağmurlu';
            case 'heavy intensity rain':
                return 'Yoğun Yağmurlu';
            default:
                return description;
        }
    }
})


