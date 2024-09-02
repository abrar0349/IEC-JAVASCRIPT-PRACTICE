// calculte age average from array

function calculateAverageAge(arr){
    let totalAge = arr.reduce( (first ,  second) =>{
        let result = first + second.Age
        return result
    },0)
    let averageAge = totalAge / arr.length;
    return averageAge
}

let peopleInfo = [
    {
    'Name' : 'Abrar khan',
    Age : 25
    },
    {
        'Name' : 'kallemullah',
        Age : 23
    }
]
console.log(calculateAverageAge(peopleInfo))

// total sum of all number in array  

function sumArray(arr){
    let sum = arr.reduce( (first ,  second) =>{
        let result = first + second
        return result
    },0)
    
    return sum
}

console.log(sumArray([1,2,3,4,5,6]))

// Merge two array and remove duplication
function mergeAndRemoveDuplicates(arr1, arr2) {
    let arr3 = []

    function checkDuplicate(item){
        if(arr3.includes(item) == false){
            arr3.push(item)
        }
    }

    arr1.map(checkDuplicate)
    arr2.map(checkDuplicate)

    return arr3
}

console.log(mergeAndRemoveDuplicates([1,2,3,4],[1,2,3,4,5,6,7,8]))

// find max value from array

function findMaxValue(arr){
    return Math.max(...arr)
}
let array = [1,2,3,58,6,9,9,191,79,97,99,88,9,8,7]
console.log(findMaxValue(array))

// find longest word in sentence

function findLongestWord(sentence){
    let arr = sentence.split(" ")
    // console.log(arr)
    let logestWord = arr.reduce( (prev, curr) => {
        return prev.length > curr.length ? prev : curr
    })

    return logestWord
}

console.log(findLongestWord('khis is not logest eeeeeeeee'))

// emove third element from array

function removeThirdElement(arr){
    if(arr.length >= 3){
        arr.splice(2,1)
    }
    return arr
}

console.log(removeThirdElement(['khan',123,'khan']))