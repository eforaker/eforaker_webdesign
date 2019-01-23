$(document).ready(function() {
    $('.flowers img').draggable();

    let numberMade = [
   'gretchen quinn',
   'tracy henderson',
   'jeanne gallagher',
   'karen fitzgerald',
   'layla briggs',
   'sylvia hadley',
   'maggie sandomir',
   'kristy meyerson',
   ]

   console.log(numberMade);

   var randNumberSelector = Math.floor(Math.random() * numberMade.length)
   console.log(randNumberSelector);

   let numberSelect = numberMade[randNumberSelector];
   console.log(numberSelect)

   document.getElementById('engraved').innerHTML = numberSelect;

});