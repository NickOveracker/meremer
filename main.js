var aSeries    = [{char: "ア", value: "a"}, {char: "イ", value: "i" }, {char: "ウ", value: "u"}, {char: "エ", value: "e"}, {char: "オ", value: "o"}];
var kSeries    = [{char: "カ", value: "ka"}, {char: "キ", value: "ki"}, {char: "ク", value: "ku"}, {char: "ケ", value: "ke"}, {char: "コ", value: "ko"}];
var sSeries    = [{char: "サ", value: "sa"}, {char: "シ", value: "si"}, {char: "ス", value: "su"}, {char: "セ", value: "se"}, {char: "ソ", value: "so"}];
var tSeries    = [{char: "タ", value: "ta"}, {char: "トゥ", value: "tu"}, {char: "テ", value: "te"}, {char: "ト", value: "to"}];
var cSeries    = [{char: "チャ", value: "ca"}, {char: "チ", value: "ci"}, {char: "チュ", value: "cu"}, {char: "チェ", value: "ce"}, {char: "チョ", value: "co"}];
var nSeries    = [{char: "ナ", value: "na"}, {char: "ニ", value: "ni"}, {char: "ヌ", value: "nu"}, {char: "ネ", value: "ne"}, {char: "ノ", value: "no"}];
var hSeries    = [{char: "ハ", value: "ha"}, {char: "ヒ", value: "hi"}, {char: "フ", value: "hu"}, {char: "ヘ", value: "he"}, {char: "ホ", value: "ho"}];
var pSeries    = [{char: "パ", value: "pa"}, {char: "ピ", value: "pi"}, {char: "プ", value: "pu"}, {char: "ペ", value: "pe"}, {char: "ポ", value: "po"}];
var mSeries    = [{char: "マ", value: "ma"}, {char: "ミ", value: "mi"}, {char: "ム", value: "mu"}, {char: "メ", value: "me"}, {char: "モ", value: "mo"}];
var ySeries    = [{char: "ヤ", value: "ya"}, {char: "ユ", value: "yu"}, {char: "イェ", value: "ye"}, {char: "ヨ", value: "yo"}];
var rSeries    = [{char: "ラ", value: "ra"}, {char: "リ", value: "ri"}, {char: "ル", value: "ru"}, {char: "レ", value: "re"}, {char: "ロ", value: "ro"}];
var wSeries    = [{char: "ワ", value: "wa"},  {char: "ウェ", value: "we"}, {char: "ウォ", value: "wo"}];
var consonants = [{char: "～ㇰ", value: "k"}, {char: "～ㇱ", value: "s"}, {char: "～ㇺ", value: "m"}, {char: "～ㇻ", value: "r"}, {char: "～ㇼ", value: "r"}, {char: "～ㇽ", value: "r"}, {char: "～ㇾ", value: "r"}, {char: "～ㇿ", value: "r"}, {char: "～ン", value: "m"},  {char: "～ッ", value: "t" },  {char: "～イ", value: "y" }, {char: "～ウ", value: "w"}];

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
var aSeriesSelected    = false;
var kSeriesSelected    = false;
var sSeriesSelected    = false;
var tSeriesSelected    = false;
var cSeriesSelected    = false;
var nSeriesSelected    = false;
var hSeriesSelected    = false;
var pSeriesSelected    = false;
var mSeriesSelected    = false;
var ySeriesSelected    = false;
var rSeriesSelected    = false;
var wSeriesSelected    = false;
var consonantsSelected = false;
var helpEnabled = false;
let box = document.getElementById("box");
let answer = document.getElementById("answer");
let progress = document.getElementById("progress");
let char = document.getElementById("kana");
let help = document.getElementById("help");
let options = document.getElementsByClassName("options");
let gameover = document.getElementsByClassName("gameover");

function helpClicked(char){
    /* Only increment counter the first time the help button is clicked. */
    if(!helpEnabled)
    {
      helpEnabled = true;
      helpCounter++;
    }
    answer.value = char;
    answer.focus();
}

start = async(callback)=>{
    Array.from(options).forEach(option=>{option.style.setProperty("display", "none")});
    progress.style.setProperty("display", "block");
    help.style.setProperty("display", "block");
    char.style.setProperty("display", "block");
    answer.style.setProperty("display", "inline");
    for(const kana of kanaArray){
        progressCount++;
        helpEnabled = false;
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
        }).then(async()=>{
            if(answer.value.toLowerCase().trim() == kana.value){
                correct.push(kana.char);
                console.log('correct');
            } else {
                incorrect.push(kana.char);
                answer.value = kana.value;
                console.log('incorrect');
                box.style.setProperty('animation', 'shake 0.7s cubic-bezier(.36,.07,.19,.97) both');
                answer.style.setProperty('border-bottom', '2px solid red');
              
                await new Promise(resolve=>{
                  answer.focus();
                  answer.addEventListener("keyup", (e)=>{
                      if(e.keyCode === 13){
                          resolve();
                      }
                  });
                });
            }
        });
    }
    callback();
};

