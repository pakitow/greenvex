
  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
  });
  $('.slider').slick({
    arrows:false,
		infinite: true,
		speed: 1000,
		autoplay: true,
	  autoplaySpeed: 2000,
		fade:true,
		slidesToShow: 1,
		slidesToScroll: 1
});




var myVar1;
var myVar2
function myFunction() {
  myVar1 = setTimeout(showPage, 3000);
}
function myFunction2() {
    myVar2 = setTimeout(showPage, 5000);
}
function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv1").style.display = "block";
  document.getElementById("myDiv2").style.display = "block";
}



//Get the button:
mybutton = document.getElementById("up");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
  if (document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } 
  else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.documentElement.scrollTop = 0; 
}