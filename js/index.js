menu.addEventListener('click',function(){
    header.classList.toggle('active');
    nav.classList.toggle('active');
})

var swiper = new Swiper(".mySwiper", {
spaceBetween: 50,
effect: "fade",
speed: 600,
/*
autoplay: {
    delay: 2500,
    disableOnInteraction: false,
},*/
pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
},
navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
},

});


let pos = {y:0, y2:0, state:''}
const elAside = document.querySelector(".top_btn a");
window.addEventListener("scroll", () => {
    // ----------aside---------------------------------
    if(0 < window.scrollY){
        elAside.classList.add("active");
    }else{
        elAside.classList.remove("active");
    }
    
    let yy =  this.scrollY;
    pos.y = window.scrollY;
    if(pos.y > pos.y2){
        pos.state = true;                
    }else{
        pos.state = false;
    }
    pos.y2 = pos.y;

    if(pos.state){
        yy = yy;
    }else{
        yy = yy;
    }
    aside_img.style.transform = `rotate(${-yy}deg)`;
    aside_img.style.transform = `rotate(${yy}deg)`;
    // ----------aside---------------------------------
});
