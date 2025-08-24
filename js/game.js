const container = document.getElementById("container");

/* יצירת המפה */
let numIndex = 0;
const rows = 30;
const columns = 100;

for (let i = 0; i < rows; i++) {
  for (let j = 0; j < columns; j++) {
    const square = document.createElement("div");
    square.id = `square-row${i}-column${j}-num${numIndex}`;

    if (i < 10) {
      square.classList.add("sky");
    } else if (i === 10) {
      square.classList.add("sky", "grass");
    } else if (i > 10 && i < 15) {
      square.classList.add("sky", "dirt");
    } else if (i >= 15 && i < 28) {
      square.classList.add("sky", "rocks");
    } else if (i >= 28 && i < 30) {
      square.classList.add("sky", "abyss");
    }
    numIndex++;
    container.appendChild(square);
  }
}

/* קאונטרים */
const countGrass = document.getElementById("countGrass");
const countDirt = document.getElementById("countDirt");
const countRocks = document.getElementById("countRock");
const countBranches = document.getElementById("countBranches");
const countTree = document.getElementById("countTree");

const numResources = {
  grass: 0,
  dirt: 0,
  rocks: 0,
  branches: 0,
  tree: 0,
};

function updateCounters() {
  countGrass.textContent = numResources.grass;
  countDirt.textContent = numResources.dirt;
  countRocks.textContent = numResources.rocks;
  countBranches.textContent = numResources.branches;
  countTree.textContent = numResources.tree;
}
updateCounters();

function addResources(resource) {
  if (resource in numResources) {
    numResources[resource]++;
    updateCounters();
  }
}
function removeResources(resource) {
  if (resource in numResources && numResources[resource] > 0) {
    numResources[resource]--;
    updateCounters();
  }
}

/* מצב בחירה */
let activeTool = null;
let activeResource = null;

/* מיפויים */
const toolMapping = {
  axe: ["tree"],
  pickaxe: ["rocks"],
  shovel: ["dirt", "grass"],
  shears: ["branches"],
};

const cursorMapping = {
  axe: "axe-cursor",
  pickaxe: "pickaxe-cursor",
  shovel: "shovel-cursor",
  shears: "shears-cursor",
  grass: "grass-cursor",
  dirt: "dirt-cursor",
  rocks: "rocks-cursor",
  branches: "branches-cursor",
  tree: "tree-cursor",
};

const savedToResource = {
  savedGrass: "grass",
  savedDirt: "dirt",
  savedRock: "rocks",      
  savedBranches: "branches",
  savedTree: "tree",
};

/* עזר: ניקוי כל קלאסי הקורסור מה-container */
function clearAllCursors() {
  container.classList.remove(
    "axe-cursor","pickaxe-cursor","shovel-cursor","shears-cursor",
    "grass-cursor","dirt-cursor","rocks-cursor","branches-cursor","tree-cursor"
  );
}

/* בחירת כלי */
document.querySelectorAll(".tool").forEach((tool) => {
  tool.addEventListener("click", () => {
    if (tool.classList.contains("cancel")) {
      activeTool = null;
      activeResource = null;
      clearAllCursors();
      document.querySelectorAll(".tool").forEach((t) => (t.style.borderColor = "#333"));
      document.querySelectorAll(".savedPart div").forEach(d => d.classList.remove("selected"));
      return;
    }

    activeTool = tool.classList[1];
    activeResource = null;

    document.querySelectorAll(".tool").forEach((t) => (t.style.borderColor = "#333"));
    tool.style.borderColor = "gold";

    document.querySelectorAll(".savedPart div").forEach(d => d.classList.remove("selected"));

    clearAllCursors();
    if (cursorMapping[activeTool]) container.classList.add(cursorMapping[activeTool]);
  });
});

/* בחירת משאב מהמחסן (savedPart) */
document.querySelectorAll(".savedPart div").forEach((div) => {
  div.addEventListener("click", () => {
    const resource = savedToResource[div.id];
    if (!resource) return;

    if (numResources[resource] > 0) {
      activeResource = resource;
      activeTool = null;

      clearAllCursors();
      if (cursorMapping[resource]) container.classList.add(cursorMapping[resource]);

      // איפוס בחירת כלים
      document.querySelectorAll(".tool").forEach((t) => (t.style.borderColor = "#333"));
      // הורדת בחירה מהמשאבים
      document.querySelectorAll(".savedPart div").forEach(d => d.classList.remove("selected"));
      // סימון זהב לנבחר
      div.classList.add("selected");
    }
  });
});

// לחיצה על אריח - חציבה/בניה
function onTileClick(e) {
  const square = e.target;
  if (!square.classList.contains("sky")) return;

  const resourceClasses = ["grass","dirt","rocks","branches","tree","abyss"];
  const tileResource = resourceClasses.find((cls) => square.classList.contains(cls));

  // כרייה עם כלי
  if (activeTool && tileResource && toolMapping[activeTool].includes(tileResource)) {
    square.classList.remove(tileResource);
    addResources(tileResource);
    return;
  }

  // שתילה
  if (!activeTool && activeResource && !tileResource) {
    if (numResources[activeResource] > 0) {
      removeResources(activeResource);
      square.classList.add(activeResource);
    }
  }
}
container.addEventListener("click", onTileClick);

/* הדגשה ב-hover */
container.addEventListener("mouseover", (e) => {
  const square = e.target;
  if (!square.classList.contains("sky")) return;
  if (activeTool || activeResource) square.classList.add("highlight");
});
container.addEventListener("mouseout", (e) => {
  const square = e.target;
  if (!square.classList.contains("sky")) return;
  square.classList.remove("highlight");
});
