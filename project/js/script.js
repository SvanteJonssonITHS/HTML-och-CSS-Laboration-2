document.getElementById("burgerButton").onclick = () => {
    let navItems = document.getElementById("navItems")
    if (navItems.style.visibility == "hidden") {
        navItems.style.visibility = "visible"
    } else {
        navItems.style.visibility = "hidden"
    }
}