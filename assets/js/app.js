document.addEventListener("DOMContentLoaded", function () {
    const squares = $('.square');
    const mole = $('.mole');
    const time = $('#seconds');
    let speed = 1000
    let speedBtns = $('.speedBtn');
    let score = $('#score');
    let result = 0;
    let hitPos = '';
    let randomPos = '';
    let squareHit = '';
    let currentTime = 0;
    let timerId = null;
    let timerId2 = null;
    let startBtn = $("#startBtn");

    function randomSquare() {
        squares.addClass('grass');
        squares.removeClass('mole');
        let randomId = Math.floor(Math.random() * 9);
        randomPos = squares.eq(randomId);
        randomPos.removeClass('grass').addClass('mole');
        hitPos = randomPos[0];
        return hitPos;
    }

    squares.click(function (square) {
        squareHit = square.target;
        if (squareHit === hitPos) {
            result = result + 1;
            score.text(result);
        }
    });

    function countDown() {
        currentTime--;
        time.text(currentTime);
        console.log(currentTime);
        if (currentTime === 0) {
            squares.removeClass('mole');
            squares.addClass('grass');
            randomPos = '';
            hitPos = '';
            clearInterval(timerId);
            clearInterval(timerId2);
            console.log('game over');
            currentTime = time.text();
        }
    }

    function resetTime() {
        time.text(20);
        currentTime = time.text();
    }

    speedBtns.click(function(speedBtn){
        btnHit = speedBtn;
        console.log(btnHit);
    });

    startBtn.click(function () {
        score.text(0);
        resetTime();
        randomPos = '';
        hitPos = '';
        randomSquare();
        setTimeout(function () {
            countDown();
            timerId2 = setInterval(randomSquare, 1000);
            timerId = setInterval(countDown, 1000);
        }, 1000);
    });

})