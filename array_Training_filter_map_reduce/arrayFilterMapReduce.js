let myarray = [1,2,3,4,5,6,7,8,9,10];


function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
      // Step 1: If the element is an even number
      if (array[i] % 2 === 0) {
        // Step 2: Multiply this number by three
        const tripleEvenNumber = array[i] * 3;
  
        // Step 3: Add the new number to the total
        sum += tripleEvenNumber;
      }
    }
    return sum;
  }

  console.log("Result of sumOfTripledEvens = " + sumOfTripledEvens(myarray));


//##########################################################################################################################
// rewirte sumOfTripledEvens so that it uses Filter Map and Reduce
//##########################################################################################################################


// 1. Filter all even Numbers
function isEven(number){
    if(number % 2 === 0){
        return true;
    }else{
        return false;}
}
let evenNumbers = myarray.filter(isEven);
console.log(evenNumbers);

// 2. Multiply even numbers by three
function multiplyWith3 (number){
    return number*3;
}

let evenNumbersMultipliedWith3 = evenNumbers.map(multiplyWith3);
console.log(evenNumbersMultipliedWith3);

// 3. Total of all even Numbers
let result = evenNumbersMultipliedWith3.reduce((total, currentValue) => {
    return total + currentValue;
} );
console.log(result);


//##########################################################################################################################
// The simple Splution was ... 
//##########################################################################################################################
function sumOfTripledEvensSOLUTION(array) {
    return array
      .filter((num) => num % 2 === 0)
      .map((num) => num * 3)
      .reduce((acc, curr) => acc + curr);
  }

// learning in comparisson with my Solution:
// we dont need to write separate function, we coud use inline functions
// we dont need to declare "Zwischenergebnisse". We could work further with the result (in this case array's) an assign them to a variabel in the end

  