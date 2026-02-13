const TelegramBot = require('node-telegram-bot-api');
const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// Simple web route for ping
app.get('/', (req, res) => {
  res.send('Bot is running 🚀');
});

app.listen(PORT, () => {
  console.log(`Web server running on port ${PORT}`);
});

// Telegram Bot (Polling)
const token = process.env.BOT_TOKEN;

if (!token) {
  console.error("BOT_TOKEN is missing!");
  process.exit(1);
}

const bot = new TelegramBot(token, { polling: true });

console.log("Telegram bot started...");

// Simple chat logic
bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  const text = msg.text.toLowerCase();

  if (text === "hi" || text === "hello") {
    bot.sendMessage(chatId, "Hello! 👋");
  } 
  else if (text === "bye") {
    bot.sendMessage(chatId, "Goodbye! 👋");
  } 
  else {
    bot.sendMessage(chatId, "You said: " + msg.text);
  }
});