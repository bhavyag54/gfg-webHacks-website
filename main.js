// hambuger-modal button click
const modal = document.querySelector("#myModal");
const hamburger = document.querySelector(".container");
const span = document.querySelector(".close");

hamburger.addEventListener('click',() => {
    modal.style.display = "block";
})

span.onclick = () => {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
}


//card-onclick

const card = (event) => {

  if(event.childNodes[1].childNodes[3].childNodes[3].style.display == "block")
  {
    event.childNodes[1].childNodes[3].childNodes[3].style.display = "none";
    event.childNodes[1].childNodes[3].childNodes[1].style.display = "block";
    event.style.background = "#FFF";
    return;
  }

  event.childNodes[1].childNodes[3].childNodes[3].style.display = "block";
  event.childNodes[1].childNodes[3].childNodes[1].style.display = "none";
  event.style.background = "#F4F4FF";
}

// top button
const top_btn = document.querySelector('#top');

top_btn.addEventListener('click', () => {
    window.scrollTo({
      top:0,
      left:0, 
      behavior:'smooth',
      scrollSpeed: 'fast'
      });
})

// feedBack carasual


const showSlides = (n) => {
  var i;
  var slides = document.getElementsByClassName("slides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function plusSlides(n) {
  showSlides(slideIndex += n);
}


const currentSlide = (n) => {
  showSlides(slideIndex = n);
}


var slideIndex = 1;
showSlides(slideIndex);


//footer

//fade email


const inputEmail = document.getElementById("inputEmail");
const email = document.querySelector("#email");

inputEmail.addEventListener('focus', () => {
  email.style.display = "none";
});

inputEmail.addEventListener('focusout', () => {
  email.style.display = "block";
})


