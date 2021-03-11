const normalizeObj = (arr) => {
  return arr;
};
// (Array.isArray(arr) ? arr : [arr]).reduce((prev, current) => {
//   prev[current.id] = current;
//   return prev;
// }, {});

module.exports = { normalizeObj };
