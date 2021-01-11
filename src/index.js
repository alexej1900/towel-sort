module.exports = function towelSort(matrix) {
    let a = [];
    if (arguments.length == 0) a = [];
    else
        for (let i = 0; i < matrix.length; i++) {
            if (i % 2 == 0) {
                for (let j = 0; j < matrix[i].length; j++)
                    a.push(matrix[i][j]);
            } else if (i % 2 == 1) {
                for (let j = matrix[i].length - 1; j >= 0; j--)
                    a.push(matrix[i][j]);
            }
        }
    return (arguments.length == 0 || arguments == null) ? [] : a;
}