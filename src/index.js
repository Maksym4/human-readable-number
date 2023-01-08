module.exports = function toReadable(number) {
    if (number === undefined || typeof number !== "number") {
        return 0;
    }

    const arr1 = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    const arr2 = [
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen",
    ];
    const arr3 = [
        "",
        "",
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety",
        "hundred",
    ];

    let result = "";
    const numberStr = number.toString();
    const len = numberStr.length;

    if (len === 1) {
        result = `${arr1[numberStr[0]]}`;
    }

    if (len === 2) {
        if (Math.floor(number / 10) > 1) {
            if (numberStr[1] === "0") {
                result = `${arr3[numberStr[0]]}`;
            } else {
                result = `${arr3[numberStr[0]]} ${arr1[numberStr[1]]}`;
            }
        } else {
            result = `${arr2[numberStr[1]]}`;
        }
    }

    if (len === 3) {
        result = `${arr1[numberStr[0]]} hundred`;

        if (numberStr[1] === "0" && numberStr[2] !== "0") {
            result += ` ${arr1[numberStr[2]]}`;
        }

        if (Math.floor(numberStr.slice(1) / 10) > 1) {
            if (numberStr[2] === "0") {
                result += ` ${arr3[numberStr[1]]}`;
            } else {
                result += ` ${arr3[numberStr[1]]} ${arr1[numberStr[2]]}`;
            }
        }

        if (Math.floor(numberStr.slice(1) / 10) === 1) {
            result += ` ${arr2[numberStr[2]]}`;
        }
    }

    return result;
};
