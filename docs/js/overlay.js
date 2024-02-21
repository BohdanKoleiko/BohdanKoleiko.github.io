const overlay = document.querySelector(".overlay"),
   overlayItem = document.querySelector(".overlay__item"),
   overlayItemImg = document.querySelector(".overlay__item > img"),
   certificates = document.querySelectorAll(".cert__item-img"),
   closeBtn = document.querySelector(".overlay__close-btn");

const initOverlay = function () {
   overlay.classList.remove("active");
   overlay.style.opacity = 0;
   overlayItem.style.transform = "translate(-50%, -50%) scale(0.8)";
   overlayItem.style.opacity = 0;
   overlayItemImg.src = "";
   overlayItemImg.alt = "";
   document.documentElement.style.overflow = "";
};

initOverlay();

const closeOverlay = function (event) {
   if (overlay.classList.contains("active") && event.target.tagName !== "IMG") {
      initOverlay();
   }

   closeBtn.removeEventListener("click", this);
   overlay.removeEventListener("click", this);
};

certificates.forEach((cert, i) => {
   cert.addEventListener("click", function () {
      const img = this.children[0];

      document.documentElement.style.overflow = "hidden";

      overlayItemImg.src = img.src;
      overlayItemImg.alt = img.alt;

      overlay.classList.add("active");

      let opacity = 0;
      let scale = 0.5;

      const intervalID = setInterval(async () => {
         if (opacity <= 0.9) {
            opacity += 0.1;
            overlay.style.opacity = opacity;
            overlayItem.style.opacity = opacity;
         } else {
            clearInterval(intervalID);
         }

         const timeoutID = setTimeout(() => {
            if (scale <= 0.9) {
               scale += 0.1;
            } else {
               clearTimeout(timeoutID);
            }

            overlayItem.style.transform = `translate(-50%, -50%) scale(${scale})`;
         }, 50);
      }, 40);

      closeBtn.addEventListener("click", closeOverlay);
      overlay.addEventListener("click", closeOverlay);
   });
});

//# sourceMappingURL=overlay.js.map
