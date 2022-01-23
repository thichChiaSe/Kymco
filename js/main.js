var ham = document.querySelector(".hamberger");
var nav = document.querySelector(".nav");
console.log(ham);
ham.addEventListener("click", function() {
    ham.classList.toggle("active");
    nav.classList.toggle("active");
})

//slider

var $carousel = $(".slider__list");
$carousel.flickity({
    draggable: true, //kéo slide
    cellAlign: 'left',
    contain: true,
    prevNextButtons: false,
    wrapAround: true,
    pageDots: false,
    autoPlay: 3000,
    selectedAttraction: 0.01,
    on: {
        // ready: function() {
        //     const dotted = $(".sliderlist .flickity-page-dots "),
        //         paging = $(".sliderbottom-dotted")
        //     dotted.appendTo(paging);
        // }
        // ,
        change: function(index) {
            const newIndex = index + 1;
            const number = $(".number-page");
            number.text("0" + newIndex);

        }
    }


});
// $(".--next").on("click", function() {
//     $('.slider__list').flickity("next")
// })
// $(".--prev").on("click", function() {
//     $('.slider__list').flickity("previous");
// })

// mission slide

// $('.mission__slide').flickity({
//     // cellAlign: 'left',
//     contain: true,
//     prevNextButtons: false,
//     pageDots: false,
//     wrapAround: true,
//     autoPlay: 3000,
//     selectedAttraction: 0.01,
//     on: {
//         change: function(index) {
//             document.querySelectorAll('.mission .content').forEach((item) => {
//                 item.classList.remove('active');
//             })
//             let item = document.querySelectorAll('.mission .content')[index]
//             item.classList.add('active');
//         }
//     }
// })

$('.next').on('click', function() {
    $('.allimg').flickity('next');
    $('.mission__slide-content').flickity('next');
});
$('.prev').on('click', function() {
    $('.allimg').flickity('previous');
    $('.mission__slide-content').flickity('previous');
});


// BACK TO TOP
let banner = document.querySelector('.slider');
let backTop = document.querySelector('.back-to-top');

window.onscroll = function() {
        let currentScroll = window.pageYOffset;
        if (currentScroll > 400) {
            backTop.classList.add('active');
        } else {
            backTop.classList.remove('active');
        }
    }
    // back to top
backTop.addEventListener('click', () => {
    window.scrollTo(0, 0);
})
window.addEventListener("scroll", function() {
    var pageY = window.pageYOffset;
    console.log(pageY);
})

//news
// document.querySelectorAll('.newss__list-item .col3 .imgg ').forEach(item => {
//     item.addEventListener('mousemove', function(e) {
//         let posX = -(((this.clientWidth / 2) - e.offsetX) * 8) / 100;
//         let posY = -(((this.clientHeight / 2) - e.offsetY) * 8) / 100;

//         gsap.to(item, {
//             x: posX,
//             y: posY,
//             duration: 1,
//         })
//     })
//     item.addEventListener('mouseleave', function() {
//         gsap.to(item, {
//             x: 0,
//             y: 0,
//             duration: 1,
//         })
//     })
// })