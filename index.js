console.log("ready");


let b = document.getElementById("Togglebutton");

let visibilityList = ["visible","hidden"];
let t = 0;
let totalQattempt = 0;
let dictForStoringClickonSate = {};
// keep track of states click of id matches with guess return green or 
// use a stack if id matches store else pop -- correct if stack is not empty
let correctAnswers = 0;

let triviaQuestions = [

    'The old 20 rupee depcits a motif from this place',
    'The designer of the Indian National Flag hails from here',
    'Padma Shri Mamang Dai is from here',
    '(this one is easy)\n This is the Tea Capital of the world',
    'The birth place of Guru Gobind Singh',
    'Capital of punjab',
    'If I am in Bastar I am here',
    'Daman and Diu',
    'You can visit a Museum Of Toilets here',
    'The capital derives its name from SILVA a Portuguese word',
    'The Portugal Citizenship can be given to those who were born before 1961 in the anciente Portuguese State of India',
    'This state has the longest coastline in India',
    'Plan a trip to Mini Israel',
    'On 21 April 1526,a battle was fought between the invading forces of Babur and the Lodi dynasty',
    'A city here was renamed after the Father of Indian Industry (old name Sakchi)',
    '(an easy one) Largest producer of saffron in India ',
    'Producer of the ink that is used for the elections in the country',
    'This comes up if you search - Best place in India to die',
    'A collection of lakh islands',
    'State of one third of the “Lal Bal Pal” triumvirate and also gave the slogan "Swaraj is my birth right and I shall have it"',
    'I am the "Scotland of the East" or call me "Abode of Clouds"',
    'A jewelled land',
    'Birthplace of Chandrashekhar Azad',
    'The Land of Blue Mountains ',
    'Falcon capital of the World',
    'Rasagola originated here',
    "President's rule was used for the first time here ",
    'The famous M. Night Shyamlan born here',
    'The Largest State Of India by total area',
    'Largest producer of large cardamom in the world',
    'Trilinga desa',
    'Home of Srinivasa Ramanujan and Dr APJ. Abdul Kalam and many more geniuses',
    'Tripura',
    'The state has given India the maximum number of Prime Ministers',
    'Have you seen the Tallest dam in India?',
    'Drive on the largest cantilever bridge in India'

];

let k = document.querySelector('a');
let listName = [];        
let rIndexList = [];
let shuffledList = [];
for(let i=0;i<36;i++){
    shuffledList.push(i);
}

function shuffleArray(Arr){
    // let a
    console.log("array given : "+Arr);

    // for(let i=0;i<Arr.length-1;i++){
    for(let i=0;i<36;i++){
        const j = Math.floor(Math.random()*(Arr.length - i+1));
        [Arr[i] , Arr[j]] = [Arr[j] , Arr[i]];
    }
    console.log("done");
    console.log("->shuffled array : "+Arr);
}


shuffleArray(shuffledList);
let shuffledList2 = []

// not using slice because we need to skip some element and it is randomly shuffled
// a loop and condition is needed

let i=0;
while(shuffledList2.length!==10){
    let item = shuffledList[i];
    if(item===5 || item ===7 || item ===9 || item===18 || item===27){
        console.log("skipped : "+item);
    }
    else{
        shuffledList2.push(item);

    }
    i+=1;
}



console.log("\n\n\nquestions choosen -> "+shuffledList2+"\n\n\n");
console.log("length :"+shuffledList2.length)

// better game -  rIndexList have values from 1 to 36
//randomly select and find it and pop it if cliked right state

let aTags = document.querySelectorAll('a');
let randomIndex=-3;
let guess = document.getElementById('guessID');
console.log("default random index = "+randomIndex);
let counter = 0;
while(k!==null){
    let t = k.firstElementChild.getAttribute('title');
    let id = k.firstElementChild.getAttribute('id');
    dictForStoringClickonSate[counter] = triviaQuestions[counter];
    counter+=1;
    // console.log(t);
    listName.push(t);
    // k.firstElementChild.getAttribute('title'));
    k = k.nextElementSibling;
    }
console.log("name list : "+listName);
// console.log("for now dictionary is : "+dictForStoringClickonSate);
console.log(" 0 -->"+dictForStoringClickonSate[0]);
// console.log("jsonify the dict"+JSON.stringify(dictForStoringClickonSate));
// let dictForStoringClickonSateJSON= JSON.stringify(dictForStoringClickonSate);
// {"lang":"en"})


// let tweetURL = "";

