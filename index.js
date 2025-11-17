const mineflayer = require('mineflayer')

function start() {
  const bot = mineflayer.createBot({
    host: "YOUR_ATERNOS_IP",
    port: YOUR_PORT,
    username: "BotName"
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
