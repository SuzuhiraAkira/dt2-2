function getFocus(text){
	text.select();
}
function onlyNumber(e){
	var keynum;

	if(window.event){
		keynum = e.keyCode;
	}else if(e.which){
		keynum = e.which;
	}

	if(keynum>=48&&keynum<=57||keynum==8||keynum==13||keynum==37||keynum==39||keynum==46||keynum==108){
		return true;
	}
	return false;
}

function lvInput(job){
	skill(job);
}

function setSp(){
	var lv=document.getElementById("lv").value;
	var sp=0;
	if(!lv){
		document.getElementById("lv").value=0;
		lv=0;
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
	if(!moto1){
		document.getElementById("moto1").value=0;
		moto1=0;
	}
	moto1=parseInt(moto1);
	var sp=document.getElementById("sp").value;
	sp=parseInt(sp);
	document.getElementById("sp").value=sp+moto1*3;
	var moto2=document.getElementById("moto2").value;
	if(!moto2){
		document.getElementById("moto2").value=0;
		moto2=0;
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
		result=sp-ftSpAll(classes);
		break;
	case "MU":
		result=sp-muSpAll(classes);
		break;
	case "SC":
		result=sp-scSpAll(classes);
		break;
	case "MA":
		result=sp-maSpAll(classes);
		break;
	case "SP":
		result=sp-spSpAll(classes);
		break;
	}
	document.getElementById("sp").value=result;
	if(result<0){
		document.getElementById("sp").style.color="red";
	}else{
		document.getElementById("sp").style.color="black";
	}
}

function all_sp(job,job_sp){
	var alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var all=0;
	for(var i=0;i<job_sp.length;i++){
		var jobLv=document.getElementById(job+alpha[i]).selectedIndex;
		all+=job_sp[i](jobLv);
	}
	return all;
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
function sp5(lv){
	return lv*5*(lv+1)/2;
}
function sp10(lv){
	return lv*10*(lv+1)/2;
}
function sp20(lv){
	return lv*20*(lv+1)/2;
}
function sp_arr0(lv){
	var sp=[0,1,2,5,8,13,18,25,32];
	return sp[lv];
}
function sp_arr1(lv){
	var sp=[0,1,2,4,6,9,12,16,20];
	return sp[lv];
}
function sp_arr2(lv){
	var sp=[0,2,6,12,20,30,41,53,66,80,95];
	return sp[lv];
}
function sp_squ(lv){
	return lv*lv;
}