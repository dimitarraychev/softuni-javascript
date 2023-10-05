function subSum(arr, start, end) {

    if (!Array.isArray(arr)) return NaN;

    if (arr.length < 1) return 0;

    let startIndex = start > 0 ? start : 0;
    let endIndex = end > arr.length ? arr.length : end;

    let sum = arr
        .slice(startIndex, endIndex + 1)
        .map(Number)
        .reduce((acc, value) => acc + value);

    return sum;
}

subSum([], 1, 2);