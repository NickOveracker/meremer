var hiraganaArray = [{char: "あ", value: "a"},  {char: "い", value: "i" },  {char: "う", value: "u"},   {char: "え", value: "e"},  {char: "お", value: "o"}, 
                     {char: "か", value: "ka"}, {char: "き", value: "ki"},  {char: "く", value: "ku"},  {char: "け", value: "ke"}, {char: "こ", value: "ko"}, 
                     {char: "さ", value: "sa"}, {char: "し", value: "shi"}, {char: "す", value: "su"},  {char: "せ", value: "se"}, {char: "そ", value: "so"},  
                     {char: "た", value: "ta"}, {char: "ち", value: "chi"}, {char: "つ", value: "tsu"}, {char: "て", value: "te"}, {char: "と", value: "to"}, 
                     {char: "な", value: "na"}, {char: "に", value: "ni"},  {char: "ぬ", value: "nu"},  {char: "ね", value: "ne"}, {char: "の", value: "no"},
                     {char: "は", value: "ha"}, {char: "ひ", value: "hi"},  {char: "ふ", value: "fu"},  {char: "へ", value: "he"}, {char: "ほ", value: "ho"}, 
                     {char: "ま", value: "ma"}, {char: "み", value: "mi"},  {char: "む", value: "mu"},  {char: "め", value: "me"}, {char: "も", value: "mo"}, 
                     {char: "や", value: "ya"},                           　{char: "ゆ", value: "yu"},                           　{char: "よ", value: "yo"}, 
                     {char: "ら", value: "ra"}, {char: "り", value: "ri"},  {char: "る", value: "ru"},  {char: "れ", value: "re"}, {char: "ろ", value: "ro"}, 
                     {char: "わ", value: "wa"},                                                                              　　　{char: "を", value: "wo"},
                     {char: "が", value: "ga"}, {char: "ぎ", value: "gi"},  {char: "ぐ", value: "gu"},  {char: "げ", value: "ge"}, {char: "ご", value: "go"}, 
                     {char: "ざ", value: "za"}, {char: "じ", value: "ji"},  {char: "ず", value: "zu"},  {char: "ぜ", value: "ze"}, {char: "ぞ", value: "zo"}, 
                     {char: "だ", value: "da"}, {char: "ぢ", value: "ji"},  {char: "づ", value: "zu"},  {char: "で", value: "de"}, {char: "ど", value: "do"},  
                     {char: "ば", value: "ba"}, {char: "び", value: "bi"},  {char: "ぶ", value: "bu"},  {char: "べ", value: "be"}, {char: "ぼ", value: "bo"}, 
                     {char: "ぱ", value: "pa"}, {char: "ぴ", value: "pi"},  {char: "ぷ", value: "pu"},  {char: "ぺ", value: "pe"}, {char: "ぽ", value: "po"},
                     {char: "ん", value: "n"}];

var katakanaArray = [{char: "ア", value: "a"},  {char: "イ", value: "i" },  {char: "ウ", value: "u"},   {char: "エ", value: "e"},  {char: "オ", value: "o"}, 
                     {char: "カ", value: "ka"}, {char: "キ", value: "ki"},  {char: "ク", value: "ku"},  {char: "ケ", value: "ke"}, {char: "コ", value: "ko"}, 
                     {char: "サ", value: "sa"}, {char: "シ", value: "shi"}, {char: "ス", value: "su"},  {char: "セ", value: "se"}, {char: "ソ", value: "so"},  
                     {char: "タ", value: "ta"}, {char: "チ", value: "chi"}, {char: "ツ", value: "tsu"}, {char: "テ", value: "te"}, {char: "ト", value: "to"}, 
                     {char: "ナ", value: "na"}, {char: "ニ", value: "ni"},  {char: "ヌ", value: "nu"},  {char: "ネ", value: "ne"}, {char: "ノ", value: "no"},
                     {char: "ハ", value: "ha"}, {char: "ヒ", value: "hi"},  {char: "フ", value: "fu"},  {char: "ヘ", value: "he"}, {char: "ホ", value: "ho"}, 
                     {char: "マ", value: "ma"}, {char: "ミ", value: "mi"},  {char: "ム", value: "mu"},  {char: "メ", value: "me"}, {char: "モ", value: "mo"}, 
                     {char: "ヤ", value: "ya"},                           　{char: "ユ", value: "yu"},                           　{char: "ヨ", value: "yo"}, 
                     {char: "ラ", value: "ra"}, {char: "リ", value: "ri"},  {char: "ル", value: "ru"},  {char: "レ", value: "re"}, {char: "ロ", value: "ro"}, 
                     {char: "ワ", value: "wa"},                                                                              　　　{char: "ヲ", value: "wo"},
                     {char: "ガ", value: "ga"}, {char: "ギ", value: "gi"},  {char: "グ", value: "gu"},  {char: "ゲ", value: "ge"}, {char: "ゴ", value: "go"}, 
                     {char: "ザ", value: "za"}, {char: "ジ", value: "ji"},  {char: "ズ", value: "zu"},  {char: "ゼ", value: "ze"}, {char: "ゾ", value: "zo"}, 
                     {char: "ダ", value: "da"}, {char: "ヂ", value: "ji"},  {char: "ヅ", value: "zu"},  {char: "デ", value: "de"}, {char: "ド", value: "do"},  
                     {char: "バ", value: "ba"}, {char: "ビ", value: "bi"},  {char: "ブ", value: "bu"},  {char: "ベ", value: "be"}, {char: "ボ", value: "bo"}, 
                     {char: "パ", value: "pa"}, {char: "ピ", value: "pi"},  {char: "プ", value: "pu"},  {char: "ペ", value: "pe"}, {char: "ポ", value: "po"},
                     {char: "ン", value: "n"}];

