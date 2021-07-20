window.addEventListener("load",function(){
    document.getElementById("m").addEventListener("click",function(){
        const num1 = document.getElementById("num1").value;    
        const num2 = document.getElementById("num2").value;    
        multiply(num1,num2);
    })
    document.getElementById("d").addEventListener("click",function(){
        const num1 = document.getElementById("num1").value;
        const num2 = document.getElementById("num2").value;    
        divide(num1,num2);
    })
    function multiply(x,y) {
        document.getElementById("res").innerText = x*y;
    }
    function divide(x,y) {
        document.getElementById("res").innerText = x/y;
    }
})