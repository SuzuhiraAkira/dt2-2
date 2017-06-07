window.onload=function(){
	var basicJob="SC";
	var job="SC";
	var skillArray=["イベイジョン","ゴールドスティール","クレンジング","ポイズンショット","ウィークスタッブ","ラッキーマイン","ダガーマスタリー","エスケープ"];
	var lvArray=[5,5,5,10,10,5,10,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="AR";
	skillArray=["フリーズショット","パラリシスショット","グラビティショット","アローレイン","ボウマスタリー","コーション"];
	lvArray=[10,10,10,10,10,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="AS";
	skillArray=["アナスティスティング","サイレンススティング","スタンスティング","アダプテーション","マーダー","アウェアネス"];
	lvArray=[10,10,10,10,5,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="SN";
	skillArray=["エイミング","チェインスパイク","スパイラルアロー","ガイデッドショット","スターダストアロー","ディバインキャノン","威嚇射撃","援護射撃"];
	lvArray=[10,10,5,5,10,10,5,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="TH";
	skillArray=["アイデンティファイ","トラップサーチ","トレジャーサーチ","口笛","ライト","フリートネスフット","アイテムスティール","パースートスタッブ","チェインスパイク","ハードウィッピング","アイテムマスタリー","トリプルアタック","トレジャーハント","リサイクル","交渉"];
	lvArray=[5,5,1,5,10,10,5,5,10,10,10,5,5,5,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="KN";
	skillArray=["鳳凰","飯綱落とし","忍術：影分身","忍術：影縫い","忍術：日遁","忍術：火遁","忍術：水遁","忍術：雷遁","忍術：風遁","忍術：土遁","刀の心得","投げの心得","二刀流","連撃"];
	lvArray=[10,10,5,5,5,5,5,5,5,5,10,10,10,10];
	createTables(basicJob,job,skillArray,lvArray);
	
	lv15ClassChange(0,null);
	lv30ClassChange(0,null);
};

function SCSpAll(classes){
	var SCa=document.getElementById("SCa").selectedIndex;
	var SCb=document.getElementById("SCb").selectedIndex;
	var SCc=document.getElementById("SCc").selectedIndex;
	var SCd=document.getElementById("SCd").selectedIndex;
	var SCe=document.getElementById("SCe").selectedIndex;
	var SCf=document.getElementById("SCf").selectedIndex;
	var SCg=document.getElementById("SCg").selectedIndex;
	var SCh=document.getElementById("SCh").selectedIndex;
	
	var ARa=document.getElementById("ARa").selectedIndex;
	var ARb=document.getElementById("ARb").selectedIndex;
	var ARc=document.getElementById("ARc").selectedIndex;
	var ARd=document.getElementById("ARd").selectedIndex;
	var ARe=document.getElementById("ARe").selectedIndex;
	var ARf=document.getElementById("ARf").selectedIndex;
	
	var ASa=document.getElementById("ASa").selectedIndex;
	var ASb=document.getElementById("ASb").selectedIndex;
	var ASc=document.getElementById("ASc").selectedIndex;
	var ASd=document.getElementById("ASd").selectedIndex;
	var ASe=document.getElementById("ASe").selectedIndex;
	var ASf=document.getElementById("ASf").selectedIndex;
	
	var SNa=document.getElementById("SNa").selectedIndex;
	var SNb=document.getElementById("SNb").selectedIndex;
	var SNc=document.getElementById("SNc").selectedIndex;
	var SNd=document.getElementById("SNd").selectedIndex;
	var SNe=document.getElementById("SNe").selectedIndex;
	var SNf=document.getElementById("SNf").selectedIndex;
	var SNg=document.getElementById("SNg").selectedIndex;
	var SNh=document.getElementById("SNh").selectedIndex;
	
	var THa=document.getElementById("THa").selectedIndex;
	var THb=document.getElementById("THb").selectedIndex;
	var THc=document.getElementById("THc").selectedIndex;
	var THd=document.getElementById("THd").selectedIndex;
	var THe=document.getElementById("THe").selectedIndex;
	var THf=document.getElementById("THf").selectedIndex;
	var THg=document.getElementById("THg").selectedIndex;
	var THh=document.getElementById("THh").selectedIndex;
	var THi=document.getElementById("THi").selectedIndex;
	var THj=document.getElementById("THj").selectedIndex;
	var THk=document.getElementById("THk").selectedIndex;
	var THl=document.getElementById("THl").selectedIndex;
	var THm=document.getElementById("THm").selectedIndex;
	var THn=document.getElementById("THn").selectedIndex;
	var THo=document.getElementById("THo").selectedIndex;
	
	var KNa=document.getElementById("KNa").selectedIndex;
	var KNb=document.getElementById("KNb").selectedIndex;
	var KNc=document.getElementById("KNc").selectedIndex;
	var KNd=document.getElementById("KNd").selectedIndex;
	var KNe=document.getElementById("KNe").selectedIndex;
	var KNf=document.getElementById("KNf").selectedIndex;
	var KNg=document.getElementById("KNg").selectedIndex;
	var KNh=document.getElementById("KNh").selectedIndex;
	var KNi=document.getElementById("KNi").selectedIndex;
	var KNj=document.getElementById("KNj").selectedIndex;
	var KNk=document.getElementById("KNk").selectedIndex;
	var KNl=document.getElementById("KNl").selectedIndex;
	var KNm=document.getElementById("KNm").selectedIndex;
	var KNn=document.getElementById("KNn").selectedIndex;
	
	var SCa_sp=sp2(SCa);
	var SCb_sp=sp2(SCb);
	var SCc_sp=sp_squ(SCc);
	var SCd_sp=sp1(SCd);
	var SCe_sp=sp1(SCe);
	var SCf_sp=sp2(SCf);
	var SCg_sp=sp1(SCg);
	var SCh_sp=sp2(SCh);
	var SCall=SCa_sp+SCb_sp+SCc_sp+SCd_sp+SCe_sp+SCf_sp+SCg_sp+SCh_sp;
	
	var ARa_sp=sp1(ARa);
	var ARb_sp=sp1(ARb);
	var ARc_sp=sp1(ARc);
	var ARd_sp=sp1(ARd);
	var ARe_sp=sp1(ARe);
	var ARf_sp=sp2(ARf);
	var ARall=ARa_sp+ARb_sp+ARc_sp+ARd_sp+ARe_sp+ARf_sp;
	
	var ASa_sp=sp1(ASa);
	var ASb_sp=sp1(ASb);
	var ASc_sp=sp1(ASc);
	var ASd_sp=sp1(ASd);
	var ASe_sp=sp2(ASe);
	var ASf_sp=sp2(ASf);
	var ASall=ASa_sp+ASb_sp+ASc_sp+ASd_sp+ASe_sp+ASf_sp;
	
	var SNa_sp=sp1(SNa);
	var SNb_sp=sp1(SNb);
	var SNc_sp=sp3(SNc);
	var SNd_sp=sp_squ(SNd);
	var SNe_sp=sp1(SNe);
	var SNf_sp=sp1(SNf);
	var SNg_sp=sp3(SNg);
	var SNh_sp=sp2(SNh);
	var SNall=SNa_sp+SNb_sp+SNc_sp+SNd_sp+SNe_sp+SNf_sp+SNg_sp+SNh_sp;
	
	var THa_sp=sp2(THa);
	var THb_sp=sp_squ(THb);
	var THc_sp=THc*5;
	var THd_sp=sp2(THd);
	var THe_sp=sp1(THe);
	var THf_sp=sp1(THf);
	var THg_sp=sp2(THg);
	var THh_sp=sp2(THh);
	var THi_sp=sp1(THi);
	var THj_sp=sp1(THj);
	var THk_sp=sp1(THk);
	var THl_sp=sp2(THl);
	var THm_sp=sp2(THm);
	var THn_sp=sp3(THn);
	var THo_sp=sp2(THo);
	var THall=THa_sp+THb_sp+THc_sp+THd_sp+THe_sp+THf_sp+THg_sp+THh_sp+THi_sp+THj_sp+THk_sp+THl_sp+THm_sp+THn_sp+THo_sp;
	
	var KNa_sp=sp1(KNa);
	var KNb_sp=sp1(KNb);
	var KNc_sp=sp2(KNc);
	var KNd_sp=sp2(KNd);
	var KNe_sp=sp_squ(KNe);
	var KNf_sp=sp2(KNf);
	var KNg_sp=sp2(KNg);
	var KNh_sp=sp2(KNh);
	var KNi_sp=sp2(KNi);
	var KNj_sp=sp2(KNj);
	var KNk_sp=sp1(KNk);
	var KNl_sp=sp1(KNl);
	var KNm_sp=sp1(KNm);
	var KNn_sp=sp1(KNn);
	var KNall=KNa_sp+KNb_sp+KNc_sp+KNd_sp+KNe_sp+KNf_sp+KNg_sp+KNh_sp+KNi_sp+KNj_sp+KNk_sp+KNl_sp+KNm_sp+KNn_sp;
	
	var classA=0;
	var classB=0;
	switch (parseInt(classes[0])) {
	case 0:
		classA=ARall;
		break;
	case 1:
		classA=ASall;
		break;
	}
	switch (parseInt(classes[1])) {
	case 0:
		classB=SNall;
		break;
	case 1:
		classB=THall;
		break;
	case 2:
		classB=KNall;
		break;
	}
	
	var all=SCall+classA+classB;
	return all;
}