localStorage.getItem("key");

let Header = document.getElementById("header");
let Main = document.getElementById("main");
let Footer = document.getElementById("footer");
let btn = document.getElementById("submit");
let Form = document.getElementById("form");

if(localStorage.getItem("key") == "good") {
    Header.style.visibility = "visible";
    Main.style.visibility = "visible";
    Footer.style.visibility = "visible";
    btn.style.visibility = "hidden";
    btn.setAttribute("height", "0px");
    Form.style.visibility = "hidden";
    Form.setAttribute("height", "0px");
}
else {
    Header.style.visibility = "hidden";
    Main.style.visibility = "hidden";
    Footer.style.visibility = "hidden";
}

let Input = document.getElementById("input");

function pass() {
    if(Input.value == "MaKenna.30") {
        localStorage.setItem("key", "good");
        location.reload();
        console.log("passed!");
        
    }
    
    if(Input.value != "MaKenna.30") {
        localStorage.setItem("key", "bad");
        console.log("did not pass :(");
        location.reload();
    }
    
}