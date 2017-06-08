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

function scSpAll(classes){
	var SC_sp=[sp2,sp2,sp_squ,sp1,sp1,sp2,sp1,sp2];
	var SCall=all_sp("SC",SC_sp);
	
	var AR_sp=[sp1,sp1,sp1,sp1,sp1,sp2];
	var ARall=all_sp("AR",AR_sp);
	
	var AS_sp=[sp1,sp1,sp1,sp1,sp2,sp2];
	var ASall=all_sp("AS",AS_sp);
	
	var SN_sp=[sp1,sp1,sp3,sp_squ,sp1,sp1,sp3,sp2];
	var SNall=all_sp("SN",SN_sp);
	
	var TH_sp=[sp2,sp_squ,sp5,sp2,sp1,sp1,sp2,sp2,sp1,sp1,sp1,sp2,sp2,sp3,sp2];
	var THall=all_sp("TH",TH_sp);
	
	var KN_sp=[sp1,sp1,sp2,sp2,sp_squ,sp2,sp2,sp2,sp2,sp2,sp1,sp1,sp1,sp1];
	var KNall=all_sp("KN",KN_sp);
	
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