function mostOccurance(str){
    str = str.toLowerCase()
    let store = {}

    for(let letter of str){
        
        if (store[letter]){
            store[letter]++
        } else{
            store[letter] = 1
        }
    }

    let keys = Object.keys(store)
    let vals = Object.values(store)
    let highestIndex
    let highest = 0

    for (let i = 0; i < vals.length; i++){
        
        if (vals[i] >= highest){
            highest = vals[i]
            highestIndex = [i, highest]
        }
    }
    max = highestIndex[0]

    return keys[max]
}

console.log(mostOccurance("Hello World!"))