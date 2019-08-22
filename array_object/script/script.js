// зробити масив з 10 чисел [2,17,13,6,22,31,45,66,100,-18]та:
// 1. перебрати його циклом while
console.log('1-------------------');

let masyv = [2,17,13,6,22,31,45,66,100,-18];

let i = 0;

while (i < masyv.length) {
    console.log(masyv[i]);
    i++
}



console.log('2-------------------');
// 2. перебрати його циклом for
//[2,17,13,6,22,31,45,66,100,-18]

for (let i = 0; i < masyv.length; i++) {
    console.log(masyv[i]);
    
}



console.log('3-------------------');
// 3. перебрати циклом while та вивести  числа тільки з непарним індексом
//[2,17,13,6,22,31,45,66,100,-18]

i = 0;

while (i < masyv.length) {

    if (masyv[i] % 2 !== 0) {
        console.log(masyv[i]);
    }
    i++
}



console.log('4-------------------');
// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
//[2,17,13,6,22,31,45,66,100,-18]

i = 0;

for (let i = 0; i < masyv.length; i++) {

    if (masyv[i] % 2 !== 0) {
        console.log(masyv[i]);
    }
}



console.log('5-------------------');
// 5. перебрати циклом while та вивести  числа тільки парні  значення 
//[2,17,13,6,22,31,45,66,100,-18]

i = 0;

while (i < masyv.length) {
    
    if (masyv[i] % 2 === 0) {
        console.log(masyv[i]);
    }
    i++
}



console.log('6-------------------');
// 6. перебрати циклом for та вивести  числа тільки парні  значення 
//[2,17,13,6,22,31,45,66,100,-18]

i = 0;
for (let i = 0; i < masyv.length; i++) {
    
    if (masyv[i] % 2 === 0) {
        console.log(masyv[i])
    }
    
}



console.log('7-------------------');
// 7. замінити кожне число кратне 3 на слово "okten" 
//[2,17,13,6,22,31,45,66,100,-18]

i=0
for (let i = 0; i < masyv.length; i++) {
    
    if (masyv[i] % 3 === 0) {
        masyv[i] = 'okten'
    }
    
}

console.log(masyv)



console.log('8-------------------');
// 8. вивести масив в зворотньому порядку.
//[2,17,13,6,22,31,45,66,100,-18]

masyv = [2,17,13,6,22,31,45,66,100,-18];

console.log(masyv.length)
for (let i = masyv.length-1; i >= 0; i--) {
    console.log(masyv[i])
    
}


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)

console.log('9.3-------------------');
//перебрати циклом while та вивести  числа тільки з непарним індексом, але в зворотньому циклі



console.log('9.4-------------------');
//перебрати циклом for та вивести  числа тільки з непарним індексом, але в зворотньому циклі

masyv = [2,17,13,6,22,31,45,66,100,-18];

for (i = masyv.length-1; i >= 0; i--) {

    if (masyv[i] % 2 !== 0) {
        console.log(masyv[i]);
    }
}



console.log('9.5-------------------');
//перебрати циклом while та вивести  числа тільки парні  значення, але в зворотньому циклі



console.log('9.6-------------------');
//перебрати циклом for та вивести  числа тільки парні  значення, але в зворотньому циклі
//[2,17,13,6,22,31,45,66,100,-18]

masyv = [2,17,13,6,22,31,45,66,100,-18];

for (let i = masyv.length-1; i>=0; i--) {
    
    if (masyv[i] % 2 === 0) {
        console.log(masyv[i])
    }
    
}

console.log('9.7-------------------');
//замінити кожне число кратне 3 на слово "okten" 
//[2,17,13,6,22,31,45,66,100,-18]

masyv = [2,17,13,6,22,31,45,66,100,-18];

for (let i = masyv.length-1; i>=0; i--) {
    
    if (masyv[i] % 3 === 0) {
        masyv[i] = 'okten'
    }
    
}

console.log(masyv)



// 10
//  створити пустий масив та :

console.log('10-------------------');
// - заповнити його 50 парними числами за допомоги циклу.

let array=[ ];

while (array.length < 50) {
    let randomNumber = parseInt(Math.random()*999)
    if (randomNumber % 2 === 0) {
        array.push(randomNumber);
    }
}
console.log(array);



console.log('-------------------');
// - заповнити його 50 непарними числами за допомоги циклу.

array = [ ];

while (array.length < 50) {
    let randomNumber = parseInt(Math.random()*999)
    if (randomNumber % 2 !== 0) {
        array.push(randomNumber);
    }
}
console.log(array);

