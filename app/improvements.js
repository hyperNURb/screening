'use strict';

/*
  1. Given the following code
 */
var Thinger = function() {
  return this;
};

Thinger.prototype = {
  bar: 'baz'
};

var foo = new Thinger(),
    bim = new Thinger();

/*
  how would you:
  - override the value of the bar property for the variable foo without
    affecting the value of the bar property for the variable bim?
 */
/** Result */
foo.bar = 'overriden';


/*
  - how would you affect the value of the bar property for both foo and bim?
 */
/** Result */
Thinger.prototype.bar = 'overriden_again';

/*
  - how would you add a method to foo and bim to console.log the value of each
    object's bar property?
 */
/** Result */
Thinger.prototype.log = function () {
  console.log(this.bar);
};

/*
  - how would you tell if the object's bar property had been overridden for
    the particular object?
 */
/** Result */
Thinger.prototype.bar === bim.bar;


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

/** Result */
for (var obj in myObjects) {
  if (myObjects.hasOwnProperty(obj)) {
    myObjects[obj].destroy();
  }
}


/*
  3. Given the following array, create an array that contains the contents of
  each array item repeated three times, with a space between each item. so,
  for example, if an array item is 'foo' then the new array should contain an
  array item 'foo foo foo'. (you can assume the library of your choice is
  available)
 */

var myArray = [ 'foo', 'bar', 'baz' ];

/** Result */
var newArray = [];
var multiply = 3;
for (var idx in myArray) {
  var multiVarArray = Array.apply(null, Array(multiply)).map(function(){return myArray[idx]});
  newArray.push(multiVarArray.join(' '));
}


/*
  4. What issues do you see with the following code? how would you fix it?
 */

(function ($) {
  var foo;

  $.get({
    url: 'foo.php',
    success: function (resp) {
      foo = resp.foo;
    }
  });

  if (foo) {
    // run this important code
  }
})(jQuery);

/** Result */
(function ($) {
  var foo;

  $.get({
    url: 'foo.php',
    success: function (resp) {
      foo = resp.foo;
      runWhenSuccess(foo);  // Call the code below
    }
  });

  function runWhenSuccess(foo) {  // Wrap IF statement in function
    if (foo) {
      // run this important code
    }
  }
})(jQuery);




/*
  5. How could you rewrite the following code to make it shorter?
 */

(function ($){
  $('li.foo a').attr('title', 'i am foo');
  $('li.bar a').attr('title', 'i am bar');
  $('li.baz a').attr('title', 'i am baz');
  $('li.bop a').attr('title', 'i am bop');
})(jQuery);

/** Result */
(function ($){
  ['foo', 'bar', 'baz', 'bop'].forEach(function (element, index, array) {
    $('li.' + element + ' a').attr('title', 'i am ' + element);
  });
})(jQuery);



/*
  6. How would you improve the following code?
 */

(function ($){
  for (i = 0; i <= 100; i++) {
    $('#thinger').append('<p><span class="thinger">i am thinger ' + i + '</span></p>');
    $('#gizmo').append('<p><span class="gizmo">i am gizmo ' + i + '</span></p>');
  }
})(jQuery);


/** Result */
(function ($){
  ['thinger', 'gizmo'].forEach(function (element, index, array) {
    for (i = 0; i <= 100; i++) {
      $('#' + element).append('<p><span class="' + element + '">i am '  + element + ' ' + i + '</span></p>');
    }
  });
})(jQuery);


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

/** Result */
var foodList = [];
menuItems.forEach(function (element, index, array) {
  if (element.hasOwnProperty('extras')) {
    foodList.push(element.name + ' (' + element.extras.join(', ') + ')');
  } else {
    foodList.push(element.name);
  }
});

/*
  8. Write code such that the following alerts "Hello World"
 */

say('Hello')('World');

/** Result */
function say(greeting) {
  function alert_greeting(name) {
    alert(greeting + ' ' + name)
  }
  return alert_greeting;
}

/*
  9. What is the faulty logic in the following code? how would you fix it?
 */

var date = new Date(),
    day = date.getDate(),
    month = date.getMonth(),
    dates = [];

for (var i = 0; i <= 5; i++) {
  dates.push(month + '/' + (day + i));
}
console.log('The next five days are ', dates.join(', '));

/** Result */
var date = new Date(),
  dates = [];

Date.prototype.addDays = function(days)
{
  var dat = new Date(this.valueOf());
  dat.setDate(dat.getDate() + days);
  return dat;
};

for (var i = 1; i <= 5; i++) {  // i has to start from 1, to get the next 5 dates
  var next_date = date.addDays(i);  // addDays() will calculate any overlapping dates, at the end of the month
  dates.push(next_date.getMonth() + '/' + next_date.getDate());  // get new values from newly calculated date
}
console.log('The next five days are ', dates.join(', '));
