var theForm = document.forms["weightedmath"];

function calculateGPA()
{
  var theForm = document.forms["weightedmath"];
	var hs = theForm.elements["hsgpa"].value;
	var alg = theForm.elements["alg1"].value;
	var geom = theForm.elements["geo"].value;
 	var algii = theForm.elements["alg2"].value;
	var recent = theForm.elements["last"].value;
  var levelSelect = theForm.elements["level"];
	if(levelSelect[0].checked){var total = (0.1*hs+0.15*alg+0.15*geom+0.3*algii+0.3*recent).toFixed(1);}
	if(levelSelect[1].checked){var total = (0.1*hs+0.15*alg+0.3*geom+0.3*algii+0.15*recent).toFixed(1);}
	if(levelSelect[2].checked){var total = 0;}
if(total >= 3){var recommend = 'We would recommend you can take a college level course (Math 122)';}
if(total >= 2 && total < 3){var recommend='We would recommend you can take a corequisite support course (Math 022)';}
if(total < 2){var recommend='We would recommend you receive additional help before attempting a math course.';}

document.getElementById('totalGPA').innerHTML = "Recommendation: "+recommend;
 }                                
   					  

 
