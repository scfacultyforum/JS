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
			wages=credits*960.02;
		}
		
       if(status[1].checked) //Non-Probationary PT - Update value for current non-probationary rate.
		{
			wages=credits*1100.54;
		}		
    }
	if(memberSelection[1].checked) //FT
    {	
		if(degree[0].checked) //Bachelor's
		{
			if(step==1){wages=50290.24;} //Updated wages for step
			if(step==2){wages=53603.66;} //Updated wages for step
			if(step==3){wages=56927.81;} //Updated wages for step
			if(step==4){wages=60241.23;} //Updated wages for step
			if(step==5){wages=63558.95;} //Updated wages for step
			if(step==6){wages=66725.42;} //Updated wages for step
			if(step==7){wages=70195.45;} //Updated wages for step
			if(step==8){wages=73515.30;} //Updated wages for step
			if(step==9){wages=76837.31;} //Updated wages for step
			if(step==10){wages=81662.10;} //Updated wages for step
			if(step==11){wages=84831.79;} //Updated wages for step
			if(step==12){wages=87925.32;} //Updated wages for step
			if(step==13){wages=91126.11;} //Updated wages for step
			if(step==14){wages=94524.27;} //Updated wages for step
		}	
				
		if(degree[1].checked) //Master's
		{
			if(step==1){wages=55270.56;} //Updated wages for step
			if(step==2){wages=59138.54;} //Updated wages for step
			if(step==3){wages=63008.67;} //Updated wages for step
			if(step==4){wages=66886.31;} //Updated wages for step
			if(step==5){wages=70756.44;} //Updated wages for step
			if(step==6){wages=74613.70;} //Updated wages for step
			if(step==7){wages=78489.19;} //Updated wages for step
			if(step==8){wages=82358.25;} //Updated wages for step
			if(step==9){wages=86228.38;} //Updated wages for step
			if(step==10){wages=90100.66;} //Updated wages for step
			if(step==11){wages=95765.33;} //Updated wages for step
			if(step==12){wages=99477.78;} //Updated wages for step
			if(step==13){wages=103102.28;} //Updated wages for step
			if(step==14){wages=106946.66;} //Updated wages for step
		}
		
			if(degree[2].checked) //Master's + 30
		{
			if(step==1){wages=58029.42;} //Updated wages for step
			if(step==2){wages=61902.77;} //Updated wages for step
			if(step==3){wages=65770.75;} //Updated wages for step
			if(step==4){wages=69638.74;} //Updated wages for step
			if(step==5){wages=73515.3;} //Updated wages for step
			if(step==6){wages=77386.51;} //Updated wages for step
			if(step==7){wages=81254.49;} //Updated wages for step
			if(step==8){wages=85121.40;} //Updated wages for step
			if(step==9){wages=88997.97;} //Updated wages for step
			if(step==10){wages=92867.03;} //Updated wages for step
			if(step==11){wages=98707.62;} //Updated wages for step
			if(step==12){wages=102545.57;} //Updated wages for step
			if(step==13){wages=106280.55;} //Updated wages for step
			if(step==14){wages=110244;} //Updated wages for step
		}
		
			if(degree[3].checked) //Doctorate
		{
			if(step==1){wages=60797.94;} //Updated wages for step
			if(step==2){wages=64664.85;} //Updated wages for step
			if(step==3){wages=68539.27;} //Updated wages for step
			if(step==4){wages=72402.96;} //Updated wages for step
			if(step==5){wages=76279.53;} //Updated wages for step
			if(step==6){wages=80144.3;} //Updated wages for step
			if(step==7){wages=84013.35;} //Updated wages for step
			if(step==8){wages=87887.77;} //Updated wages for step
			if(step==9){wages=91763.27;} //Updated wages for step
			if(step==10){wages=95650.56;} //Updated wages for step
			if(step==11){wages=101641.32;} //Updated wages for step
			if(step==12){wages=105585.47;} //Updated wages for step
			if(step==13){wages=109432;} //Updated wages for step
			if(step==14){wages=113513.44;} //Updated wages for step
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
	if(step==0){NEA=69.50;} //Adjust for NEA rate
	if(step==1){NEA=115.50;} //Adjust for NEA rate
	if(step==2){NEA=208;} //Adjust for NEA rate
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
