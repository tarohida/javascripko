let onoff=window.confirm('きどうしていい？');
let tintin=0;
if(onoff==1){
    window.alert('きどうしたよ！');
}else if(onoff==0){
    window.alert('ふえぇ');
}else{
    window.alert('えらーがはっせいしたよ');
    onoff=0;
}
while(onoff==1){
    comment=window.prompt('','');
    let random=Math.random()*100;
    switch(comment){
        case 'つかれた':
            console.log('おつかれさま！');
            break;
        case 'おはよう':
            console.log('おはよう！きょうもいちにちがんばろうね！');
            break;
        case 'こんにちは':
            console.log('こんにちは！');
            break;
        case 'こんばんは':
            console.log('こんばんは！');
            break;
        case 'おっぱい':
            console.log('おっぱい！');
            break;
        case 'ちんこ':
            console.log('おちんちん！');
            tintin=tintin+1;
            console.log('ちんちんかうんと：'+tintin);
            break;
        case 'おなかすいた':
            eat=['らぁめん','そうめん','ぴざ','うどん','ちゃぁはん','おこめ','らぁめん','らぁめん','らぁめん','らぁめん','らぁめん'];
            let output=eat[Math.round(random/10)];
            console.log(output+'がおすすめ！');
            break;
        case 'あかり':
            console.log('わぁいうすしお あかりうすしおだいすき');
            break;
        case 'ただいま':
            console.log('おかえり！');
            break;
        case 'いってくるね':
            window.alert('いってらっしゃい！またね！');
            onoff=0;
            break;    
        case 'おわり':
            console.log('またあそぼうね！');
            onoff=0;
            break;
    }
}



