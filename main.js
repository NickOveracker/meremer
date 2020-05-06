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
var consonants = [{char: "～ㇰ", value: "k"}, {char: "～ㇱ", value: "s"}, {char: "～ㇺ", value: "m"}, {char: "～ㇻ", value: "r"}, {char: "～ㇼ", value: "r"}, {char: "～ㇽ", value: "r"}, {char: "～ㇾ", value: "r"}, {char: "～ㇿ", value: "r"}, {char: "～ン", value: "n"},  {char: "～ッ", value: "t" },  {char: "～イ", value: "y" }, {char: "～ウ", value: "w"}];

aClosedSeries  = [{char: "アㇰ", value: "ak"}, {char: "アㇱ", value: "as"}, {char: "アㇺ", value: "am"}, {char: "アン", value: "an"}, {char: "アッ", value: "at"}, {char: "アイ", value: "ay"}, {char: "アウ", value: "aw"}, {char: "イㇰ", value: "ik"}, {char: "イㇱ", value: "is"}, {char: "イㇺ", value: "im"}, {char: "イン", value: "in"}, {char: "イッ", value: "it"}, /*{char: "イイ", value: "iy"},*/ {char: "イウ", value: "iw"}, {char: "ウㇰ", value: "uk"}, {char: "ウㇱ", value: "us"}, {char: "ウㇺ", value: "um"}, {char: "ウン", value: "un"}, {char: "ウッ", value: "ut"}, {char: "ウイ", value: "uy"}, /*{char: "ウウ", value: "uw"},*/ {char: "エㇰ", value: "ek"}, {char: "エㇱ", value: "es"}, {char: "エㇺ", value: "em"}, {char: "エン", value: "en"}, {char: "エッ", value: "et"}, {char: "エイ", value: "ey"}, {char: "エウ", value: "ew"}, {char: "オㇰ", value: "ok"}, {char: "オㇱ", value: "os"}, {char: "オㇺ", value: "om"}, {char: "オン", value: "on"}, {char: "オッ", value: "ot"}, {char: "オイ", value: "oy"}, {char: "オウ", value: "ow"}, {char: "アㇻ", value: "ar"}, {char: "イㇼ", value: "ir"}, {char: "ウㇽ", value: "ur"}, {char: "エㇾ", value: "er"}, {char: "オㇿ", value: "or"}];

kClosedSeries  = [{char: "カㇰ", value: "kak"}, {char: "カㇱ", value: "kas"}, {char: "カㇺ", value: "kam"}, {char: "カン", value: "kan"}, {char: "カッ", value: "kat"}, {char: "カイ", value: "kay"}, {char: "カウ", value: "kaw"}, {char: "キㇰ", value: "kik"}, {char: "キㇱ", value: "kis"}, {char: "キㇺ", value: "kim"}, {char: "キン", value: "kin"}, {char: "キッ", value: "kit"}, /*{char: "キイ", value: "kiy"},*/ {char: "キウ", value: "kiw"}, {char: "クㇰ", value: "kuk"}, {char: "クㇱ", value: "kus"}, {char: "クㇺ", value: "kum"}, {char: "クン", value: "kun"}, {char: "クッ", value: "kut"}, {char: "クイ", value: "kuy"}, /*{char: "クウ", value: "kuw"},*/ {char: "ケㇰ", value: "kek"}, {char: "ケㇱ", value: "kes"}, {char: "ケㇺ", value: "kem"}, {char: "ケン", value: "ken"}, {char: "ケッ", value: "ket"}, {char: "ケイ", value: "key"}, {char: "ケウ", value: "kew"}, {char: "コㇰ", value: "kok"}, {char: "コㇱ", value: "kos"}, {char: "コㇺ", value: "kom"}, {char: "コン", value: "kon"}, {char: "コッ", value: "kot"}, {char: "コイ", value: "koy"}, {char: "コウ", value: "kow"}, {char: "カㇻ", value: "kar"}, {char: "キㇼ", value: "kir"}, {char: "クㇽ", value: "kur"}, {char: "ケㇾ", value: "ker"}, {char: "コㇿ", value: "kor"}];

