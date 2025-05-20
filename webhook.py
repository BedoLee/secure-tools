from flask import Flask, request
import telegram
import os

# Bot token'ınızı buraya ekleyin
TOKEN = "BOT_TOKEN_BURAYA"
bot = telegram.Bot(token=TOKEN)

app = Flask(__name__)

@app.route('/webhook', methods=['POST'])
def webhook():
    update = telegram.Update.de_json(request.get_json(), bot)
    
    # Gelen mesajı al
    if update.message:
        chat_id = update.message.chat.id
        text = update.message.text
        
        # Mesajı işle ve yanıt ver
        bot.send_message(chat_id=chat_id, text=f"Mesajınızı aldım: {text}")
    
    return 'ok'

def set_webhook():
    # Webhook URL'nizi buraya ekleyin
    webhook_url = "https://eca7-2a02-908-961-e5c0-a1fa-4563-ca65-ad9c.ngrok-free.app/webhook"
    bot.set_webhook(url=webhook_url)

if __name__ == '__main__':
    set_webhook()
    app.run(host='0.0.0.0', port=8443) 