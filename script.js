// Activate sections on scroll
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  let triggerPoint = window.innerHeight / 1.3;
  sections.forEach(sec => {
    let rect = sec.getBoundingClientRect();
    if(rect.top < triggerPoint && rect.bottom > 0){
      sec.classList.add("active");
    }
  });
});

// Wormhole portal selector
function selectPortal(imgSrc){
  const display = document.querySelector(".wormhole-display");
  display.innerHTML = `<img src="${imgSrc}" alt="Portal">`;
}

// Meteors generator
function createMeteors(){
  const container = document.querySelector(".meteor-container");
  for(let i=0; i<20; i++){
    let meteor = document.createElement("div");
    meteor.classList.add("meteor");
    meteor.style.top = `${Math.random()*100}vh`;
    meteor.style.animationDuration = `${2+Math.random()*4}s`;
    meteor.style.width = meteor.style.height = `${10+Math.random()*20}px`;
    container.appendChild(meteor);
  }
}
createMeteors();

// Live Countdown Timer (Years, Months, Days, Hours, Minutes, Seconds)
function updateLeoCountdown(){
  const birth = new Date(1993, 7, 18, 0, 0, 0); // Aug 18 1993
  const target = new Date(2025, 7, 18, 0, 0, 0);
  const now = new Date();

  const totalMs = now - birth;
  const remainingMs = target - birth;
  const years = now.getFullYear() - birth.getFullYear();
  
  let diff = totalMs;
  const msIn = { year: 31557600000, month: 2629800000, day: 86400000, hour: 3600000, min: 60000, sec: 1000 };
  const yearsCalc = Math.floor(diff / msIn.year);
  diff -= yearsCalc * msIn.year;
  const monthsCalc = Math.floor(diff / msIn.month);
  diff -= monthsCalc * msIn.month;
  const daysCalc = Math.floor(diff / msIn.day);
  diff -= daysCalc * msIn.day;
  const hoursCalc = Math.floor(diff / msIn.hour);
  diff -= hoursCalc * msIn.hour;
  const minutesCalc = Math.floor(diff / msIn.min);
  diff -= minutesCalc * msIn.min;
  const secondsCalc = Math.floor(diff / msIn.sec);

  document.getElementById("years").textContent = yearsCalc;
  document.getElementById("months").textContent = monthsCalc;
  document.getElementById("days").textContent = daysCalc;
  document.getElementById("hours").textContent = hoursCalc;
  document.getElementById("minutes").textContent = minutesCalc;
  document.getElementById("seconds").textContent = secondsCalc;
}

// Initialize and update every second
updateLeoCountdown();
setInterval(updateLeoCountdown, 1000);
