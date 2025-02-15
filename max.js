const disha = 56;
const salman = 95;

if(disha > salman){
  console.log("Disha will get the strawberry");  
}
else{
    console.log("Salman will eat the strawberry.");
}

console.log('------------------')


//inside a fcuntion
function getMax(num1, num2){
    if(num1 > num2){
        return num1;
    }
    else{
        return num2;
    }
}
const max1 = getMax(56, 79);
const max2 = getMax(96, 89);
const ultimateMax = getMax(max1, max2);
console.log('MAx of two is:',ultimateMax);