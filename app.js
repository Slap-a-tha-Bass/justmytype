let body = $('body');
let sentences = ['ten ate neite ate nee enet ite ate inet ent eate', 'Too ato too nOt enot one totA not anot tOO aNot', 'oat itain oat tain nate eate tea anne inant nean', 'itant eate anot eat nato inate eat anot tain eat', 'nee ene ate ite tent tiet ent ine ene ete ene ate'];
let counter = 0;
let lowerKeyboard = $('#keyboard-lower-container');
let upperKeyboard = $('#keyboard-upper-container');
let target = $('#target-letter');
// upperKeyboard.hide();
// need to assign a "finished" or "completed" of functionality to move to next sentences
function onLoad() {
    if (counter < sentences.length) {
        $('#sentence').text(sentences[counter]);
        counter++;
    }
};
onLoad();

body.keydown(function (e) {

    // shift key functionality
    if (e.which === 16) {
        upperKeyboard.show();
        lowerKeyboard.hide();
        // console.log('shift');
    }
})
body.keyup(function (e) {
    if (e.which === 16) {
        upperKeyboard.hide();
        lowerKeyboard.show();
    }
    target.empty();
})
let finalTicker = 0;
let letterTicker = 0;
let sentenceTicker = 0;
let characterNumber = sentences[sentenceTicker].length;
let yellowBlock = $('#yellow-block');
let feedback = $('#feedback');
let start = 0;
let startTime = Date.now();
// let timer = $('#timer');
// timer.css('color','blue');
// let timeInterval = setInterval(function(){
//     timer.text(((Date.now() - start) / 1000));
// }, 1000);
// timeInterval.toFixed((0));
// if(start === -1){
//     start = Date.now();
// }
let numberOfMistakes = 0;
body.keypress(function (e) {
    // if(start = 0){
    // let elapsedTime = endTime - startTime;

    //     let startTime = Date.now();
    //     keypress++;
    // }
    // timer
    // moment().startOf('minute').fromNow();
    // for yellow-block highlighting
    yellowBlock.animate({marginLeft: '+=17.5px'},0);
    
    let typedLetter = String.fromCharCode(e.which);
    feedback.append(typedLetter);
    target.append(typedLetter);
    if (typedLetter === sentences[sentenceTicker][letterTicker++]) {
        target.css('color', 'green');
        target.html('&#10004;');
    } else {
        target.css('color', 'red');
        target.html('X');
        numberOfMistakes++;
    }
    // if (sentenceTicker === sentences.length && letterTicker === characterNumber){
        //     alert('Whoa it worked');
        // }
        
        if (letterTicker === characterNumber) {
            letterTicker = 0;
            sentenceTicker++;
            feedback.text('');
            yellowBlock.animate({marginLeft: '-=840px'},0);
            onLoad();
        }
        finalTicker++;
        
        
        if (finalTicker === 240){
            feedback.remove();
            yellowBlock.remove();
            let endTime = Date.now();
            let elapsedTime = endTime - startTime;
            let wpm = 54 / elapsedTime * 60 - (2 * numberOfMistakes);
            wpm.toFixed();
            $('#sentence').text(wpm + " words per minute");
            // console.log(wpm);
            
            setTimeout(function(){
                target.append('<button>Play again?</button>');
                $('button').click(function(e){
                    e.preventDefault();
                    window.location.reload(e);
                })
            }, 3000);
    }
    

    // for lower case keys WHEN PRESSED
    // asdf row
    if (e.which === 97) {
        $('#97').addClass("highlight");

        setTimeout(function () {
            $('#97').removeClass("highlight");
        }, 200);
    }
    if (e.which === 115) {
        $('#115').addClass("highlight");
        // target.append('s');
        setTimeout(function () {
            $('#115').removeClass("highlight");
        }, 200);
    }
    if (e.which === 100) {
        $('#100').addClass("highlight");
        // target.append('d');
        setTimeout(function () {
            $('#100').removeClass("highlight");
        }, 200);
    }
    if (e.which === 102) {
        $('#102').addClass("highlight");
        // target.append('f');
        setTimeout(function () {
            $('#102').removeClass("highlight");
        }, 200);
    }
    if (e.which === 103) {
        $('#103').addClass("highlight");
        // target.append('g');
        setTimeout(function () {
            $('#103').removeClass("highlight");
        }, 200);
    }
    if (e.which === 104) {
        $('#104').addClass("highlight");
        // target.append('h');
        setTimeout(function () {
            $('#104').removeClass("highlight");
        }, 200);
    }
    if (e.which === 106) {
        $('#106').addClass("highlight");
        // target.append('j');
        setTimeout(function () {
            $('#106').removeClass("highlight");
        }, 200);
    }
    if (e.which === 107) {
        $('#107').addClass("highlight");
        // target.append('k');
        setTimeout(function () {
            $('#107').removeClass("highlight");
        }, 200);
    }
    if (e.which === 108) {
        $('#108').addClass("highlight");
        // target.append('l');
        setTimeout(function () {
            $('#108').removeClass("highlight");
        }, 200);
    }
    if (e.which === 59) {
        $('#59').addClass("highlight");
        // target.append('semi-colon');
        setTimeout(function () {
            $('#59').removeClass("highlight");
        }, 200);
    }
    if (e.which === 39) {
        $('#39').addClass("highlight");
        // target.append('quotation');
        setTimeout(function () {
            $('#39').removeClass("highlight");
        }, 200);
    }
    // qwer row
    if (e.which === 113) {
        $('#113').addClass("highlight");
        // target.append('q');
        setTimeout(function () {
            $('#113').removeClass("highlight");
        }, 200);
    }
    if (e.which === 119) {
        $('#119').addClass("highlight");
        // target.append('w');
        setTimeout(function () {
            $('#119').removeClass("highlight");
        }, 200);
    }
    if (e.which === 101) {
        $('#101').addClass("highlight");
        // target.append('e');
        setTimeout(function () {
            $('#101').removeClass("highlight");
        }, 200);
    }
    if (e.which === 114) {
        $('#114').addClass("highlight");
        // target.append('r');
        setTimeout(function () {
            $('#114').removeClass("highlight");
        }, 200);
    }
    if (e.which === 116) {
        $('#116').addClass("highlight");

        setTimeout(function () {
            $('#116').removeClass("highlight");
        }, 200);
    }
    if (e.which === 121) {
        $('#121').addClass("highlight");
        // target.append('y');
        setTimeout(function () {
            $('#121').removeClass("highlight");
        }, 200);
    }
    if (e.which === 117) {
        $('#117').addClass("highlight");
        // target.append('u');
        setTimeout(function () {
            $('#117').removeClass("highlight");
        }, 200);
    }
    if (e.which === 105) {
        $('#105').addClass("highlight");
        // target.append('i');
        setTimeout(function () {
            $('#105').removeClass("highlight");
        }, 200);
    }
    if (e.which === 111) {
        $('#111').addClass("highlight");
        // target.append('o');
        setTimeout(function () {
            $('#111').removeClass("highlight");
        }, 200);
    }
    if (e.which === 112) {
        $('#112').addClass("highlight");
        // target.append('p');
        setTimeout(function () {
            $('#112').removeClass("highlight");
        }, 200);
    }
    if (e.which === 91) {
        $('#91').addClass("highlight");
        // target.append('left bracket');
        setTimeout(function () {
            $('#91').removeClass("highlight");
        }, 200);
    }
    if (e.which === 93) {
        $('#93').addClass("highlight");
        // target.append('right bracket');
        setTimeout(function () {
            $('#93').removeClass("highlight");
        }, 200);
    }
    if (e.which === 92) {
        $('#92').addClass("highlight");
        // target.append('back slash');
        setTimeout(function () {
            $('#92').removeClass("highlight");
        }, 200);
    }
    // ZXCV row
    if (e.which === 90) {
        $('#90').addClass("highlight");
        // target.append('Z');
        setTimeout(function () {
            $('#90').removeClass("highlight");
        }, 200);
    }
    if (e.which === 88) {
        $('#88').addClass("highlight");
        // target.append('X');
        setTimeout(function () {
            $('#88').removeClass("highlight");
        }, 200);
    }
    if (e.which === 67) {
        $('#67').addClass("highlight");
        // target.append('C');
        setTimeout(function () {
            $('#67').removeClass("highlight");
        }, 200);
    }
    if (e.which === 86) {
        $('#86').addClass("highlight");
        // target.append('V');
        setTimeout(function () {
            $('#86').removeClass("highlight");
        }, 200);
    }
    if (e.which === 66) {
        $('#66').addClass("highlight");
        // target.append('B');
        setTimeout(function () {
            $('#66').removeClass("highlight");
        }, 200);
    }
    if (e.which === 78) {
        $('#78').addClass("highlight");
        // target.append('N');
        setTimeout(function () {
            $('#78').removeClass("highlight");
        }, 200);
    }
    if (e.which === 77) {
        $('#77').addClass("highlight");
        // target.append('M');
        setTimeout(function () {
            $('#77').removeClass("highlight");
        }, 200);
    }
    if (e.which === 60) {
        $('#60').addClass("highlight");
        // target.append('less than');
        setTimeout(function () {
            $('#60').removeClass("highlight");
        }, 200);
    }
    if (e.which === 62) {
        $('#62').addClass("highlight");
        // target.append('greater than');
        setTimeout(function () {
            $('#62').removeClass("highlight");
        }, 200);
    }
    if (e.which === 63) {
        $('#63').addClass("highlight");
        // target.append('question mark');
        setTimeout(function () {
            $('#63').removeClass("highlight");
        }, 200);
    }
    // for characters row
    if (e.which === 126) {
        $('#126').addClass("highlight");
        // target.append('squiggly');
        setTimeout(function () {
            $('#126').removeClass("highlight");
        }, 200);
    }
    if (e.which === 33) {
        $('#33').addClass("highlight");
        // target.append('exclamation');
        setTimeout(function () {
            $('#33').removeClass("highlight");
        }, 200);
    }
    if (e.which === 64) {
        $('#64').addClass("highlight");
        // target.append('at sign');
        setTimeout(function () {
            $('#64').removeClass("highlight");
        }, 200);
    }
    if (e.which === 35) {
        $('#35').addClass("highlight");
        // target.append('hashtag');
        setTimeout(function () {
            $('#35').removeClass("highlight");
        }, 200);
    }
    if (e.which === 36) {
        $('#36').addClass("highlight");
        // target.append('dollar sign');
        setTimeout(function () {
            $('#36').removeClass("highlight");
        }, 200);
    }
    if (e.which === 37) {
        $('#37').addClass("highlight");
        // target.append('percent');
        setTimeout(function () {
            $('#37').removeClass("highlight");
        }, 200);
    }
    if (e.which === 94) {
        $('#94').addClass("highlight");
        // target.append('raised to the sign');
        setTimeout(function () {
            $('#94').removeClass("highlight");
        }, 200);
    }
    if (e.which === 38) {
        $('#38').addClass("highlight");
        // target.append('ampersand');
        setTimeout(function () {
            $('#38').removeClass("highlight");
        }, 200);
    }
    if (e.which === 56) {
        $('#56').addClass("highlight");
        // target.append('asterisk');
        setTimeout(function () {
            $('#56').removeClass("highlight");
        }, 200);
    }
    if (e.which === 40) {
        $('#40').addClass("highlight");
        // target.append('left parentheses');
        setTimeout(function () {
            $('#40').removeClass("highlight");
        }, 200);
    }
    if (e.which === 41) {
        $('#41').addClass("highlight");
        // target.append('right parentheses');
        setTimeout(function () {
            $('#41').removeClass("highlight");
        }, 200);
    }
    if (e.which === 95) {
        $('#95').addClass("highlight");
        // target.append('long dash');
        setTimeout(function () {
            $('#95').removeClass("highlight");
        }, 200);
    }
    if (e.which === 43) {
        $('#43').addClass("highlight");
        // target.append('plus sign');
        setTimeout(function () {
            $('#43').removeClass("highlight");
        }, 200);
    }
    // space bar
    if (e.which === 32) {
        $('#32').addClass("highlight");
        // target.append('space bar');
        setTimeout(function () {
            $('#32').removeClass("highlight");
        }, 200);
    }
    // 
    // for upper case keys WHEN PRESSED
    // ASDF row
    if (e.which === 65) {
        $('#65').addClass("highlight");
        target.append('A');
        setTimeout(function () {
            $('#65').removeClass("highlight");
        }, 200);
    }
    if (e.which === 83) {
        $('#83').addClass("highlight");
        // target.append('S');
        setTimeout(function () {
            $('#83').removeClass("highlight");
        }, 200);
    }
    if (e.which === 68) {
        $('#68').addClass("highlight");
        // target.append('D');
        setTimeout(function () {
            $('#68').removeClass("highlight");
        }, 200);
    }
    if (e.which === 70) {
        $('#70').addClass("highlight");
        // target.append('F');
        setTimeout(function () {
            $('#70').removeClass("highlight");
        }, 200);
    }
    if (e.which === 71) {
        $('#71').addClass("highlight");
        // target.append('G');
        setTimeout(function () {
            $('#71').removeClass("highlight");
        }, 200);
    }
    if (e.which === 72) {
        $('#72').addClass("highlight");
        // target.append('H');
        setTimeout(function () {
            $('#72').removeClass("highlight");
        }, 200);
    }
    if (e.which === 74) {
        $('#74').addClass("highlight");
        // target.append('J');
        setTimeout(function () {
            $('#74').removeClass("highlight");
        }, 200);
    }
    if (e.which === 75) {
        $('#75').addClass("highlight");
        // target.append('K');
        setTimeout(function () {
            $('#75').removeClass("highlight");
        }, 200);
    }
    if (e.which === 76) {
        $('#76').addClass("highlight");
        // target.append('L');
        setTimeout(function () {
            $('#76').removeClass("highlight");
        }, 200);
    }
    if (e.which === 58) {
        $('#58').addClass("highlight");
        // target.append('colon');
        setTimeout(function () {
            $('#58').removeClass("highlight");
        }, 200);
    }
    if (e.which === 34) {
        $('#34').addClass("highlight");
        // target.append('dblquotation');
        setTimeout(function () {
            $('#34').removeClass("highlight");
        }, 200);
    }
    // QWER row
    if (e.which === 81) {
        $('#81').addClass("highlight");
        // target.append('Q');
        setTimeout(function () {
            $('#81').removeClass("highlight");
        }, 200);
    }
    if (e.which === 87) {
        $('#87').addClass("highlight");
        // target.append('W');
        setTimeout(function () {
            $('#87').removeClass("highlight");
        }, 200);
    }
    if (e.which === 69) {
        $('#69').addClass("highlight");
        // target.append('E');
        setTimeout(function () {
            $('#69').removeClass("highlight");
        }, 200);
    }
    if (e.which === 82) {
        $('#82').addClass("highlight");
        // target.append('R');
        setTimeout(function () {
            $('#82').removeClass("highlight");
        }, 200);
    }
    if (e.which === 84) {
        $('#84').addClass("highlight");
        // target.append('T');
        setTimeout(function () {
            $('#84').removeClass("highlight");
        }, 200);
    }
    if (e.which === 89) {
        $('#89').addClass("highlight");
        // target.append('Y');
        setTimeout(function () {
            $('#89').removeClass("highlight");
        }, 200);
    }
    if (e.which === 85) {
        $('#85').addClass("highlight");
        // target.append('U');
        setTimeout(function () {
            $('#85').removeClass("highlight");
        }, 200);
    }
    if (e.which === 73) {
        $('#73').addClass("highlight");
        // target.append('I');
        setTimeout(function () {
            $('#73').removeClass("highlight");
        }, 200);
    }
    if (e.which === 79) {
        $('#79').addClass("highlight");
        // target.append('O');
        setTimeout(function () {
            $('#79').removeClass("highlight");
        }, 200);
    }
    if (e.which === 80) {
        $('#80').addClass("highlight");
        // target.append('P');
        setTimeout(function () {
            $('#80').removeClass("highlight");
        }, 200);
    }
    if (e.which === 123) {
        $('#123').addClass("highlight");
        // target.append('left curly');
        setTimeout(function () {
            $('#123').removeClass("highlight");
        }, 200);
    }
    if (e.which === 125) {
        $('#125').addClass("highlight");
        // target.append('right curly');
        setTimeout(function () {
            $('#125').removeClass("highlight");
        }, 200);
    }
    if (e.which === 124) {
        $('#124').addClass("highlight");
        // target.append('bar');
        setTimeout(function () {
            $('#124').removeClass("highlight");
        }, 200);
    }
    // zxcv row
    if (e.which === 122) {
        $('#122').addClass("highlight");
        // target.append('z');
        setTimeout(function () {
            $('#122').removeClass("highlight");
        }, 200);
    }
    if (e.which === 120) {
        $('#120').addClass("highlight");
        // target.append('x');
        setTimeout(function () {
            $('#120').removeClass("highlight");
        }, 200);
    }
    if (e.which === 99) {
        $('#99').addClass("highlight");
        // target.append('c');
        setTimeout(function () {
            $('#99').removeClass("highlight");
        }, 200);
    }
    if (e.which === 118) {
        $('#118').addClass("highlight");
        // target.append('v');
        setTimeout(function () {
            $('#118').removeClass("highlight");
        }, 200);
    }
    if (e.which === 98) {
        $('#98').addClass("highlight");
        // target.append('b');
        setTimeout(function () {
            $('#98').removeClass("highlight");
        }, 200);
    }
    if (e.which === 110) {
        $('#110').addClass("highlight");
        // target.append('n');
        setTimeout(function () {
            $('#110').removeClass("highlight");
        }, 200);
    }
    if (e.which === 109) {
        $('#109').addClass("highlight");
        // target.append('m');
        setTimeout(function () {
            $('#109').removeClass("highlight");
        }, 200);
    }
    if (e.which === 44) {
        $('#44').addClass("highlight");
        // target.append('comma');
        setTimeout(function () {
            $('#44').removeClass("highlight");
        }, 200);
    }
    if (e.which === 46) {
        $('#46').addClass("highlight");
        // target.append('period');
        setTimeout(function () {
            $('#46').removeClass("highlight");
        }, 200);
    }
    if (e.which === 47) {
        $('#47').addClass("highlight");
        // target.append('forward slash');
        setTimeout(function () {
            $('#47').removeClass("highlight");
        }, 200);
    }
    // for numbers row
    if (e.which === 96) {
        $('#96').addClass("highlight");
        // target.append('back tick');
        setTimeout(function () {
            $('#96').removeClass("highlight");
        }, 200);
    }
    if (e.which === 49) {
        $('#49').addClass("highlight");
        // target.append('1');
        setTimeout(function () {
            $('#49').removeClass("highlight");
        }, 200);
    }
    if (e.which === 50) {
        $('#50').addClass("highlight");
        // target.append('2');
        setTimeout(function () {
            $('#50').removeClass("highlight");
        }, 200);
    }
    if (e.which === 51) {
        $('#51').addClass("highlight");
        // target.append('3');
        setTimeout(function () {
            $('#51').removeClass("highlight");
        }, 200);
    }
    if (e.which === 52) {
        $('#52').addClass("highlight");
        // target.append('4');
        setTimeout(function () {
            $('#52').removeClass("highlight");
        }, 200);
    }
    if (e.which === 53) {
        $('#53').addClass("highlight");
        // target.append('5');
        setTimeout(function () {
            $('#53').removeClass("highlight");
        }, 200);
    }
    if (e.which === 54) {
        $('#54').addClass("highlight");
        // target.append('6');
        setTimeout(function () {
            $('#54').removeClass("highlight");
        }, 200);
    }
    if (e.which === 55) {
        $('#55').addClass("highlight");
        // target.append('7');
        setTimeout(function () {
            $('#55').removeClass("highlight");
        }, 200);
    }
    if (e.which === 56) {
        $('#56').addClass("highlight");
        // target.append('8');
        setTimeout(function () {
            $('#56').removeClass("highlight");
        }, 200);
    }
    if (e.which === 57) {
        $('#57').addClass("highlight");
        // target.append('9');
        setTimeout(function () {
            $('#57').removeClass("highlight");
        }, 200);
    }
    if (e.which === 48) {
        $('#48').addClass("highlight");
        // target.append('0');
        setTimeout(function () {
            $('#48').removeClass("highlight");
        }, 200);
    }
    if (e.which === 45) {
        $('#45').addClass("highlight");
        // target.append('dash');
        setTimeout(function () {
            $('#45').removeClass("highlight");
        }, 200);
    }
    if (e.which === 61) {
        $('#61').addClass("highlight");
        // target.append('equals sign');
        setTimeout(function () {
            $('#61').removeClass("highlight");
        }, 200);
    }

});