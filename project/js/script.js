document.getElementById("burgerButton").onclick = () => {
    let navItems = document.getElementById("linkContainer")

    if (navItems.style.visibility == "hidden" || navItems.style.visibility == "") {
        navItems.style.visibility = "visible"
    } else {
        navItems.style.visibility = "hidden"
    }
}
