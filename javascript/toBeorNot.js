

var expect = function(val){
return{
 toBe(value1){
    if((val !==null && value1 === null) || (val ===null && value1 !== null)) return new Error("Not Equal")
    return val === value1 ? true :  new Error("Not Equal");
},
 notToBe(value2){
    if((val !==null && value2 === null) ) return new Error("Equal")
if((val ===null && value2 !== null)) return true;
    return val === value2 ?   new Error("Equal") : true ;
  
}

}
}

console.log(expect(5).toBe(5))
console.log(expect(5).toBe(null))

console.log(expect(5).notToBe(5))
