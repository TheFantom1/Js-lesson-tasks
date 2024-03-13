/*
- Є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
Завдання робити через цикли.*/

let coursesAndDurationArray = [
    { title: 'JavaScript Complex', monthDuration: 5 },
    { title: 'Java Complex', monthDuration: 6 },
    { title: 'Python Complex', monthDuration: 6 },
    { title: 'QA Complex', monthDuration: 4 },
    { title: 'FullStack', monthDuration: 7 },
    { title: 'Frontend', monthDuration: 4 }
];

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let course = coursesAndDurationArray[i];

    let block = document.createElement('div');
    block.classList.add('course-block');

    let title = document.createElement('h2');
    title.textContent = course.title;

    let duration = document.createElement('p');
    duration.textContent = `Duration: ${course.monthDuration} months`;

    block.appendChild(title);
    block.appendChild(duration);
    document.body.appendChild(block);
}