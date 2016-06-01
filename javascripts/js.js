/**
 * Created by Gleb.Chekh on 5/23/2016.
 */
$(document).ready(function() {
    // $('#ra7').on('input', f_rangeOut);
    $('.orangeclose').on('click',f_closeOrange);
    $('.purpleclose').on('click',f_closePurple);
    $('.blueclose').on('click',f_closeBlue);
    $('.pinkclose').on('click',f_closePink);
    f_close();


    //берем значение имени файла из локального хранилища
    $('head link').attr('href',  localStorage.getItem('css'));

    $('form').on('change', function(){
        var color = $('input[name=color]:checked').val();

        if(color=='pink') {
            localStorage.setItem("css", "style1.css");

            location.reload();
        }
        else if (color=='yellow') {
            localStorage.setItem("css", "style2.css");
        }
        // перезагружаем страницу
        location.reload();
    });

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
    setTimeout("location.href = 'index.html'", 1500);
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
     setTimeout("location.href = 'index.html'", 3200);
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
    setTimeout("location.href = 'index.html'", 2700);
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
    setTimeout("location.href = 'index.html'", 3200);
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






