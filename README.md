# phone-number-list-generator ![language](https://img.shields.io/badge/language-javascript-blue.svg)

> A simple tool to generate phone numbers lists by providing a seed (first common 3-4 numbers without 0) and a length (the length of the number without the provided seed).

## :books: Table of Contents

-   [Installation](#package-installation)
-   [Usage](#rocket-usage)
-   [Example](#helicopter-example)
-   [Help](#bulb-help)
-   [License](#scroll-license)

## :package: Installation

```
npm install phones-generator.js -g
```

or you can clone this repo and install locally:

```
git clone https://github.com/salahmak/phone-number-list-generator.git
cd phone-number-list-generator
npm install
```

## :rocket: Usage

```
phones-generator.js --seed [seed] --length [length] --write [writing file dir] (optional)
```

usage locally:

```
node index.js --seed [seed] --length [length] --write [writing file dir] (optional)
```

## :helicopter: Example

### Generating all numbers that looks like `0455xxxxxx`

In the current example, `0455` is the seed, and the number of x is the length, so the length is 6. We can generate the numbers using this command:

```
phones-generator.js --seed 0455 --length 6 --write 'phoneNumbers.txt'
```

note: if you don't specify the writing file (--write, -w), the tools will automatically write the file in the execution directory.

After generating the numbers, the list will be stored on phoneNumber.txt in this format:

```
0455000000
0455000001
0455000002
0455000003
0455000004
...
...
...
0455999995
0455999996
0455999997
0455999998
0455999999
```

## :bulb: Help

```
node generateNumbers --help

Options:
  --version     Show version number                                    [boolean]
  --seed, -s    Insert the number seed (the part that all numbers share in
                between), mostly first 3 numbers without the 0          [number]
  --length, -l  Insert the length of the number excluding the seed's length
                                                                        [number]
  --write, -w   Provide the filename where the numbers will be written at (the
                directory has to be valid)                              [string]
  --help, -h    Show help                                              [boolean]

```

## :scroll: License

[MIT](LICENSE) © [salahmak](https://github.com/salahmak)
