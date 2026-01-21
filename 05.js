function solve(array){
    let result = [array.shift()];

    for(let el of array){
        if(el >= result[result.length - 1]){
            result.push(el)
        }
    }
    return result
    
}