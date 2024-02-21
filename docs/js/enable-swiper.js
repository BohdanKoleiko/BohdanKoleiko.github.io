const projItems = document.querySelector(".proj__wrap");
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

if (window.innerWidth > 1024) {
   navButtons.forEach((btn) => (btn.style.visibility = "visible"));

   const mouseHover = (event) => {
      event.type === "mouseover" ? swiper.enable() : swiper.disable();
   };

   projItems.addEventListener("mouseover", mouseHover);
   projItems.addEventListener("mouseout", mouseHover);
} else {
   navButtons.forEach((btn) => (btn.style.visibility = "hidden"));
}

//# sourceMappingURL=enable-swiper.js.map
