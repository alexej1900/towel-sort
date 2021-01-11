module.exports = function towelSort(matrix) {
    let arr = [];
    if (arguments.length == 0) arr = [];
    else
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 == 0) {
                for (let j = 0; j < matrix[i].length; j++)
                    arr.push(matrix[i][j]);
            } else if (i % 2 == 1) {
                for (let j = matrix[i].length - 1; j >= 0; j--)
                    arr.push(matrix[i][j]);
            }
        }
    return (arguments.length == 0 || arguments == null) ? [] : arr;
}
