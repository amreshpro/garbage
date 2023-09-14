/* 
Input: 
n = 10 
["call","call","call"]
Output: [10,11,12]
Explanation: 
counter() = 10 // The first time counter() is called, it returns n.
counter() = 11 // Returns 1 more than the previous time.
counter() = 12 // Returns 1 more than the previous time.
*/

let x = 10 ;

function* Counter(x){
    while(true){
        yield x++
    }
}

const counter = Counter(x)
console.log(counter.next().value)
console.log(counter.next().value)
console.log(counter.next().value)
