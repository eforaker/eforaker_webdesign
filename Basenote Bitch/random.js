
var random_images_array = [
'amazinggrace.jpg', 
'angel.jpg',
'aromaticelixir.jpg',
'beverlyhills.jpg',
'bottledemotion.jpg',
'cabbotine.jpg',
'charlie.jpg',
'cool.jpg',
'coolwater.jpg',
'countryapple.jpg', 
'cukemelon.jpg',
'curve.jpg',
'designerimposter.jpg',
'devotion.jpg',
'earlyaughts.jpg',
'electricyouth.jpg', 
'escadatropical.jpg',
'exclamation.jpg',
'fetish.jpg',
'fierce.jpg', 
'funeral.jpg',
'giorgio.jpg',
'greentea.jpg',
'halston.jpg',
'happy.jpg',
'jeannate.jpg',
'knowingpleasures.jpg', 
'lairdutemps.jpg',
'lemale.jpg',
'liz.jpg',
'loulou.jpg',
'lovesbabysoft.jpg',
'lovespell.jpg',
'marykateashely.jpg',
'parfumsjuicebar.jpg',
'pinksugar.jpg',
'redjeans.jpg',
'loulou.jpg',
'santal33.jpg',
'skinsosoft.jpg',
'sunflowers.jpg', 
'sweetpea.jpg',
'tinkerbell.jpg',
'unspoken.jpg',
'vanillafields.jpg',
'warmvanilla.jpg',
'whitemusk.jpg',
'whiteshoulders.jpg'];

    
function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}