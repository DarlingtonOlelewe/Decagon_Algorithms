function vowelGreaterConsonants(str){
    str = str.toLowerCase().split(" ").join("")
    let vowel = 0
    let conso = 0
    let vowelCheck = /[aeiou]/

    for(let letter of str){
        if(vowelCheck.test(letter)){
            vowel++
        } else{
            conso++
        }
    }
    
    if (vowel > conso){
        return vowel > conso
    }else if (conso > vowel){
        return vowel > conso
    }else{
        return "Draw"
    }
}

console.log(vowelGreaterConsonants("aaeeiicjaodieb"))
console.log(vowelGreaterConsonants("aabbccee"))
console.log(vowelGreaterConsonants("bnmjkli"))