sClosedSeries  = [{char: "サㇰ", value: "sak"}, {char: "サㇱ", value: "sas"}, {char: "サㇺ", value: "sam"}, {char: "サン", value: "san"}, {char: "サッ", value: "sat"}, {char: "サイ", value: "say"}, {char: "サウ", value: "saw"}, {char: "シㇰ", value: "sik"}, {char: "シㇱ", value: "sis"}, {char: "シㇺ", value: "sim"}, {char: "シン", value: "sin"}, {char: "シッ", value: "sit"}, /*{char: "シイ", value: "siy"},*/ {char: "シウ", value: "siw"}, {char: "スㇰ", value: "suk"}, {char: "スㇱ", value: "sus"}, {char: "スㇺ", value: "sum"}, {char: "スン", value: "sun"}, {char: "スッ", value: "sut"}, {char: "スイ", value: "suy"}, /*{char: "スウ", value: "suw"},*/ {char: "セㇰ", value: "sek"}, {char: "セㇱ", value: "ses"}, {char: "セㇺ", value: "sem"}, {char: "セン", value: "sen"}, {char: "セッ", value: "set"}, {char: "セイ", value: "sey"}, {char: "セウ", value: "sew"}, {char: "ソㇰ", value: "sok"}, {char: "ソㇱ", value: "sos"}, {char: "ソㇺ", value: "som"}, {char: "ソン", value: "son"}, {char: "ソッ", value: "sot"}, {char: "ソイ", value: "soy"}, {char: "ソウ", value: "sow"}, {char: "サㇻ", value: "sar"}, {char: "シㇼ", value: "sir"}, {char: "スㇽ", value: "sur"}, {char: "セㇾ", value: "ser"}, {char: "ソㇿ", value: "sor"}];

tClosedSeries  = [{char: "タㇰ", value: "tak"}, {char: "タㇱ", value: "tas"}, {char: "タㇺ", value: "tam"}, {char: "タン", value: "tan"}, {char: "タッ", value: "tat"}, {char: "タイ", value: "tay"}, {char: "タウ", value: "taw"}, {char: "トゥㇰ", value: "tuk"}, {char: "トゥㇱ", value: "tus"}, {char: "トゥㇺ", value: "tum"}, {char: "トゥン", value: "tun"}, {char: "トゥッ", value: "tut"}, {char: "トゥイ", value: "tuy"}, /*{char: "トゥウ", value: "tuw"},*/ {char: "テㇰ", value: "tek"}, {char: "テㇱ", value: "tes"}, {char: "テㇺ", value: "tem"}, {char: "テン", value: "ten"}, {char: "テッ", value: "tet"}, {char: "テイ", value: "tey"}, {char: "テウ", value: "tew"}, {char: "トㇰ", value: "tok"}, {char: "トㇱ", value: "tos"}, {char: "トㇺ", value: "tom"}, {char: "トン", value: "ton"}, {char: "トッ", value: "tot"}, {char: "トイ", value: "toy"}, {char: "トウ", value: "tow"}, {char: "タㇻ", value: "tar"}, {char: "トゥㇽ", value: "tur"}, {char: "テㇾ", value: "ter"}, {char: "トㇿ", value: "tor"}];

