function drop(array, n=1) {
    const length = array == null ? 0 : array.length
    return length
      ? slice(array, n < 0 ? 0 : toInteger(n), length)
      : []
  }

  module.exports = drop;