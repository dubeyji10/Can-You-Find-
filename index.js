console.log("ready");

let dictForStoringClickonSate = {};
// keep track of states click of id matches with guess return green or 
// use a stack if id matches store else pop -- correct if stack is not empty

let k = document.querySelector('a');
let listName = [];        
let rIndexList = [];
let aTags = document.querySelectorAll('a');
let randomIndex=-3;
let guess = document.getElementById('guessID');
console.log("default random index = "+randomIndex)
while(k.nextElementSibling!==null){
    let t = k.firstElementChild.getAttribute('title');
    let id = k.firstElementChild.getAttribute('id');
    dictForStoringClickonSate[id] = 0;
    // console.log(t);
    listName.push(t);
    // k.firstElementChild.getAttribute('title'));
    k = k.nextElementSibling;
    }
console.log("name list : "+listName);
console.log("for now dictionary is : "+dictForStoringClickonSate);
console.log("jsonify the dict"+JSON.stringify(dictForStoringClickonSate));
let dictForStoringClickonSateJSON= JSON.stringify(dictForStoringClickonSate);
// {"lang":"en"})

function guessGenerator(){
    
    randomIndex = Math.floor(Math.random() * listName.length);
    // const tempRIndex = (element) => element === randomIndex;
    // console.log("const temp r index : "+tempRIndex);
    // very small -- Lakshadweep, dadar nagar haveli -- difficult to click -- so ignore ?
    if(randomIndex===18 || randomIndex===18 || rIndexList.findIndex((element)=>element==randomIndex)>0){
        console.log("already found");
        guessGenerator();

    }
    else{
        rIndexList.push(randomIndex);
        console.log("ok find it");
        console.log(rIndexList);
        console.log("random index after function : "+randomIndex);
        console.log("find "+listName[randomIndex]);
        guess.textContent = "find where is "+listName[randomIndex]+" ?";
        guess.style.backgroundColor = "grey";
        return;
    }
}

console.log(guess.textContent);

guess.addEventListener("click", guessGenerator(),false);

let d = document.getElementById('dialog');
let pop = document.getElementById('popup1');
// console.log(aTags);

    var popup = document.getElementById("popup");

for (let i = 0; i < aTags.length; i++) {
    aTags[i].style.cursor = "pointer";

     aTags[i].addEventListener("click", function() {
        console.log("you clicked on "+listName[i]);
        console.log("state details ");
        let clickedID = aTags[i].firstElementChild.getAttribute('id');
        console.log("id : "+clickedID);
        
        dictForStoringClickonSate[clickedID] = 1;
        console.log("dict item set to 1 ");
        
        // for(let id in dictForStoringClickonSate){
        //     console.log(id + "->"+dictForStoringClickonSate[id]);
        // }
        
        console.log("title :" + aTags[i].firstElementChild.getAttribute('title'));
        if(i===randomIndex){
            console.log("YAY!!! you found "+listName[i]);
            console.log("href for it -> "+aTags[i].getAttribute('href'));
            // aTags[i].getAttribute('href') = "#popup2";
            aTags[i].style.fill = "#57cd7e";
            guess.style.backgroundColor = "#57cd7e";
            setTimeout(() => {
                // popup.classList.toggle("show");
                alert(`YAY!!! you found ${listName[i]}`);
                guessGenerator();
                console.log("guess generator called again");
            }, 200);
            return;
        }
        aTags[i].style.fill = "yellow";
     });
}

