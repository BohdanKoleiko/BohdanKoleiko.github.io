if (typeof Swiper !== "undefined") {
   const projItems = document.querySelector(".project__wrapper");
   const navButtons = document.querySelectorAll("[class^='swiper-button']");

   // init Swiper:
   const swiper = new Swiper(".swiper", {
      speed: 400,
      direction: "horizontal",
      parallax: true,

      pagination: {
         el: ".swiper-pagination",
         type: "bullets",
      },

      breakpoints: {
         1024: {
            enabled: false,
            navigation: {
               nextEl: ".swiper-button-next",
               prevEl: ".swiper-button-prev",
            },

            pagination: false,
         },
      },

      speed: 700,
   });

   const showOrHideNavigationBtns = function (updatedWidth = 0) {
      let windowsWidth = updatedWidth;

      if (windowsWidth > 1024) {
         navButtons.forEach((btn) => (btn.style.visibility = "visible"));

         const mouseHover = (event) => {
            event.type === "mouseover" ? swiper.enable() : swiper.disable();
         };

         projItems.addEventListener("mouseover", mouseHover);
         projItems.addEventListener("mouseout", mouseHover);
      } else {
         navButtons.forEach((btn) => (btn.style.visibility = "hidden"));
      }
   };
   showOrHideNavigationBtns(window.innerWidth);

   window.addEventListener("resize", () => {
      showOrHideNavigationBtns(window.innerWidth);
   });
} else {
   const swiper = document.querySelector(".swiper");
   const swiperWrapper = document.querySelector(".swiper-wrapper");
   const swiperSlides = document.querySelectorAll(".swiper-slide");

   swiper.style.margin = "0 auto";

   swiperWrapper.style.cssText =
      "display: flex; column-gap: 60px; overflow-y: hidden; overflow-x: scroll; scroll-behavior: smooth; scroll-snap-stop: always; scroll-snap-type: x mandatory;";

   swiperSlides.forEach(
      (slide) => (slide.style.cssText = "flex: 1 0 70%; scroll-snap-align: start;"),
   );
}

//# sourceMappingURL=enable-swiper.js.map
