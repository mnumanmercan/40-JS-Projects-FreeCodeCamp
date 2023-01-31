const button = document.querySelector("#btn-click");
const rgb = document.querySelector('#rgb');
button.addEventListener('click',randomColor)

function randomColor(){
    const color_r = Math.round(Math.random() * 255);
    const color_g = Math.round(Math.random() * 255);
    const color_b = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${color_r},${color_g},${color_b})`
    rgb.innerText = `rgb(${color_r}, ${color_g}, ${color_b})`
}

console.log(Math.round(Math.random() * 255))

