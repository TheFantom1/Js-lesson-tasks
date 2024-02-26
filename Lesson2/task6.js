//- У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = +prompt('Введіть день');

let dayTask;

if (day == 0) {
    console.log('Де ти найшов нульовий день місяця?');
} else if (day >= 1 && day <= 10) {
    console.log('Попало в першу "половину" місяця');
} else if (day >= 11 && day <= 20) {
    console.log('Попало в другу "половину" місяця');
} else if (day >= 21 && day <= 31) {
    console.log('Попало в третю "половину" місяця');
}
//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
switch (day) {
    case 1:
        dayTask = 'Продай хату';
        break;
    case 2:
        dayTask = 'Продай палату';
        break;
    case 3:
        dayTask = 'Продай ладу';
        break;
    case 4:
        dayTask = 'Продай ваду';
        break;
    case 5:
        dayTask = 'Продай пораду';
        break;
    case 6:
        dayTask = 'Продай вату';
        break;
    case 7:
        dayTask = 'Продай карту';
        break;
    case 0:
        dayTask = 'Шо ти збираєшся робити коли цей день не існує?';
        break;
    default:
        dayTask = '^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^';
}

console.log(dayTask);