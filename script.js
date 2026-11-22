const hugBtn = document.getElementById("hugBtn");
const hugMessage = document.getElementById("hugMessage");
const heartsLayer = document.getElementById("heartsLayer");

const messages = [
  "A tight hug, a forehead kiss, and a reminder: you are loved. ♥",
  "Princess, even on the grumpy days, you're my favourite person. 🥹",
  "One virtual cuddle delivery, specially packed for my Mayuu. 💗",
  "No need to be okay every second. I'm cheering for you, always.",
  "If I were there, this hug would last a very, very long time. 🤍"
];
let messageIndex = 0;

hugBtn.addEventListener("click", () => {
  hugMessage.textContent = messages[messageIndex % messages.length];
  messageIndex++;
  for (let i = 0; i < 18; i++) {
    const heart = document.createElement("span");
    heart.className = "floating-heart";
    heart.textContent = Math.random() > 0.5 ? "♥" : "♡";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (14 + Math.random() * 22) + "px";
    heart.style.animationDuration = (2.4 + Math.random() * 2) + "s";
    heartsLayer.appendChild(heart);
    heart.addEventListener("animationend", () => heart.remove());
  }
});
