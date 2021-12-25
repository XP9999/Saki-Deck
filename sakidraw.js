const deck = ['Aislinn Wishart', 'Amae Koromo', 'Anetai Toyone', 'Arakawa Kei' ,'Atago Hiroe', 'Atarashi Ako', 'Choe Myeonghwa', 'Ezaki Hitomi' ,'Fukuji Mihoko', 'Hanada Kirame', 'Hao Huiyu', 'Haramura Nodoka', 'Hirose Sumire', 'Ikeda Kana', 'Inoue Jun', 'Iwato Kasumi', 'Jindai Komaki', 'Kainou Yoshiko' ,'Kajiki Yumi', 'Kakura Kurumi' , 'Kanbara Satomi', 'Karijuku Tomoe', 'Kataoka Yuuki','Kosegawa Shiromi', 'Kunihiro Hajime', 'Mase Yuuko', 'Matano Seiko', 'Matsumi Kuro', 'Matsumi Yuu', 'Maya Yukiko' , 'Megan Davin','Miyanaga Saki', 'Miyanaga Teru','Nanpo Kazue', 'Nelly Virsaladze','Onjouji Toki', 'Oohoshi Awai', 'Ryuumonbuchi Touka','Sagimori Arata', 'Sawamura Tomoki', 'Senoo Kaori', 'Shibuya Takami', 'Shimizudani Ryuuka', 'Shirouzu Mairu' , 'Someya Mako', 'Takakamo Shizuno', 'Takei Hisa', 'Takimi Haru', 'Toyouko Momoko', 'Ueshige Suzu', 'Usuzawa Sae', 'Usuzumi Hatsumi', 'Yumeno Maho']
const eastDeck = ['Aislinn Wishart', 'Amae Koromo', 'Anetai Toyone', 'Arakawa Kei' , 'Atago Hiroe', 'Atarashi Ako', 'Choe Myeonghwa', 'Ezaki Hitomi' , 'Fukuji Mihoko', 'Hanada Kirame', 'Hao Huiyu', 'Haramura Nodoka', 'Hirose Sumire', 'Ikeda Kana', 'Inoue Jun', 'Iwato Kasumi', 'Jindai Komaki', 'Kainou Yoshiko' , 'Kajiki Yumi', 'Kakura Kurumi' , 'Kanbara Satomi', 'Karijuku Tomoe','Kosegawa Shiromi', 'Kunihiro Hajime', 'Mase Yuuko', 'Matano Seiko', 'Matsumi Kuro', 'Matsumi Yuu', 'Maya Yukiko' , 'Megan Davin','Miyanaga Saki', 'Miyanaga Teru','Nelly Virsaladze','Onjouji Toki', 'Oohoshi Awai', 'Ryuumonbuchi Touka','Sagimori Arata', 'Sawamura Tomoki', 'Senoo Kaori', 'Shibuya Takami', 'Shimizudani Ryuuka',  'Shirouzu Mairu' , 'Someya Mako', 'Takakamo Shizuno', 'Takei Hisa', 'Takimi Haru', 'Toyouko Momoko', 'Ueshige Suzu', 'Usuzawa Sae', 'Usuzumi Hatsumi', 'Yumeno Maho']
const imglinks ={
    'Aislinn Wishart':"https://i.imgur.com/CvtF8qo.png",
    'Amae Koromo':"https://i.imgur.com/DQgpfCT.png",
    'Anetai Toyone': "https://i.imgur.com/FMbxKg0.png",
    'Arakawa Kei':"https://i.imgur.com/U27RaSv.png",
    'Atago Hiroe':"https://i.imgur.com/s8kiJkt.png",
    'Atarashi Ako': "https://i.imgur.com/Bkvmsac.png",
    'Choe Myeonghwa':"https://i.imgur.com/q6JLuOO.png",
    'Ezaki Hitomi':"https://i.imgur.com/3gwY7MO.png",
    'Fukuji Mihoko':"https://i.imgur.com/Qc6rQo7.png",
    'Hanada Kirame':"https://i.imgur.com/5C85O4n.png",
    'Hao Huiyu':"https://i.imgur.com/Of8NJ22.png",
    'Haramura Nodoka':"https://i.imgur.com/vby8ZNn.png",
    'Hirose Sumire':"https://i.imgur.com/VVSOIer.png",
    'Ikeda Kana':"https://i.imgur.com/Cf0a9BS.png",
    'Inoue Jun':"https://i.imgur.com/h9gY0Pd.png",
    'Iwato Kasumi':"https://i.imgur.com/SJ5vOfW.png",
    'Jindai Komaki':"https://i.imgur.com/oXspvUX.png",
    'Kainou Yoshiko'"https://i.imgur.com/KQmINJi.png",
    'Kajiki Yumi':"https://i.imgur.com/bGZBM7y.png",
    'Kakura Kurumi':"https://i.imgur.com/10N6PU3.png",
    'Kanbara Satomi':"https://i.imgur.com/gy6qkfa.png",
    'Karijuku Tomoe':"https://i.imgur.com/9gBGhJj.png",
    'Kataoka Yuuki':"https://i.imgur.com/jpFNamF.png",
    'Kosegawa Shiromi':"https://i.imgur.com/tCxELMs.png",
    'Kunihiro Hajime':"https://i.imgur.com/43V7dxO.png",
    'Mase Yuuko':"https://i.imgur.com/v0qpUQa.png",
    'Matano Seiko':"https://i.imgur.com/VFghmd0.png",
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
    'Sawamura Tomoki':"https://i.imgur.com/aPSxvCD.png",
    'Senoo Kaori':"https://i.imgur.com/6mCsEtr.png",
    'Shibuya Takami':"https://i.imgur.com/VotWmAS.png",
    'Shimizudani Ryuuka':"https://i.imgur.com/apc2p5Q.png",
    'Shirouzu Mairu':"https://i.imgur.com/sXJ6osk.jpeg",
    'Someya Mako':"https://i.imgur.com/X3euZKg.png",
    'Takakamo Shizuno':"https://i.imgur.com/zk14Vy5.png",
    'Takei Hisa':"https://i.imgur.com/9vSxzh7.png",
    'Takimi Haru':"https://i.imgur.com/6F6L2tf.png",
    'Toyouko Momoko':"https://i.imgur.com/ZINeb9R.png",
    'Ueshige Suzu':"https://i.imgur.com/3J7QfOa.png",
    'Usuzawa Sae':"https://i.imgur.com/rVGzTYm.png",
    'Usuzumi Hatsumi':"https://i.imgur.com/e1M5DSq.png",
    'Yumeno Maho':"https://i.imgur.com/NxbBN47.png"
}
let round = "hanchan"
let pCount = "suuma"
let embedCard = false
let gamemode = document.getElementsByClassName("gamemode")[0]
const sanmaHand = {East:[],South:[],West:[]}
const suumaHand = {East:[],South:[],West:[],North:[]}
let selectedHand = JSON.parse(JSON.stringify(suumaHand))
let selectedDeck = [...deck]
let ranInt
let currentDeck = [...selectedDeck]
let empty = []
let mahoHand =  []
let mahoDiscard = []
var NOC , discardCard
let discardpile = []
let check = false
let hands = JSON.parse(JSON.stringify(selectedHand))
let returnMode = false
let copypasta = document.getElementsByClassName("copypasta")[0]
let c = document.getElementsByClassName("copypasta")[0].children
let cards = document.getElementsByClassName("cards")

