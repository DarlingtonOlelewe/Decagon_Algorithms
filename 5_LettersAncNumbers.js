function lettNum(str){
    const store = {}

    for (let letter of str){
        if (store[letter]){
            store[letter]++
        } else{
            store[letter] = 1
        }
    }

    const nums = Object.values(store)
    const lett = Object.keys(store)
    let fullLetter = ''

    for (let i = 0; i < nums.length; i++){
        fullLetter += lett[i] + nums[i]
    }

    return fullLetter
}

console.log(lettNum("addicted"))