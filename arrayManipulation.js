function processArray(arr) {
    let processedArray = [];
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        if (num % 2 === 0) {
            processedArray.push(num * num);
        } else {
            processedArray.push(num * 3);
        }
    }
    return processedArray;
}

function formatArrayStrings(strArr, numArr) {
    let formattedArray = [];
    
    // Checking if strArr and numArr have the same length
    if (strArr.length !== numArr.length) {
        throw new Error('Arrays must have the same length');
    }
    for (let i = 0; i < strArr.length; i++) {
        let str = strArr[i];
        let num = numArr[i];
        
        if (num % 2 === 0) {
            formattedArray.push(str.toUpperCase()); // Capitalize if even
        } else {
            formattedArray.push(str.toLowerCase()); // Lowercase if odd
        }
    }
    return formattedArray;
}
module.exports = {
    processArray,
    formatArrayStrings
};
