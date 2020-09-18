const TelegramBot = require("node-telegram-bot-api");
/* const debug = require("./helpers"); */
const TOKEN = "Your Token";
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
    case kb.home.grades:
      bot.sendMessage(chatId, `Баға беру:`, {
        reply_markup: {
          keyboard: keyboard.grades
        } /* отправка клавиатуры grades */
      });
      break;
    case kb.back:
      bot.sendMessage(chatId, "Бас меню:", {
        reply_markup: { keyboard: keyboard.home }
      });
      break;
    case kb.home.victorina:
      bot.sendMessage(chatId, 'Бастау үшін "@QuizBot quiz:lSgqsBsZ" теріңіз');
      break;
    case kb.grade.excellent:
      bot.sendPhoto(msg.chat.id, "./img/5.jfif", {
        caption: "Пікіріңізге раxмет, біз әрқашан ізденістеміз!"
      });
      break;
    case kb.grade.good:
      bot.sendPhoto(msg.chat.id, "./img/4.jfif", {
        caption: "Керемет, сізге ұнағаныңызға қуаныштымыз!"
      });
      break;
    case kb.grade.badly:
      bot.sendPhoto(msg.chat.id, "./img/3.jfif", {
        caption: "Жақсы, әлі де толықтырамыз!"
      });
      break;
    case kb.grade.verybad:
      bot.sendPhoto(msg.chat.id, "./img/2.jfif", {
        caption: "Түсінікті, қателікпен жұмыс жасаймыз!"
      });
      break;
  }
});

bot.onText(/\/start/, msg => {
  const text = `Сәлем, ${msg.from.first_name}\n "Оптикалық кабельдерді монтаждау" тақырыбында өткен ашық сабаққа өз бағаңызды берсеңіз?`;

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
