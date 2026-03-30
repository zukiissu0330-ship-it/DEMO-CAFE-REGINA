"use strict";

(() => {
  const galleryTrack = document.querySelector("[data-gallery-track]");
  const galleryNavs = Array.from(document.querySelectorAll("[data-gallery-nav]"));
  const eventCards = Array.from(document.querySelectorAll("[data-event-card]"));
  const eventNavs = Array.from(document.querySelectorAll("[data-events-nav]"));

  if (galleryTrack && galleryNavs.length > 0) {
    const originalItems = Array.from(galleryTrack.querySelectorAll("[data-gallery-item]"));

    if (originalItems.length > 0) {
      const prependClones = originalItems.map((item) => item.cloneNode(true));
      const appendClones = originalItems.map((item) => item.cloneNode(true));

      prependClones.reverse().forEach((clone) => {
        galleryTrack.insertBefore(clone, galleryTrack.firstChild);
      });
      appendClones.forEach((clone) => {
        galleryTrack.appendChild(clone);
      });

      let galleryIndex = originalItems.length;
      let isGalleryAnimating = false;

      const getGalleryStep = () => {
        const firstItem = galleryTrack.querySelector("[data-gallery-item]");
        if (!firstItem) {
          return 0;
        }

        const itemWidth = firstItem.getBoundingClientRect().width;
        const gap = Number.parseFloat(window.getComputedStyle(galleryTrack).columnGap || window.getComputedStyle(galleryTrack).gap || "0");
        return itemWidth + gap;
      };

      const applyGalleryTransform = (useTransition = true) => {
        const step = getGalleryStep();
        galleryTrack.style.transition = useTransition ? "transform 0.34s ease" : "none";
        galleryTrack.style.transform = `translateX(${-galleryIndex * step}px)`;
      };

      const syncGalleryLoop = () => {
        if (galleryIndex >= originalItems.length * 2) {
          galleryIndex -= originalItems.length;
          applyGalleryTransform(false);
        } else if (galleryIndex < originalItems.length) {
          galleryIndex += originalItems.length;
          applyGalleryTransform(false);
        }
      };

      galleryTrack.addEventListener("transitionend", () => {
        isGalleryAnimating = false;
        syncGalleryLoop();
      });

      galleryNavs.forEach((btn) => {
        btn.addEventListener("click", () => {
          if (isGalleryAnimating) {
            return;
          }

          isGalleryAnimating = true;
          galleryIndex += btn.dataset.galleryNav === "prev" ? -1 : 1;
          applyGalleryTransform(true);
        });
      });

      window.addEventListener("resize", () => applyGalleryTransform(false));
      applyGalleryTransform(false);
    }
  }

  if (eventCards.length > 0) {
    const eventTrack = document.querySelector("[data-events-track]");
    const eventViewport = eventTrack ? eventTrack.parentElement : null;
    let eventIndex = Math.max(
      0,
      eventCards.findIndex((node) => node.classList.contains("is-active"))
    );

    const syncEventTrack = () => {
      if (!eventTrack || !eventViewport || !eventCards[eventIndex]) {
        return;
      }

      const targetCard = eventCards[eventIndex];
      const maxOffset = Math.max(0, eventTrack.scrollWidth - eventViewport.clientWidth);
      const nextOffset = Math.min(targetCard.offsetLeft, maxOffset);
      eventTrack.style.transform = `translateX(${-nextOffset}px)`;
    };

    const setEvent = (nextIndex) => {
      if (nextIndex < 0) {
        eventIndex = eventCards.length - 1;
      } else if (nextIndex >= eventCards.length) {
        eventIndex = 0;
      } else {
        eventIndex = nextIndex;
      }

      eventCards.forEach((card, idx) => {
        card.classList.toggle("is-active", idx === eventIndex);
      });

      syncEventTrack();
    };

    eventNavs.forEach((btn) => {
      btn.addEventListener("click", () => {
        const step = btn.dataset.eventsNav === "prev" ? -1 : 1;
        setEvent(eventIndex + step);
      });
    });

    window.addEventListener("resize", syncEventTrack);
    setEvent(eventIndex);
  }
})();
