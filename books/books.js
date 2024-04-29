const romanceLeft=document.querySelector(".left1")
const romanceRight=document.querySelector(".right1")
const img = document.querySelector(".uglylove")
const img2=document.querySelector(".hauntingadeline")
const box1=document.querySelector(".box1")
const box2=document.querySelector(".box2")
const whiteListItems = document.querySelectorAll("i");

let romance=["./img/darkromance1-slide.png","./img/romantic2-slide.jpg","./img/romance3.jpg"]
let romance2=["./img/darkromance_blur-bg.png","./img/romantic2blur-bg.jpg","./img/romance3-bg.jpg",]
let darkromance=["./img/darkromance2-slide.jpg","./img/darkromance3.jpg","./img/darkromance1-slide.png"]
let darkromance2=["./img/darkromance_blur-bg.jpg","./img/hauntingadaline3-bg.jpg","./img/darkromance_blur-bg.png"]
let count=0 //start
let count2=0
let count3=0;

const showPreviousimg = () => {
    count = (count - 1 + romance.length) % romance.length;
    img.src = romance[count];
    count2 = (count2 - 1 + romance2.length) % romance2.length;
    count3 = (count3 - 1 + darkromance.length) % darkromance.length;
    img2.src = darkromance[count3];
    updateImages()
}
const showNestimg = () => {
    count = (count + 1) % romance.length;
    img.src = romance[count];
    count2 = (count2 + 1) % romance2.length;
    count3 = (count3 + 1 + darkromance.length) % darkromance.length;
    img2.src = darkromance[count3];
    updateImages()
}
const updateImages = () => {
    const currentImage = romance2[count2];
    box1.style.backgroundImage = `url(${currentImage})`;
    const currentImage2 = darkromance2[count3];
    box2.style.backgroundImage = `url(${currentImage2})`;


    whiteListItems.forEach((item, index) => {
        if (index === count) {
          item.classList.add("white");
        } else {
          item.classList.remove("white");
        }
      })
}

romanceLeft.addEventListener("click",showPreviousimg)
romanceRight.addEventListener("click",showNestimg)
////////////////////////////////////////////////////////////////////////////
const darkromanceLeft=document.querySelector(".left2")
const darkromanceRight=document.querySelector(".right2")
darkromanceLeft.addEventListener("click",showPreviousimg)
darkromanceRight.addEventListener("click",showNestimg)