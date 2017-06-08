window.onload=function(){
	var basicJob="MU";
	var job="MU";
	var skillArray=["ファイアボール","アイスエッジ","サンダーボルト","エアカッター","ストーンハンマー","ヒール","ポイズン"];
	var lvArray=[10,10,10,10,10,10,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="SO";
	skillArray=["ファイアブラスト","アイスストーム","サンダーチェイン","エアタービュランス","ストーンシャワー","ブラッドドレイン","マジックマスタリー","オートリフレッシュ","コンセントレイト","クリティカルマジック"];
	lvArray=[10,10,10,10,10,10,10,5,5,1];
	createTables(basicJob,job,skillArray,lvArray);
	job="EN";
	skillArray=["リターン","聖なる祈り","ミニサークルナース","スタン","フリーズ","サイレンス","パラリシス","エンチャントファイア","エンチャントアイス","エンチャントサンダー","エンチャントエアー","エンチャントアース","サークルブレイブ","サークルプロテクト","ディバインシールド","ヒールマスタリー","オートミニフレッシュ","アダプテーション","ファストキャスト"];
	lvArray=[5,5,8,5,5,5,5,5,5,5,5,5,5,5,5,10,5,10,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="PR";
	skillArray=["ライト","リターン","","サークルヒール","ナース","リザレクション","スロウ","ディバインシールド","ヒールマスタリー","オートミニリカバ","オートミニフレッシュ","ファストキャスト"];
	lvArray=[5,5,10,10,8,5,5,5,10,5,5,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="WT";
	skillArray=["ルーズスピリット","インフェルノ","クリムゾンフレア","ダイヤモンドダスト","コキュートス","トルネード","テンペスト","メテオ","ガイアクラッシュ","ライトニング","ミューオンプラズマ","ソウルドレイン","スロウ","ファストキャスト","エコノミー","ニルヴァーナ"];
	lvArray=[5,10,5,10,5,10,5,10,5,10,5,10,5,5,5,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="MP";
	skillArray=["カバー","マジカルバリア","マジカルチェンジ","マジカルスラッシュ","マジカルスパーク","レインボーフラッシュ","アクセラレーター","イリュージョン","ソードマスタリー","ダブルアタック","根性"];
	lvArray=[5,10,5,10,10,10,5,3,10,5,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="SG";
	skillArray=["アイデンティファイ","バイブルブロウ","プリズムドーン","テラー","スリープ","デス","ペトリファクション","ディスペル","スタブプロテクト","カットプロテクト","ブロウプロテクト","アンプリケイション","サンベール","アクセラレーター","エサルハドン","エコノミー"];
	lvArray=[5,10,10,5,5,5,5,5,5,5,5,10,5,5,5,5];
	createTables(basicJob,job,skillArray,lvArray);
	job="BS";
	skillArray=["ホーリージャッジ","ジャスティス","シャインクルス","フルヒール","サークルナース","ムーンカーテン","インシュランス","メイスマスタリー","ダブルアタック"];
	lvArray=[10,10,10,5,8,5,5,10,5];
	createTables(basicJob,job,skillArray,lvArray);
	
	var trs=document.getElementById("PR").getElementsByTagName("tr");
	var tds=trs[2].getElementsByTagName("td");
	var td0=tds[0];
	var table=document.createElement("table");
	td0.appendChild(table);
	var tr1=document.createElement("tr");
	var tr2=document.createElement("tr");
	table.appendChild(tr1);
	table.appendChild(tr2);
	var td1=document.createElement("td");
	var td2=document.createElement("td");
	tr1.appendChild(td1);
	tr2.appendChild(td2);
	var select=document.createElement("select");
	td1.appendChild(select);
	select.id="character";
	select.onchange=function(){
		elemental(this.options[this.selectedIndex].value);
	};
	var options=["ジーナ","イリーナ","エル","フィオラ","メルヴィ"];
	for(var i=0;i<options.length;i++){
		var option=document.createElement("option");
		select.appendChild(option);
		option.value=i;
		option.innerText=options[i];
	}
	td2.id="charaName";
	var ids=["Gina","Irena","Erthuricia","Fiora","Melvy"];
	var ps=["ファイアブラスト<br/>アイスストーム<br/>サンダーチェイン<br/>エアタービュランス<br/>ストーンシャワー",
	        "エアタービュランス<br/>ストーンシャワー","サンダーチェイン<br/>エアタービュランス",
	        "アイスストーム<br/>サンダーチェイン","ファイアブラスト<br/>アイスストーム"];
	for(var i=0;i<ids.length;i++){
		var p=document.createElement("p");
		td2.appendChild(p);
		p.id=ids[i];
		p.innerHTML=ps[i];
	}
	
	
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
	var td=document.getElementById("charaName");
	var charaName=td.getElementsByTagName("p");
	for(var i=0;i<charaName.length;i++){
		charaName[i].style.display="none";
	}
	document.getElementById(id).style.display="block";
}

function muSpAll(classes){
	var MU_sp=[sp1,sp1,sp1,sp1,sp1,sp1,sp2];
	var MUall=all_sp("MU",MU_sp);
	
	var SO_sp=[sp1,sp1,sp1,sp1,sp1,sp1,sp1,sp2,sp2,sp10];
	var SOall=all_sp("SO",SO_sp);
	
	var EN_sp=[sp2,sp1,sp_arr0,sp2,sp2,sp2,sp2,sp_squ,sp_squ,sp_squ,sp_squ,sp_squ,sp2,sp2,sp2,sp1,sp1,sp1,sp2];
	var ENall=all_sp("EN",EN_sp);
	
	var PR_sp=[sp2,sp2,sp1,sp1,sp_arr1,sp2,sp2,sp2,sp1,sp1,sp1,sp2];
	var PRall=all_sp("PR",PR_sp);
	
	var WT_sp=[sp3,sp1,sp2,sp1,sp2,sp1,sp2,sp1,sp2,sp1,sp2,sp1,sp2,sp2,sp2,sp_squ];
	var WTall=all_sp("WT",WT_sp);
	
	var MP_sp=[sp2,sp1,sp3,sp1,sp1,sp1,sp2,sp3,sp1,sp2,sp2];
	var MPall=all_sp("MP",MP_sp);
	
	var SG_sp=[sp2,sp1,sp1,sp2,sp2,sp2,sp2,sp_squ,sp_squ,sp_squ,sp_squ,sp1,sp2,sp2,sp_squ,sp2];
	var SGall=all_sp("SG",SG_sp);
	
	var BS_sp=[sp1,sp1,sp1,sp2,sp1,sp2,sp2,sp1,sp2];
	var BSall=all_sp("BS",BS_sp);
	
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