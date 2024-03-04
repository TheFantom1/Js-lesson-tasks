//- Знайти та вивести довижину настипних стрінгових значень
//     'hello world', 'lorem ipsum', 'javascript is cool'
// noinspection DuplicatedCode

{
    let str = ['hello world', 'lorem ipsum', 'javascript is cool']
    let length = str.map(str => str.length)
    console.log(length)
}
//- Перевести до великого регістру наступні стрінгові значення
//       'hello world', 'lorem ipsum', 'javascript is cool'

{
    let str = ['hello world', 'lorem ipsum', 'javascript is cool']
    let upperCase = str.map(str => str.toUpperCase())
    console.log(upperCase)
}
//- Перевести до нижнього регістру настипні стрінгові значення
//'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

{
    let str = ['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL']
    let lowerCase = str.map(str => str.toLowerCase())
    console.log(lowerCase)
}
//- Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

{
    let str = ' dirty string   ';
    let trimmedStr = str.trim();
    console.log(trimmedStr);
}
//- Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
//     let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

{
    function stringToArray(str) {
        return str.split(' ');
    }

    let str = 'Ревуть воли як ясла повні';
    let arr = stringToArray(str);
    console.log(arr);
}
//- є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.

{
    let strArray = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
    let numArray = strArray.map(number => String(number));
    console.log(numArray);
}
//- створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
// let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
{
    function sortNums(nums, direction) {
        if (direction === 'ascending') {
            return nums.slice().sort((a, b) => a - b);
        } else if (direction === 'descending') {
            return nums.slice().sort((a, b) => b - a);
        } else {
            return "Невірний напрямок. Використовуйте 'ascending' або 'descending'.";
        }
    }

    let nums = [11, 21, 3];
    console.log(sortNums(nums, 'ascending'));
    console.log(sortNums(nums, 'descending'));
}
//- є масив
// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//  -- відсортувати його за спаданням за monthDuration
//  -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
//  -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}

{
    let coursesAndDurationArray = [
        {title: 'JavaScript Complex', monthDuration: 5},
        {title: 'Java Complex', monthDuration: 6},
        {title: 'Python Complex', monthDuration: 6},
        {title: 'QA Complex', monthDuration: 4},
        {title: 'FullStack', monthDuration: 7},
        {title: 'Frontend', monthDuration: 4}
    ];


    let sortedCourses = coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration);

    let filteredCourses = sortedCourses.filter(course => course.monthDuration > 5);

    let transformedCourses = filteredCourses.map((course, index) => ({
        id: index + 1,
        title: course.title,
        monthDuration: course.monthDuration
    }));

    console.log(transformedCourses, filteredCourses, sortedCourses);
}
// описати колоду карт (від 6 до туза без джокерів)
//  - знайти піковий туз
//  - всі шістки
//  - всі червоні карти
//  - всі буби
//  - всі трефи від 9 та більше
//
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//     value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }
{

    let deck = [];
    let suits = ['spade', 'diamond', 'heart', 'clubs'];
    let values = ['6', '7', '8', '9', '10', 'jack', 'queen', 'king', 'ace'];
    let colors = {
        'spade': 'black',
        'diamond': 'red',
        'heart': 'red',
        'clubs': 'black'
    };

    for (let suit of suits) {
        for (let value of values) {
            deck.push({cardSuit: suit, value: value, color: colors[suit]});
        }
    }

    console.log(deck);

    {

        let pikesAce = deck.find(card => card.cardSuit === 'spade' && card.value === 'ace');
        console.log("Піковий туз:", pikesAce);

        let sixes = deck.filter(card => card.value === '6');
        console.log("Всі шістки:", sixes);

        let redCards = deck.filter(card => (card.color === 'red'));
        console.log("Всі червоні карти:", redCards);

        let bubs = deck.filter(card => card.cardSuit === 'diamond');
        console.log("Всі буби:", bubs);

        let trefoilsFromNine = deck.filter(card => card.cardSuit === 'clubs' && values.indexOf(card.value) >= values.indexOf('9'));
        console.log("Всі трефи від 9 та більше:", trefoilsFromNine);
    }
//Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//     diamonds:[],
//     hearts:[],
//     clubs:[]
// }


    let groupedBySuits = deck.reduce((result, card) => {
        result[card.cardSuit].push(card);
        return result;
    }, {'spade': [], 'diamond': [], 'heart': [], 'clubs': []});

    console.log(groupedBySuits);
}
//взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

{
    let coursesArray = [
        {
            title: 'JavaScript Complex',
            monthDuration: 5,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
        },
        {
            title: 'Java Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'git',
                'java core',
                'java advanced']
        },
        {
            title: 'Python Complex',
            monthDuration: 6,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'angular',
                'aws',
                'docker',
                'python core',
                'python advanced']
        },
        {
            title: 'QA Complex',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
        },
        {
            title: 'FullStack',
            monthDuration: 7,
            hourDuration: 909,
            modules: ['html',
                'css',
                'js',
                'mysql',
                'mongodb',
                'react',
                'angular',
                'aws',
                'docker',
                'git',
                'node.js',
                'python',
                'java']
        },
        {
            title: 'Frontend',
            monthDuration: 4,
            hourDuration: 909,
            modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
        }
    ];
    const sassCourses = coursesArray.filter(course => course.modules.includes('sass'));
    console.log('Курси з модулем sass:', sassCourses);

    const dockerCourses = coursesArray.filter(course => course.modules.includes('docker'));
    console.log('Курси з модулем docker:', dockerCourses);
}