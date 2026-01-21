function solve(array){
    let num = 1;
    let result = []
    for(let command of array){
        if(command === 'add'){
            result.push(num)
        }else {
            result.pop()
        }
        num++
    }
    if(result.length === 0){
        console.log('Empty');
        
    }else{
        console.log(result.join('\n'));
    }
    
}