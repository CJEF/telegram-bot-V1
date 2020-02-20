const TelegramBot = require("node-telegram-bot-api");
/* const debug = require("./helpers"); */
const TOKEN = "1098714365:AAFMgCzuoyEvGtYKPkSTidZIV21SPv9PLFE";
const kb = require("./keyboard-buttons");
const keyboard = require("./keyboard");
const helper = require("./helper");

const bot = new TelegramBot(TOKEN, {
  polling: true
});
bot.on("polling_error", err => console.log(err));
bot.on("message", msg => {
  console.log("Working", msg.from.first_name);

  const chatId = helper.getChatId(msg);

  switch (msg.text) {
    case kb.home.excellent:
      bot.sendMessage(chatId, "Пікіріңізге раxмет, біз әрқашан ізденістеміз!");
      break;
    case kb.home.good:
      bot.sendMessage(chatId, "Керемет, сізге ұнағаңына қуаныштымыз!");
      break;
    case kb.home.badly:
      bot.sendMessage(chatId, "Жақсы, әлі де толықтырамыз!");
      break;
    case kb.home.verybad:
      bot.sendMessage(chatId, "Түсінікті, қателікпен жұмыс жасаймыз!");
      break;
    /* case kb.back:
      bot.sendMessage(chatId, "Что хотите посмотреть?", {
        reply_markup: { keyboard: keyboard.home }
      });
      break; */
  }
});

bot.onText(/\/start/, msg => {
  const text = `Сәлем, ${msg.from.first_name}\n "#" тақырыбында өткен ашық сабаққа өз бағаңызды берсеңіз?`;

  bot.sendMessage(helper.getChatId(msg), text, {
    reply_markup: {
      keyboard: keyboard.home
    }
  });
});

/* 

const bot = new TelegramBot(TOKEN, {
  polling: {
    interval: 300,
    autoStart: true,
    params: {
      timeout: 10
    }
  }
});
bot.onText(/\"сәлем"/, msg => {
  const { id } = msg.chat;
  bot.sendMessage(id, `Сәлем, ${msg.from.first_name}`);
});

bot.onText(/\/3/, msg => {
  const { id } = msg.chat;
  bot.sendMessage(
    id,
    "Қателіктермен жұмыс өткіземіз, баға бергеңініз үшін рахмет!"
  );
}); */
