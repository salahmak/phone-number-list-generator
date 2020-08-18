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
    .option("write", {
        alias: "w",
        description:
            "Provide the filename where the numbers will be written at (the directory has to be valid)",
        type: "string",
    })
    .help()
    .alias("help", "h").argv;

if (!argv.seed && !argv.length)
    return console.log("Please provide the seed and the length of the number");

if (!argv.seed) return console.log("Please provide the seed of the number");

if (!argv.length) return console.log("Please provide the length of the number");

let path = `${__dirname}/0${argv.seed}xxxx-${argv.length}.txt`;

if (argv.write) {
    path = `${__dirname}/${argv.write}`;
}

generate(argv.seed, argv.length, path);
