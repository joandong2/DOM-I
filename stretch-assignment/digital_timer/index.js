let firstITR = 0;
let secondITR = 0;
let limit = 30;
let divisible = 1;

//document.getElementById('msHundreds').textContent = 0;
//20

const interval = setInterval(function foo() {
    
    document.getElementById('msTens').textContent = firstITR;
    document.getElementById('msHundreds').textContent = secondITR;
    firstITR++;

    if (secondITR*10 === limit) {
        clearInterval(interval);
    }
    
    if (firstITR/10 == 1) {
        firstITR = 0;
        secondITR = divisible;
        divisible++;
    }
    
}, 1000);