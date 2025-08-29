let heartCount = 0;
let coinCount = 100;
let copyCount = 0;

const heartDisplay = document.getElementById("heartCount");
const coinDisplay = document.getElementById("coinCount");
const copyDisplay = document.getElementById("copyCount");
const historyList = document.getElementById("historyList");

// Heart click
document.querySelectorAll(".heart").forEach(heart => {
  heart.addEventListener("click", () => {
    if (!heart.classList.contains("liked")) {
      heart.classList.add("liked");
      heartCount++;
      heartDisplay.textContent = heartCount;
    }
  });
});

// Copy button
document.querySelectorAll(".copy-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const number = btn.closest(".card").querySelector(".number").textContent;
    navigator.clipboard.writeText(number).then(() => {
      alert("Copied: " + number);
      copyCount++;
      copyDisplay.textContent = copyCount;
    });
  });
});

// Call button
document.querySelectorAll(".call-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".card");
    const serviceName = card.querySelector("h3").textContent;
    const number = card.querySelector(".number").textContent;

    if (coinCount < 20) {
      alert("Not enough coins to make this call!");
      return;
    }

    coinCount -= 20;
    coinDisplay.textContent = coinCount;
    alert(`Calling ${serviceName} at ${number}...`);

    // Add to history with current time
    const time = new Date().toLocaleTimeString();
    const entry = document.createElement("li");
    entry.textContent = `${serviceName} (${number}) - ${time}`;
    if (historyList.textContent.includes(" ")) {
      historyList.textContent = "";
    }
    historyList.appendChild(entry);
  });
});


function clearHistory() {
  historyList.innerHTML = " ";
}