var dblHiraganaArray = [{char: "きゃ", value: "kya"}, {char: "きゅ", value: "kyu"}, {char: "きょ", value: "kyo"}, 
                        {char: "しゃ", value: "sha"}, {char: "しゅ", value: "shu"}, {char: "しょ", value: "sho"}, 
                        {char: "ちゃ", value: "cha"}, {char: "ちゅ", value: "chu"}, {char: "ちょ", value: "cho"}, 
                        {char: "にゃ", value: "nya"}, {char: "にゅ", value: "nyu"}, {char: "にょ", value: "nyo"},
                        {char: "ひゃ", value: "hya"}, {char: "ひゅ", value: "hyu"}, {char: "ひょ", value: "hyo"}, 
                        {char: "みゃ", value: "mya"}, {char: "みゅ", value: "myu"}, {char: "みょ", value: "myo"},
                        {char: "りゃ", value: "rya"}, {char: "りゅ", value: "ryu"}, {char: "りょ", value: "ryo"}, 
                        {char: "ぎゃ", value: "gya"}, {char: "ぎゅ", value: "gyu"}, {char: "ぎょ", value: "gyo"}, 
                        {char: "じゃ", value: "ja"},  {char: "じゅ", value: "ju"},  {char: "じょ", value: "jo"}, 
                        {char: "ぢゃ", value: "ja"},  {char: "ぢゅ", value: "ju"},  {char: "ぢょ", value: "jo"},
                        {char: "びゃ", value: "bya"}, {char: "びゅ", value: "byu"}, {char: "びょ", value: "byo"},
                        {char: "ぴゃ", value: "pya"}, {char: "ぴゅ", value: "pyu"}, {char: "ぴょ", value: "pyo"}];
                    
var dblKatakanaArray = [{char: "キャ", value: "kya"}, {char: "キュ", value: "kyu"}, {char: "キョ", value: "kyo"}, 
                        {char: "シャ", value: "sha"}, {char: "シュ", value: "shu"}, {char: "ショ", value: "sho"}, 
                        {char: "チャ", value: "cha"}, {char: "チュ", value: "chu"}, {char: "チョ", value: "cho"}, 
                        {char: "ニャ", value: "nya"}, {char: "ニュ", value: "nyu"}, {char: "ニョ", value: "nyo"},
                        {char: "ヒャ", value: "hya"}, {char: "ヒュ", value: "hyu"}, {char: "ヒョ", value: "hyo"}, 
                        {char: "ミャ", value: "mya"}, {char: "ミュ", value: "myu"}, {char: "ミョ", value: "myo"},
                        {char: "リャ", value: "rya"}, {char: "リュ", value: "ryu"}, {char: "リョ", value: "ryo"}, 
                        {char: "ギャ", value: "gya"}, {char: "ギュ", value: "gyu"}, {char: "ギョ", value: "gyo"}, 
                        {char: "ジャ", value: "ja"},  {char: "ジュ", value: "ju"},  {char: "ジョ", value: "jo"}, 
                        {char: "ヂャ", value: "ja"},  {char: "ヂュ", value: "ju"},  {char: "ヂョ", value: "jo"},
                        {char: "ビャ", value: "bya"}, {char: "ビュ", value: "byu"}, {char: "ビョ", value: "byo"},
                        {char: "ピャ", value: "pya"}, {char: "ピュ", value: "pyu"}, {char: "ピョ", value: "pyo"}];

var extKatakanaArray = [{char: "ヴァ", value: "va"}, {char: "ツァ", value: "tsa"}, {char: "ファ", value: "fa"}, {char: "ヴャ", value: "vya"},  
                        {char: "ウィ", value: "wi"}, {char: "ヴィ", value: "vi"},  {char: "ティ", value: "ti"}, {char: "ディ", value: "di"},  {char: "ツィ", value: "tsi"}, {char: "フィ", value: "fi"}, 
                        {char: "ヴ", value: "vu"},   {char: "トゥ", value: "tu"},  {char: "ドゥ", value: "du"}, {char: "ヴュ", value: "vyu"}, {char: "テュ", value: "tyu"}, {char: "デュ", value: "dyu"}, {char: "フュ", value: "fyu"}, 
                        {char: "イェ", value: "ye"}, {char: "ウェ", value: "we"},  {char: "ヴェ", value: "ve"}, {char: "シェ", value: "she"}, {char: "ジェ", value: "je"},  {char: "チェ", value: "che"}, {char: "ツェ", value: "tse"}, {char: "フェ", value: "fe"}, 
                        {char: "ウォ", value: "wo"}, {char: "ヴォ", value: "vo"},  {char: "ツォ", value: "tso"}, {char: "フォ", value: "fo"}, {char: "ヴョ", value: "vyo"}];

