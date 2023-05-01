
const $answer = document.getElementsByClassName('answer-button');
const answerLength = $answer.length
let score = 0;
const quize = [
    {
        answers: ['ふね','車','風車','わからない'],
        correct: 'ふね'
    },{
        answers: ['13','16','73','わからない'],
        correct: '73'
    },{
        answers: ['K','A','M','わからない'],
        correct: 'A'
    },{
        answers: ['金魚','へび','あひる','わからない'],
        correct: '金魚'
    },{
        answers: ['N','M','W','わからない'],
        correct: 'M'
    },{
        answers: ['76','16','75','わからない'],
        correct: '75'
    },{
        answers: ['飛行機','車','電車','わからない'],
        correct: '車'
    },{
        answers: ['5','52','53','わからない'],
        correct: '52'
    },{
        answers: ['3','5','53','わからない'],
        correct: 'わからない'
    },{
        answers: ['3','6','0','わからない'],
        correct: '6'
    },{
        answers: ['689','630','89','わからない'],
        correct: '689'
    },{
        answers: ['396','896','806','わからない'],
        correct: '806'
    },{
        answers: ['7045','2945','7945','わからない'],
        correct: '2945'
    },{
        answers: ['赤い線','ピンクの線','赤とピンクの線','わからない'],
        correct: '赤とピンクの線'
    }
]

let quizeIndex = 0;
const quizeLength=quize.length;

function setup()  {
    for(let j=0; j<answerLength; j++){
        $answer[j].textContent = quize[quizeIndex].answers[j];
    }
}

setup();




for(let i=0; i<answerLength; i++){
    $answer[i].addEventListener('click',(e)=>{
        if(e.target.textContent===quize[quizeIndex].correct){
            score++;
        }    
        quizeIndex++;

        let value = Math.floor((score/quizeIndex)*100);

        if(quizeIndex<quizeLength){
            setup();
        }else{
            window.location.href='file:///C:/Users/ibuki/Desktop/web/2/main/main.html';
            if(value<60){
                window.alert("あなたの正答率は"+value+"％です。残念な結果です...色盲だな");
            }else{
                window.alert("あなたの正答率は"+value+"％です。あなたは普通の目です！よかったじゃねーか！！")
            }
        }
    });
}




const box=document.querySelectorAll('.box');
let index = 0;

function chang (){
    box.forEach(box => {
        box.classList.add("hidden");
    });

    box[index].classList.remove("hidden");
}

function display(){
    index++;
    if(index===box.length){
        index=0;
    }
    chang();
}






