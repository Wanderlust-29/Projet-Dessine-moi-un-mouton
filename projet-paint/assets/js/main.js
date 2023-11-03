
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
        divHeader[i].value = colors[i];
    }
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80", "#dd6e42", "#e8dab2", "#4f6d7a", "#c0d6df", "#CC978E", "#261447", "#CCF5AC", "#D64045"]);
    
    let divHeader = document.querySelectorAll("header > div > input");
    let mainDivs = document.querySelectorAll("main > div > div");
    
    
    addEventListener("click", ()=>{
        for (let i = 0; i< divHeader.length; i++){
            selectColor(event);
            console.log(getSelectedColor());
        }
    })

    mainDivs.forEach(function(div){
        div.addEventListener("click", ()=>{
            let color = getSelectedColor(); 
            if (color){
                if (div.style.backgroundColor){
                    div.style.backgroundColor = "";
                } else {
                    div.style.backgroundColor = color;
                }
            }
        })    
    })
    

});