const min = 1;
const max = 198;
const jsonKey = "pli";
const smallTab = "                "; // The same as 16 space bars
const mediumTab = "                    "; // The same as 20 space bars
const bigTab = "                        "; // The same as 24 space bars
const largeTab = "                            "; // The same as 28 space bars
const skippedArr = []; // Skip the items in this array

console.log("!---Copy from here---!");
console.log(smallTab + "\"" + jsonKey + "\": [");

for (var i = min; i <= max; i++) {
    if (skippedArr.includes(i)) {
        // Do nothing
    } else if (i == max) {
        console.log(mediumTab + "{");
        console.log(bigTab + "\"p\": " + i + ",");
        console.log(bigTab + "\"c\": " + 1 + ",");
        console.log(bigTab + "\"a\": " + 4 + ",");
        console.log(bigTab + "\"b\": [],");
        console.log(bigTab + "\"t\": " + -1);
        console.log(mediumTab + "}");
    } else {
        console.log(mediumTab + "{");
        console.log(bigTab + "\"p\": " + i + ",");
        console.log(bigTab + "\"c\": " + 1 + ",");
        console.log(bigTab + "\"a\": " + 4 + ",");
        console.log(bigTab + "\"b\": [],");
        console.log(bigTab + "\"t\": " + -1);
        console.log(mediumTab + "},");
    }
}
console.log(smallTab + "]");
console.log("!-----Copy to here-----!");