cClosedSeries  = [{char: "チャㇰ", value: "cak"}, {char: "チャㇱ", value: "cas"}, {char: "チャㇺ", value: "cam"}, {char: "チャン", value: "can"}, {char: "チャッ", value: "cat"}, {char: "チャイ", value: "cay"}, {char: "チャウ", value: "caw"}, {char: "チㇰ", value: "cik"}, {char: "チㇱ", value: "cis"}, {char: "チㇺ", value: "cim"}, {char: "チン", value: "cin"}, {char: "チッ", value: "cit"}, /*{char: "チイ", value: "ciy"},*/ {char: "チウ", value: "ciw"}, {char: "チュㇰ", value: "cuk"}, {char: "チュㇱ", value: "cus"}, {char: "チュㇺ", value: "cum"}, {char: "チュン", value: "cun"}, {char: "チュッ", value: "cut"}, {char: "チュイ", value: "cuy"}, /*{char: "チュウ", value: "cuw"},*/ {char: "チェㇰ", value: "cek"}, {char: "チェㇱ", value: "ces"}, {char: "チェㇺ", value: "cem"}, {char: "チェン", value: "cen"}, {char: "チェッ", value: "cet"}, {char: "チェイ", value: "cey"}, {char: "チェウ", value: "cew"}, {char: "チョㇰ", value: "cok"}, {char: "チョㇱ", value: "cos"}, {char: "チョㇺ", value: "com"}, {char: "チョン", value: "con"}, {char: "チョッ", value: "cot"}, {char: "チョイ", value: "coy"}, {char: "チョウ", value: "cow"}, {char: "チャㇻ", value: "car"}, {char: "チㇼ", value: "cir"}, {char: "チュㇽ", value: "cur"}, {char: "チェㇾ", value: "cer"}, {char: "チョㇿ", value: "cor"}];

cClosedSeries  = [{char: "ナㇰ", value: "nak"}, {char: "ナㇱ", value: "nas"}, {char: "ナㇺ", value: "nam"}, {char: "ナン", value: "nan"}, {char: "ナッ", value: "nat"}, {char: "ナイ", value: "nay"}, {char: "ナウ", value: "naw"}, {char: "ニㇰ", value: "nik"}, {char: "ニㇱ", value: "nis"}, {char: "ニㇺ", value: "nim"}, {char: "ニン", value: "nin"}, {char: "ニッ", value: "nit"}, /*{char: "ニイ", value: "niy"},*/ {char: "ニウ", value: "niw"}, {char: "ヌㇰ", value: "nuk"}, {char: "ヌㇱ", value: "nus"}, {char: "ヌㇺ", value: "num"}, {char: "ヌン", value: "nun"}, {char: "ヌッ", value: "nut"}, {char: "ヌイ", value: "nuy"}, /*{char: "ヌウ", value: "nuw"}*/, {char: "ネㇰ", value: "nek"}, {char: "ネㇱ", value: "nes"}, {char: "ネㇺ", value: "nem"}, {char: "ネン", value: "nen"}, {char: "ネッ", value: "net"}, {char: "ネイ", value: "ney"}, {char: "ネウ", value: "new"}, {char: "ノㇰ", value: "nok"}, {char: "ノㇱ", value: "nos"}, {char: "ノㇺ", value: "nom"}, {char: "ノン", value: "non"}, {char: "ノッ", value: "not"}, {char: "ノイ", value: "noy"}, {char: "ノウ", value: "now"}, {char: "ナㇻ", value: "nar"}, {char: "ニㇼ", value: "nir"}, {char: "ヌㇽ", value: "nur"}, {char: "ネㇾ", value: "ner"}, {char: "ノㇿ", value: "nor"}];

