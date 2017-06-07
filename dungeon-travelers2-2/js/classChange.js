function pageReset(){
	lv15ClassChange(0,null);
}

function lv15ClassChange(v,job){
	switch (parseInt(v)) {
	case 0:
		showDiv("lv15all","lv15a");
		v=showSelect("lv30","lv30classA","lv30classB",v);
		lv30ClassChange(v,job)
		break;
	case 1:
		showDiv("lv15all","lv15b");
		v=showSelect("lv30","lv30classB","lv30classC",v);
		lv30ClassChange(v,job)
		break;
	case 2:
		showDiv("lv15all","lv15c");
		v=showSelect("lv30","lv30classC","lv30classD",v);
		lv30ClassChange(v,job)
		break;
	}
	skill(job);
}

function lv30ClassChange(v,job){
	switch (parseInt(v)) {
	case 0:
		showDiv("lv30all","lv30a");
		break;
	case 1:
		showDiv("lv30all","lv30b");
		break;
	case 2:
		showDiv("lv30all","lv30c");
		break;
	case 3:
		showDiv("lv30all","lv30d");
		break;
	}
	skill(job);
}

function showDiv(id,id1){
	var td=document.getElementById(id);
	var divs=td.getElementsByTagName("div");
	for(var i=0;i<divs.length;i++){
		divs[i].style.display="none";
	}
	document.getElementById(id1).style.display="block";
}

function showSelect(id,id1,id2,v){
	var td=document.getElementById(id);
	var divs=td.getElementsByTagName("option");
	for(var i=0;i<divs.length;i++){
		divs[i].style.display="none";
	}
	document.getElementById(id1).style.display="block";
	document.getElementById(id2).style.display="block";
	v=parseInt(v);
	var lv30=document.getElementById("lv30");
	var lv30v=lv30.options[lv30.selectedIndex].value;
	if(lv30v!=v&&lv30v!=v+1){
		document.getElementById("lv30").value = v;
		lv30v=v;
	}
	return lv30v;
}

/*
function lv15ClassA(){
	var lv15all=document.getElementsByClassName("lv15all");
	for(var i=0;i<lv15all.length;i++){
		lv15all[i].style.display="none";
	}
	document.getElementById("lv15a").style.display="block";
}
function lv15ClassB(){
	var lv15all=document.getElementsByClassName("lv15all");
	for(var i=0;i<lv15all.length;i++){
		lv15all[i].style.display="none";
	}
	document.getElementById("lv15b").style.display="block";
}
function lv15ClassC(){
	var lv15all=document.getElementsByClassName("lv15all");
	for(var i=0;i<lv15all.length;i++){
		lv15all[i].style.display="none";
	}
	document.getElementById("lv15c").style.display="block";
}
function lv30ClassA(){
	var lv30all=document.getElementsByClassName("lv30all");
	for(var i=0;i<lv30all.length;i++){
		lv30all[i].style.display="none";
	}
	document.getElementById("lv30a").style.display="block";
}
function lv30ClassB(){
	var lv30all=document.getElementsByClassName("lv30all");
	for(var i=0;i<lv30all.length;i++){
		lv30all[i].style.display="none";
	}
	document.getElementById("lv30b").style.display="block";
}
function lv30ClassC(){
	var lv30all=document.getElementsByClassName("lv30all");
	for(var i=0;i<lv30all.length;i++){
		lv30all[i].style.display="none";
	}
	document.getElementById("lv30c").style.display="block";
}
function lv30ClassD(){
	var lv30all=document.getElementsByClassName("lv30all");
	for(var i=0;i<lv30all.length;i++){
		lv30all[i].style.display="none";
	}
	document.getElementById("lv30d").style.display="block";
}
*/