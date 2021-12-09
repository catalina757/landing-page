function myFunction() {
    let myNav = document.getElementById("topnavLink");
    let myDropdown = document.getElementById("dropdown");
    let myContact = document.getElementById("contact");
    if (myNav.className === "topnav-link" || myDropdown.className === "dropdown" || myContact.className === "contact") {
        myNav.className += " responsive";
        myDropdown.className += " responsive";
        myContact.className += " responsive";
    } else {
        myNav.className = "topnav-link";
        myDropdown.className = "dropdown";
        myContact.className = "contact";
    }
}

function sendMessage() {
    console.log("You sent a message!")
}
