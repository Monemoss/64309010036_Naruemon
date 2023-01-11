let order =[{
    "Customer" : "Mr.Lee",
    "ItemOrder" : ["A4 paper" , "Ruler"],
    "Qty" : [5,2],
    "Price" : [120 , 25],

},
{
    "Customer" : "Mr.Yue",
    "ItemOrder" : ["Flash Drive" , "A4 paper"],
    "Qty" : [2,3],
    "Price" : [130 , 120],

},
{
    "Customer" : "Mr.Mone",
    "ItemOrder" : ["Flash Drive" , "A4 paper" , "Ruler"],
    "Qty" : [5,2,3],
    "Price" : [120 , 25 , 120],

}
];
//console.log(order[0].Customer.ItemOrder);
for (let i = 0;i < order.length; i++) {
    let sum=0;
    for(let j = 0; j <order[i].ItemOrder.length; j++){
        sum += order[i].Qty[j] * order[i].Price[j];
    }
    console.log(order[i].Customer, sum);
}
