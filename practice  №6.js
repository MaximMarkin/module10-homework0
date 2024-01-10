

let array = ["n", "n", "n", "n", "n", "n"];

let same = true;

for (let i = 0; i < array.length - 1; i++) {
    if (array[i] !== array[i + 1]) {
        same = false;
        break;
    }
}
if (same) {
    console.log("true");
} else {
    console.log("false");
}