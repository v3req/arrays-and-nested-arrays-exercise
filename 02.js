function solve(array, step){
    let result = [];
    let i = 0;
    while(i < array.length){
        result.push(array[i]);

        i += step
    }
    return result
}