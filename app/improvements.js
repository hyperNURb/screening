
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


/*
  - how would you affect the value of the bar property for both foo and bim?
 */


/*
  - how would you add a method to foo and bim to console.log the value of each
    object's bar property?
 */


/*
  - how would you tell if the object's bar property had been overridden for
    the particular object?
 */



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


/*
  3. Given the following array, create an array that contains the contents of
  each array item repeated three times, with a space between each item. so,
  for example, if an array item is 'foo' then the new array should contain an
  array item 'foo foo foo'. (you can assume the library of your choice is
  available)
 */

var myArray = [ 'foo', 'bar', 'baz' ];

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


/*
  5. How could you rewrite the following code to make it shorter?
 */

(function ($){
  $('li.foo a').attr('title', 'i am foo');
  $('li.bar a').attr('title', 'i am bar');
  $('li.baz a').attr('title', 'i am baz');
  $('li.bop a').attr('title', 'i am bop');
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

/*
  8. Write code such that the following alerts "Hello World"
 */

say('Hello')('World');


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
