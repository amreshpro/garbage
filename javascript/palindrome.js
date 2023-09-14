//  palindrome number
// input x =121 output : true
// input x = 10 output : false

let x =  parseInt(prompt("Enter yout Number: "));

const isPalindrome = function(x){

return x<0?false: x === +x.toString().split("").reverse().join("")

}

console.log(isPalindrome(x))

// x -> prompt gives string by default either we enter number or not 
//  we need to explocitly convert it into number if we need like parseInt(prompt("Enter yout number"))
//  x.toString().split("").reverse().join("") : 123 => '123'=>['1','2','3'] =>['3','2','1']=>'321'