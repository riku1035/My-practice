"use strict";
{
  const countNumber = document.getElementById("count-number");
  const text = document.querySelector("textarea");
  const toggleBtn = document.getElementById("toggle-btn");
  const h1 = document.querySelector("h1");
  const useBtn = document.getElementById("use-btn");
  const useMethod = document.getElementById("use-method");

  text.focus();

  toggleBtn.addEventListener("click", () => {
    text.classList.toggle("eng");
    reset();
    text.focus();

    if (text.classList.contains("eng") === true) {
      h1.textContent = "英単語カウンター";
      h1.style.color = "red";
    } else {
      h1.textContent = "文字数カウンター";
      h1.style.color = "blue";
    }
  });

  text.addEventListener("keyup", () => {
    if (text.classList.contains("eng") === true) {
      const getEngWord = text.value.split(/[\n\s]/g).filter((v) => v).length;
      countNumber.textContent = getEngWord;
    } else {
      const getWord = text.value.replace(/[\n\s]/g, "").length;
      countNumber.textContent = getWord;
    }
  });

  h1.addEventListener("click", () => {
    reset();
    text.focus();
  });

  useBtn.addEventListener("mouseover", () => {
    useMethod.style.visibility = "visible";
  });
  useBtn.addEventListener("mouseleave", () => {
    useMethod.style.visibility = "hidden";
  });

  const reset = function () {
    text.value = "";
    countNumber.textContent = "0";
  };
}
