

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
        square.id = `square- row${i} column${j} num${numIndex}`;

        if (i < 10) {
            square.classList.add("sky");
        }
        else if (i === 10) {
            square.classList.add("sky", "grass"); //אדמה
        }
        else if (i > 10 && i < 15) {
            square.classList.add("sky", "dirt"); //אדמה 2 
        }
        else if (i >= 15 && i < 28) {
            square.classList.add("sky", "rocks"); //אבן
        }
        else if (i >= 28 && i < 30) {
            square.classList.add("sky", "abyss"); //תהום
        }
        numIndex++;
        container.appendChild(square);
    }
}