function openGamemode(){
    gamemode.style.display = "flex"
}
function tonpuusen(){
    round = 'tonpuusen'
}

function hanchan(){
    round = "hanchan"
}

function suuma(){
    pCount = "suuma"
}

function sanma(){
    pCount = 'sanma'
}

function embedCardCheck(){
    if(embedCard){
        embedCard = false
        document.getElementsByClassName("embedCards")[0].style.background = "transparent"
        
    }
    else{
        embedCard = true
        document.getElementsByClassName("embedCards")[0].style.background = "#808080"
    }
}
function confirm(){
    if(round == "tonpuusen"){
        selectedDeck = [...eastDeck]
    }
    if(round == "hanchan"){
        selectedDeck = [...deck]
    }
    if(pCount == "suuma"){
        selectedHand = JSON.parse(JSON.stringify(suumaHand))
    }
    if(pCount == "sanma"){
        selectedHand = JSON.parse(JSON.stringify(sanmaHand))
    }
    currentDeck = [...selectedDeck]
    hands = JSON.parse(JSON.stringify(selectedHand))
    gamemode.style.display = "none"
    updateText();
}

function back(){
    gamemode.style.display = "none"
}

function deal(){
    for(let x in hands){
        for(let g = 0 ; g < NOC ; g++){
            ranInt = Math.floor(Math.random() * currentDeck.length);
            if(currentDeck[0] == undefined){
                return
            }
            hands[x].push(currentDeck[ranInt])
            currentDeck.splice(ranInt,1)
        }
    }
}

function draw(x){
    
    ranInt = Math.floor(Math.random() * currentDeck.length);
    if(currentDeck[0] == undefined){
        return
    }
    hands[x].push(currentDeck[ranInt]);
    currentDeck.splice(ranInt,1)
}

// draw selected card
function draww(x){
    if(currentDeck.includes(selectCard)){
        hands[x].push(currentDeck[currentDeck.indexOf(selectCard)]);
        currentDeck.splice(currentDeck.indexOf(selectCard),1)
    }
    if(mahoHand.includes(selectCard)){
        hands[x].push(mahoHand[mahoHand.indexOf(selectCard)]);
        mahoHand.splice(mahoHand.indexOf(selectCard),1)
    }
    if(mahoDiscard.includes(selectCard)){
        hands[x].push(mahoDiscard[mahoDiscard.indexOf(selectCard)]);
        mahoDiscard.splice(mahoDiscard.indexOf(selectCard),1)
    }
}

