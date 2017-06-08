window.onload=function(){
	var basicJob="FT";
	var job="FT";
	var skillArray=["挑発","ウォークライ","レイジングスマッシュ","ソードマスタリー","アックスマスタリー","ランスマスタリー","アヴェンジャー","ダブルアタック"];
	var lvArray=[5,5,10,10,10,10,5,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="PL";
	skillArray=["ディフェンダー","カバー","パリィ","クロススラッシュ","シールドバッシュ","ヒール","オートミニリカバ","オートガード"];
	lvArray=[5,5,5,10,5,10,5,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="BE";
	skillArray=["バーサーク","オーラエリミネイト","フロストスラッシュ","ジオブレイク","エンラージブラッド","アダプテーション","プレパレイション","ダークオーラ"];
	lvArray=[5,10,10,10,5,10,5,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="VL";
	skillArray=["マテリアルガード","スペルガード","ガストスラスト","ダイダロスアタック","エーテルストライク","サークルヒール","プロテクション","ムーンカーテン","オートリフレッシュ","根性","インペリアルガード","絶対攻撃"];
	lvArray=[10,10,10,10,10,10,5,5,5,5,5,1];
	createTables(basicJob,job,skillArray,lvArray);
	job="SA";
	skillArray=["背水の陣","峰打ち","一刀両断","鎧徹し","鬼神楽","煉獄朧斬り","刀の心得","心眼","トリプルアタック","流水の構え"];
	lvArray=[5,10,10,10,10,10,10,5,5,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="DL";
	skillArray=["アトラクト","パワーチャージ","ブラッドバイト","ソウルバイト","ショックスパイラル","メガトンプレス","ライフブリング","ブレイブ","ファーストグリッド","グラージアキュム","ダーククエスト"];
	lvArray=[5,5,10,10,10,10,10,5,1,5,5];
	createTables(basicJob,job,skillArray,lvArray);
	
	lv15ClassChange(0,null);
	lv30ClassChange(0,null);
};

function ftSpAll(classes){
	var FT_sp=[sp2,sp2,sp1,sp1,sp1,sp1,sp2,sp2];
	var FTall=all_sp("FT",FT_sp);
	
	var PL_sp=[sp2,sp2,sp3,sp1,sp2,sp1,sp1,sp2];
	var PLall=all_sp("PL",PL_sp);
	
	var BE_sp=[sp2,sp1,sp1,sp1,sp2,sp1,sp2,sp3];
	var BEall=all_sp("BE",BE_sp);
	
	var VL_sp=[sp1,sp1,sp1,sp1,sp1,sp1,sp2,sp2,sp2,sp2,sp2,sp20];
	var VLall=all_sp("VL",VL_sp);
	
	var SA_sp=[sp2,sp1,sp1,sp1,sp1,sp1,sp1,sp3,sp2,sp2];
	var SAall=all_sp("SA",SA_sp);
	
	var DL_sp=[sp2,sp2,sp1,sp1,sp1,sp1,sp1,sp2,sp10,sp2,sp2];
	var DLall=all_sp("DL",DL_sp);
	
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