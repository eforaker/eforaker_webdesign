
var random_images_array = [
// '540.jpg',
'amazinggrace.jpg', 
'angel.jpg',
'aromaticelixir.jpg',
// 'bedelicious.jpg',
'beverlyhills.jpg',
'bijan.jpg',
'bleue.jpg',
'bluewaltz.jpg',
'bottledemotions.jpg',
'burberrybrit.jpg',
'cabotine.jpg',
'charlie.jpg',
'church.jpg',
'chypre.jpg',
// 'ckone.jpg',
'cool.jpg',
'coolwater.jpg',
'countryapple.jpg', 
'cukemelon.jpg',
'curve.jpg',
'daisy.jpg',
'designerimposter.jpg',
'devotion.jpg',
'downtowngirl.jpg',
'drakkar.jpg',
'earlyaughts.jpg',
'electricyouth.jpg', 
'escadatropical.jpg',
'exclamation.jpg',
'fantasy.jpg',
// 'farenheit.jpg',
'fetish.jpg',
'fierce.jpg', 
'forbiddenrose.jpg',
'funeral.jpg',
'giorgio.jpg',
'greentea.jpg',
// 'haikarate.jpg',
'halston.jpg',
'happy.jpg',
// 'heaven.jpg',
'jeannate.jpg',
'jovanmusk.jpg',
'joy.jpg',
'knowingpleasures.jpg', 
'lairdutemps.jpg',
'lemale.jpg',
'liz.jpg',
'loulou.jpg',
'lovesbabysoft.jpg',
'lovespell.jpg',
// 'M.jpg',
'marocain.jpg',
'marykateashley.jpg',
'mojaveghost.jpg',
'nordic.jpg',
'opium.jpg',
'parfumsjuicebar.jpg',
'pearglace.jpg',
'pinksugar.jpg',
'poison.jpg',
'redjeans.jpg',
'relique.jpg',
// 'rememberme.jpg',
// 'santal33.jpg',
// 'secretions.jpg',
'shalimar.jpg',
'skinsosoft.jpg',
'sunflowers.jpg', 
'sweet.jpg',
'sweetpea.jpg',
'teisenddu.jpg',
'tinkerbell.jpg',
'tommygirl.jpg',
'unspoken.jpg',
'vanillafields.jpg',
'vvv.jpg',
'warmvanilla.jpg',
'whitemusk.jpg',
'princess.jpg',
'juice.jpg',
'whiteshoulders.jpg',
'dissey.jpg',
'obsession.jpg',
'jessicamclintock.jpg',
'japanesecherry.jpg',
'whitediamonds.jpg',
'youthdew.jpg',
'tribe.jpg',
'cashmeremist.jpg',
'greyflannel.jpg',
'luckyyou.jpg',
'candies.jpg',
'ralph.jpg',
'juicy.jpg',
'paris.jpg'

];

    
function getRandomImage(imgAr, path) {
    path = path || 'images/'; // default path here
    var num = Math.floor( Math.random() * imgAr.length );
    var img = imgAr[ num ];
    var imgStr = '<img src="' + path + img + '" alt = "">';
    document.write(imgStr); document.close();
}