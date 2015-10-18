// 1) create 4 arrays 
var name1 = ["King", "Mr.", "Doctor", "Uncle", "President" ];
var name2 = ["Stan", "Morris", "Ruffs", "Capalouse", "Otis"];
var name3 = ["Whiskers", "Paws", "Tails", "Meow", "Krispy"];
var name4 = ["I", "II", "III", "IV", "V"];

// 2) create a function that pulls together an item from each of the four arrays, it also needs to find the index of an item and then remove it, so that it doesn't get used more then once.
function getPetName(param) {
  var chosenOne = param[Math.floor(Math.random() * param.length)];
  var indexName = param.indexOf(chosenOne);
  var thing = param.splice(indexName, 1);
  return chosenOne;
};

// 3) create a string that concatintatesdjfhsjdkfh the four variables (write another function here)
function sentence() {
  var sentence = "Your suggested pet name is " + getPetName(name1) + " " + getPetName(name2) + " " + getPetName(name3) + " " + getPetName(name4);
  return sentence;
}

// 4) use jQuery to change the name in the HTML
$(document).ready(function() {
  $('.insertNameHere').text(sentence()); 
  //$('.insertNameHere').text('something');   
});

// Next step will be the load random background image on each page refresh
var images = ['b.jpg', 'c.jpg', 'd.jpg', 'e.jpg', 'f.jpg'];
$('body').css({'background-image': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')'});
