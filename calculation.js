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
			wages=credits*885;
		}
		
       if(status[1].checked) //Non-Probationary PT - Update value for current non-probationary rate.
		{
			wages=credits*1015;
		}		
    }
	if(memberSelection[1].checked) //FT
    {	
		if(degree[0].checked) //Bachelor's
		{
			if(step==1){wages=46420;} //Updated wages for step
			if(step==2){wages=49478;} //Updated wages for step
			if(step==3){wages=52546;} //Updated wages for step
			if(step==4){wages=55605;} //Updated wages for step
			if(step==5){wages=58667;} //Updated wages for step
			if(step==6){wages=61591;} //Updated wages for step
			if(step==7){wages=64793;} //Updated wages for step
			if(step==8){wages=67857;} //Updated wages for step
			if(step==9){wages=70923;} //Updated wages for step
			if(step==10){wages=75377;} //Updated wages for step
			if(step==11){wages=78303;} //Updated wages for step
			if(step==12){wages=81158;} //Updated wages for step
			if(step==13){wages=84113;} //Updated wages for step
			if(step==14){wages=87250;} //Updated wages for step
		}	
				
		if(degree[1].checked) //Master's
		{
			if(step==1){wages=51017;} //Updated wages for step
			if(step==2){wages=54588;} //Updated wages for step
			if(step==3){wages=58159;} //Updated wages for step
			if(step==4){wages=61738;} //Updated wages for step
			if(step==5){wages=65311;} //Updated wages for step
			if(step==6){wages=68871;} //Updated wages for step
			if(step==7){wages=72449;} //Updated wages for step
			if(step==8){wages=76020;} //Updated wages for step
			if(step==9){wages=79592;} //Updated wages for step
			if(step==10){wages=83167;} //Updated wages for step
			if(step==11){wages=88395;} //Updated wages for step
			if(step==12){wages=91822;} //Updated wages for step
			if(step==13){wages=95167;} //Updated wages for step
			if(step==14){wages=98716;} //Updated wages for step
		}
		
			if(degree[2].checked) //Master's + 30
		{
			if(step==1){wages=53563;} //Updated wages for step
			if(step==2){wages=57139;} //Updated wages for step
			if(step==3){wages=60709;} //Updated wages for step
			if(step==4){wages=64280;} //Updated wages for step
			if(step==5){wages=67857;} //Updated wages for step
			if(step==6){wages=71430;} //Updated wages for step
			if(step==7){wages=75001;} //Updated wages for step
			if(step==8){wages=78570;} //Updated wages for step
			if(step==9){wages=82149;} //Updated wages for step
			if(step==10){wages=85720;} //Updated wages for step
			if(step==11){wages=91111;} //Updated wages for step
			if(step==12){wages=94653;} //Updated wages for step
			if(step==13){wages=98101;} //Updated wages for step
			if(step==14){wages=101759;} //Updated wages for step
		}
		
			if(degree[3].checked) //Doctorate
		{
			if(step==1){wages=56119;} //Updated wages for step
			if(step==2){wages=59688;} //Updated wages for step
			if(step==3){wages=63265;} //Updated wages for step
			if(step==4){wages=66831;} //Updated wages for step
			if(step==5){wages=70409;} //Updated wages for step
			if(step==6){wages=73977;} //Updated wages for step
			if(step==7){wages=77548;} //Updated wages for step
			if(step==8){wages=81123;} //Updated wages for step
			if(step==9){wages=84701;} //Updated wages for step
			if(step==10){wages=88289;} //Updated wages for step
			if(step==11){wages=93819;} //Updated wages for step
			if(step==12){wages=97459;} //Updated wages for step
			if(step==13){wages=101010;} //Updated wages for step
			if(step==14){wages=104777;} //Updated wages for step
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
	var threshold=15000*memberfactor;
	var threshold2=650*memberfactor;
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
	if(step==0){NEA=66.50;} //Adjust for NEA rate
	if(step==1){NEA=109.50;} //Adjust for NEA rate
	if(step==2){NEA=196;} //Adjust for NEA rate
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
