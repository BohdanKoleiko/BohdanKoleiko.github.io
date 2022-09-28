const getContentBlock = document.querySelector('.about__content');
const getAchivsBlock  = document.querySelector('.about__achivs-items');
const getInnerBlock   = document.querySelector('.about__inner');
const burger          = document.querySelector('.burger');
const burgerItems     = document.querySelector('.burger__items');
const nav             = document.querySelector('.burg-menu');
const menuList        = document.querySelector('.burg-menu__list');
const navItems        = document.querySelectorAll('.burg-menu__item');
const body            = document.body;

//Creating about__achivs-items block
const createAchivsBlock = document.createElement('div');
createAchivsBlock.className = "about__achivs-items";
createAchivsBlock.innerHTML = "<div class='about__item'><span>5&#43</span><br> year in IT</div><div class='about__item'><span>3</span><br> finished projects</div><div class='about__item'><span>B1.1</span><br> English level</div>";

function creatBlock (){
  if (window.innerWidth < 1000 && window.innerWidth > 320){
    getAchivsBlock.remove();
    getContentBlock.append(createAchivsBlock);
  }

  if (window.innerWidth > 1000){
    getAchivsBlock.remove();
    getInnerBlock.append(createAchivsBlock);
  }
}

function bodyOverflow (){
  if(body.style.cssText == 'overflow: hidden;'){
    body.style = 'overflow: unset;'
  } else{
    body.style = 'overflow: hidden;'
  }
}

window.addEventListener('DOMContentLoaded', () => {
  burger.addEventListener('click', () => {
    burgerItems.classList.toggle('burger__items_active');
    nav.classList.toggle('burg-menu_active');
    menuList.classList.toggle('burg-menu__list_active');
    bodyOverflow();
  });
  
  navItems.forEach(item => {
    item.addEventListener('click', () => {
      burgerItems.classList.toggle('burger__items_active');
      nav.classList.toggle('burg-menu_active');
      menuList.classList.toggle('burg-menu__list_active');
      bodyOverflow();
    });
  });

  creatBlock();
});

window.addEventListener('resize', () => {
  creatBlock();
});

//# sourceMappingURL=script.js.map
