//         1. яка різниця між let / var?
// var знаходяться в області видимості функції



//         2. typeof що повертає при застосуванні до різних типів?
// underfined



//         3. яка різниця між "" '' ``?




//         4. що таке scope?
// визначає доступність (видимість) змінних



//         5. які логічні оператори існують
// || (or), && (and) i ! (not)



//         6. різниця між switch та if (ваша суб'єктивна думка)



//         7. Є три масиви. вивести на консоль елемнти позначені "!"
//         [1,2,[1,'2!',3] , 4,5,6]
//         [123,21,123,[123,43], [123,4,4,4,'6!'] ,true]
//         [['hello','oktenweb'],'asd','qwe', ['hello','oktenweb!']]

let array1 = [1,2,[1,'2!',3] , 4,5,6];

console.log(array1[2][1]);

let array2 = [123,21,123,[123,43], [123,4,4,4,'6!'] ,true];

console.log(array2[4][4])

let array3 = [['hello','oktenweb'],'asd','qwe', ['hello','oktenweb!']];

console.log(array3[3][1])


console.log('_____________')



//         8 .
//         Є об'єкт який характеризує автомобіль
//         вивести на консоль : 
//          - виробника
//          - тип двигуна
//          - об'єм двигуна
//          - тип трансміссіі

let legacy = {
    type: 'sedan',
    manufaturer: 'subaru',
    model: 'legacy',
    engine: {
        type: 'ej',
        series: 204,
        volume: 2,
        horsePower: 164  
    },
    transmission: {
        type: '4eat'
    },
    year: 2007,
    vinCode: 'bl5lasd123lxcz',      
    color: 'silver'
}

console.log(legacy.manufaturer);

console.log(legacy.engine.type)

console.log(legacy.engine.volume)

console.log(legacy.transmission.type)


console.log('_____________')


//     9. Створити об'єкит, які характеризують членів вашої родини

let family = {
    mother: {
        name: 'Natalya',
        age: 49,
    },

    sister: {
        name: 'Iryna',
        age: 21,
    },

    grandmothet: {
        name: 'Stephania',
        age: 68,
    },
}