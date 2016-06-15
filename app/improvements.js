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

foo.bar = "bazNew";

/*
  - how would you affect the value of the bar property for both foo and bim?
 */

Thinger.prototype.bar = "bazAll";


/*
  - how would you add a method to foo and bim to console.log the value of each
    object's bar property?
 */

Thinger.prototype.print = function(){
 	console.log(this.bar);
};

/*
  - how would you tell if the object's bar property had been overridden for
    the particular object?
 */

 Thinger.prototype.bar === foo.bar;




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


// For each object call destroy
for (var o in myObjects) {
  myObjects[obj].destroy();
}


/*
  3. Given the following array, create an array that contains the contents of
  each array item repeated three times, with a space between each item. so,
  for example, if an array item is 'foo' then the new array should contain an
  array item 'foo foo foo'. (you can assume the library of your choice is
  available)
 */

var myArray = [ 'foo', 'bar', 'baz' ];

myArray.map(function(item){
  return Array(3).fill(item).join(" ");
});
/*
  4. What issues do you see with the following code? how would you fix it?
 */

 // Since $get is asnyc call, the if statement will be executed before $get recives response

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

// To fix it we should move if statement to always function
(function ($) {
  var foo;

  $.get({
    url: 'foo.php',
    success: function (resp) {
      foo = resp.foo;
    }
  }).always(function(){ // Will be executed after $get gets resonse
      if (foo) {
        // run this important code
      }
    });
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

// Get all 'li' objects and to the title of a 'a' child add name of class
(function ($){
   $('li').each(function(){
      $($( this ).find('a')[0]).attr('title', 'i am ' +  $( this ).attr('class'));
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

// Function append is slow, so the code should be rewritten to first save all strings 4
// and then only perform one append
var insertToThinger = [];
var insertToGizmo = [];
for (i = 0; i <= 1000; i++) {
    insertToThinger[i]  = '<p><span class="thinger">i am thinger ' + i + '</span></p>';
    insertToGizmo[i]  = '<p><span class="thigizmonger">i am gizmo ' + i + '</span></p>';
}
$('#thinger').append(insertToThinger.join(''));
$('#gizmo').append(insertToGizmo.join(''));


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

menuItems.map(function(element){
  if(element.extras !== undefined)
    return element.name + " (" + element.extras.join(', ') + ")";
  else
    return element.name;
});

/*
  8. Write code such that the following alerts "Hello World"
 */

 function say(param){
   return function(param1){
     alert(param + " " + param1);
   }
 }

say('Hello')('World');


/*
  9. What is the faulty logic in the following code? how would you fix it?
 */

// #1: Variable i needs to be set to 1
// #2: We need to ensure that dates are valid, so we should get new days using the function addDays()
var date = new Date(),
    dates = [];


Date.prototype.add = function(numDays){
  var newDate = new Date(this.valueOf());
  newDate.setDate(newDate.getDate() + numDays);
  return newDate;
};


for (var i = 1; i <= 5; i++) {
  var validDate = date.add(i)
  dates.push(validDate.getMonth() + '/' + validDate.getDate());
}
console.log('The next five days are ', dates.join(', '));
