const texts = [
  "I Love You ❤️",
  "Miss You 😘",
  "Forever 💕",
  "My World 🌍",
  "Only You ❤️",
  "My Heart 💓",
  "You & Me Always 💞",
  "Endless Love ❤️",
  "My Happiness 😊",
  "My Everything 💖"
];

/* 💖 ORBIT TEXT */
for (let i = 0; i < 25; i++) {
  let div = document.createElement("div");
  div.className = "item";
  div.innerText = texts[Math.floor(Math.random() * texts.length)];
  div.style.animationDuration = (8 + Math.random() * 10) + "s";
  div.style.transform = `rotate(${Math.random() * 360}deg) translateX(240px)`;
  document.body.appendChild(div);
}

/* 💓 HEARTS */
setInterval(() => {
  let heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "❤️";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.fontSize = (15 + Math.random() * 20) + "px";
  document.body.appendChild(heart);
  setTimeout(() => heart.remove(), 5000);
}, 300);

/* ✨ STARS */
for (let i = 0; i < 100; i++) {
  let star = document.createElement("div");
  star.className = "star";
  star.style.top = Math.random() * 100 + "vh";
  star.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(star);
}

/* 🎵 MUSIC CONTROL (FIXED) */
const music = document.getElementById("bgMusic");

// Play music ONLY after user interaction (required by browser)
function startMusic() {
  music.play().catch(err => console.log("Music blocked:", err));
}

// trigger once on first interaction
document.body.addEventListener("click", startMusic, { once: true });
document.body.addEventListener("touchstart", startMusic, { once: true });

/* 💌 MENU CLICK WITH IMAGES + BACK BUTTON */
function openPage(page) {
  let box = document.getElementById("contentBox");

  // also try to play when menu clicked
  startMusic();

  if (page === "memories") {
    box.innerHTML = `
      <h2>Our Memories 💭</h2>
      <p>Every moment with you is my favorite memory ❤️</p>
      <p>I replay our moments again and again in my heart 💕</p>
      <img src="./photo1.jpg">
      <br>
      <button class="back-btn" onclick="goBack()">⬅ Back</button>
    `;
  }

  else if (page === "love") {
    box.innerHTML = `
      <h2>Love Notes 💌</h2>
      <p>I fall in love with you more every single day 😘</p>
      <p>You are the reason behind my smile 😊</p>
      <img src="./photo2.jpg">
      <br>
      <button class="back-btn" onclick="goBack()">⬅ Back</button>
    `;
  }

  else if (page === "photos") {
    box.innerHTML = `
      <h2>Beautiful You 📸</h2>
      <p>You are the most beautiful part of my life 🌹</p>
      <p>I could look at you forever ❤️</p>
      <img src="./photo3.jpg">
      <br>
      <button class="back-btn" onclick="goBack()">⬅ Back</button>
    `;
  }

  else if (page === "forever") {
    box.innerHTML = `
      <h2>Forever 💍</h2>
      <p>I don’t want temporary… I want forever with you ❤️</p>
      <p>Let’s write our forever story together 💞</p>
      <img src="./photo4.jpg">
      <br>
      <button class="back-btn" onclick="goBack()">⬅ Back</button>
    `;
  }
}

/* 🔙 BACK FUNCTION */
function goBack() {
  document.getElementById("contentBox").innerHTML = "Click something ❤️";
}