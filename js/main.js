let hamBTN;

let theDiv;
let Home;
let Timeline;
let Memories;
let Photos;
let Dates;

let iconImg;

// randomFavicon();
// dayOfWeek();

function Hamburger() {

    hamBTN = document.getElementById("hamBTN");

    iconImg = document.getElementById("iconimg");

    let nav = document.getElementById("navid");

    theDiv = document.createElement("a");
    Home = document.createElement("a");
    Timeline = document.createElement("a");
    Memories = document.createElement("a");
    Photos = document.createElement("a");
    Dates = document.createElement("a");

    theDiv.className = "theDiv";

    theDiv.textContent = "Bryon and Kenna"
    Home.textContent = "Home";
    Timeline.textContent = "Timeline";
    Memories.textContent = "Memories";
    Photos.textContent = "Photos";
    Dates.textContent = "Date Generator";

    // theDiv.className="mobilelinks";
    Timeline.className="mobilelinks";
    Memories.className="mobilelinks";
    Photos.className="mobilelinks";
    Dates.className="mobilelinks";

    theDiv.setAttribute("href", "/index.html");
    Timeline.setAttribute("href", "/html/timeline.html");
    Memories.setAttribute("href", "/html/memories.html");
    Photos.setAttribute("href", "/html/photos.html");
    Dates.setAttribute("href", "/html/dategenerator.html");



    nav.appendChild(theDiv);
    nav.appendChild(Timeline);
    nav.appendChild(Memories);
    nav.appendChild(Photos);
    nav.appendChild(Dates);

    hamBTN.setAttribute("onclick", "exit()");

    iconImg.setAttribute("src", "/images/icons/close-yo-mouth.png");

}

function exit() {

    hamBTN = document.getElementById("hamBTN");

    iconImg = document.getElementById("iconimg");

    let nav = document.getElementById("navid");

    theDiv.className = "theDiv";

    theDiv.textContent = "Bryon and Kenna"
    Home.textContent = "Home";
    Timeline.textContent = "Timeline";
    Memories.textContent = "Memories";
    Photos.textContent = "Photos";
    Dates.textContent = "Date Generator";

    nav.removeChild(theDiv);
    nav.removeChild(Timeline);
    nav.removeChild(Memories);
    nav.removeChild(Photos);
    nav.removeChild(Dates);

    hamBTN.setAttribute("onclick", "Hamburger()");

    iconImg.setAttribute("src", "/images/icons/ham-and-cheese.png");

}

