// import {Markup} from './node_modules/telegraf/lib/markup.js'

// export function getMainMenu() {
//     return Markup.toString ([
//         ['Мои задачи', 'Добавить задачу'],
//         ['Смотивируй меня']
//     ])
//     // .resize().extra()
// }


//создаем функцию кнопок, которые отправляются вместе с текстом
const getMainMenu = {
    reply_markup: JSON.stringify({
      inline_keyboard: [
        [{ text: 'case 1', callback_data: 'data 1' }],
        [{ text: 'case 2', callback_data: 'data 2' }],
        [{ text: 'case 3', callback_data: 'data 3' }],
        [{ text: 'case 4', callback_data: 'data 4' }],
        [{ text: 'case 5', callback_data: 'data 5' }],
        [{ text: 'case 6', callback_data: 'data 6' }],
        [{ text: 'case 7', callback_data: 'data 7' }],
        [{ text: 'case 8', callback_data: 'data 8' }],
        [{ text: 'case 9', callback_data: 'data 9' }],
        [{ text: 'case 10', callback_data: 'data 10' }],
        [{ text: 'case 11', callback_data: 'data 11' }],
        [{ text: 'case 12', callback_data: 'data 12' }],
        [{ text: 'case 13', callback_data: 'text 13' }]
      ]
    })
  }
//Експортируем переменную
  export {
    getMainMenu
  }
  