const factorial = n => {
    if (n <= 0 || n == 1) {
        return 1;
    } else {
        return n * factorial(n - 1);
    };
};

const maxNumber = (array, integer) => {
    let max = 0;
    for (let i = 0; i < array.length; i++) {
        const number = array[i] / integer;
        const factorialNumber = factorial(number);
        if (factorialNumber > max) {
            max = factorialNumber;
        };
    };
    return max;
};

console.log(maxNumber([1, 4, 7, 16], 4));