var theForm = document.forms["weightedmath"];

function totalGPA()
{
  var theForm = document.forms["weightedmath"];
	var hs = theForm.elements["hsgpa"].value;
	var alg = theForm.elements["alg1"].value;
	var geom = theForm.elements["geo"].value;
 	var algii = theForm.elements["alg2"].value;
	var recent = theForm.elements["last"].value;
	
    var total = 0.1*hs+0.15*alg+0.3*geom+0.3*algii+0.15*recent;

    document.getElementById('totalGPA').innerHTML =
                                      "Math Weighted GPA: "+total; 
   					  

 
}
