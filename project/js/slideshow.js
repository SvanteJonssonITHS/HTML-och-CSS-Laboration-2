let slideshows = document.getElementsByClassName("slideshow")

//Adds interval for all slideshows
for (let i = 0; i < slideshows.length; i++) {
    let slideshow = slideshows[i]
    setInterval(function () {
        showSlides(slideshow)
    }, 3000 + Math.floor(Math.random() * 1000));
}

// Shows the correct slides and updates the class active
function showSlides(slideshow) {
    let slides = slideshow.querySelectorAll(".slide")
    let id;

    for (let i = 0; i < slides.length; i++) {
        if (slides[i].classList.contains("active")) id = i
        slides[i].classList.remove("active")
    }

    let index = id >= slides.length - 1 ? 0 : id + 1
    slides[index].classList.add("active")
}