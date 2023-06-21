const min = 1; // Starting value of array
const max = 190; // Ending value of array
const jsonKey = ""; // Key for JSON array; also known as what you are mainly editing
const smallTab = "                "; // The same as 16 space bars
const mediumTab = "                    "; // The same as 20 space bars
const bigTab = "                        "; // The same as 24 space bars
const largeTab = "                            "; // The same as 28 space barsconst skippedArr = []; // Skip the items in this array

console.log("!---Copy from here---!");
console.log(smallTab + "\"" + jsonKey + "\": [");

for (var i = min; i <= max; i++) {
    if (skippedArr.includes(i)) {
        // Do nothing
    } else if (i == max) {
        console.log(mediumTab + i);
    } else {
        console.log(mediumTab + i + ",");
    }
}

console.log(smallTab + "]");
console.log("!-----Copy to here-----!");