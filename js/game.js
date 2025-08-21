const container = document.getElementById("container");
/*
The matrix is based on row numbers. when :



*/
let numIndex = 0;
const rows = 30;
const columns = 100;
// i=row
for (let i = 0; i < rows; i++) {

    // j=column
    for (let j = 0; j < columns; j++) {
        const square = document.createElement("div");
        square.id = `square-row${i}-column${j}-num${numIndex}`;

        if (i < 10) {
            square.classList.add("sky");
        } else if (i === 10) {
            square.classList.add("sky", "grass"); //אדמה
        } else if (i > 10 && i < 15) {
            square.classList.add("sky", "dirt"); //אדמה 2
        } else if (i >= 15 && i < 28) {
            square.classList.add("sky", "rocks"); //אבן
        } else if (i >= 28 && i < 30) {
            square.classList.add("sky", "abyss"); //תהום
        }
        numIndex++;
        container.appendChild(square);
    }
}






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
    tree: 0
};

// עדכון הקאונטרים במסך
function updateCounters() {
    countGrass.textContent = numResources.grass;
    countDirt.textContent = numResources.dirt;
    countRocks.textContent = numResources.rocks;
    countBranches.textContent = numResources.branches;
    countTree.textContent = numResources.tree;
}

// הוספה למשאבים
function addResources(resource) {
    if (numResources.hasOwnProperty(resource)) {
        numResources[resource]++;
        updateCounters();
    }
}

// הורדה ממשאבים
function removeResources(resource) {
    if (numResources.hasOwnProperty(resource) && numResources[resource] > 0) {
        numResources[resource]--;
        updateCounters();
    }
}

function isClassPresent(e) {
    const square = e.target;
    if (!square.classList.contains("sky")) return;

    const squareType = square.classList[1];

    if (!activeTool) return;

    if (toolMapping[activeTool].includes(squareType)) {
        square.classList.remove(squareType);
        addResources(squareType);
    } 

}

container.addEventListener("click", isClassPresent);




let activeTool = null;

const toolMapping = {
    axe: ["tree"], // גרזן: עצים
    pickaxe: ["rocks"], // מעדר: סלעים
    shovel: ["dirt", "grass"], // את חפירה: אדמה
    shears: ["branches"], // מספריים: ענפים
};

const cursorMapping = {
    axe: "axe-cursor",
    pickaxe: "pickaxe-cursor",
    shovel: "shovel-cursor",
    shears: "shears-cursor",
};

// בחירת כלי
document.querySelectorAll(".tool").forEach((tool) => {
    tool.addEventListener("click", () => {
        // ביטול כלי (איקס אדום)
        if (tool.classList.contains("cancel")) {
            activeTool = null;
            container.classList.remove("axe-cursor", "pickaxe-cursor", "shovel-cursor", "shears-cursor");
            document.querySelectorAll(".tool").forEach((t) => (t.style.borderColor = "#333"));
            return;
        }

        // בחירת כלי
        activeTool = tool.classList[1];

        document.querySelectorAll(".tool").forEach((t) => {
            t.style.borderColor = "#333";
        });

        tool.style.borderColor = "gold";

        container.classList.remove("axe-cursor", "pickaxe-cursor", "shovel-cursor", "shears-cursor");
        container.classList.add(cursorMapping[activeTool]);
    });
});



container.addEventListener("mouseover", (e) => {
    const square = e.target;
    if (!square.classList.contains("sky")) return;

    if (activeTool) {
        square.classList.add("highlight");
    }
});

container.addEventListener("mouseout", (e) => {
    const square = e.target;
    if (!square.classList.contains("sky")) return;

    square.classList.remove("highlight");
});
