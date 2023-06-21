
const min1 = 0;
const wnArr = [
    "egypt",
    "pirate",
    "cowboy",
    "iceage",
    "lostcity",
    "future",
    "dark",
    "eighties",
    "dino",
    "beach",
    "modern"
];
const max1 = wnArr.length;
const jsonKey = "dri"; // Key for JSON array; also known as what you are mainly editing
const smallTab = "                "; // The same as 16 space bars
const mediumTab = "                    "; // The same as 20 space bars
const bigTab = "                        "; // The same as 24 space bars
const largeTab = "                            "; // The same as 28 space bars
const skippedArr = []; // Skip the items in this array
const cl = 1000; // Change this to the current level, max value is 2147483647
const hl = 1000; // Change this to the highest level, max value is 2147483647
const pfco = 5; // Change this to how many plant food you want, max is 4 or 5, depends on your upgrades
const l = 63;

console.log("!---Copy from here---!");
console.log(smallTab + "\"" + jsonKey + "\": [");

for (var i = min1; i <= max1 - 1; i++) {
    var min2 = 1;
    var max2 = 193;
    if (skippedArr.includes(i)) {
        // Do nothing
    } else if (i == max1 - 1) {
        console.log(mediumTab + "{");
        console.log(bigTab + "\"wn\": \"" + wnArr[i] + "\",");
        console.log(bigTab + "\"cl\": " + cl + ",");
        console.log(bigTab + "\"hl\": " + hl + ",");
        console.log(bigTab + "\"pfco\": " + pfco + ",");
        console.log(bigTab + "\"l\": " + l + ",");
        console.log(bigTab + "\"sb\": [");
        for (var j = min2; j <= max2; j++) {
            if (j == max2) {
                console.log(largeTab + j);
            } else {
                console.log(largeTab + j + ",");
            }
        }
        console.log(bigTab + "]");
        console.log(mediumTab + "}");
    } else {
        console.log(mediumTab + "{");
        console.log(bigTab + "\"wn\": \"" + wnArr[i] + "\",");
        console.log(bigTab + "\"cl\": " + cl + ",");
        console.log(bigTab + "\"hl\": " + hl + ",");
        console.log(bigTab + "\"pfco\": " + pfco + ",");
        console.log(bigTab + "\"l\": " + l + ",");
        console.log(bigTab + "\"sb\": [");
        for (var j = min2; j <= max2; j++) {
            if (j == max2) {
                console.log(largeTab + j);
            } else {
                console.log(largeTab + j + ",");
            }
        }
        console.log(bigTab + "]");
        console.log(mediumTab + "},");
    }
}

console.log(smallTab + "]");
console.log("!-----Copy to here-----!");