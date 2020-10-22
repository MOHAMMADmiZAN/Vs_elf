////////////////// company slick slider //////////////////////////
$('#company .items').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    centerMode: true,
    centerPadding: '0',
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

//// varible/////
const win = $(window);
const html_body = $('html, body');
const stk = $('.st-menu');
const b2b = $('.back2top');
const c_stk = 'sticky';
//sticky-header//
win.scroll(() => win.scrollTop() > 200 ? stk.addClass(c_stk) : stk.removeClass(c_stk));
//back to top fadetoogle//
win.scroll(() => win.scrollTop() > 100 ? b2b.fadeIn() : b2b.fadeOut());
//back to top effect//
b2b.click(() => html_body.animate({scrollTop: 0}, 2500));
/* always close responsive nav after click */
$('.navbar-collapse ul li a').click(() => $('.navbar-toggler:visible').click());


//////////////hide source code///////////////
document.onkeydown = function (e) {
    if (e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 85 || e.keyCode === 117)) {

    }
    return false;
};