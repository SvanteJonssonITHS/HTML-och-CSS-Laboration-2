let slideIndex = 0;
let slideshows = document.getElementsByClassName("slideshow")

for (let i = 0; i < slideshows.length; i++) {
    let slideshow = slideshows[i]
    let slides = slideshow.querySelectorAll(".slide")
    let caption = slideshow.querySelector(".caption")
    showSlides(slides, caption)
    setInterval( function() { showSlides(slides, caption) }, 2000 );
}

function showSlides(slides, caption) {
    let i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    let id = caption.id;
    caption.id = parseInt(id) + 1
    if (parseInt(caption.id) > slides.length) {
        caption.id = 1
    }

    slides[parseInt(caption.id) - 1].style.display = "block";
}