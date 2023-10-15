import  express  from 'express'
import { Telegraf } from 'telegraf'
import { PORT, TOKEN } from './config.js'
import {getMainMenu} from './keyboards.js'

const app = express()
const bot = new Telegraf(TOKEN)


//Бот отвечает по команде /start
bot.start(ctx => {
    ctx.reply('ВелКАМ ту зэ клаб', getMainMenu)
})

//бот отвечает на конкретный текст
bot.hears('case 1', ctx => {
    ctx.reply('Тут будут ваши задачи')
})

bot.hears('Добавить задачу', ctx => {
    ctx.reply('Тут вы сможете добавить свои задачи')
})

bot.hears('Смотивируй меня', ctx => {
    ctx.replyWithPhoto(
        'https://img2.goodfon.ru/wallpaper/nbig/7/ec/justdoit-dzhastduit-motivaciya.jpg',
        {
            caption: 'Не вздумай сдаваться!'
        }
    )
})

bot.launch()
app.listen(PORT, () => console.log(`Сервер успешно подключен ${PORT}`))












// //Бот отвечает на любой текст
// bot.on('text', ctx => {
//     ctx.reply('Че настрочил?! лучше подрочи мозгоеб')
// })

// //Бот отвечает на голосовое сообщение
// bot.on('voice', ctx => {
//     ctx.reply('Не говори нахуй! Это мерзко мен.')
// })

// //Бот отвечает на стикер
// bot.on('sticker', ctx => {
//     ctx.reply('Убейся нахуй')
// })

// //Бот отвечает на редактирование текста
// bot.on('edited_message', ctx => {
//     ctx.reply('Редактор ебаный, поменяй свою жизнь а не сообщение')
// })

// //Бот получает команду /time и отправляет текующую дату и время
// bot.command('time', ctx => {     
//     ctx.reply(String(new Date()))
// }) 

