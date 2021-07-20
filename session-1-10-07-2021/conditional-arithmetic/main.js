window.addEventListener("load",function(){
    document.getElementById("submit").addEventListener("click",function(){
        const num1 = document.getElementById("num1").value;
        const num2 = document.getElementById("num2").value;            
        document.getElementById("res").innerText = sumMul(num1,num2);
    })
    function sumMul(x,y){
        if(x==y){
            return 3*(~~x+~~y);
        }
        else{
            return (~~x+~~y);
        }
    }
})