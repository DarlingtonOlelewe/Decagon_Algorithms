// let array = [ 1, 2, 3, 4 ] => [24, 12, 8, 6]
// Let array1 = [0,1,2,3,4] => [24, 0, 0, 0]


function findProduct(arr){
    let newArr = []
    
    for (let i of arr){
        
        // initializes product to 1
        let product = 1
        
        // exclueds a given index
        let sp = arr.filter(item => item !== i)

        // produces a multiple of the rest index
        for (let i = 0; i < sp.length; i++ ){
            product = product * sp[i]
        }


        // pushes the product to the newArrary
        newArr.push(product)
    }

    return newArr
}


// sample cases
console.log(findProduct([1, 2, 3, 4]))
console.log(findProduct([0, 1, 2, 3, 4]))
