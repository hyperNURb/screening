'use strict';

exports = (typeof window === 'undefined') ? global : window;
exports.arrays = {
  /*
    Square square array items
    input: [1, 2, 3]
    output: [2, 4, 6]
    */
  square: function (arr) {
    if (Array.isArray(arr)) {
      return arr.map(function (a) { return a * a });
    }
  },
  /*
    Sum of all array items
    input: [1, 2, 3]
    output: 6
    */
  sum: function (arr) {
    if (Array.isArray(arr)) {
      return arr.reduce(function (prev, curr) {
        return prev + curr
      });
    }
  },
  /*
    Merges arrays
    input: [1, 2, 3], [4, 5, 6], [7, 8, 9]
    return: [1, 2, 3, 4, 5, 6, 7, 8, 9]
   */
  merge: function () {

    return (Array.from(arguments)).reduce(function (prev, curr) {
      return prev.concat(curr)
    });

  },
  /*
    Removes duplicate values
    input: [1, 2, 1, 3, 4, 5, 2]
    output: [1, 2, 3, 4, 5]
   */
  unique: function (arr) {

    var returnArr = [];

    if (Array.isArray(arr)) {

      if (arr.length === 1) return arr;

      return arr.reduce(function (prev, curr, idx, arr) {

        if (idx === 1) {
          returnArr.push(prev);
        }
        if (returnArr.indexOf(curr) === -1) {
          returnArr.push(curr);
        }
        return returnArr;

      });
    }
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

    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        obj[prop] = callback.apply(obj, [obj[prop]]);
      }
    }

    return obj;

  },
  /*
    Reverse keys
    input: {a: 1, b: 2, c: 3}
    output: [c, b, a]
   */
  reverseKeys: function (obj) {

    var keys = [];

    for (var prop in obj) {

      if (obj.hasOwnProperty(prop)) {
        keys.push(prop);
      }
    }
    return keys.reverse();
  },
  /*
    Keys
    input: {a: 1, b: 2, c: 3}
    output: [1, 2, 3]
   */
  values: function (obj) {
    var values = [];
    for (var prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        values.push(obj[prop]);
      }
    }
    return values;

  },
  /*
    Extend
   */
  extend: function (obj1, obj2) {
    obj1.prototype = obj2.prototype;
    obj1.prototype.constructor = obj1;
  },
  /*
    Get
    input: {a: {b: c: { d: 2}}}, 'a.b.c.d'
    output: 2
   */
  get: function (obj, prop) {
    var fields = prop.split(".");
    if (fields.length > 1) {
      return this.get(obj[fields.shift()], fields.join("."));
    } else {
      return obj[fields];
    }
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
    var arraySlice = Array.prototype.slice;
    var fn = arguments[0];
    var storedArgs = arraySlice.call(arguments, 1);
    return fn.apply(null, storedArgs);
  },
  /*
    Change function context
    NOTE: You are not allowed to use native fn.bind
   */
  bind: function (fn, context) {
    return function () { fn.apply(context, Array.prototype.slice.call(arguments)) };
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

    var prevArgs = Array.prototype.slice.call(arguments, 1);
    return function () {
      var currArgs = Array.prototype.slice.call(arguments);
      var args = prevArgs.concat(currArgs);
      return fn.apply(null, args);
    }
  }
};

exports.regexes = {
  /*
    Detect if number exists in string
    input: 'abc2def'
    output: true
   */
  hasNumber: function (str) {
    return /.*\d.*/.test(str);
  },
  /*
    Is IP address format
    input: '192.168.0.1'
    output: true
    NOTE: Simple check is enough
   */
  isIp: function (str) {
    return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(str);
  }
};

console.log(exports.arrays.square([1, 2, 3]));
console.log(exports.arrays.sum([1, 2, 3]));
console.log(exports.arrays.merge([1, 2, 3], [4, 5, 6], [7, 8, 9]));
console.log(exports.arrays.map([1, 2, 3], function (a) { return a * a }));
console.log(exports.arrays.unique([1, 2, 3, 4]));
console.log(exports.arrays.unique([1, 2, 1, 3, 4, 5, 2]));
console.log(exports.objects.each({ 'a': 1, 'b': 2 }, Math.sqrt));
console.log(exports.objects.reverseKeys({ a: 1, b: 2, c: 3 }));
console.log(exports.objects.values({ a: 1, b: 2, c: 3 }));

//Since the parameter in function is named obj and there are no quotes around 
//first argument value, we will assume that object is given in the 
//faulty notaion, and that correct one is {a: {b: {c: { d: 2}}}} 
console.log(exports.objects.get({ a: { b: { c: { d: 2 } } } }, 'a.b.c.d'));

function add() {

  var sum = 0;

  for (var i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }

  return sum;

}
console.log(exports.functions.callIt(add, 1, 2, 3, 4, 5));



function log() {

  for (var i = 0; i < arguments.length; i++) {
    console.log(arguments[i]);
  }
}
exports.functions.partial(log, 'a', 'b')('c', 'd', 'e'); // a, b, c, d, e

console.log(exports.regexes.hasNumber('abc2def'));
console.log(exports.regexes.isIp('192.0.0.122'));


