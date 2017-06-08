window.onload=function(){
	var basicJob="SP";
	var job="SP";
	var skillArray=["フリートネスフット","ルーレットサーカス","コーヒーブレイク","デンジャーシュート","ウェポンマスタリー","プレゼントフォーミー"];
	var lvArray=[10,1,5,10,10,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="DM";
	skillArray=["スパルタン","オラクルス","カタリーナ","ドールマスタリー","オートミニフレッシュ"];
	lvArray=[10,10,5,10,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="TS";
	skillArray=["マジックボックス","ハイリスク＆リターン","チェックメイト","サプライズフィスト","オートミニリカバ","アンチダークオーラ","うそぶき"];
	lvArray=[1,5,10,10,5,1,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="SS";
	skillArray=["メルセダリオン","ペルデュラボー","ミュージィ","ソウルイーター","ディバインシールド","アダプテーション","ダブルパペット","ディスティニーライン","ソウルスィール"];
	lvArray=[10,7,5,10,5,10,5,1,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="PA";
	skillArray=["マテリアライズ","ローゼスクィーン","ティンカースカッシュ","グレイスフルローズ","リミットフィールド","イリュージョン","インシュランス","ファンマスタリー","ダブルアタック","エサルハドン","優雅なる舞"];
	lvArray=[5,10,10,1,5,5,5,10,5,5,1];
	createTables(basicJob,job,skillArray,lvArray);
	job="JO";
	skillArray=["ショウタイム","切り札","マッドザッパー","ライフブリンガー","ビーストバインダー","ヘブン・オア・ヘル","アックスマスタリー","アヴェンジャー","マーダー","トリプルジョーカー"];
	lvArray=[1,5,10,5,10,5,10,5,5,1];
	createTables(basicJob,job,skillArray,lvArray);
	
	lv15ClassChange(0,null);
	lv30ClassChange(0,null);
};

function spSpAll(classes){
	var SP_sp=[sp1,sp10,sp_squ,sp1,sp1,sp_squ];
	var SPall=all_sp("SP",SP_sp);
	
	var DM_sp=[sp1,sp1,sp2,sp1,sp1];
	var DMall=all_sp("DM",DM_sp);
	
	var TS_sp=[sp10,sp2,sp1,sp1,sp1,sp20,sp3];
	var TSall=all_sp("TS",TS_sp);
	
	var SS_sp=[sp1,sp1,sp3,sp1,sp2,sp1,sp2,sp20,sp3];
	var SSall=all_sp("SS",SS_sp);
	
	var PA_sp=[sp_squ,sp1,sp1,sp10,sp2,sp2,sp2,sp1,sp2,sp_squ,sp20];
	var PAall=all_sp("PA",PA_sp);
	
	var JO_sp=[sp20,sp2,sp1,sp2,sp1,sp_squ,sp1,sp2,sp2,sp20];
	var JOall=all_sp("JO",JO_sp);
	
	var classA=0;
	var classB=0;
	switch (parseInt(classes[0])) {
	case 0:
		classA=DMall;
		break;
	case 1:
		classA=TSall;
		break;
	}
	switch (parseInt(classes[1])) {
	case 0:
		classB=SSall;
		break;
	case 1:
		classB=PAall;
		break;
	case 2:
		classB=JOall;
		break;
	}
	
	var all=SPall+classA+classB;
	return all;
}