
/*
  1. Given the following code
 */
var Thinger = function() {
  return this;
};

Thinger.prototype = {
  bar: 'baz',
  haveOwnBarProperty: function() {
    return this.hasOwnProperty('bar');
  },
  consoleMe: function() {
    console.log(this.bar);
  }
};


var foo = new Thinger(),
    bim = new Thinger();

/*
  how would you:
  - override the value of the bar property for the variable foo without
    affecting the value of the bar property for the variable bim?
 */

// change only the instance property
foo.bar = "something new";
console.log("foo bar value: " + foo.bar);
console.log("bim bar value: " + bim.bar);


/*
  - how would you affect the value of the bar property for both foo and bim?
 */

// change prototype property value, which reflects on all descendants, unless they have their own property 
foo.__proto__.bar = "new value for all"
console.log("foo bar value: " + foo.bar);
console.log("bim bar value: " + bim.bar);


/*
  - how would you add a method to foo and bim to console.log the value of each
    object's bar property?
 */


// add a function to the prototype
foo.consoleMe();
bim.consoleMe();

/*
  - how would you tell if the object's bar property had been overridden for
    the particular object?
 */

// add a function to the prototype
console.log("foo has overridden bar? " + foo.haveOwnBarProperty());
console.log("bim has overridden bar? " + bim.haveOwnBarProperty());


/*
  2. Given the following code, how would you `destroy` all of the objects
  contained in the `myObjects` object?
 */

function Events() {
}
function Gizmo() {
}
function Widget() {
}
Events.prototype = Gizmo.prototype = Widget.prototype = {
  destroy: function () {
  }
};

var myObjects = {
  events: new Events(),
  gizmo: new Gizmo(),
  widget: new Widget()
};


// You can destroy an object only from outside of the object scope by deleting a reference to it, the clean-up is done by GC

console.log(myObjects);

for (prop in myObjects) {
  delete myObjects[prop];
}
console.log(myObjects);


/*
  3. Given the following array, create an array that contains the contents of
  each array item repeated three times, with a space between each item. so,
  for example, if an array item is 'foo' then the new array should contain an
  array item 'foo foo foo'. (you can assume the library of your choice is
  available)
 */

var myArray = [ 'foo', 'bar', 'baz' ];


String.prototype.repeat = function(times) {
  tmp = [];
  for (var i = 0; i < times; i++) {
    tmp.push(this);
  }
  return tmp.join(" ");
}

weehaa = myArray.map(function(el){
  return el.repeat(3);
})

console.log(weehaa);


/*
  4. What issues do you see with the following code? how would you fix it?
 */

// besides not having error handling code, important code should be processed inside the handler
// also, move foo to the handler

(function ($) {
 
  $.get({
    url: 'foo.php',
    success: function (resp) {
      var foo = resp.foo;
      if (foo) {
        // run this important code
      }
    }
  });

})(jQuery);



/*
  5. How could you rewrite the following code to make it shorter?
 */

// read class name from parent and add title attribute with the value
(function ($){
  $('li a').each(function() {
    $(this).attr('title', 'i am ' + $(this).parent().attr('class'));
  });
 })(jQuery);



/* 
  6. How would you improve the following code?
 */

// parameters improve reusability
(function ($, ids, times){
  $(ids).each(function() {
    for (var i = 0; i < times; i++) {
      $("#"+this).append('<p><span class="' + this + '">i am ' + this + ' ' + i + '</span></p>');    
    };
  });
})(jQuery, ["thinger", "gizmo"], 100);


/* 
  7. Given the following data structure, write code that returns an array
  containing the name of each item, followed by a comma-separated list of
  the item's extras, if it has any. e.g.
  [ "Salad (Chicken, Steak, Shrimp)", ... ]
  (you can assume the library of your choice is available)
 */
var menuItems = [{
    id: 1,
    name: 'Salad',
    extras: [
      'Chicken', 'Steak', 'Shrimp'
    ]
  }, {
    id: 2,
    name: 'Potato',
    extras: [
      'Bacon', 'Sour Cream', 'Shrimp'
    ]
  }, {
    id: 3,
    name: 'Sandwich',
    extras: [
      'Turkey', 'Bacon'
    ]
  }, {
    id: 4,
    name: 'Bread'
  }];


menu = menuItems.map(function(el){
  var result = el.name;
  if (el.extras) {
    result += ' (' + el.extras.join(', ') + ')';
  }
  return result;
});

console.log(menu);

/*
  8. Write code such that the following alerts "Hello World"
 */

function say(arg1) {
 return function(arg2) {
   alert(arg1 + " " + arg2);
 }
}

say('Hello')('World');



/*
  9. What is the faulty logic in the following code? how would you fix it?
 */

// does not check for month rollover, loop index is one off

var today = new Date(),
    dates = [];

for (var i = 0; i < 5; i++) { // do only 5 steps
  today.setDate(today.getDate()+1);  // increment date by 1 day
  dates.push((today.getMonth()+1) + '/' + today.getDate()); // month is zero based
}

console.log('The next five days are ', dates.join(', '));

