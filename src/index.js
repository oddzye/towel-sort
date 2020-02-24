
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length) {
    return matrix.reduce((acc, item, idx) => {
        const toPush = idx % 2 !== 0 ? item.reverse() : item;
        return acc.concat(toPush);
    }, []);
  }
  return [];
}
