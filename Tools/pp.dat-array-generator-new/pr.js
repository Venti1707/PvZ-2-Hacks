const prArr = [
    "powerupbeghouledshovel",
    "powerupbeghouledshuffle",
    "powerupbeghouledwizardfinger",
    "powerupflamethrower",
    "powerupflickzombie",
    "poweruppinchzombie",
    "powerupsnowball",
    "powerupvasebreakerbutter",
    "powerupvasebreakermove",
    "powerupvasebreakerreveal",
    "powerupwizardfinger"
];

const min = 1; // Starting value of array
const max = prArr.length; // Ending value of array
const jsonKey = "pr"; // Key for JSON array; also known as what you are mainly editing
const smallTab = "                "; // The same as 16 space bars
const mediumTab = "                    "; // The same as 20 space bars
const bigTab = "                        "; // The same as 24 space bars
const largeTab = "                            "; // The same as 28 space bars
const skippedArr = []; // Skip the items in this array

console.log("!---Copy from here---!");
console.log(smallTab + "\"" + jsonKey + "\": [");

/*
                "pr": [
                    {
                        "n": "powerupsnowball",
                        "i": 100000
                    },
*/

for (var i = min; i <= max - 1; i++) {
    if (skippedArr.includes(i)) {
        // Do nothing
    } else if (i == max - 1) {
        console.log(mediumTab + "{");
        console.log(bigTab + "\"n\": \"" + prArr[i] + "\",");
        console.log(bigTab + "\"i\": " + 100000);
        console.log(mediumTab + "}");
    } else {
        console.log(mediumTab + "{");
        console.log(bigTab + "\"n\": \"" + prArr[i] + "\",");
        console.log(bigTab + "\"i\": " + 100000);
        console.log(mediumTab + "},");
    }
}

console.log(smallTab + "]");
console.log("!-----Copy to here-----!");