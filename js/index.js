"use strict";

const getContentBlock = document.querySelector(".about__content");
const getAchivsBlock = document.querySelector(".about__achivs-items");
const getInnerBlock = document.querySelector(".about__inner");
const burger = document.querySelector(".burger");
const burgerItems = document.querySelector(".burger__items");
const nav = document.querySelector(".burg-menu");
const menuList = document.querySelector(".burg-menu__list");
const navItems = document.querySelectorAll(".burg-menu__item");
const body = document.body;
const windowWidth = window.innerWidth;

function bodyOverflow() {
   if (body.style.cssText == "overflow: hidden;") {
      body.style = "overflow: unset;";
   } else {
      body.style = "overflow: hidden;";
   }
}

window.addEventListener("DOMContentLoaded", () => {
   burger.addEventListener("click", () => {
      burgerItems.classList.toggle("burger__items_active");
      nav.classList.toggle("burg-menu_active");
      menuList.classList.toggle("burg-menu__list_active");
      bodyOverflow();
   });

   navItems.forEach((item) => {
      item.addEventListener("click", () => {
         burgerItems.classList.toggle("burger__items_active");
         nav.classList.toggle("burg-menu_active");
         menuList.classList.toggle("burg-menu__list_active");
         bodyOverflow();
      });
   });
});

const links = document.querySelectorAll("a[href^='#']").forEach((link) => {
   link.addEventListener("click", function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute("href")).scrollIntoView({
         behavior: "smooth",
         block: windowWidth > 768 ? "center" : "start",
      });
   });
});

//# sourceMappingURL=index.js.map
