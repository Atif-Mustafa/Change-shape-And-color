let color = document.getElementById('color');
let shape = document.getElementById('square')
let changeColorButton = document.getElementById('changeColorButton')
let changeShapeButton = document.getElementById('changeShapeButton')


//Color Change Code
changeColorButton.addEventListener('click', function(){
    color.style.backgroundColor = "#"+randomColor();
})


function randomColor(){
    let letters = "0123456789ABCDEF"
    let colorCode = "";

    for(let i = 0 ;i< 6; i++){
        let randomNumber = Math.floor(Math.random()*letters.length);
        colorCode += letters.substring(randomNumber,
            randomNumber + 1);
        
    }
    
    return colorCode;
}


//Shape Change Code
changeShapeButton.addEventListener('click',
  changeShape
)


let arr = ["square", "round", "diamond", "triangle", "arrow", "frame", "star","cross", "left-point", "right-point", "parallal", "cheg"]
function randomShape(){
    let idx = Math.floor(Math.random()*arr.length);
    return arr[idx];
}

function changeShape(){
    let idName = randomShape();
    console.log(idName)
    shape.id = idName;
}
