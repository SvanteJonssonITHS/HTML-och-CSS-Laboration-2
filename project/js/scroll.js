let scrollBtn = document.getElementById("scrollBtn");

//On scroll checks if the scrollbutton should be visable
window.onscroll = () => {
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    scrollBtn.className = "visableScrollbtn"
  } else {
    scrollBtn.className = ""
  }
};

// Scrolls back to top
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}