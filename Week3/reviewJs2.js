let ItemOrder =[{
    "A4 paper" : 120,
    "Ruler" : 25,
    "Flash Drive" : 130,
}];
//console.log(order[0].Customer.ItemOrder);
for(let i = 0;i < order.length; i++) {
    console.log(order[i].Cudtomer);
    let sum=0;
    for(let j=0;j<order[i].ItemOrder.length;j++){
        sum += order[i].Qty[j] * order[i].Price;
    }
    console.log(sum);
}

