document.getElementById("contact").addEventListener(
    "submit",
    function (event) {
        event.preventDefault();
        sendData();
    },
    false
);

function sendData() {
    let request = new XMLHttpRequest();
    request.open("POST", "https://htmlochcss.romland.space/", true);
    request.setRequestHeader(
        "Content-type",
        "application/x-www-form-urlencoded"
    );

    let firstname = document.getElementById("fname").value;
    let lastname = document.getElementById("lname").value;
    let email = document.getElementById("email").value;
    let company = document.getElementById("company").value;
    let message = document.getElementById("message").value;

    //sends request to to server
    request.send(`firstname=${firstname}&lastname=${lastname}&email=${email}&company=${company}&message=${message}`);

    request.onreadystatechange = function () {
        if (this.readyState == 4) {
            location.reload();
        }
    };
}