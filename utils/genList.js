const fs = require("fs");
const path = require("path");

module.exports = async (seed, length) => {
    //defining the filepath
    const filePath = path.join(__dirname, "..", "lists", `0${seed}xxxx.txt`);

    //setting up the phone array
    let phoneArr = ["0", ...seed.toString()];

    //adding 0s to the phone array
    for (let i = 0; i < length; i++) {
        phoneArr.push("0");
    }

    //Using the phoneArr to generate the numbers

    //defining the output string
    let outputStr = "";

    //a for loop to generate the numbers
    for (let i = 0; i < 10 ** length; i++) {
        //copying phoneArr to a new variable
        let subPhone = [...phoneArr];

        //removing i.length slots from the end of the subPhone array
        subPhone.splice(subPhone.length - i.toString().length);

        //filling the removed slots with i
        subPhone.push(i.toString());

        //pushing the generated number to the output string with a line break
        outputStr += subPhone.join("") + "\n";
    }

    //writing the output string to the filapath
    fs.writeFile(filePath, outputStr, (err) => {
        if (err) throw err;
        console.log("File written");
    });
};
