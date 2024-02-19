/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    const ends: number[] = [];
    if (numbers.length > 0) {
        ends[length] = numbers[0];
        ends[ends.length] = numbers[numbers.length - 1];
    }
    return ends;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    const tripled = numbers.map((price: number): number => price * 3);
    return tripled;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    const vals = numbers.map((number: string): number =>
        !Number.isNaN(Number(number)) ? Number(number) : 0
    );
    return vals;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    const vals = amounts.map(
        // If the price is less than 10, double the price, otherwise use the price unchanged
        (amounts: string): string =>
            amounts.charAt(0) === "$"
                ? amounts.slice(1, amounts.length)
                : amounts
    );
    const ret = stringsToIntegers(vals);
    return ret;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    const vals = messages.map(
        // If the price is less than 10, double the price, otherwise use the price unchanged
        (messages: string): string =>
            messages.charAt(messages.length - 1) === "!"
                ? messages.toUpperCase()
                : messages
    );
    const exclaims = vals.filter(
        (message: string): boolean => message[message.length - 1] !== "?"
    );
    return exclaims;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    const words4 = words.filter((word: string): boolean => word.length < 4);
    return words4.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    const len = colors.length;
    const rgb = colors.filter(
        (color: string): boolean =>
            color === "red" || color === "green" || color === "blue"
    );
    return len === rgb.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    const sum = addends.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    const nums = addends.map((num: number): string => num.toString() + "+");
    const strInit = sum.toString() + "=";
    const addAll = nums.join("");
    const finalAdd = addAll.slice(0, -1);
    let sum2: string;
    if (addends.length === 0) {
        sum2 = "0=0";
    } else {
        sum2 = strInit.concat(finalAdd);
    }
    return sum2;
}
/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let negInd: number;
    const findInd = values.findIndex((val: number): boolean => val < 0);
    if (findInd === -1) {
        negInd = values.length;
    } else {
        negInd = findInd;
    }
    const posArr = values.slice(0, negInd);
    const sum = posArr.reduce(
        (currentTotal: number, num: number) => currentTotal + num,
        0
    );
    let newVals: number[];
    if (findInd === -1) {
        newVals = [...values, sum];
    } else {
        newVals = [...values];
        newVals.splice(negInd + 1, 0, sum); // Arrays are allowed to be modified as long as they aren't inputted.
    }
    return newVals;
}
