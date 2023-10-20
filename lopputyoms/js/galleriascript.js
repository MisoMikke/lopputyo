//navigointipalkki ja linkit eri sivuille
document.getElementById("navi1").innerHTML =
"<ul id='menu'>" +
"<li><a href='index.html'>Etusivu</a></li>" +
"<li><a href='palvelut.html'>Palvelut</a></li>" +
"<li><a href='varit.html'>Värien testaus</a></li>" +
"<li><a href='galleria.html'>Galleria</a></li>" +
"<li><a href='yhteystiedot.html'>Yhteystiedot</a></li>" +
"</ul>";
//slideshow
let slideIndex = 0;

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";
    setTimeout(function() {
        slides[slideIndex - 1].style.opacity = "1"; // Fade in ilmeisesti, kopioin tämän jostain
    }, 500); // viivytys

    setTimeout(function() {
        slides[slideIndex - 1].style.opacity = "0"; // Fade out
    }, 2500); // vaihtaa kai kuvaa tämän ajan jälkeen

    setTimeout(showSlides, 3000);
}

window.onload = showSlides; //slideshow alkaa kun sivu avataan tai päivitetään uudelleen