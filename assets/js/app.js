document.addEventListener("DOMContentLoaded", function () {
    const square = $('.square');
    const mole = $('.mole');
    const time = $('#seconds');
    let score = $('#score');
    let result = 0;



    function randomSquare() {
        square.removeClass('mole');
        let randomId = Math.floor(Math.random() * 9);
        let randomPos = square.eq(randomId);
        randomPos.removeClass('grass').addClass('mole');
        hitPos = randomPos;
        console.log(hitPos);
    }



    $(document).ready(randomSquare);
})