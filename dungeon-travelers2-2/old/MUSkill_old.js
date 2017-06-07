window.onload=function(){
	lv15ClassChange(0);
	lv30ClassChange(0);
	elemental(0);
};

function elemental(v){
	switch (parseInt(v)) {
	case 0:
		selectedChara("Gina");
		break;
	case 1:
		selectedChara("Irena");
		break;
	case 2:
		selectedChara("Erthuricia");
		break;
	case 3:
		selectedChara("Fiora");
		break;
	case 4:
		selectedChara("Melvy");
		break;
	}
}

function selectedChara(id){
	var charaName=document.getElementsByClassName("charaName");
	for(var i=0;i<charaName.length;i++){
		charaName[i].style.display="none";
	}
	document.getElementById(id).style.display="block";
}

function MUSpAll(classes){
	var MUa=document.getElementById("MUa").selectedIndex;
	var MUb=document.getElementById("MUb").selectedIndex;
	var MUc=document.getElementById("MUc").selectedIndex;
	var MUd=document.getElementById("MUd").selectedIndex;
	var MUe=document.getElementById("MUe").selectedIndex;
	var MUf=document.getElementById("MUf").selectedIndex;
	var MUg=document.getElementById("MUg").selectedIndex;
	
	var SOa=document.getElementById("SOa").selectedIndex;
	var SOb=document.getElementById("SOb").selectedIndex;
	var SOc=document.getElementById("SOc").selectedIndex;
	var SOd=document.getElementById("SOd").selectedIndex;
	var SOe=document.getElementById("SOe").selectedIndex;
	var SOf=document.getElementById("SOf").selectedIndex;
	var SOg=document.getElementById("SOg").selectedIndex;
	var SOh=document.getElementById("SOh").selectedIndex;
	var SOi=document.getElementById("SOi").selectedIndex;
	var SOj=document.getElementById("SOj").selectedIndex;

	var ENa=document.getElementById("ENa").selectedIndex;
	var ENb=document.getElementById("ENb").selectedIndex;
	var ENc=document.getElementById("ENc").selectedIndex;
	var ENd=document.getElementById("ENd").selectedIndex;
	var ENe=document.getElementById("ENe").selectedIndex;
	var ENf=document.getElementById("ENf").selectedIndex;
	var ENg=document.getElementById("ENg").selectedIndex;
	var ENh=document.getElementById("ENh").selectedIndex;
	var ENi=document.getElementById("ENi").selectedIndex;
	var ENj=document.getElementById("ENj").selectedIndex;
	var ENk=document.getElementById("ENk").selectedIndex;
	var ENl=document.getElementById("ENl").selectedIndex;
	var ENm=document.getElementById("ENm").selectedIndex;
	var ENn=document.getElementById("ENn").selectedIndex;
	var ENo=document.getElementById("ENo").selectedIndex;
	var ENp=document.getElementById("ENp").selectedIndex;
	var ENq=document.getElementById("ENq").selectedIndex;
	var ENr=document.getElementById("ENr").selectedIndex;
	var ENs=document.getElementById("ENs").selectedIndex;
	
	var PRa=document.getElementById("PRa").selectedIndex;
	var PRb=document.getElementById("PRb").selectedIndex;
	var PRc=document.getElementById("PRc").selectedIndex;
	var PRd=document.getElementById("PRd").selectedIndex;
	var PRe=document.getElementById("PRe").selectedIndex;
	var PRf=document.getElementById("PRf").selectedIndex;
	var PRg=document.getElementById("PRg").selectedIndex;
	var PRh=document.getElementById("PRh").selectedIndex;
	var PRi=document.getElementById("PRi").selectedIndex;
	var PRj=document.getElementById("PRj").selectedIndex;
	var PRk=document.getElementById("PRk").selectedIndex;
	var PRl=document.getElementById("PRl").selectedIndex;

	var WTa=document.getElementById("WTa").selectedIndex;
	var WTb=document.getElementById("WTb").selectedIndex;
	var WTc=document.getElementById("WTc").selectedIndex;
	var WTd=document.getElementById("WTd").selectedIndex;
	var WTe=document.getElementById("WTe").selectedIndex;
	var WTf=document.getElementById("WTf").selectedIndex;
	var WTg=document.getElementById("WTg").selectedIndex;
	var WTh=document.getElementById("WTh").selectedIndex;
	var WTi=document.getElementById("WTi").selectedIndex;
	var WTj=document.getElementById("WTj").selectedIndex;
	var WTk=document.getElementById("WTk").selectedIndex;
	var WTl=document.getElementById("WTl").selectedIndex;
	var WTm=document.getElementById("WTm").selectedIndex;
	var WTn=document.getElementById("WTn").selectedIndex;
	var WTo=document.getElementById("WTo").selectedIndex;
	var WTp=document.getElementById("WTp").selectedIndex;

	var MPa=document.getElementById("MPa").selectedIndex;
	var MPb=document.getElementById("MPb").selectedIndex;
	var MPc=document.getElementById("MPc").selectedIndex;
	var MPd=document.getElementById("MPd").selectedIndex;
	var MPe=document.getElementById("MPe").selectedIndex;
	var MPf=document.getElementById("MPf").selectedIndex;
	var MPg=document.getElementById("MPg").selectedIndex;
	var MPh=document.getElementById("MPh").selectedIndex;
	var MPi=document.getElementById("MPi").selectedIndex;
	var MPj=document.getElementById("MPj").selectedIndex;
	var MPk=document.getElementById("MPk").selectedIndex;

	var SGa=document.getElementById("SGa").selectedIndex;
	var SGb=document.getElementById("SGb").selectedIndex;
	var SGc=document.getElementById("SGc").selectedIndex;
	var SGd=document.getElementById("SGd").selectedIndex;
	var SGe=document.getElementById("SGe").selectedIndex;
	var SGf=document.getElementById("SGf").selectedIndex;
	var SGg=document.getElementById("SGg").selectedIndex;
	var SGh=document.getElementById("SGh").selectedIndex;
	var SGi=document.getElementById("SGi").selectedIndex;
	var SGj=document.getElementById("SGj").selectedIndex;
	var SGk=document.getElementById("SGk").selectedIndex;
	var SGl=document.getElementById("SGl").selectedIndex;
	var SGm=document.getElementById("SGm").selectedIndex;
	var SGn=document.getElementById("SGn").selectedIndex;
	var SGo=document.getElementById("SGo").selectedIndex;
	var SGp=document.getElementById("SGp").selectedIndex;
	
	var BSa=document.getElementById("BSa").selectedIndex;
	var BSb=document.getElementById("BSb").selectedIndex;
	var BSc=document.getElementById("BSc").selectedIndex;
	var BSd=document.getElementById("BSd").selectedIndex;
	var BSe=document.getElementById("BSe").selectedIndex;
	var BSf=document.getElementById("BSf").selectedIndex;
	var BSg=document.getElementById("BSg").selectedIndex;
	var BSh=document.getElementById("BSh").selectedIndex;
	var BSi=document.getElementById("BSi").selectedIndex;
	
	var MUa_sp=sp1(MUa);
	var MUb_sp=sp1(MUb);
	var MUc_sp=sp1(MUc);
	var MUd_sp=sp1(MUd);
	var MUe_sp=sp1(MUe);
	var MUf_sp=sp1(MUf);
	var MUg_sp=sp2(MUg);
	var MUall=MUa_sp+MUb_sp+MUc_sp+MUd_sp+MUe_sp+MUf_sp+MUg_sp;
	
	var SOa_sp=sp1(SOa);
	var SOb_sp=sp1(SOb);
	var SOc_sp=sp1(SOc);
	var SOd_sp=sp1(SOd);
	var SOe_sp=sp1(SOe);
	var SOf_sp=sp1(SOf);
	var SOg_sp=sp1(SOg);
	var SOh_sp=sp2(SOh);
	var SOi_sp=sp2(SOi);
	var SOj_sp=SOj*10;
	var SOall=SOa_sp+SOb_sp+SOc_sp+SOd_sp+SOe_sp+SOf_sp+SOg_sp+SOh_sp+SOi_sp+SOj_sp;
	
	var ENa_sp=sp2(ENa);
	var ENb_sp=sp1(ENb);
	var ENc_sp=sp_arr0(ENc);
	var ENd_sp=sp2(ENd);
	var ENe_sp=sp2(ENe);
	var ENf_sp=sp2(ENf);
	var ENg_sp=sp2(ENg);
	var ENh_sp=sp_squ(ENh);
	var ENi_sp=sp_squ(ENi);
	var ENj_sp=sp_squ(ENj);
	var ENk_sp=sp_squ(ENk);
	var ENl_sp=sp_squ(ENl);
	var ENm_sp=sp2(ENm);
	var ENn_sp=sp2(ENn);
	var ENo_sp=sp2(ENo);
	var ENp_sp=sp1(ENp);
	var ENq_sp=sp1(ENq);
	var ENr_sp=sp1(ENr);
	var ENs_sp=sp2(ENs);
	var ENall=ENa_sp+ENb_sp+ENc_sp+ENd_sp+ENe_sp+ENf_sp+ENg_sp+ENh_sp+ENi_sp+ENj_sp+ENk_sp+ENl_sp+ENm_sp+ENn_sp+ENo_sp+ENp_sp+ENq_sp+ENr_sp+ENs_sp;
	
	var PRa_sp=sp2(PRa);
	var PRb_sp=sp2(PRb);
	var PRc_sp=sp1(PRc);
	var PRd_sp=sp1(PRd);
	var PRe_sp=sp_arr1(PRe);
	var PRf_sp=sp2(PRf);
	var PRg_sp=sp2(PRg);
	var PRh_sp=sp2(PRh);
	var PRi_sp=sp1(PRi);
	var PRj_sp=sp1(PRj);
	var PRk_sp=sp1(PRk);
	var PRl_sp=sp2(PRl);
	var PRall=PRa_sp+PRb_sp+PRc_sp+PRd_sp+PRe_sp+PRf_sp+PRg_sp+PRh_sp+PRi_sp+PRj_sp+PRk_sp+PRl_sp;
	
	var WTa_sp=sp3(WTa);
	var WTb_sp=sp1(WTb);
	var WTc_sp=sp2(WTc);
	var WTd_sp=sp1(WTd);
	var WTe_sp=sp2(WTe);
	var WTf_sp=sp1(WTf);
	var WTg_sp=sp2(WTg);
	var WTh_sp=sp1(WTh);
	var WTi_sp=sp2(WTi);
	var WTj_sp=sp1(WTj);
	var WTk_sp=sp2(WTk);
	var WTl_sp=sp1(WTl);
	var WTm_sp=sp2(WTm);
	var WTn_sp=sp2(WTn);
	var WTo_sp=sp2(WTo);
	var WTp_sp=sp_squ(WTp);
	var WTall=WTa_sp+WTb_sp+WTc_sp+WTd_sp+WTe_sp+WTf_sp+WTg_sp+WTh_sp+WTi_sp+WTj_sp+WTk_sp+WTl_sp+WTm_sp+WTn_sp+WTo_sp+WTp_sp;
	
	var MPa_sp=sp2(MPa);
	var MPb_sp=sp1(MPb);
	var MPc_sp=sp3(MPc);
	var MPd_sp=sp1(MPd);
	var MPe_sp=sp1(MPe);
	var MPf_sp=sp1(MPf);
	var MPg_sp=sp2(MPg);
	var MPh_sp=sp3(MPh);
	var MPi_sp=sp1(MPi);
	var MPj_sp=sp2(MPj);
	var MPk_sp=sp2(MPk);
	var MPall=MPa_sp+MPb_sp+MPc_sp+MPd_sp+MPe_sp+MPf_sp+MPg_sp+MPh_sp+MPi_sp+MPj_sp+MPk_sp;
	
	var SGa_sp=sp2(SGa);
	var SGb_sp=sp1(SGb);
	var SGc_sp=sp1(SGc);
	var SGd_sp=sp2(SGd);
	var SGe_sp=sp2(SGe);
	var SGf_sp=sp2(SGf);
	var SGg_sp=sp2(SGg);
	var SGh_sp=sp_squ(SGh);
	var SGi_sp=sp_squ(SGi);
	var SGj_sp=sp_squ(SGj);
	var SGk_sp=sp_squ(SGk);
	var SGl_sp=sp1(SGl);
	var SGm_sp=sp2(SGm);
	var SGn_sp=sp2(SGn);
	var SGo_sp=sp_squ(SGo);
	var SGp_sp=sp2(SGp);
	var SGall=SGa_sp+SGb_sp+SGc_sp+SGd_sp+SGe_sp+SGf_sp+SGg_sp+SGh_sp+SGi_sp+SGj_sp+SGk_sp+SGl_sp+SGm_sp+SGn_sp+SGo_sp+SGp_sp;
	
	var BSa_sp=sp1(BSa);
	var BSb_sp=sp1(BSb);
	var BSc_sp=sp1(BSc);
	var BSd_sp=sp2(BSd);
	var BSe_sp=sp1(BSe);
	var BSf_sp=sp2(BSf);
	var BSg_sp=sp2(BSg);
	var BSh_sp=sp1(BSh);
	var BSi_sp=sp2(BSi);
	var BSall=BSa_sp+BSb_sp+BSc_sp+BSd_sp+BSe_sp+BSf_sp+BSg_sp+BSh_sp+BSi_sp;
	
	var classA=0;
	var classB=0;
	switch (parseInt(classes[0])) {
	case 0:
		classA=SOall;
		break;
	case 1:
		classA=ENall;
		break;
	case 2:
		classA=PRall;
		break;
	}
	switch (parseInt(classes[1])) {
	case 0:
		classB=WTall;
		break;
	case 1:
		classB=MPall;
		break;
	case 2:
		classB=SGall;
		break;
	case 3:
		classB=BSall;
		break;
	}
	
	var all=MUall+classA+classB;
	return all;
}