const viewPageviews = document.querySelector(".view-value");
const viewCashValue = document.querySelector(".cash-value b");
const slider = document.querySelector(".slider");
const sliderTrack = document.querySelector(".slider-track");
const sliderTrackGray = document.querySelector(".slider-track-gray");
const thumb = document.querySelector(".thumb");
const PageviewsValues = ["10K", "50K", "100K", "500K", "1M"];
const CashValues = ["$8.00", "$12.00", "$16.00", "$24.00", "$36.00"];

//DEFAULT STATE
slider.value = 2;
viewPageviews.textContent = `${PageviewsValues[slider.value]} PAGEVIEWS`;
viewCashValue.textContent = CashValues[slider.value];

slider.addEventListener("input", (e) => {
  viewPageviews.textContent = `${PageviewsValues[slider.value]} PAGEVIEWS`;
  viewCashValue.textContent = CashValues[slider.value];
  let percentValue = slider.value * (100 / slider.getAttribute("max"));
  sliderTrack.style.width = `${percentValue}%`;
  // sliderTrackGray.style.width = `${percentValue}%`;
  thumb.style.left = `${percentValue}%`;
  thumb.style.transform = `translateX(-${percentValue}%)`;

  console.log(percentValue);
});

//CHROME LEFT PROGRESS BAR
