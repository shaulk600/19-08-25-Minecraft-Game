let activeTool = null;

const toolMapping = {
  axe: "tree", // גרזן: עצים
  pickaxe: "rock", // מעדר: סלעים
  shovel: "dirt", // את חפירה: אדמה
  //   shears: "branches" // מספריים: ענפים
};

const cursorMapping = {
  axe: "url('../img/diamond-axe.webp') 16 16, auto",
  pickaxe: "url('../img/diamond-pickaxe.webp') 16 16, auto",
  shovel: "url('../img/diamond-shovel.webp') 16 16, auto",
};

// בחירת כלי
document.querySelectorAll(".tool").forEach((tool) => {
  tool.addEventListener("click", () => {
    activeTool = tool.classList[1];

    document.querySelectorAll(".tool").forEach((tool) => {
      tool.style.borderColor = "#333";
    });

    tool.style.borderColor = "gold";

    document.querySelectorAll(".square").forEach((el) => {
      el.style.cursor = cursorMapping[activeTool];
    });
  });
});

// הסרת משבצת באמצעות הכלי
document.querySelectorAll(".square").forEach((square) => {
  square.addEventListener("click", () => {
    if (!activeTool) return;

    const squareType = square.classList[1];

    if (toolMapping[activeTool] === squareType) {
      square.classList.remove(squareType);
    }
  });

  square.addEventListener("mouseover", () => {
    if (activeTool) {
      square.classList.add("highlight");
    }
  });

  square.addEventListener("mouseout", () => {
    square.classList.remove("highlight");
  });
});
