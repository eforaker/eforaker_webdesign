$(document).ready(function() {
    $('.flowers img').draggable();

var text = ["Julie Donovan", "Jodi Simmons", "Leah Keegan"];
var counter = 0;
var elem = document.getElementById("deadgirls");
var inst = setInterval(change, 1100);

function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    // clearInterval(inst); // uncomment this if you want to stop refreshing after one cycle
  }}
});