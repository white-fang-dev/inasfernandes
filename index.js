var hamburgerButton = document.querySelector(".hamburger")
var slideNavigation = document.querySelector(".nav-bar");
var navItem =document.querySelectorAll(".nav-item");
var topBar = document.querySelector(".top-bar");
var middleBar = document.querySelector(".middle-bar");
var bottomBar = document.querySelector(".bottom-bar");
var backDrop =document.querySelector(".backdrop");

function closeWindow(){
  slideNavigation.classList.toggle("open");
  hamburgerButton.classList.toggle("rotate-burger");
  topBar.classList.toggle("close-top");
  middleBar.classList.toggle("close-middle");
  bottomBar.classList.toggle("close-bottom");
  backDrop.classList.toggle("backdrop-open");
}

hamburgerButton.addEventListener("click",closeWindow);
backDrop.addEventListener("click",closeWindow);
for(var i=0;i<navItem.length;i++){
  navItem[i].addEventListener("click",closeWindow);
}
