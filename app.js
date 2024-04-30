const p1Button = document.querySelector('#p1Button');
const p2Button = document.querySelector('#p2Button');
const resetButton = document.querySelector('#reset');
const p1Display = document.querySelector('#p1Display');
const p2Display = document.querySelector('#p2Display');
const winningScoreSelect = document.querySelector('#playto')

let p1Score = 0;
let p2Score = 0;
let winningScore = 5;
let isGameOver = false;

p1Button.addEventListener('click', function () {
    if(!isGameOver) {
        p1Score+= 1;
        if(p1Score  === winningScore) {
            isGameOver = true;                           
        }
        p1Display.textContent = p1Score; 
    }      
})
p2Button.addEventListener('click', function () {
    if(!isGameOver) {
        p2Score+= 1;
        if(p2Score  === winningScore) {
            isGameOver = true;                           
        }
        p2Display.textContent = p2Score; 
    }      
})

winningScoreSelect.addEventListener('change', function () {
    alert("CHANGE!")    
})

resetButton.addEventListener('click', function () {
    isGameOver = false;
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = 0
    p2Display.textContent = 0
})