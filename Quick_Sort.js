const livros = require('./Valores');

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } else {
        let left = [];
        let right = [];
        let newArray = [];
        let pivot = arr.pop();
        let length = arr.length;

        for (let i = 0; i < length; i++) {
            if (arr[i].valor <= pivot.valor) {
                left.push(arr[i]);
            } else {
                right.push(arr[i]);
            }
        }

        return newArray.concat(quickSort(left), pivot, quickSort(right));
    }
}

console.log(quickSort(livros));