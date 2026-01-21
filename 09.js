function solve(matrix){
    let result = true;
    let firstSum = matrix.reduce((a, b) => a + b[0], 0);
    for(let rowIndex = 0; rowIndex < matrix.length; rowIndex++){
        
        let row = matrix[rowIndex];
        let rowSum = row.reduce((a, b) => a + b, 0);
        if(rowSum !== firstSum){
            result = false;
            console.log(result);
            
            return
        }
    }
    
    for(let columnIndex = 0; columnIndex < matrix[0].length; columnIndex++){
            let columnSum = matrix.reduce((a, b) => a + b[columnIndex], 0);
            if(columnSum !== firstSum){
            result = false;
            console.log(result);
            
            return
        }
            
        }
        console.log(result);
        
}solve([[4, 5, 6],
 [6, 5, 4],
 [5, 5, 5]]
)