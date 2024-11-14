document.addEventListener("DOMContentLoaded", function () {
    const scroll = new LocomotiveScroll({
      el: document.querySelector("[data-scroll-container]"),
      smooth: true,
      multiplier: 1,
    });
  });

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