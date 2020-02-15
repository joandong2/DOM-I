let firstITR = 0;
let secondITR = 0;
let limit = 10;
let divisible = 1;

const startButton = document.getElementById('start');
const resetButton = document.getElementById('reset');
const digits = document.querySelectorAll('.digits');

resetButton.onclick = () => {

    document.getElementById('secondTens').textContent = 0;
    document.getElementById('secondOnes').textContent = 0;
    document.getElementById('msHundreds').textContent = 0;
    document.getElementById('msTens').textContent = 0;
    firstITR = 0;
    secondITR = 0;
    divisible = 1;

    startButton.disabled = false;

    digits.forEach((item) => {
        item.style.color = 'black';
    });
}

startButton.onclick = () => {

    startButton.disabled = true;

    const interval = setInterval(() => {
        
        document.getElementById('msTens').textContent = firstITR;
        document.getElementById('msHundreds').textContent = secondITR;
        
        firstITR++;
    
        if (secondITR*10 === limit) {
            clearInterval(interval);
            digits.forEach((item) => {
                item.style.color = '#d21b1b';
            });
        }
        
        if (firstITR/10 == 1) {
            firstITR = 0;
            secondITR = divisible;
            divisible++;
        }
    }, 1000);
}