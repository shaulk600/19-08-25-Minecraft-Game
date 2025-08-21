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

//============================================//
/*
this function gets a parameter of array with two elements - row and column
that represents the index of the top square of the tree's race.
it fills the squares in tree shape, leaves and race.
*/
function crateTree(raceIndex) {
    const raceRow = raceIndex[0];
    const raceColumn = raceIndex[1];
    for (let row = raceRow - 6; row <= raceRow; row++) {
        let leftSquare = raceColumn; // הריבוע השמאלי לצמצום
        let rightSquare = raceColumn; // הריבוע הימני לצמצום
        let secRow = false; // משתנה בוליאני לבדוק שורה ראשונה או שניה לצמצום
        for (let column = leftSquare; column <= rightSquare; column++) {
            addLeaveSquare(row, column);
        }
        if (secRow) {
            leftSquare--;
            rightSquare++;
        }
        secRow = !secRow;
    }

    for (let row = raceRow; row <= 9; row++) {
        addRaceSquare(row, raceColumn)
    }
}

function addLeaveSquare(row, column) {

}

function addRaceSquare(row, column) {

}

//============================================//

const resources = {
    grass: "grass", // קרקע
    dirt: "dirt",  //אדמה
    rocks: "rocks", // סלעים
    leaves: "leaves", //עלים
    race: "race" // גזע
}
const numResources = {
    grass: 0,
    dirt: 0,
    rocks: 0,
    leaves: 0,
    race: 0
}

function addResources(resources) {
    if (resources == "grass" || resources == "dirt" || resources == "rocks" || resources == "leaves" || resources == "race")
        numResources.resources++;
}
function RemovingResources(resources) {
    if (resources == "grass" || resources == "dirt" || resources == "rocks" || resources == "leaves" || resources == "race")
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

