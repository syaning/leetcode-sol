/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function(matrix) {
  var n = matrix.length

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      let temp = matrix[i][j]
      matrix[i][j] = matrix[n - j - 1][n - i - 1]
      matrix[n - j - 1][n - i - 1] = temp
    }
  }

  for (let i = 0; i < n / 2 >> 0; i++) {
    let temp = matrix[i]
    matrix[i] = matrix[n - i - 1]
    matrix[n - i - 1] = temp
  }
}
