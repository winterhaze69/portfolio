
let prevScrollpos = window.pageYOffset;
window.onscroll = function() {
let currentScrollPos = window.pageYOffset;
  if (prevScrollpos >= currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-50px";
  }
  prevScrollpos = currentScrollPos;

  const height = document.querySelector('body').offsetHeight;
  // Deuxieme animation
  if(window.pageYOffset >= (height / 2.5)) {
    document.querySelector('.scrollArrow').style.display = "none";
  } else {
    document.querySelector('.scrollArrow').style.display = "inherit";
  }
}
document.querySelector('body').addEventListener('mouseover',function(element){
    let el = element.target;
    if(el.id == 'hobby1'){
       let txt = document.getElementById("txt");
       txt.innerHTML = "bonsoir";

    }else {
      txt.innerHTML = "";
    }

});
