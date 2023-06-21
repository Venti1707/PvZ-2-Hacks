const min = 11; // Starting value of array
const max = 81; // Ending value of array
const jsonKey = "gf"; // Key for JSON array; also known as what you are mainly editing
const smallTab = "                "; // The same as 16 space bars
const mediumTab = "                    "; // The same as 20 space bars
const bigTab = "                        "; // The same as 24 space bars
const largeTab = "                            "; // The same as 28 space bars
const skippedArr = [
    26,
    27,
    29,
    38,
    39,
    40,
    41,
    42,
    43,
    44,
    45,
    47,
    48,
    50,
    51,
    57,
    58,
    59,
    60,
    62,
    63,
    64,
    65,
    70,
    71,
    74,
    75,
    76,
    77,
    79
]; // Skip the items in this array

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