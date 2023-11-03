
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
    let divHeader = document.querySelectorAll("header > div");
    
    for (let i = 0; i < colors.length; i++) {
        divHeader[i].style.backgroundColor = colors[i];
    }
}


window.addEventListener("DOMContentLoaded", function(){
    loadPalette(["#22f6f3", "#3daf7e", "#ffffff", "#ec8236", "#a9a7ee", "#ecc606", "#f783f2", "#e89e80"]);

    addEventListener("click", ()=>{
        let divHeader = document.querySelectorAll("header > div");
        for (let i = 0; i< divHeader.length; i++){
            selectColor(event);
            console.log(getSelectedColor());
        }
    })

    let mainDiv =document.querySelectorAll("main div").foreach(function(div){
        mainDiv.addEventListener("click", ()=>{
            let color = getSelectedColor(); 
            if (color){
                div.style.backgroundColor = color;
            }
        })    
    })
    

});