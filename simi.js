// Membuat bot Telegram
const TelegramBot = require('node-telegram-bot-api');
const token = '6059060665:AAG0LZLVdkPR6CHVKWtdagvTBHd-krkMRrI';
const bot = new TelegramBot(token, {polling: true});

// Menangani pesan yang dikirim ke bot
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text;

  // Mengirim permintaan ke API Simi Simi
  const request = require('request');
  const url = `https://api.simsimi.net/v2/?text=${text}&lc=id`;
  request(url, (err, response, body) => {
    if (err) {
      console.log(err);
    } else {
      const data = JSON.parse(body);
      const responseText = data.response;

      // Mengirim respons ke chat
      bot.sendMessage(chatId, responseText);
    }
  });
});
