import telegram
from telegram.ext import Updater, CommandHandler


def handle_message(bot, update):
    text = update.message.text
    # Kirim permintaan ke API Simi Simi
    response = requests.get('https://api.simsimi.net/v2/?text=' + text + '&lc=id')
    # Ambil respons dari API
    response_text = response.json()['success']
    # Kirim respons ke pengguna
    bot.send_message(chat_id=update.message.chat_id, text=response_text)
    
updater = Updater(token='6059060665:AAG0LZLVdkPR6CHVKWtdagvTBHd-krkMRrI')
dispatcher = updater.dispatcher
dispatcher.add_handler(CommandHandler('message', handle_message))

updater.start_polling()
