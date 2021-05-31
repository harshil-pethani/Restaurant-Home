let hamburger = document.querySelector('#hamburger');
let ul = document.querySelector('.mobileList');
let collape = 1;

hamburger.addEventListener('click',()=>{
    if(collape === 1)
    {
        ul.style.transform = "translateY(0%)";
        ul.style.opacity = "1";
        ul.style.pointerEvents = "initial";
        collape = 0;
        hamburger.innerHTML = `<i class="fas fa-times"></i>`;
    }
    else
    {
        ul.style.transform = "translateY(-170%)";
        ul.style.opacity = "0";
        ul.style.pointerEvents = "none";
        collape = 1;
        hamburger.innerHTML = `<i class="fas fa-bars"></i>`;
    }
});