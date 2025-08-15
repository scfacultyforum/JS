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
			wages=credits*1058;
		}
		
       if(status[1].checked) //Non-Probationary PT - Update value for current non-probationary rate.
		{
			wages=credits*1214;
		}		
    }
	if(memberSelection[1].checked) //FT
    {	
		if(degree[0].checked) //Bachelor's
		{
			if(step==1){wages=55445;} //Updated wages for step
			if(step==2){wages=59098;} //Updated wages for step
			if(step==3){wages=62763;} //Updated wages for step
			if(step==4){wages=66416;} //Updated wages for step
			if(step==5){wages=70074;} //Updated wages for step
			if(step==6){wages=73565;} //Updated wages for step
			if(step==7){wages=77390;} //Updated wages for step
			if(step==8){wages=81051;} //Updated wages for step
			if(step==9){wages=84713;} //Updated wages for step
			if(step==10){wages=90032;} //Updated wages for step
			if(step==11){wages=93527;} //Updated wages for step
			if(step==12){wages=96938;} //Updated wages for step
			if(step==13){wages=100466;} //Updated wages for step
			if(step==14){wages=104213;} //Updated wages for step
		}	
				
		if(degree[1].checked) //Master's
		{
			if(step==1){wages=60936;} //Updated wages for step
			if(step==2){wages=65200;} //Updated wages for step
			if(step==3){wages=69467;} //Updated wages for step
			if(step==4){wages=73743;} //Updated wages for step
			if(step==5){wages=78009;} //Updated wages for step
			if(step==6){wages=82261;} //Updated wages for step
			if(step==7){wages=86535;} //Updated wages for step
			if(step==8){wages=90800;} //Updated wages for step
			if(step==9){wages=95067;} //Updated wages for step
			if(step==10){wages=99336;} //Updated wages for step
			if(step==11){wages=105582;} //Updated wages for step
			if(step==12){wages=109675;} //Updated wages for step
			if(step==13){wages=113670;} //Updated wages for step
			if(step==14){wages=117909;} //Updated wages for step
		}
		
			if(degree[2].checked) //Master's + 30
		{
			if(step==1){wages=63978;} //Updated wages for step
			if(step==2){wages=68248;} //Updated wages for step
			if(step==3){wages=72512;} //Updated wages for step
			if(step==4){wages=76777;} //Updated wages for step
			if(step==5){wages=81051;} //Updated wages for step
			if(step==6){wages=85319;} //Updated wages for step
			if(step==7){wages=89583;} //Updated wages for step
			if(step==8){wages=93846;} //Updated wages for step
			if(step==9){wages=98120;} //Updated wages for step
			if(step==10){wages=102386;} //Updated wages for step
			if(step==11){wages=108825;} //Updated wages for step
			if(step==12){wages=113057;} //Updated wages for step
			if(step==13){wages=117175;} //Updated wages for step
			if(step==14){wages=121544;} //Updated wages for step
		}
		
			if(degree[3].checked) //Doctorate
		{
			if(step==1){wages=67030;} //Updated wages for step
			if(step==2){wages=71293;} //Updated wages for step
			if(step==3){wages=75564;} //Updated wages for step
			if(step==4){wages=79824;} //Updated wages for step
			if(step==5){wages=84099;} //Updated wages for step
			if(step==6){wages=88360;} //Updated wages for step
			if(step==7){wages=92625;} //Updated wages for step
			if(step==8){wages=96896;} //Updated wages for step
			if(step==9){wages=101169;} //Updated wages for step
			if(step==10){wages=105455;} //Updated wages for step
			if(step==11){wages=112059;} //Updated wages for step
			if(step==12){wages=116408;} //Updated wages for step
			if(step==13){wages=120649;} //Updated wages for step
			if(step==14){wages=125148;} //Updated wages for step
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
	if(step==0){NEA=72.25;} //Adjust for NEA 25 EA rate
	if(step==1){NEA=121;} //Adjust for NEA 50 EA rate
	if(step==2){NEA=219;} //Adjust for NEA 100 EA rate
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
