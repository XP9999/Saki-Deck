const deck = ['Aislinn Wishart', 'Amae Koromo', 'Atago Hiroe', 'Atarashi Ako', 'Choe Myeonghwa', 'Fukuji Mihoko', 'Hanada Kirame', 'Hao Huiyu', 'Haramura Nodoka', 'Hirose Sumire', 'Ikeda Kana', 'Inoue Jun', 'Iwato Kasumi', 'Jindai Komaki', 'Kajiki Yumi', 'Kanbara Satomi', 'Karijuku Tomoe', 'Kataoka Yuuki','Kosegawa Shiromi', 'Kunihiro Hajime', 'Matano Seiko', 'Matsumi Kuro', 'Matsumi Yuu', 'Maya Yukiko' , 'Megan Davin','Miyanaga Saki', 'Miyanaga Teru','Nanpo Kazue', 'Nelly Virsaladze','Onjouji Toki', 'Oohoshi Awai', 'Ryuumonbuchi Touka','Sagimori Arata', 'Sawamura Tomoki', 'Senoo Kaori', 'Shibuya Takami', 'Shimizudani Ryuuka', 'Someya Mako', 'Takakamo Shizuno', 'Takei Hisa', 'Takimi Haru', 'Toyouko Momoko', 'Usuzawa Sae', 'Usuzumi Hatsumi', 'Yumeno Maho']
const imglinks ={
    'Aislinn Wishart':"https://i.imgur.com/6dVKOjr.png",
    'Amae Koromo':"https://i.imgur.com/VGZDXsz.png",
    'Atago Hiroe':"https://i.imgur.com/s8kiJkt.png",
    'Atarashi Ako':"https://i.imgur.com/s8kiJkt.png",
    'Choe Myeonghwa':"https://i.imgur.com/q6JLuOO.png",
    'Fukuji Mihoko':"https://i.imgur.com/Qc6rQo7.png",
    'Hanada Kirame':"https://i.imgur.com/5C85O4n.png",
    'Hao Huiyu':"https://i.imgur.com/Of8NJ22.png",
    'Haramura Nodoka':"https://i.imgur.com/vby8ZNn.png",
    'Hirose Sumire':"https://i.imgur.com/cn4AsHA.png",
    'Ikeda Kana':"https://i.imgur.com/Cf0a9BS.png",
    'Inoue Jun':"https://i.imgur.com/nA5yjeb.png",
    'Iwato Kasumi':"https://i.imgur.com/hbJMDB6.png",
    'Jindai Komaki':"https://i.imgur.com/oXspvUX.png",
    'Kajiki Yumi':"https://i.imgur.com/cZt6roH.png",
    'Kanbara Satomi':"https://i.imgur.com/gy6qkfa.png",
    'Karijuku Tomoe':"https://i.imgur.com/9gBGhJj.png",
    'Kataoka Yuuki':"https://i.imgur.com/jpFNamF.png",
    'Kosegawa Shiromi':"https://i.imgur.com/tCxELMs.png",
    'Kunihiro Hajime':"https://i.imgur.com/43V7dxO.png",
    'Matano Seiko':"https://i.imgur.com/28Uyhz0.png",
    'Matsumi Kuro':"https://i.imgur.com/c5bAPo6.png",
    'Matsumi Yuu':"https://i.imgur.com/7zefXpd.png",
    'Maya Yukiko':"https://i.imgur.com/0x1euJx.png",
    'Megan Davin':"https://i.imgur.com/pTA57G8.png",
    'Miyanaga Saki':"https://i.imgur.com/b2g439Q.png",
    'Miyanaga Teru':"https://i.imgur.com/95wgRAT.png",
    'Nanpo Kazue':"https://i.imgur.com/9nqRszT.png",
    'Nelly Virsaladze':"https://i.imgur.com/XZwv8Nb.png",
    'Onjouji Toki':"https://i.imgur.com/bnwQoDh.png",
    'Oohoshi Awai':"https://i.imgur.com/HKc5Vrw.png",
    'Ryuumonbuchi Touka':"https://i.imgur.com/Be3YZCm.png",
    'Sagimori Arata':"https://i.imgur.com/xHr3E2f.png",
    'Sawamura Tomoki':"https://i.imgur.com/3kXc1vu.png",
    'Senoo Kaori':"https://i.imgur.com/6mCsEtr.png",
    'Shibuya Takami':"https://i.imgur.com/VotWmAS.png",
    'Shimizudani Ryuuka':"https://i.imgur.com/apc2p5Q.png",
    'Someya Mako':"https://i.imgur.com/X3euZKg.png",
    'Takakamo Shizuno':"https://i.imgur.com/LsTCE1s.png",
    'Takei Hisa':"https://i.imgur.com/9vSxzh7.png",
    'Takimi Haru':"https://i.imgur.com/6F6L2tf.png",
    'Toyouko Momoko':"https://i.imgur.com/ZINeb9R.png",
    'Usuzawa Sae':"https://i.imgur.com/kVvm3qB.png",
    'Usuzumi Hatsumi':"https://i.imgur.com/e1M5DSq.png",
    'Yumeno Maho':"https://i.imgur.com/NxbBN47.png"
}
let currentDeck = [...deck]
var NOC , discardCard , reply , temporary
let discardpile = []
let ranInt
let hands = {East:[],South:[],West:[],North:[]}

function deal(){
    for(let x in hands){
        for(let g = 0 ; g < NOC ; g++){
          ranInt = Math.floor(Math.random() * currentDeck.length);
          hands[x].push(currentDeck[ranInt])
          currentDeck.splice(ranInt,1)
        }
    }
}
function discard(){
    for(let y in hands){
            if(hands[y].includes(discardCard)){
                hands[y].splice(hands[y].indexOf(discardCard),1)
                discardpile.push(discardCard)
            }
            document.getElementsByClassName('discardCard')[0].value = ""
    }
}

function returning(){
    for(let y in hands){
        if(hands[y].includes(discardCard)){
            hands[y].splice(hands[y].indexOf(discardCard),1)
            currentDeck.push(discardCard)
            
        }
        document.getElementsByClassName('discardCard')[0].value = ""
    }   
}
function draw(x){
    ranInt = Math.floor(Math.random() * currentDeck.length);
    hands[x].push(currentDeck[ranInt]);
    currentDeck.splice(ranInt,1)
}

function reset(){
    currentDeck = [...deck] ; 
    discardpile = []
    hands = {East:[],South:[],West:[],North:[]}
}


function maketext(){
    let text = ""
    for(let x in hands){
        text += x + " seat<br>"
        for(let y of hands[x]){
            let g = imglinks[y]
            text += y + ": " + g + "<br>"
            
        }
    }
    return text
}
setInterval(function(){ update() },500);

function update(){
        NOC = document.getElementsByClassName("numberOfCards")[0].value;
        discardCard = document.getElementsByClassName('discardCard')[0].value;
}

function updateText(){
    document.getElementsByClassName("copypasta")[0].innerHTML = maketext();
    document.getElementsByClassName("remainingpile")[0].innerHTML = currentDeck
    document.getElementsByClassName("discardpile")[0].innerHTML = discardpile
}
