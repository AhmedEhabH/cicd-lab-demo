const clock = document.getElementById("clock");
clock.textContent = "JavaScript is running. Page opened at " + new Date().toLocaleTimeString();

let clicks = 0;
document.getElementById("btn").addEventListener("click", () => {
  clicks += 1;
  document.getElementById("btn").textContent = "Clicked " + clicks + " times";
});