hClosedSeries  = [{char: "ハㇰ", value: "hak"}, {char: "ハㇱ", value: "has"}, {char: "ハㇺ", value: "ham"}, {char: "ハン", value: "han"}, {char: "ハッ", value: "hat"}, {char: "ハイ", value: "hay"}, {char: "ハウ", value: "haw"}, {char: "ヒㇰ", value: "hik"}, {char: "ヒㇱ", value: "his"}, {char: "ヒㇺ", value: "him"}, {char: "ヒン", value: "hin"}, {char: "ヒッ", value: "hit"}, /*{char: "ヒイ", value: "hiy"},*/ {char: "ヒウ", value: "hiw"}, {char: "フㇰ", value: "huk"}, {char: "フㇱ", value: "hus"}, {char: "フㇺ", value: "hum"}, {char: "フン", value: "hun"}, {char: "フッ", value: "hut"}, {char: "フイ", value: "huy"}, /*{char: "フウ", value: "huw"}*/, {char: "ヘㇰ", value: "hek"}, {char: "ヘㇱ", value: "hes"}, {char: "ヘㇺ", value: "hem"}, {char: "ヘン", value: "hen"}, {char: "ヘッ", value: "het"}, {char: "ヘイ", value: "hey"}, {char: "ヘウ", value: "hew"}, {char: "ホㇰ", value: "hok"}, {char: "ホㇱ", value: "hos"}, {char: "ホㇺ", value: "hom"}, {char: "ホン", value: "hon"}, {char: "ホッ", value: "hot"}, {char: "ホイ", value: "hoy"}, {char: "ホウ", value: "how"}, {char: "ハㇻ", value: "har"}, {char: "ヒㇼ", value: "hir"}, {char: "フㇽ", value: "hur"}, {char: "ヘㇾ", value: "her"}, {char: "ホㇿ", value: "hor"}];

pClosedSeries  = [{char: "パㇰ", value: "pak"}, {char: "パㇱ", value: "pas"}, {char: "パㇺ", value: "pam"}, {char: "パン", value: "pan"}, {char: "パッ", value: "pat"}, {char: "パイ", value: "pay"}, {char: "パウ", value: "paw"}, {char: "ピㇰ", value: "pik"}, {char: "ピㇱ", value: "pis"}, {char: "ピㇺ", value: "pim"}, {char: "ピン", value: "pin"}, {char: "ピッ", value: "pit"}, /*{char: "ピイ", value: "piy"},*/ {char: "ピウ", value: "piw"}, {char: "プㇰ", value: "puk"}, {char: "プㇱ", value: "pus"}, {char: "プㇺ", value: "pum"}, {char: "プン", value: "pun"}, {char: "プッ", value: "put"}, {char: "プイ", value: "puy"}, /*{char: "プウ", value: "puw"}*/, {char: "ペㇰ", value: "pek"}, {char: "ペㇱ", value: "pes"}, {char: "ペㇺ", value: "pem"}, {char: "ペン", value: "pen"}, {char: "ペッ", value: "pet"}, {char: "ペイ", value: "pey"}, {char: "ペウ", value: "pew"}, {char: "ポㇰ", value: "pok"}, {char: "ポㇱ", value: "pos"}, {char: "ポㇺ", value: "pom"}, {char: "ポン", value: "pon"}, {char: "ポッ", value: "pot"}, {char: "ポイ", value: "poy"}, {char: "ポウ", value: "pow"}, {char: "パㇻ", value: "par"}, {char: "ピㇼ", value: "pir"}, {char: "プㇽ", value: "pur"}, {char: "ペㇾ", value: "per"}, {char: "ポㇿ", value: "por"}];

mClosedSeries  = [{char: "マㇰ", value: "mak"}, {char: "マㇱ", value: "mas"}, {char: "マㇺ", value: "mam"}, {char: "マン", value: "man"}, {char: "マッ", value: "mat"}, {char: "マイ", value: "may"}, {char: "マウ", value: "maw"}, {char: "ミㇰ", value: "mik"}, {char: "ミㇱ", value: "mis"}, {char: "ミㇺ", value: "mim"}, {char: "ミン", value: "min"}, {char: "ミッ", value: "mit"}, /*{char: "ミイ", value: "miy"},*/ {char: "ミウ", value: "miw"}, {char: "ムㇰ", value: "muk"}, {char: "ムㇱ", value: "mus"}, {char: "ムㇺ", value: "mum"}, {char: "ムン", value: "mun"}, {char: "ムッ", value: "mut"}, {char: "ムイ", value: "muy"}, /*{char: "ムウ", value: "muw"}*/, {char: "メㇰ", value: "mek"}, {char: "メㇱ", value: "mes"}, {char: "メㇺ", value: "mem"}, {char: "メン", value: "men"}, {char: "メッ", value: "met"}, {char: "メイ", value: "mey"}, {char: "メウ", value: "mew"}, {char: "モㇰ", value: "mok"}, {char: "モㇱ", value: "mos"}, {char: "モㇺ", value: "mom"}, {char: "モン", value: "mon"}, {char: "モッ", value: "mot"}, {char: "モイ", value: "moy"}, {char: "モウ", value: "mow"}, {char: "マㇻ", value: "mar"}, {char: "ミㇼ", value: "mir"}, {char: "ムㇽ", value: "mur"}, {char: "メㇾ", value: "mer"}, {char: "モㇿ", value: "mor"}];

