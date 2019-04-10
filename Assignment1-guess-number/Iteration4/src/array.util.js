Array.prototype.diff = function (arr) {
  var mergedArr = this.concat(arr);
  return mergedArr.filter(function (e) {
      return mergedArr.indexOf(e) === mergedArr.lastIndexOf(e);
  });
};

Array.prototype.intersect = function (arr) {
  return this.filter(value => arr.includes(value));
};
