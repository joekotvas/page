import { CountUp } from "./countUp.min.js";
window.onload = function () {
  document.querySelectorAll(".count-up").forEach((element) => {
    const countUp = new CountUp(element, element.textContent, {
      enableScrollSpy: true,
    });
  });
};
