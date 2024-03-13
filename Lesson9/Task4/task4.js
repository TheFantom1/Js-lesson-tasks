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


За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,  в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
    Завдання робити через цикли.
*/

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let container = document.createElement('div');
container.classList.add('container');

for (let i = 0; i < coursesAndDurationArray.length; i++) {
    let item = document.createElement('div');
    item.classList.add('item');

    let heading = document.createElement('h1');
    heading.classList.add('heading');
    heading.textContent = coursesAndDurationArray[i].title;

    let description = document.createElement('p');
    description.classList.add('description');
    description.textContent = `Duration: ${coursesAndDurationArray[i].monthDuration} months`;

    item.appendChild(heading);
    item.appendChild(description);
    container.appendChild(item);
}

document.body.appendChild(container);
