gsap.from(".mainHeader", {x:500, opacity:0, duration:1, delay:1})
gsap.from(".headerTwo", {x:-500, opacity:0, duration:1, delay:1})
gsap.from("h3", {opacity:0, duration:2, delay:1, stagger: .3})

const button = document.querySelector(".btn");
button.addEventListener("click", SendData)
function SendData() {
    const date = document.querySelector(".date").value;
    const number = document.querySelector(".number").value;
    const mail = document.querySelector(".mail").value;
    const phone = document.querySelector(".phone").value
}
function SendData()