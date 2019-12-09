
//ジャバスクリプ子のオブジェクトを規定
var jsk = {
    //オンオフ判定
    onoff: false,
    //ユーザの名前格納
    username: 'none',    
    //ユーザのインプット格納
    input: 'none',
    //jsk.text('ちんこ')の回数格納用
    chinchincount : 0,
    //jsk.text('おなかすいた')の選択肢
    eatmenu : ['らぁめん','そうめん','ぴざ','うどん','ちゃぁはん','おこめ','らぁめん','らぁめん','らぁめん','らぁめん','らぁめん'],
    comments : ['ひだたろうさんはいけめんだよ！','これみてみて！ => https://www.youtube.com/watch?v=EQyjnDQvRkU','これおすすめだよ！ => https://www.youtube.com/watch?v=0i7408PdmLE','ひだたろうさんはいけめんだよ！','これみてみて！ => https://www.youtube.com/watch?v=EQyjnDQvRkU','これおすすめだよ！ => https://www.youtube.com/watch?v=0i7408PdmLE','ひだたろうさんはいけめんだよ！','これみてみて！ => https://www.youtube.com/watch?v=EQyjnDQvRkU','これおすすめだよ！ => https://www.youtube.com/watch?v=0i7408PdmLE','ver0.0.1はこんそーるでかいわするけいしきなんだー。「おわり」ってうつとしょきのかおがみれるよ！'],
    
    getDate : function(arg){
        var date = new Date();
        switch(arg){
            case 'date' : return 'きょうは'+bango(date.getFullYear())+'ねん'+bango(date.getMonth()+1)+'がつ'+bango(date.getDate())+'にちだよ！';break;
            case 'time' : return 'いまは'+bango(date.getHours())+'じ'+bango(date.getMinutes())+'ふんだよ！';break;
            default: window.alert('ないぶえらー in jsk.getDate()メソッド');
        }
    },
    //ひとつ前のバージョンへ移行する処理
    oldversion : function(){
        location.href = 'javascripkov004.html';
    },
    
    //起動処理
    turnon: function(){
        jsk.onoff=window.confirm('きどうしていい？');
        if(jsk.onoff===true){
            window.alert('きどうしたよ！');
        }else if(jsk.onoff==false){
            window.alert('ふえぇ');
        }else{
            window.alert('えらーがはっせいしたよ');
            jsk.onoff=false;
        }
    },
    //出力処理
    Output : function(aa,text){
        jsk.AA(aa);
        jsk.text(text);
    },
    Dgt : function(id,text){
        document.getElementById(id).textContent = text;
    },
    Dgtp : function(id,text){
        document.getElementById(id).textContent += text;
    },
    AA : function(arg){
        var aa;
        switch(arg){
            case 'wa': aa = 'J(*･ヮ･)s<';break;
        }
        jsk.Dgt('main',aa);
    },
    //応答系関数
    text : function(comment){
        var arandom= function(array){
            return Math.floor(Math.random()*array.length);
            //配列の全要素をランダムに出力するarandom関数
        }
        var text;
        switch(comment){
            case 'つかれた': text = 'おつかれさま！'; break;
            case 'おはよう': text = 'おはよう！きょうもいちにちがんばろうね！'; break;
            case 'こんにちは': text = 'こんにちは！'; break;
            case 'こんばんは': text = 'こんばんは！'; break;
            case 'おっぱい': text = 'おっぱい！';jsk.Dgt('opp','おっぱい');break;
            case 'ちんこ': text = 'おちんちん！';jsk.chinchincount += 1; console.log('ちんちんかうんと：'+jsk.chinchincount);jsk.Dgt('chin','ちんこ');break;
            case 'おなかすいた':
                output=jsk.eatmenu[arandom(jsk.eatmenu)];
                text = output+'がおすすめ！';break;
            case 'あかり':text='わぁいうすしお あかりうすしおだいすき';break;
            case 'かわいいね':text='ありがと！';break;
            case 'ただいま':text='おかえり！';break;
            case 'たのしいね':text='たのしいね！';break;
            case 'ねむい':text='おつかれさま！';break;
            case '吉居':text='それについて教えてください';break;
            case '変態':text='へんたい';break;
            case 'きょうはなんにち？':text=jsk.getDate('date');break;
            case 'いまなんじ？':text=jsk.getDate('time');break;
            case 'いってくるね':text='いってらっしゃい！またね！';
                onoff=0;break;    
            case 'おわり':text='またあそぼうね！';
                onoff=0;break;
            case '旧バージョン':window.alert('ふるいばぁじょんにいどうするよ！'); 
            jsk.oldversion(); break;
            case 'オナニーカウンター':text='おなにぃかうんたぁだね！';document.getElementById('ocount').style.display='inline';break;
            default:text ='関係ないけど'+jsk.comments[arandom(jsk.comments)];
        }
        jsk.Dgtp('main',text);
    },
}

