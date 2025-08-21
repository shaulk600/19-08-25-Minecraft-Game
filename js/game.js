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

















// "קליטת המשתנים מה"דיב"-"קאונטר
const countGrass = document.getElementById("countGrass");
const countDirt = document.getElementById("countDirt");
const countRocks = document.getElementById("countRocks");
const countBranches = document.getElementById("countBranches");
const countTree = document.getElementById("countTree");


const resources = {
    grass: "grass", // קרקע
    dirt: "dirt",  //אדמה
    rocks: "rocks", // סלעים
    branches: "branches", //עלים
    tree: "tree" // גזע
}

const numResources = {
    grass: 0,
    dirt: 0,
    rocks: 0,
    branches: 0,
    tree: 0
}

function addResources(resources) {
    if (resources == "grass" || resources == "dirt" || resources == "rocks" || resources == "branches" || resources == "tree")
        numResources.resources++;
}
function RemovingResources(resources) {
    if (resources == "grass" || resources == "dirt" || resources == "rocks" || resources == "branches" || resources == "tree")
        numResources.resources--;
}

function isClassPresent(event) { // event.torget


}



// mapping
//variable tool
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

        if (tool.classList.contains("cancel")) {
            activeTool = null;
            container.classList.remove("axe-cursor", "pickaxe-cursor", "shovel-cursor", "shears-cursor");

            document.querySelectorAll(".tool").forEach((t) => (t.style.borderColor = "#333"));
            return;
        };

        activeTool = tool.classList[1];


        document.querySelectorAll(".tool").forEach((tool) => {
            tool.style.borderColor = "#333";
        });

        tool.style.borderColor = "gold";


        container.classList.remove("axe-cursor", "pickaxe-cursor", "shovel-cursor", "shears-cursor");
        container.classList.add(cursorMapping[activeTool]);

    });
});

// הסרת משבצת באמצעות הכלי
document.querySelectorAll(".sky").forEach((square) => {
    square.addEventListener("click", () => {
        if (!activeTool) return;

        const squareType = square.classList[1];

        if (toolMapping[activeTool].includes(squareType)) {
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
