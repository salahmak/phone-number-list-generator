const yargs = require("yargs");
const generate = require("./utils/genList.js");

const argv = yargs
    .option("seed", {
        alias: "s",
        description:
            "Insert the number seed (the part that all numbers share in between), mostly first 3 numbers without the 0",
        type: "number",
    })
    .option("length", {
        alias: "l",
        description: "Insert the length of the number excluding the seed's length",
        type: "number",
    })
    .help()
    .alias("help", "h").argv;

if (!argv.seed && !argv.length)
    return console.log("Please provide the seed and the length of the number");

if (!argv.seed) return console.log("Please provide the seed of the number");

if (!argv.length) return console.log("Please provide the length of the number");

generate(argv.seed, argv.length);
