"use strict";

(() => {
  const mainImage = document.querySelector("[data-gallery-main]");
  const caption = document.querySelector("[data-gallery-caption]");
  const thumbs = Array.from(document.querySelectorAll("[data-gallery-thumb]"));
  const galleryNavs = Array.from(document.querySelectorAll("[data-gallery-nav]"));
  const eventCards = Array.from(document.querySelectorAll("[data-event-card]"));
  const eventNavs = Array.from(document.querySelectorAll("[data-events-nav]"));

  if (!mainImage || thumbs.length === 0) {
    return;
  }

  let galleryIndex = Math.max(
    0,
    thumbs.findIndex((node) => node.classList.contains("is-active"))
  );

  const setGallery = (nextIndex) => {
    if (nextIndex < 0) {
      galleryIndex = thumbs.length - 1;
    } else if (nextIndex >= thumbs.length) {
      galleryIndex = 0;
    } else {
      galleryIndex = nextIndex;
    }

    thumbs.forEach((thumb, idx) => {
      const active = idx === galleryIndex;
      thumb.classList.toggle("is-active", active);
      thumb.setAttribute("aria-current", active ? "true" : "false");
    });

    const activeThumb = thumbs[galleryIndex];
    const src = activeThumb.dataset.src;
    const nextCaption = activeThumb.dataset.caption || "Photo";

    if (src) {
      mainImage.src = src;
    }

    mainImage.alt = nextCaption;

    if (caption) {
      caption.textContent = nextCaption;
    }
  };

  thumbs.forEach((thumb, idx) => {
    thumb.addEventListener("click", () => setGallery(idx));
  });

  galleryNavs.forEach((btn) => {
    btn.addEventListener("click", () => {
      const direction = btn.dataset.galleryNav;
      const step = direction === "prev" ? -1 : 1;
      setGallery(galleryIndex + step);
    });
  });

  if (eventCards.length > 0) {
    let eventIndex = Math.max(
      0,
      eventCards.findIndex((node) => node.classList.contains("is-active"))
    );

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
    };

    eventNavs.forEach((btn) => {
      btn.addEventListener("click", () => {
        const step = btn.dataset.eventsNav === "prev" ? -1 : 1;
        setEvent(eventIndex + step);
      });
    });
  }
})();
