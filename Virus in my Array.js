function deleteInvalids(numbers) {
    let result = [];
    for (const num of numbers) {
        if (typeof num === 'number' && !isNaN(num)) {
            result.push(num);
        }
    }
    return result;
}

const result = deleteInvalids([{ num: [1, 2, 3] }]);
console.log(result);