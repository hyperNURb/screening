'use strict';

exports = (typeof window === 'undefined') ? global : window;
exports.arrays = {
  /*
    Square square array items
    input: [1, 2, 3]
    output: [2, 4, 6]
    */
  square: function (arr) {
    return arr.map(function(x) { return x * x; });  // Based on words in upper comment and function name
    //return arr.map(function(x) { return x * 2; });  // Based on input-output samples in upper comment
  },

  /*
    Sum of all array items
    input: [1, 2, 3]
    output: 6
    */
  sum: function (arr) {
    var total=0;
    arr.forEach(function (element) {
      total += element;
    });
    return total;
  },
  /*
    Merges arrays
    input: [1, 2, 3], [4, 5, 6], [7, 8, 9]
    return: [1, 2, 3, 4, 5, 6, 7, 8, 9]
   */
  merge: function () {
    newArray = [];
    for (var i = 0; i < arguments.length; i++) {
      newArray.concat(arguments[i]);
    }
  },
  /*
    Removes duplicate values
    input: [1, 2, 1, 3, 4, 5, 2]
    output: [1, 2, 3, 4, 5]
   */
  unique: function (arr) {
    function onlyUnique(value, index, self) {
      return self.indexOf(value) === index;
    }
    return arr.filter( onlyUnique );
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

  },
  /*
    Reverse keys
    input: {a: 1, b: 2, c: 3}
    output: [c, b, a]
   */
  reverseKeys: function (obj) {
    // Assuming there are no missing order values
    var sorted = [];
    for (var key in obj) {
      if (obj.hasOwnProperty(key)) {  // good practice
        sorted.push([obj[key], key]);
      }
    }
    sorted.sort(function(a, b) {return a[0] - b[0]});

    var resultArr = [];
    for (var i=0; i<sorted.length; ++i) {
      resultArr.push(sorted[i][1]);
    }
    return resultArr;
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
  extend: function (obj1, obj2) {
    for (var key in obj2) {
      if (obj2.hasOwnProperty(key)) {
        obj1[key] = obj2[key];
      }
    }
  },
  /*
    Get
    input: {a: {b: {c: { d: 2}}}, 'a.b.c.d'
    output: 2
   */
  get: function (obj, prop) {
    function get_prop(current_obj, keys) {
      if (keys.length == 1) {
        return current_obj[keys[0]];
      }
      return get_prop(current_obj[keys[0]], keys.slice(1, keys.length));
    }
    return get_prop(obj, prop.split('.'));
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
    var other_args = exports.objects.values(arguments);
    return arguments[0].apply(this, other_args.slice(1, other_args.length));
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
    function inner_partial(args) {
      var oneArray = exports.arrays.merge([fn, args]);
      return oneArray[0].apply(this, oneArray.slice(1, oneArray.length));
    }
    return inner_partial;
  }
};

exports.regexes = {
  /*
    Detect if number exists in string
    input: 'abc2def'
    output: true
   */
  hasNumber: function (str) {
    var pattern = new RegExp('\d+'); // could also be only '\d', depending on context
    return pattern.test(str);
  },
  /*
    Is IP address format
    input: '192.168.0.1'
    output: true

    NOTE: Simple check is enough
   */
  isIp: function (str) {
    if (str.match(/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/g)) {
      // we have a sequence of for numbers separated with '.', 1 to 3 numerics long
      var nums = str.match(/\b\d+\b/g);  // get separate numbers
      for (var i=0; i < nums.length; ++i) {
        var num = parseInt(nums[i]);
        if (0 > num || 255 < num) {
          return false;
        }
      }
      return true;
    }
    else {
      return false;
    }
  }
};
