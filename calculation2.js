var theForm = document.forms["dues"];

function getAIM()
{
    var aimPrice=22.50;
    var theForm = document.forms["dues"];
    var aim = theForm.elements["aim"];
 
    if(aim.checked==true)
    {
        aimPrice=0;
    }
    return aimPrice;
}

function getWages()
{
    var theForm = document.forms["dues"];
    var memberSelection = theForm.elements["member"];
    var step=theForm.elements["step_ft"].value;	
	var status = theForm.elements["probation"];
	var credits = theForm.elements["cred_pt"].value;
	var degree = theForm.elements["degree"];
	var nfsal = theForm.elements["nfs"].value;
    var wages=0;
    if(memberSelection[0].checked) // PT
    {
		if(status[0].checked) //Probationary PT - Update value for current probationary rate.
		{
			wages=credits*895;
		}
		
       if(status[1].checked) //Non-Probationary PT - Update value for current non-probationary rate.
		{
			wages=credits*1026;
		}		
    }
	if(memberSelection[1].checked) //FT
    {	
		if(degree[0].checked) //Bachelor's
		{
			if(step==1){wages=46884;} //Updated wages for step
			if(step==2){wages=49973;} //Updated wages for step
			if(step==3){wages=53072;} //Updated wages for step
			if(step==4){wages=56161;} //Updated wages for step
			if(step==5){wages=59254;} //Updated wages for step
			if(step==6){wages=62206;} //Updated wages for step
			if(step==7){wages=65441;} //Updated wages for step
			if(step==8){wages=68536;} //Updated wages for step
			if(step==9){wages=71633;} //Updated wages for step
			if(step==10){wages=76131;} //Updated wages for step
			if(step==11){wages=79086;} //Updated wages for step
			if(step==12){wages=81970;} //Updated wages for step
			if(step==13){wages=84954;} //Updated wages for step
			if(step==14){wages=88122;} //Updated wages for step
		}	
				
		if(degree[1].checked) //Master's
		{
			if(step==1){wages=51527;} //Updated wages for step
			if(step==2){wages=55133;} //Updated wages for step
			if(step==3){wages=58741;} //Updated wages for step
			if(step==4){wages=62356;} //Updated wages for step
			if(step==5){wages=65964;} //Updated wages for step
			if(step==6){wages=69560;} //Updated wages for step
			if(step==7){wages=73173;} //Updated wages for step
			if(step==8){wages=76780;} //Updated wages for step
			if(step==9){wages=80388;} //Updated wages for step
			if(step==10){wages=83998;} //Updated wages for step
			if(step==11){wages=89279;} //Updated wages for step
			if(step==12){wages=92740;} //Updated wages for step
			if(step==13){wages=96119;} //Updated wages for step
			if(step==14){wages=99703;} //Updated wages for step
		}
		
			if(degree[2].checked) //Master's + 30
		{
			if(step==1){wages=54099;} //Updated wages for step
			if(step==2){wages=57710;} //Updated wages for step
			if(step==3){wages=61316;} //Updated wages for step
			if(step==4){wages=64922;} //Updated wages for step
			if(step==5){wages=68536;} //Updated wages for step
			if(step==6){wages=72145;} //Updated wages for step
			if(step==7){wages=75751;} //Updated wages for step
			if(step==8){wages=79356;} //Updated wages for step
			if(step==9){wages=82970;} //Updated wages for step
			if(step==10){wages=86577;} //Updated wages for step
			if(step==11){wages=92022;} //Updated wages for step
			if(step==12){wages=95600;} //Updated wages for step
			if(step==13){wages=99082;} //Updated wages for step
			if(step==14){wages=102777;} //Updated wages for step
		}
		
			if(degree[3].checked) //Doctorate
		{
			if(step==1){wages=56680;} //Updated wages for step
			if(step==2){wages=60285;} //Updated wages for step
			if(step==3){wages=63897;} //Updated wages for step
			if(step==4){wages=67499;} //Updated wages for step
			if(step==5){wages=71113;} //Updated wages for step
			if(step==6){wages=74716;} //Updated wages for step
			if(step==7){wages=78323;} //Updated wages for step
			if(step==8){wages=81935;} //Updated wages for step
			if(step==9){wages=85548;} //Updated wages for step
			if(step==10){wages=89172;} //Updated wages for step
			if(step==11){wages=94757;} //Updated wages for step
			if(step==12){wages=98434;} //Updated wages for step
			if(step==13){wages=102020;} //Updated wages for step
			if(step==14){wages=105825;} //Updated wages for step
		}
    }
	if(memberSelection[2].checked){wages=nfsal*1;} //Non-Faculty

return wages;
}

