//스와이프
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });




let liEls = document.querySelectorAll("header > ul > li");
let divEls = document.querySelectorAll("#javas > div");
let fivEls = document.querySelectorAll("#javas")


for(let i=0; i<liEls.length; i++){
    liEls[i].addEventListener("mouseover",()=>{
        //divEls[i].style.display = "block";
        divEls[0].style.height='350px';
        fivEls[0].style.height='350px';
    });

    liEls[i].addEventListener("mouseout",()=>{
        //divEls[i].style.display = "none";
        divEls[0].style.height='0px';
        fivEls[0].style.height='0px';
    });
}

divEls[0].addEventListener("mouseover",()=>{
    //divEls[i].style.display = "block";
    divEls[0].style.height='350px';
    fivEls[0].style.height='350px';
});

divEls[0].addEventListener("mouseout",()=>{
    //divEls[i].style.display = "none";
    divEls[0].style.height='0px';
    fivEls[0].style.height='0px';
});

