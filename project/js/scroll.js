let mybutton = document.getElementById("scrollBtn");

window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.className = "visableScrollbtn"
  } else {
    mybutton.className = ""
  }
};


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}