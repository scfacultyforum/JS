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
			wages=credits*941.20;
		}
		
       if(status[1].checked) //Non-Probationary PT - Update value for current non-probationary rate.
		{
			wages=credits*1078.96;
		}		
    }
	if(memberSelection[1].checked) //FT
    {	
		if(degree[0].checked) //Bachelor's
		{
			if(step==1){wages=49304.15;} //Updated wages for step
			if(step==2){wages=52552.61;} //Updated wages for step
			if(step==3){wages=55811.58;} //Updated wages for step
			if(step==4){wages=59060.03;} //Updated wages for step
			if(step==5){wages=62312.69;} //Updated wages for step
			if(step==6){wages=65417.07;} //Updated wages for step
			if(step==7){wages=68819.06;} //Updated wages for step
			if(step==8){wages=72073.83;} //Updated wages for step
			if(step==9){wages=75330.7;} //Updated wages for step
			if(step==10){wages=80060.88;} //Updated wages for step
			if(step==11){wages=83168.42;} //Updated wages for step
			if(step==12){wages=86201.29;} //Updated wages for step
			if(step==13){wages=89339.33;} //Updated wages for step
			if(step==14){wages=92670.86;} //Updated wages for step
		}	
				
		if(degree[1].checked) //Master's
		{
			if(step==1){wages=54186.82;} //Updated wages for step
			if(step==2){wages=57978.97;} //Updated wages for step
			if(step==3){wages=61773.21;} //Updated wages for step
			if(step==4){wages=65574.82;} //Updated wages for step
			if(step==5){wages=69369.06;} //Updated wages for step
			if(step==6){wages=73150.69;} //Updated wages for step
			if(step==7){wages=76950.19;} //Updated wages for step
			if(step==8){wages=80743.38;} //Updated wages for step
			if(step==9){wages=84537.63;} //Updated wages for step
			if(step==10){wages=88333.98;} //Updated wages for step
			if(step==11){wages=93887.58;} //Updated wages for step
			if(step==12){wages=97527.24;} //Updated wages for step
			if(step==13){wages=101080.66;} //Updated wages for step
			if(step==14){wages=104.849.67;} //Updated wages for step
		}
		
			if(degree[2].checked) //Master's + 30
		{
			if(step==1){wages=56891.59;} //Updated wages for step
			if(step==2){wages=60688.99;} //Updated wages for step
			if(step==3){wages=64481.13;} //Updated wages for step
			if(step==4){wages=68273.27;} //Updated wages for step
			if(step==5){wages=72073.83;} //Updated wages for step
			if(step==6){wages=75869.12;} //Updated wages for step
			if(step==7){wages=79661.27;} //Updated wages for step
			if(step==8){wages=83452.36;} //Updated wages for step
			if(step==9){wages=87252.91;} //Updated wages for step
			if(step==10){wages=91046.10;} //Updated wages for step
			if(step==11){wages=96772.18;} //Updated wages for step
			if(step==12){wages=100534.87;} //Updated wages for step
			if(step==13){wages=104196.61;} //Updated wages for step
			if(step==14){wages=108082.35;} //Updated wages for step
		}
		
			if(degree[3].checked) //Doctorate
		{
			if(step==1){wages=59605.82;} //Updated wages for step
			if(step==2){wages=63396.91;} //Updated wages for step
			if(step==3){wages=67195.36;} //Updated wages for step
			if(step==4){wages=70983.30;} //Updated wages for step
			if(step==5){wages=74783.85;} //Updated wages for step
			if(step==6){wages=78572.84;} //Updated wages for step
			if(step==7){wages=82366.03;} //Updated wages for step
			if(step==8){wages=86164.48;} //Updated wages for step
			if(step==9){wages=89963.99;} //Updated wages for step
			if(step==10){wages=93775.06;} //Updated wages for step
			if(step==11){wages=99648.36;} //Updated wages for step
			if(step==12){wages=103515.16;} //Updated wages for step
			if(step==13){wages=107286.27;} //Updated wages for step
			if(step==14){wages=111287.69;} //Updated wages for step
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
	//var threshold=15000*memberfactor; //Update MEA salary tier
	var tier1=10000*memberfactor; //Update for first tier max
	var tier2=20000*memberfactor; //Update for second tier max
	var tier3=35000*memberfactor; //Update for third tier max
	var tier4=46406*memberfactor; //Update for fourth tier max
	var threshold2=655*memberfactor; //Update MEA cap
	//if(wages>=threshold){MEA=getWages()*0.015;} //Two-tiered higher rate
        //if(wages<threshold){MEA=getWages()*0.0144;} //Two-tired higher rate
	var MEA=getWages()*0.011;
	if(wages>=tier1){MEA=getWages()*0.013;} //Applies second tier percent
	if(wages>=tier2){MEA=getWages()*0.0155;} //Applies third tier percent
	if(wages>=tier3){MEA=getWages()*0.016;} //Applies fourth tier percent
	if(MEA>threshold2){MEA=threshold2;} //Checks if dues are over max, and applies max
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
	var ntstat = theForm.elements["ntstat"];
	if(memberSelection[0].checked) //PT
	{
		if(credits<8){step=0;}
		if(credits>=8){step=1;}
	}
	if(memberSelection[1].checked) //FT
	{step=2;}
	if(memberSelection[2].checked) //Non-Faculty
	{
		if(ntstat[0].checked){step=1;}
		if(ntstat[1].checked){step=2;}
	}
	if(step==0){NEA=68.50;} //Adjust for NEA rate
	if(step==1){NEA=113.50;} //Adjust for NEA rate
	if(step==2){NEA=204;} //Adjust for NEA rate
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