function reset(){
    if(check){
        currentDeck = [...selectedDeck] 
        hands = JSON.parse(JSON.stringify(selectedHand))
        mahoHand =  []
        mahoDiscard = []
        document.getElementsByClassName('resetDeck')[0].style.background = "transparent"
        check = false
        updateText();
    }
    else{
        check = true
        document.getElementsByClassName('resetDeck')[0].style.background = "#808080"
    }

}

function returnSwitch(){
    if(returnMode){
        returnMode = false
        document.getElementsByClassName('returnSwitch')[0].style.background = "transparent";

    }
    else{
        returnMode = true
        document.getElementsByClassName('returnSwitch')[0].style.background = "#808080"
    }
    updateText();
}
// remove the node , remove the card from hand and put it into current deck
function returning(lmao){
    if(returnMode){
        let g = lmao.target.innerHTML.split(":")
        currentDeck.push(g[0])
        for(let x in hands){
            for(let y of hands[x]){
                if(y == g[0]){
                    hands[x].splice(hands[x].indexOf(y),1)
                }
            }
        }
        updateText();
    }
}

// return all cards to current deck except maho's
function returnAll(){
    for(let x in hands){
        for(let y of hands[x]){
                currentDeck.push(y)
                
            }
        }
        hands = JSON.parse(JSON.stringify(selectedHand))
}

function maho(){

    mahoDiscard = mahoDiscard.concat(mahoHand)
    mahoHand = []

    for(let x = 0 ; x < 2 ; x++){
    ranInt = Math.floor(Math.random() * currentDeck.length);
    if(currentDeck[0] == undefined){
        return
    }
    mahoHand.push(currentDeck[ranInt]);
    currentDeck.splice(ranInt,1)
    }
}

function rushMode(){
    for(let x in hands){
        for(let y of hands[x]){
                currentDeck.push(y)
                
            }
        }
    hands = JSON.parse(JSON.stringify(selectedHand))

    for(let x in hands){
        for(let g = 0 ; g < 2 ; g++){
          
          ranInt = Math.floor(Math.random() * currentDeck.length);
          hands[x].push(currentDeck[ranInt])
          currentDeck.splice(ranInt,1)
        }
    }
    mahoDiscard = mahoDiscard.concat(mahoHand)
    mahoHand = []
}
// despite the name it actually make nodes
function maketext(){
    copypasta.innerHTML = ""
    for(let x in hands){
        let seat = document.createElement('div')
        seat.innerHTML = x + ": "
        copypasta.appendChild(seat)
        for(let y of hands[x]){
            let g = imglinks[y]
            let card = document.createElement("div")
            if(embedCard){
                card.innerHTML += y + ": <" 
                card.innerHTML += g 
                card.innerHTML += ">"
            }
            else{
                card.innerHTML += y + ": " + g
            }
            card.className = "cards"
            copypasta.appendChild(card)
        }
    }
}
function mahoInfo(){
    document.getElementsByClassName('mahoDrawn')[0].innerHTML = ""
    document.getElementsByClassName('mahoDiscarded')[0].innerHTML = ""
    for(let y of mahoHand){
        let g = imglinks[y]
        let card = document.createElement("div")
        card.innerHTML = y + ": " + g
        document.getElementsByClassName('mahoDrawn')[0].appendChild(card)
    }
    for(let y of mahoDiscard){
        let g = imglinks[y]
        let card = document.createElement("div")
        card.innerHTML = y + ": " + g
        document.getElementsByClassName('mahoDiscarded')[0].appendChild(card)
    }
}

setInterval(function(){ update() },500);

function gameModeColor(){
    if(round == "tonpuusen"){
        document.getElementsByClassName("tonpuusen")[0].style.background = "#808080"
        document.getElementsByClassName("hanchan")[0].style.background = "transparent"
    }
    if(round == "hanchan"){
        document.getElementsByClassName("hanchan")[0].style.background = "#808080"
        document.getElementsByClassName("tonpuusen")[0].style.background = "transparent"
    }
    if(pCount == "suuma"){
        document.getElementsByClassName("suuma")[0].style.background = "#808080"
        document.getElementsByClassName("sanma")[0].style.background = "transparent"
    }
    if(pCount == "sanma"){
        document.getElementsByClassName("sanma")[0].style.background = "#808080"
        document.getElementsByClassName("suuma")[0].style.background = "transparent"
    }
}
function update(){
        NOC = document.getElementsByClassName("numberOfCards")[0].value;
        selectCard = document.getElementsByClassName('selectCard')[0].value;
        gameModeColor()
}

function updateText(){
    maketext();
    mahoInfo();
    document.getElementsByClassName("remainingpile")[0].innerHTML = currentDeck
    for(let i = 0 ; i < cards.length ;i++){
        cards[i].addEventListener("click", returning)
        }
        document.getElementsByClassName('resetDeck')[0].style.background = "transparent"
        check = false
    
}
