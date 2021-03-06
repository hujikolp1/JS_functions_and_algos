let squareArr = [0, 1, 4, 9, 16, 25, 36, 49, 64, 81]
// const reducer = (accumulator, currentValue) => accumulator + currentValue;

let sumSquares = squareArr.reduce( 
    (accumulator, currentValue, currentIndex, array) => {
        return accumulator+currentValue
    }
)

console.log('-> ', sumSquares)