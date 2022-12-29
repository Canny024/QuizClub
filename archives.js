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

//sound play
let nodeList = document.querySelectorAll('.box');
audios = document.querySelectorAll('audio');
for (let i = 0; i < nodeList.length; i++) {
  nodeList[i].addEventListener('mouseover', function() {
  [].forEach.call(audios, function(audio) {
    audio.play();
  });
  });
  nodeList[i].addEventListener('mouseleave', function() {
    heartbeat.pause();
    heartbeat.currentTime = 0;
  }, false);
}

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