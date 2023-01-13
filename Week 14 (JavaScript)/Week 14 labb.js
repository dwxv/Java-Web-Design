var numbers = [1, 2, 7, 4, 5];
var numbers2 = [2, 6, 8, 9, 5];
var numbers3 = [10, 15, 25, 19, 8];

//1
function max1(numbers) {
    var max = numbers[0];

    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

//2
function max2(numbers) {
    var max = numbers[0];

    numbers.forEach(element => {

        if (numbers[element] > max) {
            max = numbers[element];
        }
    });
    return max;
}

//3
function max3(numbers) {

    var max = numbers.reduce((maxNum, currentValue) => {
        if (currentValue > maxNum) {
            maxNum = currentValue;
            return maxNum;
        }
        else {        
            return maxNum;
        }
    }, 0);

    return max;

}

console.log(max1(numbers));
console.log(max2(numbers2));
console.log(max3(numbers3));