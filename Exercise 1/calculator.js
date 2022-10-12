
function addCalculator(a, b) {
    if (arguments.length <= 1) {
        throw new Error ("Error")
    } else {
        return a + b;
    }
  
}

function addSubstraction(a, b) {
    if (arguments.length <= 1) {
        throw new Error ("Error")
    } else {
  return a - b;
}
}

function addMultiplication(a, b) {
    if (isFinite(a) || isFinite(b) ) {
        throw new Error ("ErrorByReference")
    } else {
  return a * b;
    }
}

function addDividing(a, b) {
    if (arguments.length <= 1 || b == 0) {
        throw new Error ("Error")
    } else {

  return a / b;

}}

// Addition a few numbers in one call (call addCalculator with more than 2 arguments and get correct result)


function addFewNumbers(numbers) {
    let sum = 0;
    for (let i=0; i < numbers.length; i++)
    {
        sum += numbers[i];
    }
    return sum;

}

module.exports = {
  addCalculator,
  addSubstraction,
  addMultiplication,
  addDividing,
  addFewNumbers
};
