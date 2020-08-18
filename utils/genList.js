const fs = require("fs");
const path = require("path");

module.exports = async (seed, length) => {
    const time = moment().format("YYYY-MM-DD-hhmmss");
    const filePath = path.join(__dirname, "..", "lists", `0${seed}xxxx.txt`);

    let phoneArr = ["0", ...seed.toString()];

    //building the phoneArr
    for (let i = 0; i < length; i++) {
        phoneArr.push("0");
    }

    //Using the phoneArr to generate the numbers
    let outputStr = "";
    for (let i = 0; i < 10 ** length; i++) {
        let subPhone = [...phoneArr];
        subPhone.splice(subPhone.length - i.toString().length);
        subPhone.push(i.toString());
        outputStr += subPhone.join("") + "\n";
    }
    fs.writeFile(filePath, outputStr, (err) => {
        if (err) throw err;
        console.log("File written");
    });
};
