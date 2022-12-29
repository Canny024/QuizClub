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

