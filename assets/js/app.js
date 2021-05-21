document.addEventListener("DOMContentLoaded", function () {
    const squares = $('.square');
    const mole = $('.mole');
    const time = $('#seconds');
    let score = $('#score');
    let speed = 1000;
    let result = 0;
    let hiScore = 0;
    let gameCount = 0;
    let hitPos = '';
    let randomPos = '';
    let squareHit = '';
    let currentTime = 0;
    let timerId = null;
    let timerId2 = null;
    let timerId3 = null;
    let startBtn = $("#startBtn");

    function randomSquare() {
        squares.removeClass('hammer');
        squares.removeClass('mole');
        squares.addClass('grass');
        let randomId = Math.floor(Math.random() * 9);
        if (randomPos === squares.eq(randomId)) {
            randomId = Math.floor(Math.random() * 9);
        } else {
            randomPos = squares.eq(randomId);
        }
        randomPos.removeClass('grass').addClass('mole');
        hitPos = randomPos[0];
        return hitPos;
    }

    squares.click(function (square) {
        squareHit = square.target;
        if (squareHit === hitPos) {
            result = result + 1;
            score.text(result);
            randomPos.removeClass('mole').addClass('hammer');
        }
    });

    function scoreStore() {
        if (confirm('Would you like to keep track of your high score?')) {
            // Save it!
            hiScore = result;
            console.log('Score saved.' + hiScore + 'gameCount' + gameCount);
        } else {
            // Do nothing!
            console.log('Not saved.' + hiScore + 'gameCount' + gameCount);
        }
        return hiScore;
    }

    function scoreModal() {
        if (gameCount === 1) {
            scoreStore();            
        } else if (gameCount != 1 && hiScore > 0 && result > hiScore) {
            hiScore = result;
            alert("Congratulations!! Your new high score is: " + hiScore);            
        } else {
            alert("Great job!!");
        }
        return hiScore;
    }

    function countDown() {
        currentTime--;
        time.text(currentTime);
        console.log(currentTime + 'speed:' + speed);
        if (currentTime === 0) {
            squares.removeClass('mole');
            squares.addClass('grass');
            randomPos = '';
            hitPos = '';
            speed = 1000;
            clearInterval(timerId);
            clearInterval(timerId2);
            clearInterval(timerId3)
            console.log('game over' + 'Game Count:' + gameCount);
            currentTime = time.text();
            setTimeout(function (){
                scoreModal();
            },500);
            gameCount = gameCount + 1;
            console.log('game count:' + gameCount);
        }
        return gameCount;
    }

    function resetTime() {
        time.text(20);
        currentTime = time.text();
    }

    function speedChng() {
        speed = speed - 200;
        return speed;
    }

    startBtn.click(function () {
        result = 0;
        score.text(0);
        resetTime();
        randomPos = '';
        hitPos = '';
        randomSquare();
        timerId2 = setInterval(randomSquare, speed);
        setTimeout(function () {
            countDown();
            timerId = setInterval(countDown, 1000);
        }, 1000);
        setTimeout(function () {
            speedChng();
            timerId3 = setInterval(speedChng, 5000);
        }, 5000)
    });

})