function guessGenerator(){
    if(shuffledList2.length===0){
        let tweetText = document.getElementById('tweetButton');
        let gMessage = document.getElementById('gameMessage');
        // let score = (correctAnswers / (listName.length) * 100)+"";
        // 10 random questions
        let score = (correctAnswers / 10) * 100 + "";
        // guess.style.paddingTop = "0px";
        // guess.style.paddingBottom = "200px";
        console.log("\n\n you score :"+score+"\n\n-------");
        guess.innerHTML = "<br>Game Over! ";
        guess.innerHTML +="<br>Thank You for Playing. ";
        // guess.innerHTML+= `<br> Your Score is <span class="score">${score.slice(0,5)} %</span>`;
        // guess.innerHTML += `<br> You gave ${correctAnswers} correct answers out of ${listName.length}`;
        guess.innerHTML += `<br> You gave ${correctAnswers} correct answers out of 10`;
        guess.style.backgroundColor = "wheat";    
        // guess.style.paddingBottom = "300px";
        console.log("---------------------------------------");
        console.log(guess.textContent);
        console.log("---------------------------------------");
        // color of score
        gMessage.innerHTML = `<div>Your Score is <span class="score">${score.slice(0,5)} %</span> </div>You gave ${correctAnswers} correct answers out of 10.`;
        if(correctAnswers>=7){
            document.getElementsByTagName('span')[1].style.backgroundColor = '#aeff71';
        }
        else if(correctAnswers<7 && correctAnswers>=4){
            document.getElementsByTagName('span')[1].style.backgroundColor = '#fffa6c';
        }
        else{
            document.getElementsByTagName('span')[1].style.backgroundColor = '#ff6565';
        }
        // gMessage.textContent += `\n\nYou gave ${correctAnswers} correct answers out of 10`;
        // tweetText.getAttribute('href') += `and beat my score of ${score.slice(0,5)} %`;
        // tweetText.getAttribute('href') +=".";
        document.getElementById("shareButton").click();

    }
    else{
        totalQattempt+=1;
        randomIndex = shuffledList2.pop();
        console.log(" ---->> first Item in shuffled array2 : "+randomIndex);

        // randomIndex = Math.floor(Math.random() * listName.length);
        // const tempRIndex = (element) => element === randomIndex;
        // console.log("const temp r index : "+tempRIndex);
        // very small -- Lakshadweep, dadar nagar haveli -- difficult to click -- so ignore ?
        // rIndexList.push(randomIndex);
        // console.log("ok find it");
        // console.log(rIndexList);
        console.log("\n\n---total plays left : "+shuffledList2.length+"---\n\n")
        // console.log("random index after function : "+randomIndex);
        console.log("-----find "+listName[randomIndex]+"--------");
        console.log("-----question : "+dictForStoringClickonSate[randomIndex]+"--------");
        // guess.textContent = "find where is "+listName[randomIndex]+" ?";
            guess.textContent = totalQattempt+". "+dictForStoringClickonSate[randomIndex];
            // triviaQuestions
            guess.style.backgroundColor = "snow";    

               
        }
        return;
}

// console.log(guess.textContent);

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
        
        // dictForStoringClickonSate[clickedID] = 1;
        // console.log("dict item set to 1 ");
        
        // for(let id in dictForStoringClickonSate){
        //     console.log(id + "->"+dictForStoringClickonSate[id]);
        // }
        
        console.log("title :" + aTags[i].firstElementChild.getAttribute('title'));
        if(i===randomIndex){
            console.log("YAY!!! you found "+listName[i]);
            correctAnswers+=1;
            console.log("href for it -> "+aTags[i].getAttribute('href'));
            // aTags[i].getAttribute('href') = "#popup2";
            aTags[i].style.fill = "#57cd7e";
            guess.style.backgroundColor = "#57cd7e";
            setTimeout(() => {
                // popup.classList.toggle("show");
                console.log(`YAY!!! you found ${listName[i]}`);
                // alert(`YAY!!! you found ${listName[i]}`);
                guessGenerator();
                console.log("guess generator called again");
            }, 200);
        
        }
        else{

            aTags[i].style.fill = "#ff4845";
            console.log("you got it wrong");
            // alert(`WRONG !`);
            guessGenerator();
        }
        return;

    });
}


// or use display -- none ... block
function ToggleBox(){
    console.log("it works");
    var popup = document.getElementById("message");
    // popup.classList.toggle("show");
    console.log("t : "+t);
    console.log(visibilityList[t%2]);
    popup.style.visibility = visibilityList[t%2];
    t+=1;

}

// b.addEventListener('click',ToggleBox);