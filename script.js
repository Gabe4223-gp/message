const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yay, see you on the 18th!, Wear semi-formal ;)";
  gif.src =
    "https://media4.giphy.com/media/F9Z5dbg6Rkn7nf6mAb/giphy.gif?cid=2154d3d70dghsxg4ey8jz5snkyvhmx2gvbmpa8y8vlsvrji8&ep=v1_gifs_related&rid=giphy.gif&ct=g";
});

noBtn.addEventListener("click", () => {
  const noBtnRect = noBtn.getBoundingClientRect();
  const maxX = window.innerWidth - noBtnRect.width;
  const maxY = window.innerHeight - noBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  noBtn.style.left = randomX + "px";
  noBtn.style.top = randomY + "px";
});