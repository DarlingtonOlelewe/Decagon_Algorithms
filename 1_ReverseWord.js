function reverseWord(str){
    newWord = str.split("").reverse().join("")
    return newWord
}

console.log(reverseWord("hello word"))