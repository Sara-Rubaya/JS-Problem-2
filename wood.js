/**
 * chair --> 3 cft
 * table --> 10 cft
 * bed --> 50cft
 */
function woodQuantity(chairQuantity , tableQuantity, bedQuantity){
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const chairTotalWood = chairQuantity * perChairWood;
    const tableTotalWood = tableQuantity * perTableWood;
    const beddTotalWood = bedQuantity * perBedWood;

    const totalWood = chairTotalWood +  tableTotalWood + beddTotalWood;

    return totalWood;
}
const wood = woodQuantity(2 , 1, 1);
console.log('wood needed', wood);