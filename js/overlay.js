const overlay = document.querySelector(".overlay"),
   overlayImg = document.querySelector(".overlay__image"),
   certificates = document.querySelectorAll(".cert__item-img"),
   closeBtn = document.querySelector(".overlay__close-btn");

const initOverlay = function (scale = 0.3, opacity = 0) {
   overlay.classList.remove("active");
   overlay.style.opacity = opacity;
   overlayImg.style.transform = `translate(-50%, -50%) scale(${scale})`;
   overlayImg.style.opacity = opacity;
   overlayImg.src = "";
   overlayImg.alt = "";
   document.documentElement.style.overflow = "";
};

initOverlay();

const closeOverlay = function (event) {
   if (overlay.classList.contains("active") && event.target.tagName !== "IMG") {
      initOverlay();
      //scale = 0.3;
   }

   closeBtn.removeEventListener("click", this);
   overlay.removeEventListener("click", this);
};

certificates.forEach((cert) => {
   cert.addEventListener("click", function () {
      const img = this.children[0];

      overlayImg.src = img.src;
      overlayImg.alt = img.alt;
      overlay.classList.add("active");
      document.documentElement.style.overflow = "hidden";

      const increment = 0.01;
      let opacity = 0;
      let scale = 0.3;

      const opacityIntervalID = setInterval(() => {
         opacity += increment;
         overlay.style.opacity = opacity;
         overlayImg.style.opacity = opacity;

         if (opacity > 1) {
            clearInterval(opacityIntervalID);
         }
      }, 1);

      const scaleIntervalID = setInterval(() => {
         scale += increment;
         overlayImg.style.transform = `translate(-50%, -50%) scale(${scale})`;

         if (scale > 1) {
            clearInterval(scaleIntervalID);
         }
      }, 1);

      closeBtn.addEventListener("click", closeOverlay);
      overlay.addEventListener("click", closeOverlay);
   });
});

//# sourceMappingURL=overlay.js.map