yClosedSeries  = [{char: "ヤㇰ", value: "yak"}, {char: "ヤㇱ", value: "yas"}, {char: "ヤㇺ", value: "yam"}, {char: "ヤン", value: "yan"}, {char: "ヤッ", value: "yat"}, {char: "ヤイ", value: "yay"}, {char: "ヤウ", value: "yaw"}, {char: "ユㇰ", value: "yuk"}, {char: "ユㇱ", value: "yus"}, {char: "ユㇺ", value: "yum"}, {char: "ユン", value: "yun"}, {char: "ユッ", value: "yut"}, {char: "ユイ", value: "yuy"}, /*{char: "ユウ", value: "yuw"},*/ {char: "イェㇰ", value: "yek"}, {char: "イェㇱ", value: "yes"}, {char: "イェㇺ", value: "yem"}, {char: "イェン", value: "yen"}, {char: "イェッ", value: "yet"}, {char: "イェイ", value: "yey"}, {char: "イェウ", value: "yew"}, {char: "ヨㇰ", value: "yok"}, {char: "ヨㇱ", value: "yos"}, {char: "ヨㇺ", value: "yom"}, {char: "ヨン", value: "yon"}, {char: "ヨッ", value: "yot"}, {char: "ヨイ", value: "yoy"}, {char: "ヨウ", value: "yow"}, {char: "ヤㇻ", value: "yar"}, {char: "ユㇽ", value: "yur"}, {char: "イェㇾ", value: "yer"}, {char: "ヨㇿ", value: "yor"}];

rClosedSeries  = [{char: "ラㇰ", value: "rak"}, {char: "ラㇱ", value: "ras"}, {char: "ラㇺ", value: "ram"}, {char: "ラン", value: "ran"}, {char: "ラッ", value: "rat"}, {char: "ライ", value: "ray"}, {char: "ラウ", value: "raw"}, {char: "リㇰ", value: "rik"}, {char: "リㇱ", value: "ris"}, {char: "リㇺ", value: "rim"}, {char: "リン", value: "rin"}, {char: "リッ", value: "rit"}, /*{char: "リイ", value: "riy"},*/ {char: "リウ", value: "riw"}, {char: "ルㇰ", value: "ruk"}, {char: "ルㇱ", value: "rus"}, {char: "ルㇺ", value: "rum"}, {char: "ルン", value: "run"}, {char: "ルッ", value: "rut"}, {char: "ルイ", value: "ruy"}, /*{char: "ルウ", value: "ruw"}*/, {char: "レㇰ", value: "rek"}, {char: "レㇱ", value: "res"}, {char: "レㇺ", value: "rem"}, {char: "レン", value: "ren"}, {char: "レッ", value: "ret"}, {char: "レイ", value: "rey"}, {char: "レウ", value: "rew"}, {char: "ロㇰ", value: "rok"}, {char: "ロㇱ", value: "ros"}, {char: "ロㇺ", value: "rom"}, {char: "ロン", value: "ron"}, {char: "ロッ", value: "rot"}, {char: "ロイ", value: "roy"}, {char: "ロウ", value: "row"}, {char: "ラㇻ", value: "rar"}, {char: "リㇼ", value: "rir"}, {char: "ルㇽ", value: "rur"}, {char: "レㇾ", value: "rer"}, {char: "ロㇿ", value: "ror"}];

