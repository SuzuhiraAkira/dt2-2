function createTables(basicJob,job,skillArray,lvArray){
	for(var i=0;i<skillArray.length;i++){
		createTr(basicJob,job,i,skillArray[i],lvArray[i]);
	}
}

function createTr(basicJob,job,index,skillName,maxLv){
	var alpha=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
	var jTable=document.getElementById(job);
	var tr=document.createElement("tr");
	jTable.appendChild(tr);
	var td1=document.createElement("td");
	var td2=document.createElement("td");
	tr.appendChild(td1);
	tr.appendChild(td2);
	td1.innerHTML=skillName;
	var select=document.createElement("select");
	td2.appendChild(select);
	select.onchange=function(){
		skill(basicJob);
	};
	select.id=job+alpha[index];
	for(var i=0;i<=maxLv;i++){
		var option=document.createElement("option");
		select.appendChild(option);
		option.innerHTML=i;
	}
}