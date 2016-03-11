'use strict';

exports = (typeof window === 'undefined') ? global : window;
exports.arrays = {
  /*
    Square square array items
    input: [1, 2, 3]
    output: [2, 4, 6]
    */
  square: function (arr) {
    return arr.map( (x) => x * x );
  },
  /*
    Sum of all array items
    input: [1, 2, 3]
    output: 6
    */
  sum: function (arr) {
    return arr.reduce( (prev, curr) => prev + curr );
  },
  /*
    Merges arrays
    input: [1, 2, 3], [4, 5, 6], [7, 8, 9]
    return: [1, 2, 3, 4, 5, 6, 7, 8, 9]
   */
  merge: function (...args) {
    return args.reduce( (prev, curr) => prev.concat(curr) );
  },
  /*
    Removes duplicate values
    input: [1, 2, 1, 3, 4, 5, 2]
    output: [1, 2, 3, 4, 5]
   */
  unique: function (arr) {
    return arr.filter( (el, ind) => arr.indexOf(el) === ind );
  },
  /*
    Map
   */
  map: function (arr, callback) {
    // ?
    return arr.map(callback);
  }
};

exports.objects = {
  /*
    Each
   */
  each: function (obj, callback) {
    Object.keys(obj).forEach( (x) => obj[x] = callback(obj[x]) );
  },
  /*
    Reverse keys
    input: {a: 1, b: 2, c: 3}
    output: [c, b, a]
   */
  reverseKeys: function (obj) {
    return Object.keys(obj).reverse();
  },
  /*
    Keys
    input: {a: 1, b: 2, c: 3}
    output: [1, 2, 3]
   */
  values: function (obj) {
    return Object.keys(obj).map( (x) => obj[x] );
  },
  /*
    Extend
   */
  extend: function (obj1, obj2) {
    Object.keys(obj2).forEach( (x) => obj1[x] = obj2[x] );
  },
  /*
    Get
    input: {a: {b: c: { d: 2}}}, 'a.b.c.d'
    ?? input: {a: {b: {c: { d: 2}}}}, 'a.b.c.d'
    output: 2
   */
  get: function (obj, prop) {
    return prop.split('.').reduce( (prev, curr) => prev[curr], obj );
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
  callIt: function (...args) {
    return args.shift().call(this, args);
  },
  /*
    Change function context
    NOTE: You are not allowed to use native fn.bind
   */
  bind: function (fn, context) {
    return function() { return fn.call(context); };
  },
  /*
    Partial function
    i.e.
    function log() {
      console.log(arguments);
    }
    partial(log, 'a', 'b')('c', 'd', 'e'); // a, b, c, d, e
   */
  partial: function (fn, ...args1) {
    return function(...args2) { return fn.apply(this, args1.concat(args2)); };
  }
};

exports.regexes = {
  /*
    Detect if number exists in string
    input: 'abc2def'
    output: true
   */
  hasNumber: function (str) {
    return /[0-9+]/.test(str);
  },
  /*
    Is IP address format
    input: '192.168.0.1'
    output: true

    NOTE: Simple check is enough
   */
  isIp: function (str) {
    return /([0-9]{1,3}\.?){4}/.test(str);
  }
};
