const photoOne = document.querySelector (".photoOne");
photoOne.addEventListener("dblclick", startAnimation);
function startAnimation () {
    gsap.to(".photoOne", {scale:2, duration:0.2})
}

photoOne.addEventListener("click", finishAnimation);
function finishAnimation () {
    gsap.to(".photoOne", {scale:1, duration:0.2})
}

const photoTwo = document.querySelector (".photoTwo");
photoTwo.addEventListener("dblclick", startAnimationTwo);
function startAnimationTwo () {
    gsap.to(".photoTwo", {scale:2, duration:0.2})
}

photoTwo.addEventListener("click", finishAnimationTwo);
function finishAnimationTwo () {
    gsap.to(".photoTwo", {scale:1, duration:0.2})
}

const photoThree = document.querySelector (".photoThree");
photoThree.addEventListener("dblclick", startAnimationThree);
function startAnimationThree () {
    gsap.to(".photoThree", {scale:2, duration:0.2})
}

photoThree.addEventListener("click", finishAnimationThree);
function finishAnimationThree () {
    gsap.to(".photoThree", {scale:1, duration:0.2})
}

gsap.from(".header", {y:500, opacity:0, duration:1, delay:1})



