module.exports = {
  logStart() {
    console.log("Bot ahs been started...");
  },

  getChatId(msg) {
    return msg.chat.id;
  }
};

/* function debug(obj = {}) {
  return JSON.stringify(obj, null, 4);
} */