document.getElementById("aSeries").addEventListener("click", ()=>{
    if(aSeriesSelected){
        aSeriesSelected = false;
        document.getElementById("aSeries").style.setProperty('background-color', '#363636');
    } else {
        aSeriesSelected = true;
        document.getElementById("aSeries").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("kSeries").addEventListener("click", ()=>{
    if(kSeriesSelected){
        kSeriesSelected = false;
        document.getElementById("kSeries").style.setProperty('background-color', '#363636');
    } else {
        kSeriesSelected = true;
        document.getElementById("kSeries").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("sSeries").addEventListener("click", ()=>{
    if(sSeriesSelected){
        sSeriesSelected = false;
        document.getElementById("sSeries").style.setProperty('background-color', '#363636');
    } else {
        sSeriesSelected = true;
        document.getElementById("sSeries").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("tSeries").addEventListener("click", ()=>{
    if(tSeriesSelected){
        tSeriesSelected = false;
        document.getElementById("tSeries").style.setProperty('background-color', '#363636');
    } else {
        tSeriesSelected = true;
        document.getElementById("tSeries").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("cSeries").addEventListener("click", ()=>{
    if(cSeriesSelected){
        cSeriesSelected = false;
        document.getElementById("cSeries").style.setProperty('background-color', '#363636');
    } else {
        cSeriesSelected = true;
        document.getElementById("cSeries").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("nSeries").addEventListener("click", ()=>{
    if(nSeriesSelected){
        nSeriesSelected = false;
        document.getElementById("nSeries").style.setProperty('background-color', '#363636');
    } else {
        nSeriesSelected = true;
        document.getElementById("nSeries").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("hSeries").addEventListener("click", ()=>{
    if(hSeriesSelected){
        hSeriesSelected = false;
        document.getElementById("hSeries").style.setProperty('background-color', '#363636');
    } else {
        hSeriesSelected = true;
        document.getElementById("hSeries").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("pSeries").addEventListener("click", ()=>{
    if(pSeriesSelected){
        pSeriesSelected = false;
        document.getElementById("pSeries").style.setProperty('background-color', '#363636');
    } else {
        pSeriesSelected = true;
        document.getElementById("pSeries").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("mSeries").addEventListener("click", ()=>{
    if(mSeriesSelected){
        mSeriesSelected = false;
        document.getElementById("mSeries").style.setProperty('background-color', '#363636');
    } else {
        mSeriesSelected = true;
        document.getElementById("mSeries").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("ySeries").addEventListener("click", ()=>{
    if(ySeriesSelected){
        ySeriesSelected = false;
        document.getElementById("ySeries").style.setProperty('background-color', '#363636');
    } else {
        ySeriesSelected = true;
        document.getElementById("ySeries").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("rSeries").addEventListener("click", ()=>{
    if(rSeriesSelected){
        rSeriesSelected = false;
        document.getElementById("rSeries").style.setProperty('background-color', '#363636');
    } else {
        rSeriesSelected = true;
        document.getElementById("rSeries").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("wSeries").addEventListener("click", ()=>{
    if(wSeriesSelected){
        wSeriesSelected = false;
        document.getElementById("wSeries").style.setProperty('background-color', '#363636');
    } else {
        wSeriesSelected = true;
        document.getElementById("wSeries").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("consonants").addEventListener("click", ()=>{
    if(consonantsEnabled){
        consonantsEnabled = false;
        document.getElementById("consonants").style.setProperty('background-color', '#363636');
    } else {
        consonantsEnabled = true;
        document.getElementById("consonants").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("start").addEventListener("click", ()=>{
    if(aSeriesSelected){
        kanaArray.push.apply(kanaArray, aSeries);
    }
    if(kSeriesSelected){
        kanaArray.push.apply(kanaArray, kSeries);
    }
    if(sSeriesSelected){
        kanaArray.push.apply(kanaArray, sSeries);
    }
    if(tSeriesSelected){
        kanaArray.push.apply(kanaArray, tSeries);
    }
    if(cSeriesSelected){
        kanaArray.push.apply(kanaArray, cSeries);
    }
    if(nSeriesSelected){
        kanaArray.push.apply(kanaArray, nSeries);
    }
    if(hSeriesSelected){
        kanaArray.push.apply(kanaArray, hSeries);
    }
    if(pSeriesSelected){
        kanaArray.push.apply(kanaArray, pSeries);
    }
    if(mSeriesSelected){
        kanaArray.push.apply(kanaArray, mSeries);
    }
    if(ySeriesSelected){
        kanaArray.push.apply(kanaArray, ySeries);
    }
    if(rSeriesSelected){
        kanaArray.push.apply(kanaArray, rSeries);
    }
    if(wSeriesSelected){
        kanaArray.push.apply(kanaArray, wSeries);
    }
    if(consonantsSelected){
        kanaArray.push.apply(kanaArray, consonants);
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
