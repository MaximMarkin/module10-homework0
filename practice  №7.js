

let array = [3, 44, 8, "f", 29, 63, 0, null, 35, 89, "no",0];

let zeroNumber = 0;
let evenNumber = 0;
let oddNumber = 0;
let notNumber = 0;

for (let i = 0; i < array.length; i++) {
    if (typeof array[i] === "number" && !isNaN(array[i])) {
        if (array[i] === 0) {
        zeroNumber++;
    } else {
        if (array[i] % 2 === 0) {
            evenNumber++;
        } else {
            oddNumber++;
        }
    }
    } else {
        notNumber++;
    }
}

console.log("количество нулей-" + zeroNumber);
console.log("количество четных чисел-" + evenNumber);
console.log("количество нечетных чисел-" + oddNumber);
console.log("количество не числовых значений-" + notNumber);