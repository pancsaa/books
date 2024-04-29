const romanceLeft=document.querySelector(".left1")
const romanceRight=document.querySelector(".right1")
const img = document.querySelector(".uglylove")
const box1=document.querySelector(".box1")

const whiteListItems = document.querySelectorAll(".lines1 i");

let romance=["./img/romance3.jpg","./img/romantic2-slide.jpg","./img/darkromance1-slide.png"]
let romance2=["./img/romance3-bg.jpg","./img/romantic2blur-bg.jpg","./img/darkromance_blur-bg.png",]
/* let darkromance=["./img/darkromance2-slide.jpg","./img/darkromance3.jpg","./img/darkromance1-slide.png"]
let darkromance2=["./img/darkromance_blur-bg.jpg","./img/hauntingadaline3-bg.jpg","./img/darkromance_blur-bg.png"] */
let count=0 //start
let count2=0
/* let count3=0; */

const showPreviousimg = () => {
    count = (count - 1 + romance.length) % romance.length;
    img.src = romance[count];
    count2 = (count2 - 1 + romance2.length) % romance2.length;
    /* count3 = (count3 - 1 + darkromance.length) % darkromance.length;
    img2.src = darkromance[count3]; */
    updateImages()
}
const showNestimg = () => {
    count = (count + 1) % romance.length;
    img.src = romance[count];
    count2 = (count2 + 1) % romance2.length;
    /* count3 = (count3 + 1 + darkromance.length) % darkromance.length;
    img2.src = darkromance[count3]; */
    updateImages()
}
const updateImages = () => {
    const currentImage = romance2[count2];
    box1.style.backgroundImage = `url(${currentImage})`;
    /* const currentImage2 = darkromance2[count3];
    box2.style.backgroundImage = `url(${currentImage2})`; */


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
const box2=document.querySelector(".box2")
const img2=document.querySelector(".hauntingadeline")

const whiteListItems2 = document.querySelectorAll(".lines2 i");

let darkromance=["./img/darkromance2-slide.jpg","./img/darkromance3.jpg","./img/darkromance1-slide.png"]
let darkromance2=["./img/darkromance2_blur-bg.jpg","./img/hauntingadaline3-bg.jpg","./img/darkromance_blur-bg.png"]
let countdark=0 //start
let countdark2=0

const showPreviousdarkImg = () => {
    countdark = (countdark - 1 + darkromance.length) % darkromance.length;
    img2.src = darkromance[countdark];
    countdark2 = (countdark2 - 1 + darkromance2.length) % darkromance2.length;
    updatedarkImages()
}
const showNestdarkImg = () => {
    countdark = (countdark + 1) % darkromance.length;
    img2.src = darkromance[countdark];
    countdark2 = (countdark2 + 1) % darkromance2.length;
    updatedarkImages()
}
const updatedarkImages = () => {
    const currentImage2 = darkromance2[countdark2];
    box2.style.backgroundImage = `url(${currentImage2})`;

    whiteListItems2.forEach((item, index) => {
        if (index === countdark) {
          item.classList.add("white");
        } else {
          item.classList.remove("white");
        }
      })
}

darkromanceLeft.addEventListener("click",showPreviousdarkImg)
darkromanceRight.addEventListener("click",showNestdarkImg)
//////////////////////////////////////////////////////////////////////////////////////
const dfleft=document.querySelector(".left3")
const dfright=document.querySelector(".right3")
const box3=document.querySelector(".box3")
const img3=document.querySelector(".shatterme")

const whiteListItems3 = document.querySelectorAll(".lines3 i");

let df=["./img/df-slide.jpg","./img/df2-slide.jpg","./img/dystopian3.jpg"]
let df2=["./img/df_bluir_1.jpg","./img/df2blur-bg.jpg","./img/shatterme-bg3.jpg"]
let dfcount=0 //start
let dfcount2=0

const showPreviousdfImg = () => {
    dfcount = (dfcount - 1 + df.length) % df.length;
    img3.src = df[dfcount];
    dfcount2 = (dfcount2 - 1 + df2.length) % df2.length;
    updatedfImages()
}
const showNestdfImg = () => {
    dfcount = (dfcount + 1) % df.length;
    img3.src = df[dfcount];
    dfcount2 = (dfcount2 + 1) % df2.length;
    updatedfImages()
}
const updatedfImages = () => {
    const currentImage3 = df2[dfcount2];
    box3.style.backgroundImage = `url(${currentImage3})`;

    whiteListItems3.forEach((item, index) => {
        if (index === dfcount) {
          item.classList.add("white");
        } else {
          item.classList.remove("white");
        }
      })
}

dfleft.addEventListener("click",showPreviousdfImg)
dfright.addEventListener("click",showNestdfImg)
///////////////////////////////////////////////////////////////////////////////
const thrillerleft=document.querySelector(".left4")
const thrillerright=document.querySelector(".right4")
const box4=document.querySelector(".box4")
const img4=document.querySelector(".verity")

const whiteListItems4 = document.querySelectorAll(".lines4 i");

let thriller=["./img/romance3.jpg","./img/thriller3.jpg","./img/dystopian3.jpg"]
let thriller2=["./img/romance3-bg.jpg","./img/verity-bg3.jpg","./img/shatterme-bg3.jpg"]
let thrillercount=0 //start
let thrillercount2=0
const showPreviousThrillerImg = () => {
  thrillercount = (thrillercount - 1 + thriller.length) % thriller.length;
  img4.src = thriller[thrillercount];
  thrillercount2 = (thrillercount2 - 1 + thriller2.length) % thriller2.length;
  updateThrillerImages()
}
const showNestThrillerImg = () => {
  thrillercount = (thrillercount + 1) % thriller.length;
  img4.src = thriller[thrillercount];
  thrillercount2 = (thrillercount2 + 1) % thriller2.length;
  updateThrillerImages()
}
const updateThrillerImages = () => {
  const currentImage4 = thriller2[thrillercount2];
  box4.style.backgroundImage = `url(${currentImage4})`;

  whiteListItems4.forEach((item, index) => {
      if (index === thrillercount) {
        item.classList.add("white");
      } else {
        item.classList.remove("white");
      }
    })
}

thrillerleft.addEventListener("click",showPreviousThrillerImg)
thrillerright.addEventListener("click",showNestThrillerImg)
/////////////////////////////////////////////////////////////////////////////////
const scifileft=document.querySelector(".left5")
const scifiright=document.querySelector(".right5")
const box5=document.querySelector(".box5")
const img5=document.querySelector(".dune")

const whiteListItems5 = document.querySelectorAll(".lines5 i");

let scifi=["./img/scifi3.jpg","./img/scifi-slide.jpg","./img/scifi-slide.jpg"]
let scifi2=["./img/dune-bg3.jpg","./img/scifiblur-bg.jpg","./img/scifi2blur-bg.jpg"]
let scificount=0 //start
let scificount2=0

const showPreviousScifiImg = () => {
  scificount = (scificount - 1 + scifi.length) % scifi.length;
  img5.src = scifi[scificount];
  scificount2 = (scificount2 - 1 + scifi2.length) % scifi2.length;
  updateScifiImages()
}
const showNestScifiImg = () => {
  scificount = (scificount + 1) % scifi.length;
  img5.src = scifi[scificount];
  scificount2 = (scificount2 + 1) % scifi2.length;
  updateScifiImages()
}
const updateScifiImages = () => {
  const currentImage5 = scifi2[scificount2];
  box5.style.backgroundImage = `url(${currentImage5})`;

  whiteListItems5.forEach((item, index) => {
      if (index === scificount) {
        item.classList.add("white");
      } else {
        item.classList.remove("white");
      }
    })
}

scifileft.addEventListener("click",showPreviousScifiImg)
scifiright.addEventListener("click",showNestScifiImg)
//////////////////////////////////////////////////////////////////////////////////////////
const pleft=document.querySelector(".left6")
const pright=document.querySelector(".right6")
const box6=document.querySelector(".box6")
const img6=document.querySelector(".milkandhoney")

const whiteListItems6 = document.querySelectorAll(".lines6 i");

let poetry=["./img/poetry3.jpg","./img/poetry-slide.jpg","./img/poetry2-slide.jpg"]
let poetry2=["./img/milkandhoney-bg.jpg","./img/poetryblur-bg.jpg","./img/poetry2blur-bg.jpg"]
let poetrycount=0 //start
let poetrycount2=0

const showPreviousPoetryImg = () => {
  poetrycount = (poetrycount - 1 + poetry.length) % poetry.length;
  img6.src = poetry[poetrycount];
  poetrycount2 = (poetrycount2 - 1 + poetry2.length) % poetry2.length;
  updatePoetryImages()
}
const showNestPoetryImg = () => {
  poetrycount = (poetrycount + 1) % poetry.length;
  img6.src = poetry[poetrycount];
  poetrycount2 = (poetrycount2 + 1) % poetry2.length;
  updatePoetryImages()
}
const updatePoetryImages = () => {
  const currentImage6 = poetry2[poetrycount2];
  box6.style.backgroundImage = `url(${currentImage6})`;

  whiteListItems6.forEach((item, index) => {
      if (index === poetrycount) {
          item.classList.add("white");
      } else {
          item.classList.remove("white");
      }
  })
}

pleft.addEventListener("click",showPreviousPoetryImg)
pright.addEventListener("click",showNestPoetryImg)