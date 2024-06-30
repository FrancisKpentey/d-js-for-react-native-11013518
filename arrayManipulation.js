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

