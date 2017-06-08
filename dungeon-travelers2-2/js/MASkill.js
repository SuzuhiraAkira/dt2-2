window.onload=function(){
	var basicJob="MA";
	var job="MA";
	var skillArray=["応急手当","料理","献身","掃除","子守唄","メイドマスタリー","奉仕の心"];
	var lvArray=[5,5,5,5,5,10,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="BD";
	skillArray=["精霊賛辞ファンタジア","神聖礼拝ヒムヌス","充実キャロル","至福コラール","経験促進ピーアン","ソングマスタリー"];
	lvArray=[10,10,10,10,10,10];
	createTables(basicJob,job,skillArray,lvArray);
	job="DN";
	skillArray=["ウォーミングアップ","魅了のワルツ","暗闇のタンゴ","重力のポルカ","誘惑のサンバ","ダンスマスタリー"];
	lvArray=[5,10,10,10,10,10];
	createTables(basicJob,job,skillArray,lvArray);
	job="DI";
	skillArray=["パニックボイス","連撃必倒ロンド","会心集中プレリュード","信仰速読レクイエム","魔導的中バラード","疾風迅雷マーチ","オートリカバリ","コンセントレイト","セルフセッション","早口"];
	lvArray=[10,1,10,10,10,10,5,5,5,10];
	createTables(basicJob,job,skillArray,lvArray);
	job="MI";
	skillArray=["挑発","ウォークライ","ハードウィッピング","エキサイトラヴ","絶対服従折檻撃","リザレクション","褒美と躾","ウィップマスタリー","オートリフレッシュ","打ち落とし","カウンターウィップ","エクスタシー"];
	lvArray=[5,5,10,5,5,5,5,10,5,5,1,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="ET";
	skillArray=["愚鈍のマズルカ","衰弱のサルサ","虚労のホパーク","プリマヴェール","オートリカバリ","根性","コンセントレイト","オンステージ","華麗なるステップ"];
	lvArray=[10,10,10,8,5,5,5,5,5];
	createTables(basicJob,job,skillArray,lvArray);
	
	lv15ClassChange(0,null);
	lv30ClassChange(0,null);
};

function maSpAll(classes){
	var MA_sp=[sp2,sp2,sp_squ,sp_squ,sp_squ,sp1,sp2];
	var MAall=all_sp("MA",MA_sp);
	
	var BD_sp=[sp1,sp1,sp1,sp1,sp1,sp1];
	var BDall=all_sp("BD",BD_sp);
	
	var DN_sp=[sp2,sp1,sp1,sp1,sp1,sp1];
	var DNall=all_sp("DN",DN_sp);
	
	var DI_sp=[sp1,sp10,sp1,sp1,sp1,sp1,sp2,sp2,sp2,sp1];
	var DIall=all_sp("DI",DI_sp);
	
	var MI_sp=[sp2,sp2,sp1,sp2,sp2,sp2,sp2,sp1,sp2,sp2,sp20,sp2];
	var MIall=all_sp("MI",MI_sp);
	
	var ET_sp=[sp1,sp_arr2,sp1,sp_squ,sp2,sp2,sp2,sp2,sp3];
	var ETall=all_sp("ET",ET_sp);
	
	var classA=0;
	var classB=0;
	switch (parseInt(classes[0])) {
	case 0:
		classA=BDall;
		break;
	case 1:
		classA=DNall;
		break;
	}
	switch (parseInt(classes[1])) {
	case 0:
		classB=DIall;
		break;
	case 1:
		classB=MIall;
		break;
	case 2:
		classB=ETall;
		break;
	}
	
	var all=MAall+classA+classB;
	return all;
}