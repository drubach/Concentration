document.addEventListener("DOMContentLoaded", function () {
    const squares = $('.square');
    const mole = $('.mole');
    const time = $('#seconds');
    let score = $('#score');
    let result = 0;
    let hitPos = '';
    let squareHit = '';
    let currentTime = time.text();
    let timerId = null;
    let timerId2 = null;
    let startBtn = $("#startBtn");

    function randomSquare() {
        squares.addClass('grass');
        squares.removeClass('mole');
        let randomId = Math.floor(Math.random() * 9);
        let randomPos = squares.eq(randomId);
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
        currentTime --;
        time.text(currentTime);
        console.log(currentTime);
        if (currentTime === 0) {
            squares.removeClass('mole');
            squares.addClass('grass');
            clearInterval(timerId);
            clearInterval(timerId2);
            console.log('game over');
            time.text(11);
            currentTime = time.text();
        }
    }

    startBtn.click(function () {
        score.text(0);
        timerId2 = setInterval(randomSquare, 1000);
        timerId = setInterval(countDown, 1000);
        randomSquare();
        countDown();
    });

})