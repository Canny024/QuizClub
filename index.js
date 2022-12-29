// Navbar JS

$(".navTrigger").click(function () {
	$(this).toggleClass("active");
	console.log("Clicked menu");
	$("#mainListDiv").toggleClass("show_list");
	$("#mainListDiv").fadeIn();
});


$(window).scroll(function() {
  if ($(document).scrollTop() > 50) {
      $('.nav').addClass('affix');
      $('.navTrigger').addClass('affix');
      console.log("OK");
  } else {
      $('.nav').removeClass('affix');
      $('.navTrigger').removeClass('affix');
  }
});

window.addEventListener("scroll", () => {
  const indicatorBar = document.querySelector(".scroll-indicator-bar");

  const pageScroll = document.body.scrollTop || document.documentElement.scrollTop;
  const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  const scrollValue = (pageScroll / height) * 100;

  indicatorBar.style.width = scrollValue + "%";
});

// Countdown JS

const countDownDate = new Date("Oct 31, 2023 12:00 :00").getTime();

const timerFunction = setInterval(() => {
  const currentDate = new Date().getTime();
  const finalTime = countDownDate - currentDate;

  if (finalTime > 0) {
    const days = Math.floor(finalTime / (1000 * 60 * 60 * 24));

    const hours = Math.floor(
      (finalTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );

    const minutes = Math.floor((finalTime % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((finalTime % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;

    document.getElementById("hours").innerHTML = hours;

    document.getElementById("minutes").innerHTML = minutes;

    document.getElementById("seconds").innerHTML = seconds;

    /*   console.log(days);
          console.log(hours);
          console.log(minutes);
          console.log(seconds); */
  } else {
    clearInterval(timerFunction);
    document.getElementById("timer").innerHTML = "The Countdown is Over!";
  }
}, 1000);


// Event Slider JS
var swiper = new Swiper('.blog-slider', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  mousewheel: {
    invert: false,
  },
  // autoHeight: true,
  pagination: {
    el: '.blog-slider__pagination',
    clickable: true,
  }
});

// Back To Top Button
jQuery(window).scroll(function(){
  if(jQuery(window).scrollTop()<50){
      jQuery('#rocketmeluncur').slideUp(500);
  }else{
      jQuery('#rocketmeluncur').slideDown(500);
  }
  var ftrocketmeluncur = jQuery("#ft")[0] ? jQuery("#ft")[0] : jQuery(document.body)[0];
  var scrolltoprocketmeluncur = $('rocketmeluncur');
var viewPortHeightrocketmeluncur = parseInt(document.documentElement.clientHeight);
var scrollHeightrocketmeluncur = parseInt(document.body.getBoundingClientRect().top);
var basewrocketmeluncur = parseInt(ftrocketmeluncur.clientWidth);
var swrocketmeluncur = scrolltoprocketmeluncur.clientWidth;
if (basewrocketmeluncur < 1000) {
var leftrocketmeluncur = parseInt(fetchOffset(ftrocketmeluncur)['left']);
leftrocketmeluncur = leftrocketmeluncur < swrocketmeluncur ? leftrocketmeluncur * 2 - swrocketmeluncur : leftrocketmeluncur;
scrolltoprocketmeluncur.style.left = ( basewrocketmeluncur + leftrocketmeluncur ) + 'px';
} else {
scrolltoprocketmeluncur.style.left = 'auto';
scrolltoprocketmeluncur.style.right = '10px';
}
})

jQuery('#rocketmeluncur').click(function(){
  jQuery("html, body").animate({ scrollTop: '0px',display:'none'},{
          duration: 600,  
          easing: 'linear'
      });
  
  var self = this;
  this.className += ' '+"launchrocket";
  setTimeout(function(){
    self.className = 'showrocket';
  },800)
});