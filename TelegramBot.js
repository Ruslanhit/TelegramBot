const Telegraf = require('telegraf')

const bot = new Telegraf(process.env.6660007360:AAESQYBRMbqDcSKtpV9pgoadq9fWaJ8nXPE)
bot.start((ctx) => ctx.reply('Welcome!'))
bot.help((ctx) => ctx.reply('Send me a sticker'))
bot.on('sticker', (ctx) => ctx.reply(''))
bot.hears('hi', (ctx) => ctx.reply('Hey there'))
bot.launch()