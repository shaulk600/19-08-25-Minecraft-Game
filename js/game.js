let activeTool = null;

const toolMapping = {
  axe: "tree", // גרזן: עצים
  pickaxe: "rock", // מעדר: סלעים
  shovel: "dirt", // את חפירה: אדמה
//   shears: "branches" // מספריים: ענפים
};

// בחירת כלי
document.querySelectorAll(".tool").forEach((tool) => {
  tool.addEventListener("click", () => {
    activeTool = tool.classList[1];

    document.querySelectorAll(".tool").forEach((t) => {
      t.style.borderColor = "#333";
      tool.style.borderColor = "gold";
    });
  });
});

// הסרת משבצת באמצעות הכלי
document.querySelectorAll(".square").forEach((square) => {
  square.addEventListener("click", () => {
    if (!activeTool) return;

    const squareType = square.classList[1];

    if (toolMapping[activeTool] === squareType) {
      square.remove();
    }
  });
});
