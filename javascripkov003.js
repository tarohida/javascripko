
//ジャバスクリプ子のオブジェクトを規定
var jsk = {
    //オンオフ判定
    onoff: false,
    //ユーザの名前格納
    username: 'none',    
    //ユーザのインプット格納
    input: 'none',
    chinchincount : 0,
    eatmenu : ['らぁめん','そうめん','ぴざ','うどん','ちゃぁはん','おこめ','らぁめん','らぁめん','らぁめん','らぁめん','らぁめん'],
    //AA出力系関数
    //ひとつ前のバージョンへ
    Oldversion : function(){
        location.href = 'javascripkov002.html';
    },
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
        var random=Math.random()*100;
        var text;
        switch(comment){
            case 'つかれた': text = 'おつかれさま！'; break;
            case 'おはよう': text = 'おはよう！きょうもいちにちがんばろうね！'; break;
            case 'こんにちは': text = 'こんにちは！'; break;
            case 'こんばんは': text = 'こんばんは！'; break;
            case 'おっぱい': text = 'おっぱい！';jsk.Dgt('opp','おっぱい');break;
            case 'ちんこ': text = 'おちんちん！';jsk.chinchincount += 1; console.log('ちんちんかうんと：'+jsk.chinchincount);jsk.Dgt('chin','ちんこ');break;
            case 'おなかすいた':
                output=jsk.eatmenu[Math.round(random/10)];
                text = output+'がおすすめ！';break;
            case 'あかり':text='わぁいうすしお あかりうすしおだいすき';break;
            case 'ただいま':text='おかえり！';break;
            case 'たのしいね':text='たのしいね！';break;
            case 'いってくるね':text='いってらっしゃい！またね！';
                onoff=0;break;    
            case 'おわり':text='またあそぼうね！';
                onoff=0;break;
        }
        jsk.Dgtp('main',text);
    },
}
var inputArray = new Array; 

//起動処理
jsk.onoff=window.confirm('きどうしていい？');
console.log(jsk.onoff);
if(jsk.onoff===true){
    window.alert('きどうしたよ！');
}else if(jsk.onoff==false){
    window.alert('ふえぇ');
}else{
    window.alert('えらーがはっせいしたよ');
    jsk.onoff=false;
}

var SWContents = function(){
    var text = window.prompt('おはなししようよ！','');
    jsk.Output('wa',text);
    jsk.Dgtp('log',text+'\n');
}

