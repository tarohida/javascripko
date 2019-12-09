
//ジャバスクリプ子のオブジェクトを規定
var jsk = {
    //オンオフ判定
    onoff: false,
    //ユーザの名前格納
    username: 'none',    
    //ユーザのインプット格納
    input: 'none',
    //ひとつ前のバージョンへ
    oldversion : function(){
        location.href = 'javascripkov001.html';
    }
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
//関数定義
//AA出力系関数
var AA = function(arg){
    switch(arg){
        case 'talk':
            document.getElementById('AA').textContent = 'J(*･ヮ･)s<'
            break;
              }
}
//応答系関数
var text = function(comment){
    let random=Math.random()*100;
    
    console.log(comment);
    switch(comment){
        case 'つかれた':
            document.getElementById('AA').textContent += 'おつかれさま！';
            break;
        case 'おはよう':
            document.getElementById('AA').textContent += 'おはよう！きょうもいちにちがんばろうね！';
            break;
        case 'こんにちは':
            document.getElementById('AA').textContent += 'こんにちは！';
            break;
        case 'こんばんは':
            document.getElementById('AA').textContent += 'こんばんは！';
            break;
        case 'おっぱい':
            document.getElementById('AA').textContent += 'おっぱい！';
            break;
        case 'ちんこ':
            document.getElementById('AA').textContent += 'おちんちん！';
            tintin=tintin+1;
            console.log('ちんちんかうんと：'+tintin);
            break;
        case 'おなかすいた':
            eat=['らぁめん','そうめん','ぴざ','うどん','ちゃぁはん','おこめ','らぁめん','らぁめん','らぁめん','らぁめん','らぁめん'];
            let output=eat[Math.round(random/10)];
            document.getElementById('AA').textContent += output+'がおすすめ！';
            break;
        case 'あかり':
            document.getElementById('AA').textContent += 'わぁいうすしお あかりうすしおだいすき';
            break;
        case 'ただいま':
            document.getElementById('AA').textContent += 'おかえり！';
            break;
        case 'たのしいね':
            document.getElementById('AA').textContent += 'たのしいね！';
            break;
        case 'いってくるね':
            document.getElementById('AA').textContent += 'いってらっしゃい！またね！';
            onoff=0;
            break;    
        case 'おわり':
            document.getElementById('AA').textContent += 'またあそぼうね！';
            onoff=0;
            break;
    }
}


//ゆーざのいんぷっとをしょり


//メイン処理
var chinchin;
while(jsk.onoff===true){
    alert('正常');
    AA('talk');
    text(window.prompt('','こんにちは'));
    break;
}
