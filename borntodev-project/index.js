window.onload = () => {
    let button = document.querySelector("#btn");
    button.addEventListener("click", calculate);
}

function calculate(){
    let degree = document.querySelector("#degree").value;
    let result = document.querySelector("#result")
    let sin = Math.sin(degree)
    let cos = Math.cos(degree)
    let tan = (sin/cos)
    result.innerHTML=`<br>Result Sin: ${sin}<br>
    <br>Result Cos: ${cos}<br>
    <br>Result Tan: ${tan}`
}