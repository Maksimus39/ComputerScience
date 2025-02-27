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

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];

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
        console.log(item, '-', 'not found')
    } else {
        console.log(item, '-', nextElement);
    }
}









