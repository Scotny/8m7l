new Typed("#n", {
  strings: ["Netflix"],
  typeSpeed: 50,
  startDelay: 0,
  showCursor: false,
  onComplete: () => {
    new Typed("#s", {
      strings: ["Splash Screen"],
      typeSpeed: 50,
      startDelay: 500,
      showCursor: false,
    });
  },
});
