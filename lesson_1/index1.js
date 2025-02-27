// ----------------------------- 1 поменял значение переменных местами -------------------------------

let a = 5;
let b = 8;

let temp;

temp = a;


a = b;
b = temp;

// console.log(a);    // Вывод: 8
// console.log(b);    // Вывод: 5


// ------------------------------ 2 замена значений в массиве -----------------------------------------

let arr = [1, 2, 3, 4]

const temp2 = arr[2]
arr[2] = arr[0]
arr[0] = temp2

//console.log(arr)


// -------------------------- цикл for ---------------------------

const array = [1, 2, 3, 4];

for (let i = 0; i < array.length; i++) {
    const item = array[i];
    //console.log(item);
}

for (let temp = array.length - 1; temp >= 0; temp--) {
    const res = array[temp]
    //console.log(res)
}

for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const nextElement = array[i + 1];
    if (i + 1 === array.length) {
        // console.log(item, '-', 'not found')
    } else {
        // console.log(item, '-', nextElement);
    }
}


//  показать текущий и предыдущий

for (let i = 0; i < array.length; i++) {
    const item = array[i];
    const prevElement = array[i - 1];

    if (i === 0) {
        // console.log('not element', '-', item);
    } else {
        // console.log(prevElement, '-', item);
    }
}

let index = 0
while (index < array.length) {
    //console.log(array[index]);
    index++;
}


//

const fruits = ['apple', 'banana', 'apple', 'orange', 'banana'];

let countApple = 0

for (let i = 0; i < fruits.length; i++) {
    let fruit = fruits[i];
    if ('apple' === fruit) {
        countApple++
    }
}
//console.log(countApple);

const banana = []
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    if ('banana' === fruit) {
        banana.push(fruit)
    }
}
//console.log(banana.length)


// преобразование в Object
const resultObject = []
for (let i = 0; i < fruits.length; i++) {
    const fruit = fruits[i];
    resultObject.push({title: fruit, washed: false})
}

//console.log(resultObject)


// поиск минимального значения в массиве

const numbers = [1, 4, 7, 2, -1, 3, 5]

let element = numbers[0];
for (let i = 1; i < numbers.length; i++) {
    if (element > numbers[i]) {
        element = numbers[i];
    }
}
//console.log(element)


// поиск максимального элемента в массиве

let maxElement = numbers[0]
for (let i = 1; i < numbers.length; i++) {

    if (numbers[i] > maxElement) {
        maxElement = numbers[i];
    }
}

//console.log(maxElement)








