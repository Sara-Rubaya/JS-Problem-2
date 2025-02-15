 /**
  * first100 --> 100
  * 101 to 200 --> 90
  * above 200 --> 70
  */

 function layeredDiscountTotal(quantity){
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;

    if(quantity <= 100){
        const total = quantity * first100Price;
        return total;
    }
    else if(quantity <= 200){
        const first100Total = 100 * first100Price;
        const remainingquantity = quantity - 100;
        const remainingTotal = remainingquantity * second100Price;
        const total = first100Price + remainingTotal;
    }
    else{
        const first100Total = 100 * first100Price;
        const second100Price = 100 * second100Price;
        const remainingquantity = quantity - 200;
        const remainingTotal = remainingquantity * above200Price;
        const total = first100Price + second100Price + remainingTotal;
        return total;
    } 
 }