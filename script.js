//your JS code here. If required.
const btn = document.getElementById("enterBtn");
const statusPara = document.getElementById("status");

btn.addEventListener("click", () => {
  const h1 = document.createElement("h1");
  h1.innerText = "Entered Metaverse";
  statusPara.replaceWith(h1); // Replace the <p> with the new <h1>
});
