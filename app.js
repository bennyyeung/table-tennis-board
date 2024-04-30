const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Display')
}
const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Display')
}

const resetButton = document.querySelector('#reset');
const winningScoreSelect = document.querySelector('#playto')
const deuceMessage = document.querySelector('#deuceMessage');
const advantageMessage = document.querySelector('#advantageMessage');

let winningScore = 3;
let isGameOver = false;
let isDeuce = false;

function updateScores(player, opponent){
    if (!isGameOver) {
        player.score++;
        if (player.score >= winningScore && player.score - opponent.score >= 2) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;

            if (player.score > opponent.score) {
                player.display.textContent = player.score;
                opponent.display.textContent = opponent.score;
            } else {
                opponent.display.textContent = opponent.score;
                player.display.textContent = player.score;
            }
            // Hide deuce message if game is over
            deuceMessage.classList.add('is-hidden');
        } else {
            player.display.textContent = player.score;
        }

        // Check for deuce mode
        if (player.score === opponent.score && player.score >= winningScore - 1) {
            deuceMessage.classList.remove('is-hidden');
            isDeuce = true;
            advantageMessage.classList.add('is-hidden');
        } else {
            if (isDeuce) {
                // Check for advantage
                if (player.score === opponent.score + 1 || opponent.score === player.score + 1) {
                    advantageMessage.classList.remove('is-hidden');
                } else {
                    advantageMessage.classList.add('is-hidden');
                }
            }
        }
    }
}

p1.button.addEventListener('click', function () {
   updateScores(p1, p2)
})
p2.button.addEventListener('click', function () {
   updateScores(p2, p1)
})

winningScoreSelect.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    reset();
})

resetButton.addEventListener('click', reset)

function reset () {
    isGameOver = false;
    isDeuce = false;
    deuceMessage.classList.add('is-hidden');
    advantageMessage.classList.add('is-hidden');
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = 0;
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }       
}