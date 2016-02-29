exports = (typeof window === 'undefined') ? global : window;

exports.arrays = {
  /*
    Square square array items
    input: [1, 2, 3]
    output: [2, 4, 6]
    */
  square: function (arr) {
    return arr.map(function(el) {
      return Math.pow(el, 2);
    })
  },
  /*
    Sum of all array items
    input: [1, 2, 3]
    output: 6
    */
  sum: function (arr) {
    return arr.reduce(function(a, b) {
      return a+b;
    }, 0);
  },
  /*
    Merges arrays
    input: [1, 2, 3], [4, 5, 6], [7, 8, 9]
    return: [1, 2, 3, 4, 5, 6, 7, 8, 9]
   */
  merge: function () {
    return Array.prototype.slice.call(arguments).reduce(function(a, b) {
      return a.concat(b);
    });
  },
  /*
    Removes duplicate values
    input: [1, 2, 1, 3, 4, 5, 2]
    output: [1, 2, 3, 4, 5]
   */
  unique: function (arr) {
    var hash = {};
    var result = [];
    arr.forEach(function(el) {
      if (!hash[el]) {
        result.push(el);
        hash[el] = true;
      }
    });
    return result;
  },
  /*
    Map
   */
  map: function (arr, callback) {
    // to avoid using "return arr.map(callback)", if this was wanted
    var result = [];
    arr.forEach(function(el) {
      result.push(callback(el));
    });
    return result;
  }
};

exports.objects = {
  /*
    Each
   */
  each: function (obj, callback) {
    for (var prop in obj) {
      callback(prop, obj[prop]);
    }
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
   return Object.keys(obj).map(function(el) {
     return obj[el];
   });
  },
  /*
    Extend
   */
  extend: function (obj1, obj2) {
    for (var key in obj2) {
      obj1[key] = obj2[key];
    }
    return obj1;  
  },
  /*
    Get
    input: {a: {b: {c: { d: 2}}}}, 'a.b.c.d'
    output: 2
   */
  get: function (obj, prop) {
    var o = obj;
    prop.split('.').forEach(function(key) {
      if (o && (key in o)) {
        o = o[key];    
      } else {
        o = undefined;
      };
    });
    return o;
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
    var func = arguments[0];
    var args = Array.prototype.slice.call(arguments, 1);
    return func.apply(this, args);
  },
  /*
    Change function context
    NOTE: You are not allowed to use native fn.bind
   */
  bind: function (fn, context) {
    return fn.call(context);
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
    var func = arguments[0];
    var params1 = Array.prototype.slice.call(arguments, 1);
    return function() {
      var params2 = Array.prototype.slice.call(arguments);
      return func.apply(this, params1.concat(params2));
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
    return str.replace(/[^\d]/g, '').length > 0;
  },
  /*
    Is IP address format
    input: '192.168.0.1'
    output: true

    NOTE: Simple check is enough
   */
  isIp: function (str) {
   // checking only for 4 groups of max 3 digits separated with dots
     return /^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/.test(str);
  }
};
