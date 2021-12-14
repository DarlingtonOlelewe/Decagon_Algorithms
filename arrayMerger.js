// given, let array1 = [1, 2, 4, 5, 10, 6, 3 ] and let array2 = [0, 8, 19, 90, 11, 16, 13 ]
// Should return => [0,1,2,3,4,5,6,8,10,11,13,16,19,90].


function arrayMerger(arr1, arr2){
    
    // creates a new array
    let newArr = []

    // loops through the first argument and pushes its value to the new array
    for(let i of arr1){
        newArr.push(i)
    }


    // loops through the second argument and pushes its value to the new array
    for(let i of arr2){
        newArr.push(i)
    }

    // returns a sorted new array by asending order
    return newArr.sort((a, b) => a-b)
}

// test case
console.log(arrayMerger([1, 2, 4, 5, 10, 6, 3 ], [0, 8, 19, 90, 11, 16, 13 ]))
