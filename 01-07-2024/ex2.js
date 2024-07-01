const arrays = [
    [4, 32, 8],
    [64, 8, 32],
    [8, 32, 16],
    [2, 8, 4]
]

let num = 0;

for (let i = 0; i < arrays.length; i++) {
    for (let j = 0; j < arrays[i].length; j++){
        num += arrays[i][j];
    }
}

console.log(`Resultado: ${num}`);