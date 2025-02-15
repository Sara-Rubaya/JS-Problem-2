const jim = 56;
const tim = 59;
const kim = 68;

if(jim > tim &&  jim > kim){
    console.log('Jim is the ultimate boss');
}
else if(tim > jim && jim > kim){
    console.log('Tim is the boss');
}
else{
    console.log('Kim is the Kardeshians boss');
}

// function maxNum (num1, num2, num3){
//     if(num1 > num2 && num1 > num3){
//         console.log('Num1 is the greatest');
//     }
//     else if(num2 > num1 && num1 > num3){
//         console.log('Num2 is great');
//     }
//     else{
//         console.log('Num3 is the boss');
//     }
// }

// const max1 = maxNum(56, 99, 21);
// const max2 = maxNum(6, 9, 29);
// const max3 = maxNum(55, 49, 72);
// const ultimateMax = maxNum(num1, num2, num3);
// console.log('MAx of three is:',ultimateMax);


const max = Math.max(12, 1, 56, 45, 76, 87)
console.log('Max using Math.max',max);