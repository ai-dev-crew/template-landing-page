const callToAction = document.querySelector("[data-cta]");

callToAction?.addEventListener("click", () => {
  document.querySelector("#next-steps")?.scrollIntoView({ behavior: "smooth" });
});