wClosedSeries  = [{char: "ワㇰ", value: "wak"}, {char: "ワㇱ", value: "was"}, {char: "ワㇺ", value: "wam"}, {char: "ワン", value: "wan"}, {char: "ワッ", value: "wat"}, {char: "ワイ", value: "way"}, {char: "ワウ", value: "waw"}, {char: "ウェㇰ", value: "wek"}, {char: "ウェㇱ", value: "wes"}, {char: "ウェㇺ", value: "wem"}, {char: "ウェン", value: "wen"}, {char: "ウェッ", value: "wet"}, {char: "ウェイ", value: "wey"}, {char: "ウェウ", value: "wew"}, {char: "ウォㇰ", value: "wok"}, {char: "ウォㇱ", value: "wos"}, {char: "ウォㇺ", value: "wom"}, {char: "ウォン", value: "won"}, {char: "ウォッ", value: "wot"}, {char: "ウォイ", value: "woy"}, {char: "ウォウ", value: "wow"}, {char: "ワㇻ", value: "war"}, {char: "ウェㇽ", value: "wer"}, {char: "ウォㇿ", value: "wor"}];

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
var closedSelected     = false;
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
    document.getElementById("title_header").remove();
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
    if(closedSelected){
        closedSelected = false;
        document.getElementById("consonants").style.setProperty('background-color', '#363636');
    } else {
        closedSelected = true;
        document.getElementById("consonants").style.setProperty('background-color', '#6665d2');
    }
});

document.getElementById("start").addEventListener("click", ()=>{
    if(aSeriesSelected){
        kanaArray.push.apply(kanaArray, aSeries);
		if(closedSelected) {
			kanaArray.push.apply(kanaArray, aClosedSeries);
		}
    }
    if(kSeriesSelected){
        kanaArray.push.apply(kanaArray, kSeries);
		if(closedSelected) {
			kanaArray.push.apply(kanaArray, kClosedSeries);
		}
    }
    if(sSeriesSelected){
        kanaArray.push.apply(kanaArray, sSeries);
		if(closedSelected) {
			kanaArray.push.apply(kanaArray, sClosedSeries);
		}
    }
    if(tSeriesSelected){
        kanaArray.push.apply(kanaArray, tSeries);
		if(closedSelected) {
			kanaArray.push.apply(kanaArray, tClosedSeries);
		}
    }
    if(cSeriesSelected){
        kanaArray.push.apply(kanaArray, cSeries);
		if(closedSelected) {
			kanaArray.push.apply(kanaArray, cClosedSeries);
		}
    }
    if(nSeriesSelected){
        kanaArray.push.apply(kanaArray, nSeries);
		if(closedSelected) {
			kanaArray.push.apply(kanaArray, nClosedSeries);
		}
    }
    if(hSeriesSelected){
        kanaArray.push.apply(kanaArray, hSeries);
		if(closedSelected) {
			kanaArray.push.apply(kanaArray, hClosedSeries);
		}
    }
    if(pSeriesSelected){
        kanaArray.push.apply(kanaArray, pSeries);
		if(closedSelected) {
			kanaArray.push.apply(kanaArray, pClosedSeries);
		}
    }
    if(mSeriesSelected){
        kanaArray.push.apply(kanaArray, mSeries);
		if(closedSelected) {
			kanaArray.push.apply(kanaArray, mClosedSeries);
		}
    }
    if(ySeriesSelected){
        kanaArray.push.apply(kanaArray, ySeries);
		if(closedSelected) {
			kanaArray.push.apply(kanaArray, yClosedSeries);
		}
    }
    if(rSeriesSelected){
        kanaArray.push.apply(kanaArray, rSeries);
		if(closedSelected) {
			kanaArray.push.apply(kanaArray, rClosedSeries);
		}
    }
    if(wSeriesSelected){
        kanaArray.push.apply(kanaArray, wSeries);
		if(closedSelected) {
			kanaArray.push.apply(kanaArray, wClosedSeries);
		}
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
