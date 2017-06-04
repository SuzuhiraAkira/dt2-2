function getFocus(id){
	document.getElementById(id).select();
}

function lvInput(job){
	skill(job);
}

function setSp(){
	var lv=document.getElementById("lv").value;
	var sp=0;
	if(isNaN(lv)||!lv||lv<0||lv>99){
		return;
	}
	lv=parseInt(lv);
	if(lv==0){
		sp=0;
	}else if(lv<=14){
		sp=2+lv*1;
	}else if(lv<=26){
		sp=16+(lv-14)*2;
	}else if(lv<=32){
		sp=40+(lv-26)*3;
	}else if(lv<=43){
		sp=58+(lv-32)*4;
	}else if(lv<=48){
		sp=102+(lv-43)*5;
	}else if(lv<=53){
		sp=127+(lv-48)*6;
	}else if(lv<=59){
		sp=157+(lv-53)*7;
	}else if(lv<=64){
		sp=199+(lv-59)*8;
	}else if(lv<=68){
		sp=239+(lv-64)*9;
	}else if(lv<=73){
		sp=275+(lv-68)*10;
	}else if(lv<=77){
		sp=325+(lv-73)*11;
	}else if(lv<=81){
		sp=369+(lv-77)*12;
	}else if(lv<=85){
		sp=417+(lv-81)*13;
	}else if(lv<=89){
		sp=469+(lv-85)*14;
	}else if(lv<=93){
		sp=525+(lv-89)*15;
	}else if(lv<=96){
		sp=585+(lv-93)*16;
	}else if(lv<=98){
		sp=633+(lv-96)*17;
	}else if(lv<=99){
		sp=667+(lv-98)*18;
	}
	document.getElementById("sp").value=sp;
}

function motoInput(job){
	skill(job);
}

function skillnomoto(){
	var moto1=document.getElementById("moto1").value;
	if(isNaN(moto1)||!moto1||moto1<0||moto1>99){
		return;
	}
	moto1=parseInt(moto1);
	var sp=document.getElementById("sp").value;
	sp=parseInt(sp);
	document.getElementById("sp").value=sp+moto1*3;
	var moto2=document.getElementById("moto2").value;
	if(isNaN(moto2)||!moto2||moto2<0||moto2>99){
		return;
	}
	moto2=parseInt(moto2);
	sp=document.getElementById("sp").value;
	sp=parseInt(sp);
	document.getElementById("sp").value=sp+moto2*9;
}

function skill(job){
	setSp();
	skillnomoto();
	var classes=new Array(2);
	var lv15=document.getElementById("lv15");
	var lv30=document.getElementById("lv30");
	classes[0]=lv15.options[lv15.selectedIndex].value;
	classes[1]=lv30.options[lv30.selectedIndex].value;
	var sp=document.getElementById("sp").value;
	var result=0;
	switch (job) {
	case "FT":
		result=sp-FTSpAll(classes);
		break;
	case "MU":
		result=sp-MUSpAll(classes);
		break;
	case "SC":
		result=sp-FTSpAll(classes);
		break;
	case "MA":
		result=sp-FTSpAll(classes);
		break;
	case "SP":
		result=sp-FTSpAll(classes);
		break;
	}
	document.getElementById("sp").value=result;
	if(result<0){
		document.getElementById("sp").style.color="red";
	}else{
		document.getElementById("sp").style.color="black";
	}
}

function sp1(lv){
	return lv*1*(lv+1)/2;
}
function sp2(lv){
	return lv*2*(lv+1)/2;
}
function sp3(lv){
	return lv*3*(lv+1)/2;
}
function sp_arr0(lv){
	var sp=[0,1,2,5,8,13,18,25,32];
	return sp[lv];
}
function sp_arr1(lv){
	var sp=[0,1,2,4,6,9,12,16,20];
	return sp[lv];
}
function sp_squ(lv){
	return lv*lv;
}