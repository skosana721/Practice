const gas = [40, 28, 183]
const food = [83, 65, 59]

const calculateTotal = (arr) => {
    let totalAmount = 0;
    arr = gas.concat(food)
    for (let i = 0; i < arr.length; i++){
        totalAmount+= arr[i]
    }
    return totalAmount
    
}
calculateTotal()