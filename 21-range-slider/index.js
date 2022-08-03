const sliderEl = document.querySelector("#slider-input");
const selectedEl = document.querySelector(".selected");

// 监听滑动事件
sliderEl.addEventListener("input", () => {
  selectedEl.innerHTML = sliderEl.value;
});
