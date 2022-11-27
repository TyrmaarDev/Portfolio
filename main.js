const body = document.querySelector('body')
let mailtel = document.getElementById('contactTeslMail')
let mailtim = document.getElementById('mailtim')
let teltim = document.getElementById('teltim')


mailtel.addEventListener('click',function(){
  mailtim.classList.toggle("invisible")
  teltim.classList.toggle("invisible")
})

document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function(ev) {
    ev.preventDefault();
    document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
  };
});

