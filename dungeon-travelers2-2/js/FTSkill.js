function FTSpAll(classes){
	var FTa=document.getElementById("FTa").selectedIndex;
	var FTb=document.getElementById("FTb").selectedIndex;
	var FTc=document.getElementById("FTc").selectedIndex;
	var FTd=document.getElementById("FTd").selectedIndex;
	var FTe=document.getElementById("FTe").selectedIndex;
	var FTf=document.getElementById("FTf").selectedIndex;
	var FTg=document.getElementById("FTg").selectedIndex;
	var FTh=document.getElementById("FTh").selectedIndex;

	var PLa=document.getElementById("PLa").selectedIndex;
	var PLb=document.getElementById("PLb").selectedIndex;
	var PLc=document.getElementById("PLc").selectedIndex;
	var PLd=document.getElementById("PLd").selectedIndex;
	var PLe=document.getElementById("PLe").selectedIndex;
	var PLf=document.getElementById("PLf").selectedIndex;
	var PLg=document.getElementById("PLg").selectedIndex;
	var PLh=document.getElementById("PLh").selectedIndex;

	var BEa=document.getElementById("BEa").selectedIndex;
	var BEb=document.getElementById("BEb").selectedIndex;
	var BEc=document.getElementById("BEc").selectedIndex;
	var BEd=document.getElementById("BEd").selectedIndex;
	var BEe=document.getElementById("BEe").selectedIndex;
	var BEf=document.getElementById("BEf").selectedIndex;
	var BEg=document.getElementById("BEg").selectedIndex;
	var BEh=document.getElementById("BEh").selectedIndex;

	var VLa=document.getElementById("VLa").selectedIndex;
	var VLb=document.getElementById("VLb").selectedIndex;
	var VLc=document.getElementById("VLc").selectedIndex;
	var VLd=document.getElementById("VLd").selectedIndex;
	var VLe=document.getElementById("VLe").selectedIndex;
	var VLf=document.getElementById("VLf").selectedIndex;
	var VLg=document.getElementById("VLg").selectedIndex;
	var VLh=document.getElementById("VLh").selectedIndex;
	var VLi=document.getElementById("VLi").selectedIndex;
	var VLj=document.getElementById("VLj").selectedIndex;
	var VLk=document.getElementById("VLk").selectedIndex;
	var VLl=document.getElementById("VLl").selectedIndex;

	var SAa=document.getElementById("SAa").selectedIndex;
	var SAb=document.getElementById("SAb").selectedIndex;
	var SAc=document.getElementById("SAc").selectedIndex;
	var SAd=document.getElementById("SAd").selectedIndex;
	var SAe=document.getElementById("SAe").selectedIndex;
	var SAf=document.getElementById("SAf").selectedIndex;
	var SAg=document.getElementById("SAg").selectedIndex;
	var SAh=document.getElementById("SAh").selectedIndex;
	var SAi=document.getElementById("SAi").selectedIndex;
	var SAj=document.getElementById("SAj").selectedIndex;
	
	var DLa=document.getElementById("DLa").selectedIndex;
	var DLb=document.getElementById("DLb").selectedIndex;
	var DLc=document.getElementById("DLc").selectedIndex;
	var DLd=document.getElementById("DLd").selectedIndex;
	var DLe=document.getElementById("DLe").selectedIndex;
	var DLf=document.getElementById("DLf").selectedIndex;
	var DLg=document.getElementById("DLg").selectedIndex;
	var DLh=document.getElementById("DLh").selectedIndex;
	var DLi=document.getElementById("DLi").selectedIndex;
	var DLj=document.getElementById("DLj").selectedIndex;
	var DLk=document.getElementById("DLk").selectedIndex;
	
	var FTa_sp=sp2(FTa);
	var FTb_sp=sp2(FTb);
	var FTc_sp=sp1(FTc);
	var FTd_sp=sp1(FTd);
	var FTe_sp=sp1(FTe);
	var FTf_sp=sp1(FTf);
	var FTg_sp=sp2(FTg);
	var FTh_sp=sp2(FTh);
	var FTall=FTa_sp+FTb_sp+FTc_sp+FTd_sp+FTe_sp+FTf_sp+FTg_sp+FTh_sp;
	
	var PLa_sp=sp2(PLa);
	var PLb_sp=sp2(PLb);
	var PLc_sp=sp3(PLc);
	var PLd_sp=sp1(PLd);
	var PLe_sp=sp2(PLe);
	var PLf_sp=sp1(PLf);
	var PLg_sp=sp1(PLg);
	var PLh_sp=sp2(PLh);
	var PLall=PLa_sp+PLb_sp+PLc_sp+PLd_sp+PLe_sp+PLf_sp+PLg_sp+PLh_sp;
	
	var BEa_sp=sp2(BEa);
	var BEb_sp=sp1(BEb);
	var BEc_sp=sp1(BEc);
	var BEd_sp=sp1(BEd);
	var BEe_sp=sp2(BEe);
	var BEf_sp=sp1(BEf);
	var BEg_sp=sp2(BEg);
	var BEh_sp=sp3(BEh);
	var BEall=BEa_sp+BEb_sp+BEc_sp+BEd_sp+BEe_sp+BEf_sp+BEg_sp+BEh_sp;
	
	var VLa_sp=sp1(VLa);
	var VLb_sp=sp1(VLb);
	var VLc_sp=sp1(VLc);
	var VLd_sp=sp1(VLd);
	var VLe_sp=sp1(VLe);
	var VLf_sp=sp1(VLf);
	var VLg_sp=sp2(VLg);
	var VLh_sp=sp2(VLh);
	var VLi_sp=sp2(VLi);
	var VLj_sp=sp2(VLj);
	var VLk_sp=sp2(VLk);
	var VLl_sp=VLl*20;
	var VLall=VLa_sp+VLb_sp+VLc_sp+VLd_sp+VLe_sp+VLf_sp+VLg_sp+VLh_sp+VLi_sp+VLj_sp+VLk_sp+VLl_sp;
	
	var SAa_sp=sp2(SAa);
	var SAb_sp=sp1(SAb);
	var SAc_sp=sp1(SAc);
	var SAd_sp=sp1(SAd);
	var SAe_sp=sp1(SAe);
	var SAf_sp=sp1(SAf);
	var SAg_sp=sp1(SAg);
	var SAh_sp=sp3(SAh);
	var SAi_sp=sp2(SAi);
	var SAj_sp=sp2(SAj);
	var SAall=SAa_sp+SAb_sp+SAc_sp+SAd_sp+SAe_sp+SAf_sp+SAg_sp+SAh_sp+SAi_sp+SAj_sp;
	
	var DLa_sp=sp2(DLa);
	var DLb_sp=sp2(DLb);
	var DLc_sp=sp1(DLc);
	var DLd_sp=sp1(DLd);
	var DLe_sp=sp1(DLe);
	var DLf_sp=sp1(DLf);
	var DLg_sp=sp1(DLg);
	var DLh_sp=sp2(DLh);
	var DLi_sp=DLi*10;
	var DLj_sp=sp2(DLj);
	var DLk_sp=sp2(DLk);
	var DLall=DLa_sp+DLb_sp+DLc_sp+DLd_sp+DLe_sp+DLf_sp+DLg_sp+DLh_sp+DLi_sp+DLj_sp+DLk_sp;
	
	var classA=0;
	var classB=0;
	switch (parseInt(classes[0])) {
	case 0:
		classA=PLall;
		break;
	case 1:
		classA=BEall;
		break;
	}
	switch (parseInt(classes[1])) {
	case 0:
		classB=VLall;
		break;
	case 1:
		classB=SAall;
		break;
	case 2:
		classB=DLall;
		break;
	}
	
	var all=FTall+classA+classB;
	return all;
}