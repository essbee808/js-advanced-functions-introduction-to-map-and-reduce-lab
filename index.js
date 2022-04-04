// Your code here
const arr = [1, 2, 3, -9];

function mapToNegativize(arr) {
    let n = []
    for (let i = 0; i < arr.length; i++) {
        n.push(-1 * arr[i])
    }
    return n
}

function mapToNoChange(arr) {
    let n = []
    for (let i = 0; i < arr.length; i++) {
        n.push(arr[i])
    }
    return n
}

function mapToDouble(arr) {
    let n = []
    for (let i = 0; i < arr.length; i++) {
        n.push(arr[i] * 2)
    }
    return n
}

function mapToSquare(arr) {
    let n = []
    for (let i =0; i < arr.length; i++) {
        n.push(arr[i]**2)
    }
    return n
}

function reduceToTotal(arr, startingPoint=0) {
    let total = startingPoint
    for (let i = 0; i < arr.length; i++) {
        total = total + arr[i]
    }
    return total
}

function reduceToAllTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (!arr[i]) return false
    }
    return true
}

function reduceToAnyTrue(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]) return true
    }
    return false
}