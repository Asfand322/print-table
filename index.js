function print1() {
    let a = +document.getElementById('num1').value; 
    for (let i=1 ; i<=10 ; i++) {
        document.querySelector("#result").innerHTML += `${a} X ${i} = ${a * i}`;
    }
}