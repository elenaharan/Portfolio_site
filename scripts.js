//back-to-top button
let backButton = document.getElementById("back-to-top-btn");

//when the user scrolls down 300px
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (
      document.body.scrollTop > 300 ||
      document.documentElement.scrollTop > 300
    ) {
        backButton.style.display = "block";
    } else {
        backButton.style.display = "none";
    }
}

//When the user clicks the button, he is returned to the top

backButton.addEventListener("click", backToTop);

function backToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




let typed = new Typed(".typing", {
    strings: ["front-end", "back-end", "full-stack"],
    typeSpeed: 150,
    backspeed: 80,
    loop: true,
    pause: 20 
});




