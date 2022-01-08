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
			wages=credits*922.75;
		}
		
       if(status[1].checked) //Non-Probationary PT - Update value for current non-probationary rate.
		{
			wages=credits*1057.81;
		}		
    }
	if(memberSelection[1].checked) //FT
    {	
		if(degree[0].checked) //Bachelor's
		{
			if(step==1){wages=48337;} //Updated wages for step
			if(step==2){wages=51522;} //Updated wages for step
			if(step==3){wages=54717;} //Updated wages for step
			if(step==4){wages=57902;} //Updated wages for step
			if(step==5){wages=61091;} //Updated wages for step
			if(step==6){wages=64135;} //Updated wages for step
			if(step==7){wages=67470;} //Updated wages for step
			if(step==8){wages=70661;} //Updated wages for step
			if(step==9){wages=73854;} //Updated wages for step
			if(step==10){wages=78491;} //Updated wages for step
			if(step==11){wages=81538;} //Updated wages for step
			if(step==12){wages=84511;} //Updated wages for step
			if(step==13){wages=87588;} //Updated wages for step
			if(step==14){wages=90853;} //Updated wages for step
		}	
				
		if(degree[1].checked) //Master's
		{
			if(step==1){wages=53124;} //Updated wages for step
			if(step==2){wages=56842;} //Updated wages for step
			if(step==3){wages=60562;} //Updated wages for step
			if(step==4){wages=64289;} //Updated wages for step
			if(step==5){wages=68009;} //Updated wages for step
			if(step==6){wages=71716;} //Updated wages for step
			if(step==7){wages=75441;} //Updated wages for step
			if(step==8){wages=79160;} //Updated wages for step
			if(step==9){wages=82880;} //Updated wages for step
			if(step==10){wages=86602;} //Updated wages for step
			if(step==11){wages=92047;} //Updated wages for step
			if(step==12){wages=95615;} //Updated wages for step
			if(step==13){wages=99099;} //Updated wages for step
			if(step==14){wages=102794;} //Updated wages for step
		}
		
			if(degree[2].checked) //Master's + 30
		{
			if(step==1){wages=55776;} //Updated wages for step
			if(step==2){wages=59499;} //Updated wages for step
			if(step==3){wages=63217;} //Updated wages for step
			if(step==4){wages=66935;} //Updated wages for step
			if(step==5){wages=70661;} //Updated wages for step
			if(step==6){wages=74382;} //Updated wages for step
			if(step==7){wages=78099;} //Updated wages for step
			if(step==8){wages=81816;} //Updated wages for step
			if(step==9){wages=85542;} //Updated wages for step
			if(step==10){wages=89261;} //Updated wages for step
			if(step==11){wages=94875;} //Updated wages for step
			if(step==12){wages=98564;} //Updated wages for step
			if(step==13){wages=102154;} //Updated wages for step
			if(step==14){wages=105963;} //Updated wages for step
		}
		
			if(degree[3].checked) //Doctorate
		{
			if(step==1){wages=58437;} //Updated wages for step
			if(step==2){wages=62154;} //Updated wages for step
			if(step==3){wages=65878;} //Updated wages for step
			if(step==4){wages=69591;} //Updated wages for step
			if(step==5){wages=73318;} //Updated wages for step
			if(step==6){wages=77032;} //Updated wages for step
			if(step==7){wages=80751;} //Updated wages for step
			if(step==8){wages=84475;} //Updated wages for step
			if(step==9){wages=88200;} //Updated wages for step
			if(step==10){wages=91936;} //Updated wages for step
			if(step==11){wages=97694;} //Updated wages for step
			if(step==12){wages=101485;} //Updated wages for step
			if(step==13){wages=105183;} //Updated wages for step
			if(step==14){wages=109106;} //Updated wages for step
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
	if(step==0){NEA=68;} //Adjust for NEA rate
	if(step==1){NEA=112.50;} //Adjust for NEA rate
	if(step==2){NEA=202;} //Adjust for NEA rate
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
