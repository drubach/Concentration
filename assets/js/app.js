document.addEventListener("DOMContentLoaded", function () {
    const squares = $('.square');
    const mole = $('.mole');
    const time = $('#seconds');
    let score = $('#score');
    let result = 0;
    var hitPos = '';

    function randomSquare() {
        squares.removeClass('mole');
        let randomId = Math.floor(Math.random() * 9);
        let randomPos = squares.eq(randomId);
        randomPos.removeClass('grass').addClass('mole');
        hitPos = randomPos;
        
        console.log(hitPos);
        return hitPos;
    }



    /*squares.foreach(square, index, arr) => {*/
        squares.click(function() {
        alert( "Handler for .click() called." );
});
        /*arr[index] = square.click;*/






    $(document).ready(randomSquare);

})