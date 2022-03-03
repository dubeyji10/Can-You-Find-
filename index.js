console.log("ready");

let dictForStoringClickonSate = {};
// keep track of states click of id matches with guess return green or 
// use a stack if id matches store else pop -- correct if stack is not empty
let correctAnswers = 0;

let triviaQuestions = [

    'The old 20 rupee depcits a motif from this place',
    'The designer of the Indian National Flag was hails from here',
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
    'Producer of the election ink that is used for the elections in the country',
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

function guessGenerator(){
    randomIndex = shuffledList.pop();
    console.log(" ---->> first Item in shuffled array : "+randomIndex);

    // randomIndex = Math.floor(Math.random() * listName.length);
    // const tempRIndex = (element) => element === randomIndex;
    // console.log("const temp r index : "+tempRIndex);
    // very small -- Lakshadweep, dadar nagar haveli -- difficult to click -- so ignore ?
    if(randomIndex===5 || randomIndex===18 || randomIndex===27 || randomIndex ===7 || randomIndex ===9){
        console.log("->->->-> difficult to click on map so ignoring Sorry !"+randomIndex+"->"+listName[randomIndex]);
        guessGenerator();

    }
    else{
        rIndexList.push(randomIndex);
        // console.log("ok find it");
        // console.log(rIndexList);
        console.log("\n\n---total plays left : "+shuffledList.length+"---\n\n")
        console.log("random index after function : "+randomIndex);
        console.log("-----find "+listName[randomIndex]+"--------");
        console.log("-----question : "+dictForStoringClickonSate[randomIndex]+"--------");
        // guess.textContent = "find where is "+listName[randomIndex]+" ?";
        if(shuffledList.length===0){

            let score = (correctAnswers / (listName.length) * 100)+"%";
            console.log("\n\n you score :"+score+"\n\n-------");
            guess.textContent = `Game Over!\nThank You for Playing\r\nYour Score is ${score.slice(0,5)}%`;
            guess.textContent += ` you gave ${correctAnswers} correct answers out of ${listName.length}`;
            guess.style.backgroundColor = "#ff9f9f";    

        }
        else{
            guess.textContent = dictForStoringClickonSate[randomIndex];
            // triviaQuestions
            guess.style.backgroundColor = "#d1d1d1";    
        }
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
                alert(`YAY!!! you found ${listName[i]}`);
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

