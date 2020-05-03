var katakanaArray = [{char: "ア", value: "a"}, {char: "イ (vowel)", value: "i" }, {char: "ウ (vowel)", value: "u"}, {char: "エ", value: "e"}, {char: "オ", value: "o"}, 
                     {char: "カ", value: "ka"}, {char: "キ", value: "ki"}, {char: "ク", value: "ku"}, {char: "ケ", value: "ke"}, {char: "コ", value: "ko"}, 
                     {char: "サ", value: "sa"}, {char: "シ", value: "si"}, {char: "ス", value: "su"}, {char: "セ", value: "se"}, {char: "ソ", value: "so"},  
                     {char: "タ", value: "ta"}, {char: "ツゥ", value: "tu"}, {char: "テ", value: "te"}, {char: "ト", value: "to"}, 
                     {char: "チャ", value: "ca"}, {char: "チ", value: "ci"}, {char: "チュ", value: "cu"}, {char: "チェ", value: "ce"}, {char: "チョ", value: "co"},
                     {char: "ナ", value: "na"}, {char: "ニ", value: "ni"}, {char: "ヌ", value: "nu"}, {char: "ネ", value: "ne"}, {char: "ノ", value: "no"},
                     {char: "ハ", value: "ha"}, {char: "ヒ", value: "hi"}, {char: "フ", value: "hu"}, {char: "ヘ", value: "he"}, {char: "ホ", value: "ho"}, 
                     {char: "パ", value: "pa"}, {char: "ピ", value: "pi"}, {char: "プ", value: "pu"}, {char: "ペ", value: "pe"}, {char: "ポ", value: "po"},
                     {char: "マ", value: "ma"}, {char: "ミ", value: "mi"}, {char: "ム", value: "mu"}, {char: "メ", value: "me"}, {char: "モ", value: "mo"}, 
                     {char: "ヤ", value: "ya"}, {char: "ユ", value: "yu"}, {char: "イェ", value: "ye"}, {char: "ヨ", value: "yo"}, 
                     {char: "ラ", value: "ra"}, {char: "リ", value: "ri"}, {char: "ル", value: "ru"}, {char: "レ", value: "re"}, {char: "ロ", value: "ro"}, 
                     {char: "ワ", value: "wa"},  {char: "ウェ", value: "we"}, {char: "ウォ", value: "wo"},
                     {char: "ン", value: "m"},  {char: "イ (consonant)", value: "y" }, {char: "ウ (consonant)", value: "w"},
];

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
var katakana = true;
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

document.getElementById("katakana").addEventListener("click", ()=>{
    if(katakana){
        katakana = false;
        document.getElementById("katakana").style.setProperty('background-color', '#363636');
    } else {
        katakana = true;
        document.getElementById("katakana").style.setProperty('background-color', '#6665d2');
    }
});

// We don't need the initial menu at this point, but uncomment this when more options are added.
/*
document.getElementById("start").addEventListener("click", ()=>{
*/
    if(katakana){
        kanaArray.push.apply(kanaArray, katakanaArray);
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
/*
});
*/
