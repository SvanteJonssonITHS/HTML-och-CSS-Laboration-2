window.onload = () => {
    playVideo()
}

//Adds event listeners to check if resize and then change video.
window.matchMedia("screen and (min-width: 1000px)").addEventListener("change", playVideo)
window.matchMedia("screen and (min-width: 700px)").addEventListener("change", playVideo)
window.matchMedia("screen and (min-width: 0px)").addEventListener("change", playVideo)

//Plays the correct video depending on the screen width.
function playVideo() {
    let video = document.getElementById("backgroundVideo")
    var source = video.children[0]
    let videoURL;

    if (window.innerWidth > 720) {
        videoURL = "background-video/1080.mp4"
    } else if (window.innerWidth > 480) {
        videoURL = "background-video/720.mp4"
    } else {
        videoURL = "background-video/480.mp4"
    }

    source.setAttribute('src', videoURL);

    video.appendChild(source);
    video.load()
    video.play();
}