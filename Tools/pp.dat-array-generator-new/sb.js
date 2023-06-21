const min = 1;
const max = 190;
const jsonKey = "sb";
const smallTab = "                ";
const mediumTab = "                    ";
const skippedArr = [];

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