# numberGenerator ![language](https://img.shields.io/badge/language-javascript-blue.svg)

> A simple tool to generate phone numbers lists by providing a seed (first common 3-4 numbers without 0) and a length (the length of the number without the provided seed).

## :books: Table of Contents

- [Installation](#package-installation)
- [Usage](#rocket-usage)
- [Example](#helicopter-example)
- [Help](#bulb-help)
- [License](#scroll-license)

## :package: Installation

```
npm install
```

## :rocket: Usage

```
node generateNumbers.js --seed [seed] --length [length]
```

## :helicopter: Example
### Generating all numbers that looks like `0455xxxxxx`
In the current example, `0455` is the seed, and the number of x is the length, so the length is 6. We can generate the numbers using this command:

```
node generateNumbers.js --seed 0455 --length 6
```
After generating the numbers, the list will be stored at /lists in this format:

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
  --help, -h    Show help                                              [boolean]

```

## :scroll: License

[MIT](LICENSE) © [salahmak](https://github.com/salahmak)