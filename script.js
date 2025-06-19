const main = document.getElementById("mainContainer");

main.addEventListener("scroll", () => {
  const scrollTop = main.scrollTop;
  const scrollHeight = main.scrollHeight;
  const offsetHeight = main.offsetHeight;

  if (scrollTop + offsetHeight >= scrollHeight - 10) {
    // Reached end
    main.classList.add("!-top-[100%]");
  } else {
    // Not at end
    main.classList.remove("!-top-[100%]");
  }
});
