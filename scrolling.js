function initializeLocoScroll() {
  const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: 0.2,
      class: 'is-reveal',
      smartphone: {
        smooth: true,
        multiplier: 0.5
      },
      tablet: {
        smooth: true,
        multiplier: 0.5
      }
    });

    window.addEventListener('resize', () => {
    scroll.update();
  });

  return scroll;
}

function waitForImages() {
  return new Promise((resolve) => {
    const images = document.querySelectorAll('image');
    let loadedImages = 0;
    const totalImages = images.length;

    if (totalImages == 0) {
      resolve();
      return;
    }

    images.forEach((image) => {
      if(image.complete) {
        loadedImages++;
        if(loadedImages == totalImages) {
          resolve();
        }
      } else {
        img.addEventListener('load', () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            resolve();
          }
        });

        img.addEventListener('error', () => {
          loadedImages++;
          if (loadedImages === totalImages) {
            resolve();
          }
        });
      }
    });
  });
}

  const handleAnimationEnd = (element) => {
    element.addEventListener('animationend', () => {
      // Update locomotive scroll
      scroll.update();
      
      // Force a small delay to ensure DOM is fully updated
      setTimeout(() => {
        scroll.update();
      }, 100);
    });
  };