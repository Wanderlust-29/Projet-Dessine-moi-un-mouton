function selectColor(event)
{
    let colorBox = event.target;
    let color = colorBox.style.backgroundColor;

    sessionStorage.setItem("selectedColor", color);
}

function getSelectedColor()
{
    if(sessionStorage.getItem("selectedColor"))
    {
        return sessionStorage.getItem("selectedColor");
    }

    return null;
}

function loadPalette(palette)
{
    let colors = palette;
    let divHeader = document.querySelectorAll("header > div > input");
    
    for (let i = 0; i < colors.length; i++) {
        divHeader[i].setAttribute("value", colors[i]);
        divHeader[i].addEventListener("input", selectColor);
    }
}

function generateGrid(rows, cols) {
    let mainDiv = document.querySelector("main");

    mainDiv.innerHTML = '';

    for (let i = 0; i < rows; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < cols; j++) {
            let cell = document.createElement("div");
            cell.classList.add("cell");
            row.appendChild(cell);
        }
        mainDiv.appendChild(row);
    }
}

window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80", "#dd6e42", "#e8dab2", "#4f6d7a", "#c0d6df", "#CC978E", "#261447", "#CCF5AC", "#D64045"]);
    
    let inputHeader = document.querySelectorAll("header > div > input");
    let mainDivs = document.querySelectorAll("main > div > div");

    
    for (let i = 0; i< inputHeader.length; i++){
        inputHeader[i].addEventListener("input", ()=>{
            let colorInput = inputHeader[i].value;
            console.log(colorInput);
            sessionStorage.setItem("selectedColor", colorInput);
            
            mainDivs.forEach(function(div){
                div.addEventListener("click", ()=>{
                    if (colorInput){
                        if (div.style.backgroundColor){
                            div.style.backgroundColor = "";
                        } else {
                            div.style.backgroundColor = colorInput;
                        }
                    }
                })    
            })        
            
        })
    }
    
    // let gridRows = document.getElementById("gridRows");
    // let gridColumns = document.getElementById("gridColumns");
    // let rows = document.createElement("div")
    
    // gridRows.addEventListener("input", ()=>{
    //     let rows = parseInt(gridRows.value);
    //     let cols = parseInt(gridColumns.value);
    //     generateGrid(rows, cols);
    // });
    
    // gridColumns.addEventListener("input", function() {
    //     let rows = parseInt(gridRows.value);
    //     let cols = parseInt(gridColumns.value);
    //     generateGrid(rows, cols);
    // });
});