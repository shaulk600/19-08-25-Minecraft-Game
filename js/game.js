const continer = document.getElementById("continer");

/*
The matrix is based on row numbers. when :



*/
let numRow = 0;
let numIndex = 0;
for (let i = 0; i < 30 * 100; i++) {
    // i=row
    const row = document.createElement("div");
    const idRow = document.createAttribute("id");
    id.value = `row-${numRow + 1}`;
    numRow++;
    for (let j = 0; j <= 100; j++) { //לולאה מקוננת פר שורה יצירת squere תהיה בפנים   
        // j=column
        const square = document.createElement("div");
        const id = document.createAttribute("id");
        id.value = `square-${numIndex}`
        if (i < 10) {
            square.classList.add("sky");
        }
        else if (i === 10) {
            square.classList.add("sky", "dirt"); //אדמה
        }
        else if (i > 10 && i < 15) {
            square.classList.add("sky", "grass"); //אדמה 2 
        }
        else if (i >= 15 && i < 28) {
            square.classList.add("sky", "rocks"); //אבן
        }
        else if (i >= 28 && i < 30) {
            square.classList.add("sky", "abyss"); //תהום
        }
        row.appendChild(square);

        numIndex++;
    }
    continer.appendChild(row);
}


