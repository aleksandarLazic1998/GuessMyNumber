'use strict';
//document.querySelector('.message').textContent = '🎉Correct Number🎊';

// //Za pravljenje emojia: 1.Windows dugme + "."

// document.querySelector('.guess').value = 23;

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener
('click', function(){
    //Stavili smo u funkciju Number jer kada bi pozvali guess u consoole.log i napisali typeof guess on bi nam vratio string a nama treba broj da bi ga uporedili sa random brojem
const guess = Number(document.querySelector('.guess').value);

//Ako nema inputa u polju za brojeve
if(!guess){

document.querySelector('.message').textContent = 'No Number🚫';

}//Ako pogodimo broj
else if(guess === secretNumber){

document.querySelector('.message').textContent = '🎉Correct Number🎊';

document.querySelector('body').style.backgroundColor = "#60b347";
document.querySelector('.number').textContent = secretNumber;
document.querySelector('.number').style.width = "30rem";

//stavili smo u uslovu ako pobedimo jer ako nam je sada score veci od proslog highScora onda taj highScore ppostaje score
if(score > highScore){
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
}

}//Ako broj za pogadjanje je veci od broja koji treba
else if(guess!==secretNumber){
    if(score>1){
//da ne bi pravili za oba slucajeva kod radimo ternarnu operaciju koja ce da menja tekst u zavisnosti od slucaja
        document.querySelector('.message').textContent = guess > secretNumber ? '📈 Too High 📈' : '📉 Too Low 📉' ;
    
     //Za svaki put kada omasimo score broj se smanji za 1
     score --;
     document.querySelector('.score').textContent = score;
    
        } else {
    
            document.querySelector('.message').textContent = '😕Game lost ';
            document.querySelector('.score').textContent = 0;
    
}
}
});

document.querySelector('.again').addEventListener('click', function(){

    //Vracamo score na 20
    score = 20;
    document.querySelector('.score').textContent = score;

     //Uzimamo da nam novi broj bude random
    secretNumber = Math.trunc(Math.random()*20)+1;

    //vracamo originalnu vrednost propertija
    document.querySelector('body').style.backgroundColor = "#222";

     //restartujemo vrednost poruke
     document.querySelector('.message').textContent = 'Start guessing...';

     //Vrednost input field-a mora da bude prazan string " "    
     document.querySelector('.guess').value = " ";

     //vracamo da vrednost tajnog broja bude " ? "
     document.querySelector('.number').textContent = '?';

     //Vracamo promenjenu sirinu polja
     document.querySelector('.number').style.width = "15rem";

//Opcija 2: ova funkcija ce nam refreshovati page
// location.reload();, ali ne mozemo ovo jer necemo moci da sacuvamo high score

});
