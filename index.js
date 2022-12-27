//function section in Javascript and Jquery...
function myData() {
    retrun;
  }
  
  function show() {
    document.getElementById("anotherFunction").classList.toggle("Active");
  }
  
  const icon = document.querySelector(".icon");
  const links = document.querySelectorAll(".nav-type li");
  
 
 if (window.outerWidth<=800){
  links.forEach(link => {
    link.classList.toggle("remove");
});

 }



icon.addEventListener('click', ()=>{
  
    
    links.forEach(link => {
        link.classList.toggle("remove");
    });
icon.classList.toggle("clicked");
     
});