function sum(){
    let n1 = document.getElementById("n1").value;
    let n2 = document.getElementById("n2").value;

    if(n1 === '' || n2 === ''){
        showError();
    }else{
        let res = n1 + n2;
        let result = n1 + " + " + n2 + " = " + res;
        document.getElementById("result").innerHTML = result; 
    }
}

function showError(){
    document.getElementById("result").innerHTML = "Empty fields/ Enter a number"
} 