function getMEA()
{
	var memberfactor=getMember();
	var wages=getWages();
	var MEA=0;
	var threshold=15000*memberfactor; //Update MEA salary max
	var threshold2=655*memberfactor; //Update MEA cap
	if(wages>=threshold){MEA=getWages()*0.015;}
    if(wages<threshold){MEA=getWages()*0.0144;}
	if(MEA>threshold2){MEA=threshold2;}
	return MEA;
}

function getNEA()
{
	var step=0;
	var theForm = document.forms["dues"];
    var memberSelection = theForm.elements["member"];
    var step=theForm.elements["step_ft"].value;	
	var status = theForm.elements["probation"];
	var credits = theForm.elements["cred_pt"].value;
	if(memberSelection[0].checked) //PT
	{
		if(credits<8){step=0;}
		if(credits>=8){step=1;}
	}
	if(memberSelection[1].checked) //FT
	{step=2;}
	if(memberSelection[2].checked) //Non-Faculty
	{step=1;} 
	if(step==0){NEA=67.50;} //Adjust for NEA rate
	if(step==1){NEA=111.50;} //Adjust for NEA rate
	if(step==2){NEA=200;} //Adjust for NEA rate
	return NEA;
}

function getMember()
{
	var memberfactor=0;
	var theForm = document.forms["dues"];
    var memberSelection = theForm.elements["member"];
    if(memberSelection[0].checked){memberfactor=0.5;}
    if(memberSelection[1].checked){memberfactor=1;}
    if(memberSelection[2].checked){memberfactor=1;}
	return memberfactor;
}


function getLocal()
{
	var wages=getWages();
	var local=0;
	local=wages*0.003;
	return local;
}

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function calculateTotal()
{
	var wages=getWages();
	var memberfactor=getMember();
	var MEA = getMEA();
	var NEA = getNEA()*memberfactor;
	var local= getLocal();
	var AIM = getAIM()*memberfactor;
	var regional = 1.00*memberfactor;
	var wageswzero=wages.toFixed(2);
	var wagesdisplay=numberWithCommas(wageswzero);
	
	if(memberfactor==0.5){var word="Semester";}
	if(memberfactor==1){var word="Annual";}
	
    var totalDues = MEA+NEA+local+AIM+regional;

    document.getElementById('totalWages').innerHTML =
                                      "Total Wages: $"+wagesdisplay; 
    document.getElementById('totalPrice').innerHTML =
                                      "Total "+word+" Dues: $"+totalDues.toFixed(2);
    document.getElementById('totalMEA').innerHTML =
                                      "MEA Dues: $"+MEA.toFixed(2);
    document.getElementById('totalNEA').innerHTML =
                                      "NEA Dues: $"+NEA.toFixed(2);
    document.getElementById('totalAIM').innerHTML =
                                      "AIM Dues: $"+AIM.toFixed(2);
    if(memberfactor==0.5){document.getElementById('totalREGIONAL').innerHTML =
                                      "Regional Dues: $0.50"}
    if(memberfactor==1){document.getElementById('totalREGIONAL').innerHTML =
                                      "Regional Dues: $1.00"}
    document.getElementById('totalLOCAL').innerHTML =
                                      "Local Dues: $"+local.toFixed(2);							  

 
}