//カウントダウン処理
//目的の時間をDateObjectとして投げれば、現在時刻との差が返ってきます。
var hourtimer = function(due){
    var now = new Date();
    
    var rest = due.getTime() - now.getTime();
    //console.log(rest);
    if(rest < 0)rest += 86400000;
    //console.log(rest);
    var msec = Math.floor(rest % 1000 );
    var sec = Math.floor(rest / 1000 % 60);
    var min = Math.floor(rest / 1000 / 60) % 60;
    var hours = Math.floor(rest / 1000 / 60 / 60) % 24;
    if(hours < 0 ){hours = hours + 24;}
    var count = [hours, min, sec,msec];
    
    return count;
}
//カウントダウン出力処理
//目的の時間をDateObject型として投げれば、HTML文書における'hour','min,'sec','msec'のidの箇所に現在時刻との差を出力します。
var hourtimerview = function(due){
    var htv = hourtimer(due);
    document.getElementById('hour').textContent = htv[0];
    document.getElementById('min').textContent= htv[1];
    document.getElementById('sec').textContent = htv[2];
    document.getElementById('msec').textContent = htv[3];
}

//再計算用Function(countdown用)
var recalc = function(){
    var onany = new Date();
    onany.setHours(7);
    onany.setMinutes(21);
    onany.setSeconds(59);
    onany.setMilliseconds(59);
    hourtimerview(onany);
    refresh();
    //refreshがミソです。
}

var refresh = function(){
    setTimeout(recalc,1);
}
//ひらがな変換ライブラリ by createrish
var UNIT = [
	[
		[""],
		["いち"],
		["に"],
		["さん"],
		["よん"],
		["ご"],
		["ろく"],
		["なな"],
		["はち"],
		["きゅう"]
	],
	[
		[],
		["じゅう"],
		["にじゅう"],
		["さんじゅう"],
		["よんじゅう"],
		["ごじゅう"],
		["ろくじゅう"],
		["ななじゅう"],
		["はちじゅう"],
		["きゅうじゅう"],
	],
	[
		[],
		["ひゃく"],
		["にひゃく"],
		["さんびゃく"],
		["よんひゃく"],
		["ごひゃく"],
		["ろっぴゃく"],
		["ななひゃく"],
		["はっぴゃく"],
		["きゅうひゃく"]
	],
	[
		[],
		["せん"],
		["にせん"],
		["さんぜん"],
		["よんせん"],
		["ごせん"],
		["ろくせん"],
		["ななせん"],
		["はっせん"],
		["きゅうせん"]
	],
	[
		[],
		["まん"],
		["おく"],
		["ちょう"],
		["けい"],
		["がい"],
		["じょ"],
		["じょう"],
		["こう"],
		["かん"],
		["せい"],
		["さい"],
		["ごく"],
		["ごうがしゃ"],
		["あそうぎ"],
		["なゆた"],
		["ふかしぎ"],
		["むりょうたいすう"]
	]
	
]
function bango(num) {
	
	var tokens = [];
	do {
		tokens.push(num % 10000);
		num = (num / 10000) | 0;
	} while(num);
	var read = [];
	tokens.forEach(function(num,i){
		read.unshift.apply(read,UNIT[4][i]);
		read.unshift.apply(read,UNIT[0][num % 10]);
		num = (num / 10) | 0;
		read.unshift.apply(read,UNIT[1][num % 10]);
		num = (num / 10) | 0;
		read.unshift.apply(read,UNIT[2][num % 10]);
		num = (num / 10) | 0;
		read.unshift.apply(read,UNIT[3][num % 10]);
	});
	return read.toString().replace(/,/g,"");
}
//入力処理 
document.getElementById('inputform').onsubmit = function(){
    var text =document.getElementById('inputform').input.value;
    jsk.Output('wa',text);
    jsk.Dgtp('log',text + '\n');
    return false;
}

jsk.turnon();
recalc();
/*var date = new Date(1970,1,1,0,0,0).getTime();
console.log(date);
var date2 = new Date(1970,1,2,0,0,0).getTime();
console.log(date2 - date); */
//1秒 = 60milisec
//1分 = 3600milisec = 60sec