var kanaArray = [];

function randomize(array){
    var index = array.length, tempVal, randomIndex;
    while (index !== 0){
        randomIndex = Math.floor(Math.random() * index);
        index -=1;
        tempVal = array[index];
        array[index] = array[randomIndex];
        array[randomIndex] = tempVal;
    }
    return array;
}

let correct = [];
let incorrect = [];
let helpCounter = 0;
let progressCount = 0;
var hiragana = false;
var katakana = false;
var dblhiragana = false;
var dblkatakana = false;
var extkatakana = false;
let box = document.getElementById("box");
let answer = document.getElementById("answer");
let progress = document.getElementById("progress");
let char = document.getElementById("kana");
let help = document.getElementById("help");
let options = document.getElementsByClassName("options");
let gameover = document.getElementsByClassName("gameover");

function helpClicked(char){
    answer.value = char;
    answer.focus();
    helpCounter++;
}

start = async(callback)=>{
    Array.from(options).forEach(option=>{option.style.setProperty("display", "none")});
    progress.style.setProperty("display", "block");
    help.style.setProperty("display", "block");
    char.style.setProperty("display", "block");
    answer.style.setProperty("display", "inline");
    for(const kana of kanaArray){
        progressCount++;
        progress.innerText = `${progressCount}/${kanaArray.length}`;
        setTimeout(()=>{
            box.style.setProperty('animation', 'none');
            answer.style.setProperty('border-bottom', '2px solid #6665d2')}, 300);
        await help.setAttribute("onclick", `helpClicked('${kana.value}')`);
        await new Promise(resolve=>{
            char.innerText = kana.char;
            answer.value = '';
            answer.focus();
            answer.addEventListener("keyup", (e)=>{
                if(e.keyCode === 13){
                    resolve();
                }
            });
        }).then(()=>{
            if(answer.value == kana.value){
                correct.push(kana.char);
                console.log('correct');
            } else {
                incorrect.push(kana.char);
                console.log('incorrect');
                box.style.setProperty('animation', 'shake 0.7s cubic-bezier(.36,.07,.19,.97) both');
                answer.style.setProperty('border-bottom', '2px solid red');
            }
        });
    }
    callback();
};

document.getElementById("hiragana").addEventListener("click", ()=>{
    if(hiragana){
        hiragana = false;
        document.getElementById("hiragana").style.setProperty('background-color', '#363636');
    } else {
        hiragana = true;
        document.getElementById("hiragana").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("katakana").addEventListener("click", ()=>{
    if(katakana){
        katakana = false;
        document.getElementById("katakana").style.setProperty('background-color', '#363636');
    } else {
        katakana = true;
        document.getElementById("katakana").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("dblhiragana").addEventListener("click", ()=>{
    if(dblhiragana){
        dblhiragana = false;
        document.getElementById("dblhiragana").style.setProperty('background-color', '#363636');
    } else {
        dblhiragana = true;
        document.getElementById("dblhiragana").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("dblkatakana").addEventListener("click", ()=>{
    if(dblkatakana){
        dblkatakana = false;
        document.getElementById("dblkatakana").style.setProperty('background-color', '#363636');
    } else {
        dblkatakana = true;
        document.getElementById("dblkatakana").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("extkatakana").addEventListener("click", ()=>{
    if(extkatakana){
        extkatakana = false;
        document.getElementById("extkatakana").style.setProperty('background-color', '#363636');
    } else {
        extkatakana = true;
        document.getElementById("extkatakana").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("start").addEventListener("click", ()=>{
    if(hiragana){
        kanaArray.push.apply(kanaArray, hiraganaArray);
    }
    if(katakana){
        kanaArray.push.apply(kanaArray, katakanaArray);
    }
    if(dblhiragana){
        kanaArray.push.apply(kanaArray, dblHiraganaArray);
    }
    if(dblkatakana){
        kanaArray.push.apply(kanaArray, dblKatakanaArray);
    }
    if(extkatakana){
        kanaArray.push.apply(kanaArray, extKatakanaArray);
    }
    if(kanaArray.length > 0){
        randomize(kanaArray);
        start(()=>{
            char.style.setProperty('display', 'none');
            answer.style.setProperty('display', 'none');
            help.style.setProperty('display', 'none');
            progress.style.setProperty('display', 'none');
            Array.from(gameover).forEach(stats => {
                stats.style.setProperty('display', 'inline');
            });
            document.getElementById("correct").innerText = `Correct: ${correct.length}`;
            document.getElementById("incorrect").innerText = `Incorrect: ${incorrect.length}`;
            document.getElementById("helpCount").innerText = `Times used help: ${helpCounter}`
            document.getElementById("refresh").addEventListener("click", ()=>{location.reload()});
        });
    }
});