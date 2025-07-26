 window.addEventListener("load", () => {
      const slideImages = [
        "media/carousel/imagen1.webp",
        "media/carousel/imagen2.png",
        "media/carousel/imagen3.webp",
      ];

      let loadedCount = 0;
      slideImages.forEach(src => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
          loadedCount++;
          if (loadedCount === slideImages.length) {
            startCarousel();
          }
        };
      });
    });

    function startCarousel() {
      const slides = document.querySelectorAll(".slide");
      let current = 0;

      slides[current].classList.add("active");

      setInterval(() => {
        slides[current].classList.remove("active");
        current = (current + 1) % slides.length;
        slides[current].classList.add("active");
      }, 5000);
    }