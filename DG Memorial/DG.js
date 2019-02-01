$(document).ready(function() {

$('#flowers img').draggable();

var text = ["Grettchen Quinn","Tracy Henderson","Jeanne Gallagher","Karen Fitzgerald","Layla Briggs","Sylvia Hadley","Maggie Sandomir","Kristy Meyerson","Marnie Owens","Annie Tassler","Irina Burton","Cassie Horner","Theresa Folsom","Aisha Thompson","Tiffany Purcell","Tina Dupree","Jennifer Walton","Celia Mitchum","Cassie Adams","Agent Pam Tilden","Jamie Doyle","Randy Colligan AKA Godiva","Unidentified woman","Dr. Greta Esterman","Mona Sidley","Susie Marshall","Rebecca Kurtz","Meredith McGrath","Kunsong Tashi","Carmen Trancoso","Cherie Lason","Melissa Liman","Regina Valerio","Darlene Weston","Iris Braverman","Vanessa Bevins","Samantha Tassler","Chloe Dutton","Annika Bergeron","Livia Sandoval","Brianna Morris","Mira Elbisi","Shannon Coyle","Emily Sullivan","Popular senior girl","Rebecca Wheeler","Jiao Wu","Julie Leibert","Gloria Durham","unidentified girl","unidentified girl","Melody Quinn","Lisa Downey","Kaley Seller","Manette Combs","Vicky Emily Riggs","Josie Post","Jennifer Durning","Caroline Pereira","Lyla Clifford","Amy Clifford","Chantal Vanner","Sandra Garner","Monique","Danielle Masoner","Cynthia Yellin","Lindsay Royce","Jennifer Royce","Nina Stansfield","Molly Donovan","Rachael McGarrett","Kate Simes","Tina Snow","Julie Donovan","Jodi Simmons","Leah Keegan","Nikkiel Kwambe","Shelby Crawford","Paige","Josie","Larissa Rhed","Kate Barrow","Jenna Ludlow","Marga Jantzen","Natalie Bleers","Jessie Crewes","Tisa Flores","Casey Chapman","April Silva","Bushwick woman","Queens woman","East New York woman","unidentified woman","Rachel Nauss","Annie May Lawson","Julia Zimmer","Emily Keefe","Audrey Hale","Ramona Rodriguez","A.J. Dunne","Ruby Brown","Magda Ibañez","Anna McWilliams","Elaine Gillette","Alisa Davies","Renee Simmons","Nancy Pierce","Jane Whitmore","Gloria Kelly","Elizabeth Giles","Anne Witherspoon","Emily Cutler","Catherine Price","Laura Santiago","Kedzie Sullivan","Faye Sullivan","Carly Holbart","Lindsay Elding","Samantha Millerton","Page Ferguson","Lakeisha Watkins","Ellen Sazelin","Marnie Foster","Unidentified Russian bride","Joan Eckhouse","Roxie","14 Unidenitfied Escorts","Nina Raedo","Maggie Murphy","Carissa Gibson","Iris Peterson","Anya Solar","Dia Nobile","Beth’s mother","Beth Rasmussen","Beth’s coworker","Yvette","William Lewis’s ex-girlfriend","Rachel Groves","Lena Grunwald","Susie Frain","Ashley Harper","Eva Carson","Ashley Coppolino","Madeline Morrison","Unidentified Woman","Jennifer Knowles","Vicky Parson"];
var counter = 0;
var elem= document.getElementById("deadgirls");


document.getElementById("deadgirls").onclick = function change() {
  elem.innerHTML = text[counter];
  counter++;
  if (counter >= text.length) {
    counter = 0;
    clearInterval(inst);
  }}


  var audio = document.getElementsByTagName('audio')[0];
  $("#deadgirls").click(function play() {
  	  console.log("play");
      if (audio.paused) audio.play();
  }); 
   });


