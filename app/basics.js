'use strict';

exports = (typeof window === 'undefined') ? global : window;
exports.arrays = {
  /*
    Square square array items
    input: [1, 2, 3]
    output: [2, 4, 9]
    */
  square: function (arr) {
      return arr.map(function(x){return x*x});
  },
  /*
    Sum of all array items
    input: [1, 2, 3]
    output: 6
    */
  sum: function (arr) {
      return arr.reduce((prev, curr) => prev + curr);
  },
  /*
    Merges arrays
    input: [1, 2, 3], [4, 5, 6], [7, 8, 9]
    return: [1, 2, 3, 4, 5, 6, 7, 8, 9]
   */
  merge: function () {
      return Array.prototype.reduce.call(arguments, (prev, curr) => prev.concat(curr));
  },
  /*
    Removes duplicate values
    input: [1, 2, 1, 3, 4, 5, 2]
    output: [1, 2, 3, 4, 5]
   */
  unique: function (arr) {
    var newA = [];
    var filtered = arr.forEach(function(element, index, array){
      if(array.indexOf(element) === index)
        newA.push(element);
      });
    return newA;
  },
  /*
    Map
   */
  map: function (arr, callback) {
    return arr.map(callback);
  }
};

exports.objects = {
  /*
    Each
   */
  each: function (obj, callback) {
    return Object.keys(obj).forEach( (key) => obj[key] = callback(obj[key]) );
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
     return Object.keys(obj).map(key => obj[key]);
  },
  /*
    Extend
   */
   /* Not exactly sure if I understood correctly.
      Assumed the following:
      obj1: {a: 1, b: 2, c: 3}
      obj2: {z: 1, x: 2, ty 3}
      return:  {a: 1, b: 2, c: 3, z: 1, x: 2, y: 3}
   */
  extend: function (obj1, obj2) {
    return Object.keys(obj1).forEach(function(item){
      obj2[item] = obj1[item];
    });
  },
  /*
    Get
    input: {a: {b: {c: {d: 2}}}}, 'a.b.c.d'
    output: 2
   */
  get: function (obj, prop) {
    prop.split('.').forEach(function(item, index, array){
       obj = obj[item];
    });
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
    f = Array.prototype.shift.call(arguments);
        return f.call(arguments);
  },
  /*
    Change function context
    NOTE: You are not allowed to use native fn.bind
   */
  bind: function (fn, context) {
    return function() { return fn.apply(context); };
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
    // Convert arguments object to array
    var argumentsA =  Array.prototype.slice.call(arguments);
    // Remove first argument, which is function
    argumentsA.shift();
    return function () {
      // get remaining arguments and added them to existing arguments array
      var argumentsB = Array.prototype.slice.call(arguments);
      var args = argumentsA.concat(argumentsB);
      return fn.apply(null, args);
    };
  }
};

exports.regexes = {
  /*
    Detect if number exists in string
    input: 'abc2def'
    output: true
   */
  hasNumber: function (str) {
    var regex = /\d+/;
    return regex.test(str);
  },
  /*
    Is IP address format
    input: '192.168.0.1'
    output: true

    NOTE: Simple check is enough
   */
  isIp: function (str) {
    var regex = /^((\d{1,3}|[\*])\.){3}(\d{1,3}|[\*])$/;
    return regex.test(str)
  }
};
