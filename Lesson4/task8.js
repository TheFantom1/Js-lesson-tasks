//1.- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
function buildListFromArray(arr) {
    let result = "<ul>";
    for (let i = 0; i < arr.length; i++) {
        result += "<li>" + arr[i] + "</li>";
    }
    result += "</ul>";
    return result;
}

//2.- створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
function displayObjects(arr) {
    for (let i = 0; i < arr.length; i++) {
        let obj = arr[i];
        let div = document.createElement('div');
        div.innerHTML = "<p>ID: " + obj.id + "</p>" +
            "<p>Name: " + obj.name + "</p>" +
            "<p>Age: " + obj.age + "</p>";
        document.body.appendChild(div);
    }
}

//3.- створити функцію яка повертає найменьше число з масиву
function findMinNumber(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

//4.- створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його.
function sum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

//5.- створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
function swap(arr, index1, index2) {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
    return arr;
}

//6. - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
function exchange(sumUAH, currencyValues, exchangeCurrency) {
    let exchangeRate;
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeCurrency) {
            exchangeRate = currencyValues[i].value;
            break;
        }
    }
    return sumUAH / exchangeRate;
}

// Приклади використання:

// 1
let primitiveArray = [1, "hello", true, 5.6];
let primitiveList = buildListFromArray(primitiveArray);
document.write(primitiveList);

// 2
let objectsArray = [
    { id: 1, name: "John", age: 30 },
    { id: 2, name: "Alice", age: 25 },
    { id: 3, name: "Bob", age: 35 }
];
displayObjects(objectsArray);

// 3
let numbersArray = [10, 5, 20, 3];
let minNumber = findMinNumber(numbersArray);
console.log(minNumber);

// 4
let sumResult = sum([1, 2, 10]);
console.log(sumResult);

// 5
let swappedArray = swap([11, 22, 33, 44], 0, 1);
console.log(swappedArray);

// 6
let exchangeResult = exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD');
console.log(exchangeResult);

