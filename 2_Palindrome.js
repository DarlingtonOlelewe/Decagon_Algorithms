function palindrome(str){
    newStr = str.split("").reverse().join("")
    return str === newStr
}

console.log(panlindrome("pap"))
console.log(panlindrome("shoe"))