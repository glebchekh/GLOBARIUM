/**
 * Created by Gleb.Chekh on 5/23/2016.
 */
$(document).ready(function() {
    f_close();
    $('.orangeclose').on('click',f_closeOrange);
    $('.purpleclose').on('click',f_closePurple);
    $('.blueclose').on('click',f_closeBlue);
    $('.pinkclose').on('click',f_closePink);
    $('#button1').on('click',start_button1);
    $('#button2').on('click',start_button2);
    $('#button3').on('click',start_button3);
    $('#button4').on('click',start_button4);
    $('.acc-h').on('click',f_acc);
    // $('img').on('click', f_img);



});
function f_close(){
    $(' .material-icons').animate({
        opacity:'0'

    }, 0)
        .delay(2300).animate({
            opacity: '1'
        }, 1000);

}






function f_closePurple() {
    $("body").click(function () {
        $(this).attr('class', 'purplepage');
    });
    setTimeout("location.href = 'index2.html'", 1500);
    $(' .material-icons').animate({
        opacity:'0'

    }, 100);
   
    $('.purple').animate({
        height: '40vh',
        width: '40%'

    }, 0 );

    $('.orange').animate({
        height: '70%'
    }, 1500);
    $('.pink').animate({
        width: '70%'
    }, 1500);
    $('.blue').animate({
        width: '70%'
    }, 1500);
    $('.green').animate({
        height: '70%'
    }, 1500 );


}
function f_closeBlue() {
    $("body").click(function () {
        $(this).attr('id', 'bluepage');
    });
     setTimeout("location.href = 'index2.html'", 3200);
    $(' .material-icons').animate({
        opacity:'0'

    }, 100);

    $('.blue ').animate({
        height: '30vh'
    }, 1000)

        .delay(300).animate({
            width: '70%'

        },1000);
    $('.orange').animate({
        bottom: '30vh'

    }, 1300)
        .delay(1000).animate({
            bottom: '0'

        }, 1000);

    $('.pink').animate({
        top: '0'

    }, 1000);
    $('.purple').animate({
        top: '200vh'

    }, 1300);

    $('.green').animate({
        top: '0vh'

    }, 1300);





}
function f_closePink() {
    $("body").click(function () {
        $(this).attr('id', 'pinkpage');
    });
    setTimeout("location.href = 'index2.html'", 2700);
    $(' .material-icons').animate({
        opacity:'0'

    }, 100);
    $('.pink').animate({
        width: '70%',
        height:'30vh'
    }, 2000);

    $('.blue ').delay(500).animate({
        'opacity': '1',
        'background-color': 'lightskyblue'
    }, 1000);

    $('.orange').delay(1000).animate({
        'opacity': '1',
        'background-color': '#ffbe39'

    }, 1000);
    $('.purple').delay(1500).animate({
        'opacity': '1',
        'background-color': 'mediumpurple'

    }, 1300);

    $('.green').delay(1800).animate({
        'opacity': '1',
        'background-color': '#cbff8d'

    }, 1300);


}


function f_closeOrange() {
    $("body").click(function () {
        $(this).attr('id', 'orangepage');
    });
    setTimeout("location.href = 'index2.html'", 3200);
    $(' .material-icons').animate({
        opacity:'0'

    }, 100);

    $('.orange').animate({
        'z-index': '999'

    }, 0)
        .animate({
            width: '30%'

        }, 1000)
        .animate({
            height: '70vh'
        },1500)


}


function start_button1() {
    $('#buttonBack1').slideToggle('slow')
}

function start_button2() {

    $("#buttonBack2").animate({
        width: "toggle"
    });
}



function start_button3() {
    var colors = ["#9370db", "#ffe116", "#cbff8d","#87CEFA"];
    var rand = Math.floor(Math.random() * colors.length);
    $('#button3').css("background-color", colors[rand]);


}


function start_button4()  {

}

function f_acc(){
    $('.acc-h').not(this).next().slideUp(500);
    $(this).next().slideToggle(300);

}


// function f_img(){
//     $('.first').css('background-image','url('+$(this).attr('src')+')');
//     $('.first h2').html($(this).attr('alt'));
//     $(this).css('border','2px solid #52fceb');
//     $('img').not(this).css('border','none');
//
//
// }