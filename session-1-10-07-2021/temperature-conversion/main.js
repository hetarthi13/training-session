window.addEventListener("load",function(){
    document.getElementById("c").addEventListener("click",function(){
        const num1 = document.getElementById("num1").value;    
        cTof(num1);
    })
    document.getElementById("f").addEventListener("click",function(){
        const num1 = document.getElementById("num1").value;
        fToc(num1);
    })
    function cTof(celsius) {
        const cTemp = celsius;
        const cToFahr = cTemp * 9 / 5 + 32;
        const message = `${cTemp}\xB0C is ${cToFahr} \xB0F.`;
        document.getElementById("res").innerText = message;
    }
    function fToc(fahrenheit) {
        const fTemp = fahrenheit;
        const fToCel = (fTemp - 32) * 5 / 9;
        const message = `${fTemp}\xB0F is ${fToCel}\xB0C.`;
        document.getElementById("res").innerText = message;
    } 
})