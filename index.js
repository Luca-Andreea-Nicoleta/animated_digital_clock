const hourEl = document.getElementById("hour");
const minuteEl = document.getElementById("minutes");
const secondEl = document.getElementById("seconds");
const ampmEl = document.getElementById("ampm");

function updateClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();
  let ampm = "AM";

  if (h > 12) {
    h = h - 12;
    ampm = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  hourEl.innerText = h;
  minuteEl.innerText = m;
  secondEl.innerText = s;
  ampmEl.innerText = ampm;
  setTimeout(updateClock, 1000);
}

updateClock();

const body = document.body;
const backgroundImageURLs = [
  "url(https://img.freepik.com/free-photo/pretty-wedding-flowers-close-up-view-background_24972-65.jpg?w=996&t=st=1691478637~exp=1691479237~hmac=9c03b74e468cc79a31bb4115175cbdd47f267655a8ef79e455b8d28124c74578)",
  "url(https://img.freepik.com/free-photo/closeup-shot-beautiful-pink-flowers-garden-vintage-style_181624-19941.jpg?w=996&t=st=1691478668~exp=1691479268~hmac=35db39bd665a8131e03faaf9f9e0c7a6fd66497fa72577c4b573cc44312f8e2f)",
  "url(https://img.freepik.com/free-photo/summer-bouquet-fresh-gerbera-daisies-chrysanthemums-generated-by-ai_188544-9585.jpg?w=1060&t=st=1691478692~exp=1691479292~hmac=04077677f6ccb47c9ffb2661fe7df420bf7e147c0b4efd6b5963d5c0c1bad001)",
  "url(https://images.unsplash.com/photo-1628344182682-1a3f2b4c8713?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80)",
  "url(https://img.freepik.com/free-photo/closeup-shot-luxurious-bouquet-orange-brown-roses-black_181624-28985.jpg?w=996&t=st=1691478876~exp=1691479476~hmac=7c846ab665451ab4c5ce240eba7672a0c3557b45335f3686593cc4351f2ce164",
  "url(https://img.freepik.com/free-photo/composition-beautiful-flowers-background_23-2149057014.jpg?w=996&t=st=1691478898~exp=1691479498~hmac=cf6ec8df09f4eeeab37db660752f16bf2af4f730b4d9219e928f58358ca2c18b)",
];

let currentImageIndex = 0;
function changeBackgroundImage() {
  currentImageIndex = (currentImageIndex + 1) % backgroundImageURLs.length;
  body.style.backgroundImage = backgroundImageURLs[currentImageIndex];
}

body.addEventListener("dblclick", changeBackgroundImage);
