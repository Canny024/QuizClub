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
