exports = (typeof window === 'undefined') ? global : window;

exports.arrays = {
  /*
    Square square array items
    input: [1, 2, 3]
    output: [2, 4, 6]
    */
  square: function (arr) {

  },
  /*
    Sum of all array items
    input: [1, 2, 3]
    output: 6
    */
  sum: function (arr) {

  },
  /*
    Merges arrays
    input: [1, 2, 3], [4, 5, 6], [7, 8, 9]
    return: [1, 2, 3, 4, 5, 6, 7, 8, 9]
   */
  merge: function () {

  },
  /*
    Removes duplicate values
    input: [1, 2, 1, 3, 4, 5, 2]
    output: [1, 2, 3, 4, 5]
   */
  unique: function (arr) {

  },
  /*
    Map
   */
  map: function (arr, callback) {

  }
};

exports.objects = {
  /*
    Each
   */
  each: function (obj, callback) {

  },
  /*
    Reverse keys
    input: {a: 1, b: 2, c: 3}
    output: [c, b, a]
   */
  reverseKeys: function (obj) {

  },
  /*
    Keys
    input: {a: 1, b: 2, c: 3}
    output: [1, 2, 3]
   */
  values: function (obj) {

  },
  /*
    Extend
   */
  extend: function (obj1, obj2) {

  },
  /*
    Get
    input: {a: {b: c: { d: 2}}}, 'a.b.c.d'
    output: 2
   */
  get: function (obj, prop) {

  }
};

exports.functions = {
  /*
    Executes a function with random number of arguments
    i.e.
    function add(a, b... n) {
      return a + b + ... + n;
    }
    callit(add, 1, 2, 3, 4); // 10
   */
  callIt: function () {

  },
  /*
    Change function context
    NOTE: You are not allowed to use native fn.bind
   */
  bind: function (fn, context) {

  },
  /*
    Partial function
    i.e.
    function log() {
      console.log(arguments);
    }
    partial(log, 'a', 'b')('c', 'd', 'e'); // a, b, c, d, e
   */
  partial: function (fn) {

  }
};

exports.regexes = {
  /*
    Detect if number exists in string
    input: 'abc2def'
    output: true
   */
  hasNumber: function (str) {

  },
  /*
    Is IP address format
    input: '192.168.0.1'
    output: true

    NOTE: Simple check is enough
   */
  isIp: function (str) {

  }
};
