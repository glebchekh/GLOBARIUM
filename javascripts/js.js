/**
 * Created by Gleb.Chekh on 5/23/2016.
 */
$(document).ready(function() {
    // $('#ra7').on('input', f_rangeOut);
    $('.purple').on('click',f_purpleAnim);
    $('.blue').on('click',f_blueAnim);
    $('.orange').on('click',f_orangeAnim);
    $('.pink').on('click',f_pinkAnim);
    $('.material-icons').on('click',f_closePurple);
    
    // $('.colorset1').on('click',f_colorChange);
    // $('.colorset2').on('click',f_colorChange);
    // $('.colorset3').on('click',f_colorChange);
    // $('.colorset4').on('click',f_colorChange);
});

function f_purpleAnim() {

    $("body").click(function () {
        $(this).attr('id', 'purplepage');
    });
    setTimeout("location.href = 'purple.html'", 1500);
    $('.orange').animate({
        height: '0px'
    }, 1500);
    $('.pink').animate({
        width: '0px'
    }, 1500);
    $('.blue').animate({
        width: '0px'
    }, 1500);
    $('.green').animate({
        height: '0px'
    }, 1500 );
    $('.green').css('height' , '0px')

    // $('.purple').animate({
    //         width: '100%',
    //         height: '100vh',
    //
    //         'z-index': '999'
    //     }, 1500);


}


function f_closePurple() {
    $("body").click(function () {
        $(this).attr('id', 'purplepage');
    });
    setTimeout("location.href = 'index.html'", 1500);


    $('.green').css('height' , '0px')


}

function f_blueAnim() {
    setTimeout("location.href = 'blue.html'", 2500);
    $("body").click(function () {
        $(this).attr('id', 'bluepage');
    });
    $('.pink').animate({
        'z-index': '999'
    }, 100)
        .delay(1500).animate({
        top: '-100vh'

    }, 800);
    $('.purple').delay(1500).animate({
        bottom: '200vh'

    }, 900);

    $('.green').delay(1500).animate({
        top: '-200vh'

    }, 1300);

    $('.orange').animate({
        bottom: '30vh',
        'z-index': '0'

    }, 500)
        .delay(1000).animate({
            bottom: '150vh',
            'z-index': '0'

    }, 1000);

    $('.blue').delay( 500 ).animate({
        'z-index': '999',
        width: '100%'
        }, 1000)

        .animate({
            width: '100%',
            height: '100vh'

        }, 1000);


}
function f_orangeAnim() {
    setTimeout("location.href = 'orange.html'", 4500);

    $('.orange').animate({
            width: '0px',
            height: '0px',

            'z-index': '999'
        }, 1500)
        .animate({
            width: '100%',
            height: '100vh'

        }, 3000);
}


function f_pinkAnim() {
    $("body").click(function () {
    $(this).attr('id', 'pinkpage');
});
    setTimeout("location.href = 'pink.html'", 3000);


    $('.orange ').delay(1800).animate({
            'background-color': 'pink',
            'opacity': '0'
    }, 600);
    $('.blue ').delay(2400).animate({
        'background-color': 'pink',
        'opacity': '0'
    }, 600);
    $('.purple ').delay(1200).animate({
        'background-color': 'pink',
        'opacity': '0'
    }, 600);
    $('.green').animate({
        'background-color': 'pink',
        'opacity': '0'
    }, 1000);

        // .animate({
        //     width: '100%',
        //     height: '100vh'
        //
        // }, 3000);
}


// function f_colorChange() {
//     $('.pink').css('background-color','cadetblue');
//     $('.green').css('background-color','blue');
//     $('.orange').css('background-color','cadetblue');
//     $('#purplepage').css('background-color','blue');
//     $('.blue').css('background-color','cadetblue');
//     $('.backgroundColor').css('background-color','cadetblue');
//
//
// }

(function (d) {
    d.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "color", "outlineColor"], function (f, e) {
        d.fx.step[e] = function (g) {
            if (!g.colorInit) {
                g.start = c(g.elem, e);
                g.end = b(g.end);
                g.colorInit = true
            }
            g.elem.style[e] = "rgb(" + [Math.max(Math.min(parseInt((g.pos * (g.end[0] - g.start[0])) + g.start[0]), 255), 0), Math.max(Math.min(parseInt((g.pos * (g.end[1] - g.start[1])) + g.start[1]), 255), 0), Math.max(Math.min(parseInt((g.pos * (g.end[2] - g.start[2])) + g.start[2]), 255), 0)].join(",") + ")"
        }
    });

    function b(f) {
        var e;
        if (f && f.constructor == Array && f.length == 3) {
            return f
        }
        if (e = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)) {
            return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3])]
        }
        if (e = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)) {
            return [parseFloat(e[1]) * 2.55, parseFloat(e[2]) * 2.55, parseFloat(e[3]) * 2.55]
        }
        if (e = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)) {
            return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)]
        }
        if (e = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)) {
            return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)]
        }
        if (e = /rgba\(0, 0, 0, 0\)/.exec(f)) {
            return a.transparent
        }
        return a[d.trim(f).toLowerCase()]
    }
    function c(g, e) {
        var f;
        do {
            f = d.css(g, e);
            if (f != "" && f != "transparent" || d.nodeName(g, "body")) {
                break
            }
            e = "backgroundColor"
        } while (g = g.parentNode);
        return b(f)
    }
    var a = {
        aqua: [0, 255, 255],
        azure: [240, 255, 255],
        beige: [245, 245, 220],
        black: [0, 0, 0],
        blue: [0, 0, 255],
        brown: [165, 42, 42],
        cyan: [0, 255, 255],
        darkblue: [0, 0, 139],
        darkcyan: [0, 139, 139],
        darkgrey: [169, 169, 169],
        darkgreen: [0, 100, 0],
        darkkhaki: [189, 183, 107],
        darkmagenta: [139, 0, 139],
        darkolivegreen: [85, 107, 47],
        darkorange: [255, 140, 0],
        darkorchid: [153, 50, 204],
        darkred: [139, 0, 0],
        darksalmon: [233, 150, 122],
        darkviolet: [148, 0, 211],
        fuchsia: [255, 0, 255],
        gold: [255, 215, 0],
        green: [0, 128, 0],
        indigo: [75, 0, 130],
        khaki: [240, 230, 140],
        lightblue: [173, 216, 230],
        lightcyan: [224, 255, 255],
        lightgreen: [144, 238, 144],
        lightgrey: [211, 211, 211],
        lightpink: [255, 182, 193],
        lightyellow: [255, 255, 224],
        lime: [0, 255, 0],
        magenta: [255, 0, 255],
        maroon: [128, 0, 0],
        navy: [0, 0, 128],
        olive: [128, 128, 0],
        orange: [255, 165, 0],
        pink: [255, 192, 203],
        purple: [128, 0, 128],
        violet: [128, 0, 128],
        red: [255, 0, 0],
        silver: [192, 192, 192],
        white: [255, 255, 255],
        yellow: [255, 255, 0],
        transparent: [255, 255, 255]
    }
})(jQuery);


$(document).ready(function(){
    $('a[href*=#]').bind("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 600);
        e.preventDefault();
    });
    return false;
});



