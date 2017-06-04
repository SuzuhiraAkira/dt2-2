window.onload=function(){
	lv15ClassChange(0,null);
	lv30ClassChange(0,null);
};
function pageReset(){
	console.log("aaa");
	lv15ClassChange(0,null);
	lv15ClassChange(0,null);
}

function lv15ClassChange(v,job){
	switch (parseInt(v)) {
	case 0:
		getClass("lv15all","lv15a");
		getClass("lv30Class","lv30classA","lv30classB",v);
		getClass("lv30all","lv30a",null,v);
		break;
	case 1:
		getClass("lv15all","lv15b");
		getClass("lv30Class","lv30classB","lv30classC",v);
		getClass("lv30all","lv30b",null,v);
		break;
	case 2:
		getClass("lv15all","lv15c");
		getClass("lv30Class","lv30classC","lv30classD",v);
		getClass("lv30all","lv30c",null,v);
		break;
	}
	skill(job);
}

function lv30ClassChange(v,job){
	switch (parseInt(v)) {
	case 0:
		getClass("lv30all","lv30a");
		break;
	case 1:
		getClass("lv30all","lv30b");
		break;
	case 2:
		getClass("lv30all","lv30c");
		break;
	case 3:
		getClass("lv30all","lv30d");
		break;
	}
	skill(job);
}

function getClass(className,id1,id2,v){
	var name=document.getElementsByClassName(className);
	for(var i=0;i<name.length;i++){
		name[i].style.display="none";
	}
	document.getElementById(id1).style.display="block";
	if(id2){
		document.getElementById(id2).style.display="block";
	}
	if(v){
		v=parseInt(v);
		var lv30=document.getElementById("lv30");
		var lv30v=lv30.options[lv30.selectedIndex].value;
		if(lv30v!=v||lv30v!=v+1){
			document.getElementById("lv30").value = v;
		}
	}
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