var h3 = document.querySelector('h3');
var h4 = document.querySelector('h4');
var cl1 = document.querySelector('.color1');
var cl2 = document.querySelector('.color2');
var body = document.getElementById('bg')
// console.log(body);

function setbg(){
    body.style.background = "linear-gradient(to right, " + cl1.value + ", " + cl2.value + ")";
    h3.innerHTML = "HexaCode = " + cl1.value + cl2.value

    h4.textContent = body.style.background;
}


cl1.addEventListener('input', setbg);

cl2.addEventListener('input', setbg);

