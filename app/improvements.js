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

foo.bar = 'foo';

console.log(foo.bar); 
console.log(bim.bar); 


/*
  - how would you affect the value of the bar property for both foo and bim?
 */

//as long as bar is not set specifically on instanced object

Thinger.prototype.bar = 'bla';

console.log(foo.bar); 
console.log(bim.bar); 


/*
  - how would you add a method to foo and bim to console.log the value of each
    object's bar property?
 */

Thinger.prototype.displayBar = function () {
  console.log(this.bar);  
};

foo.displayBar();
bim.displayBar();


/*
  - how would you tell if the object's bar property had been overridden for
    the particular object?
 */

var overridenBar = function(fn) {
  if (fn.hasOwnProperty('bar')) {
    return true;
  } else {
    return false;
  }
}

console.log(overridenBar(foo)); 
console.log(overridenBar(bim)); 


// /*
//   2. Given the following code, how would you `destroy` all of the objects
//   contained in the `myObjects` object?
//  */

function Events() {
}
function Gizmo() {
}
function Widget() {
}

//pathethic, but couldn't think of anything better atm

 Events.prototype = Gizmo.prototype = Widget.prototype = {
   destroy: function () {
     for (var objs in this) {
       if (this.hasOwnProperty(objs)) {
         delete this[objs];
       }
     }
   }
};

var myObjects = {
  events: new Events(),
  gizmo: new Gizmo(),
  widget: new Widget()
};

myObjects.events.destroy.apply(myObjects);
console.log(myObjects);


/*
  3. Given the following array, create an array that contains the contents of
  each array item repeated three times, with a space between each item. so,
  for example, if an array item is 'foo' then the new array should contain an
  array item 'foo foo foo'. (you can assume the library of your choice is
  available)
 */

var myArray = [ 'foo', 'bar', 'baz' ];

var conArray = []
myArray.forEach(function (item, idx, arr) {
    conArray.push((item+" ").repeat(3).trim());
  }
);

console.log(conArray);



// /*
//   4. What issues do you see with the following code? how would you fix it?
//  */

//The biggest and most obvious problem lies in the fact that if (foo) will probably execute before 
//get request is finished, due to its async nature. Therefore it is mandatory to move foo processing 
//code into the success callback function

(function ($) {
   var foo;

  $.get({
    url: 'foo.php',
    success: function (resp) {
      foo = resp.foo;
      if (foo) {
        //important code
      }
    }
  });
 })(jQuery);


/*
  5. How could you rewrite the following code to make it shorter?
 */

// (function ($){
//   $('li.foo a').attr('title', 'i am foo');
//   $('li.bar a').attr('title', 'i am bar');
//   $('li.baz a').attr('title', 'i am baz');
//   $('li.bop a').attr('title', 'i am bop');
// })(jQuery);

(function ($){ 
$.each(['foo','bar','baz','bop'], function(idx,elem){
	$('li.'+elem+' a').attr('title', 'i am '+elem); 	
});})(jQuery);

/*
  6. How would you improve the following code?
 */

// (function ($){
//   for (i = 0; i <= 100; i++) {
//     $('#thinger').append('<p><span class="thinger">i am thinger ' + i + '</span></p>');
//     $('#gizmo').append('<p><span class="gizmo">i am gizmo ' + i + '</span></p>');
//   }
// })(jQuery);

(function ($) {
  for (i = 0; i <= 100; i++) {
  	$.each(['thinger','gizmo'], function(idx, elem){
    	$('<p><span class="'+elem+'"> i am '+elem+' '+i+'</span></p>').appendTo('#'+elem);
    });
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
  
var concatList = [];
menuItems.forEach(function(item, idx, arr) {
   if (item.hasOwnProperty('name')) {
     concatList.push(item.name + (function(rec) { 
        if (rec.extras && rec.extras.length > 0) {
          return " ("+rec.extras.join(", ")+")";
        } else {
          return "";
        }
       }(item)));
   }
 });
 
 console.log(concatList);

/*
  8. Write code such that the following alerts "Hello World"
 */

function say () {
  
  var oldArgs = Array.prototype.slice.call(arguments);
  
  return function () {
    console.log.apply(null, Array.prototype.concat(oldArgs, Array.prototype.slice.call(arguments)));
  };
}

say('Hello')('World');


/*
  9. What is the faulty logic in the following code? how would you fix it?
 */

//Procedure doesn't take care of number of days in month
//Month are enumerated from 0

var date = new Date(),
//    day = date.getDate(),
//    month = date.getMonth(),
    dates = [];
    
for (var i = 0; i <= 5; i++) {
  date.setDate(date.getDate()+1);
  dates.push(date.getMonth()+1 + '/' + date.getDate());
}
console.log('The next five days are ', dates.join(', '));