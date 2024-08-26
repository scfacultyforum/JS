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
			wages=credits*1008;
		}
		
       if(status[1].checked) //Non-Probationary PT - Update value for current non-probationary rate.
		{
			wages=credits*1156;
		}		
    }
	if(memberSelection[1].checked) //FT
    {	
		if(degree[0].checked) //Bachelor's
		{
			if(step==1){wages=52805;} //Updated wages for step
			if(step==2){wages=56284;} //Updated wages for step
			if(step==3){wages=59774;} //Updated wages for step
			if(step==4){wages=63253;} //Updated wages for step
			if(step==5){wages=66737;} //Updated wages for step
			if(step==6){wages=70062;} //Updated wages for step
			if(step==7){wages=73705;} //Updated wages for step
			if(step==8){wages=77191;} //Updated wages for step
			if(step==9){wages=80679;} //Updated wages for step
			if(step==10){wages=85745;} //Updated wages for step
			if(step==11){wages=89073;} //Updated wages for step
			if(step==12){wages=92322;} //Updated wages for step
			if(step==13){wages=95682;} //Updated wages for step
			if(step==14){wages=99250;} //Updated wages for step
		}	
				
		if(degree[1].checked) //Master's
		{
			if(step==1){wages=58034;} //Updated wages for step
			if(step==2){wages=62095;} //Updated wages for step
			if(step==3){wages=66159;} //Updated wages for step
			if(step==4){wages=70231;} //Updated wages for step
			if(step==5){wages=74294;} //Updated wages for step
			if(step==6){wages=78344;} //Updated wages for step
			if(step==7){wages=82414;} //Updated wages for step
			if(step==8){wages=86476;} //Updated wages for step
			if(step==9){wages=90540;} //Updated wages for step
			if(step==10){wages=94606;} //Updated wages for step
			if(step==11){wages=100554;} //Updated wages for step
			if(step==12){wages=104452;} //Updated wages for step
			if(step==13){wages=108257;} //Updated wages for step
			if(step==14){wages=112294;} //Updated wages for step
		}
		
			if(degree[2].checked) //Master's + 30
		{
			if(step==1){wages=60931;} //Updated wages for step
			if(step==2){wages=64998;} //Updated wages for step
			if(step==3){wages=69059;} //Updated wages for step
			if(step==4){wages=73121;} //Updated wages for step
			if(step==5){wages=77191;} //Updated wages for step
			if(step==6){wages=81256;} //Updated wages for step
			if(step==7){wages=85317;} //Updated wages for step
			if(step==8){wages=89377;} //Updated wages for step
			if(step==9){wages=93448;} //Updated wages for step
			if(step==10){wages=97510;} //Updated wages for step
			if(step==11){wages=103643;} //Updated wages for step
			if(step==12){wages=107673;} //Updated wages for step
			if(step==13){wages=111595;} //Updated wages for step
			if(step==14){wages=115756;} //Updated wages for step
		}
		
			if(degree[3].checked) //Doctorate
		{
			if(step==1){wages=63838;} //Updated wages for step
			if(step==2){wages=67898;} //Updated wages for step
			if(step==3){wages=71966;} //Updated wages for step
			if(step==4){wages=76023;} //Updated wages for step
			if(step==5){wages=80094;} //Updated wages for step
			if(step==6){wages=84152;} //Updated wages for step
			if(step==7){wages=88214;} //Updated wages for step
			if(step==8){wages=92282;} //Updated wages for step
			if(step==9){wages=96351;} //Updated wages for step
			if(step==10){wages=100433;} //Updated wages for step
			if(step==11){wages=106723;} //Updated wages for step
			if(step==12){wages=110865;} //Updated wages for step
			if(step==13){wages=114904;} //Updated wages for step
			if(step==14){wages=119189;} //Updated wages for step
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
	if(step==0){NEA=70.75;} //Adjust for NEA 25 EA rate
	if(step==1){NEA=118;} //Adjust for NEA 50 EA rate
	if(step==2){NEA=213;} //Adjust for NEA 100 EA rate
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
