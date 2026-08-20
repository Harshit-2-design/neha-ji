/* =====================================
   BASIC SELECTOR
===================================== */

const $ = (selector) => {
    return document.querySelector(selector);
};



/* =====================================
   LOADING SCREEN
===================================== */

window.addEventListener("load", () => {

    setTimeout(() => {

        $("#loader").classList.add("done");

    }, 900);

});



/* =====================================
   SCROLL REVEAL
===================================== */

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

            }

        });

    },

    {
        threshold: 0.12
    }

);


document
    .querySelectorAll(".reveal")
    .forEach((element) => {

        observer.observe(element);

    });



/* =====================================
   OPEN WEBSITE
===================================== */

const gate = $("#gate");
const enterButton = $("#enterBtn");

const music = $("#music");
const musicButton = $("#musicBtn");


enterButton.addEventListener("click", () => {

    gate.classList.add("hide");

    music
        .play()
        .then(() => {

            musicButton.classList.add("playing");

        })
        .catch(() => {

            console.log(
                "Music could not autoplay."
            );

        });

});



/* =====================================
   MUSIC CONTROL
===================================== */

musicButton.addEventListener("click", () => {

    if (music.paused) {

        music.play();

        musicButton.classList.add(
            "playing"
        );

    } else {

        music.pause();

        musicButton.classList.remove(
            "playing"
        );

    }

});



/* =====================================
   RUNAWAY NO BUTTON
===================================== */

const noButton = $("#noBtn");


function moveNoButton() {

    const x =
        Math.random() * 180 - 90;

    const y =
        Math.random() * 100 - 50;

    noButton.style.transform =
        `translate(${x}px, ${y}px)`;

}


noButton.addEventListener(
    "mouseenter",
    moveNoButton
);


noButton.addEventListener(
    "click",
    moveNoButton
);



/* =====================================
   CREATE HEART
===================================== */

function createHeart() {

    const heart =
        document.createElement("div");

    heart.className = "heart";


    const symbols = [

        "♥",
        "♡",
        "✦",
        "💗",
        "✨"

    ];


    heart.textContent =
        symbols[
            Math.floor(
                Math.random() *
                symbols.length
            )
        ];


    heart.style.left =
        Math.random() * 100 + "vw";


    heart.style.bottom =
        "-30px";


    heart.style.fontSize =
        15 +
        Math.random() * 30 +
        "px";


    const colors = [

        "#ff6b9d",
        "#ffc2d5",
        "#e8cf9d",
        "#ffffff"

    ];


    heart.style.color =
        colors[
            Math.floor(
                Math.random() *
                colors.length
            )
        ];


    heart.style.animationDuration =
        4 +
        Math.random() * 4 +
        "s";


    document.body.appendChild(
        heart
    );


    setTimeout(() => {

        heart.remove();

    }, 8000);

}



/* =====================================
   YES BUTTON
===================================== */

const yesButton = $("#yesBtn");

const yesMessage = $("#yesMessage");


yesButton.addEventListener(
    "click",
    () => {

        yesMessage.style.display =
            "block";


        /*
            Massive celebration
        */

        for (
            let i = 0;
            i < 100;
            i++
        ) {

            setTimeout(
                createHeart,
                i * 30
            );

        }

    }
);



/* =====================================
   RANDOM BACKGROUND HEARTS
===================================== */

setInterval(() => {

    if (
        Math.random() < 0.35
    ) {

        createHeart();

    }

}, 1800);