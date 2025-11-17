const mineflayer = require('mineflayer')

function start() {
  const bot = mineflayer.createBot({
    host: "Let_Create_Mod.aternos.me",
    port: 52161,
    username: "Alvish_Bhai"
  })

  bot.on('login', () => {
    setInterval(() => {
      bot.setControlState("forward", true)
      bot.setControlState("jump", true)
      setTimeout(() => {
        bot.setControlState("forward", false)
        bot.setControlState("jump", false)
      }, 500)
    }, 2000)
  })

  bot.on('end', () => setTimeout(start, 3000))
  bot.on('error', () => {})
}

start()
