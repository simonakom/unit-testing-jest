function sum(a, b) {
    return a + b;
  }

  function clone(x) {
    return [...x];
  }
  
  function age(x) {
    if (x < 0) {
        throw Error();
    }
    return x * 365;
  }
  
  module.exports = {
    sum,
    clone,
    age
  };