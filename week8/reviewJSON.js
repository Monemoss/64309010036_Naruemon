let json = '{"fname":"Sam":"Iname":"Smith"}';
let obj = JSON.parse(json);

//console.log(typeof(obj));

let obj2 = {
    fname : "Engfa",
    Iname : "Waraha"
};
let json2 = JSON.stringify(obj2);
console.log(typeof(json2));