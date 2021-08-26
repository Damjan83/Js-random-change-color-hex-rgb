let buttonElement = document.querySelector('.colorClick');

buttonElement.addEventListener('click', changeColor);

function changeColor(){
    //Rgb color 
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);

    let rgb = `rgb(${red}, ${green}, ${blue})`;
    document.querySelector('#rgbColor').innerText = rgb;
    //Hex color
    /*
     const rc1 = Math.random() * 16777215;
     const rc2 = Math.floor(rc1);
     const rc3 = rc2.toString(16)
     */
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
     document.body.style.backgroundColor = "#" + randomColor;
     hexColor.innerHTML = "#" + randomColor;
    };
  

   