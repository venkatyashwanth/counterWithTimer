let numericalItemEl = document.getElementById('numericalItem');
let romanNumeralEl = document.getElementById('romanNumeral');
let startPointEl = document.getElementById('startPoint');
console.log(startPointEl.value);

function onIncrement(){
    let prevValue = numericalItemEl.textContent;
    if (startPointEl.value !== ''){
        prevValue = startPointEl.value;
    }
    let num = parseInt(prevValue);
    let updatedVal = num + 1
    console.log(updatedVal)
    numericalItemEl.textContent = updatedVal;
    startPointEl.value = '';
    if (updatedVal>0){
        romanNumeralEl.textContent = convertRoman(updatedVal);
    }else if(updatedVal<0){
        negValue = -1*updatedVal
        let rome = convertRoman(negValue)
        romanNumeralEl.textContent = '-'+rome;
    }else{
        romanNumeralEl.textContent = ''
    }
}

function onDecrement(){
    let prevValue = numericalItemEl.textContent;
    if (startPointEl.value !== ''){
        prevValue = startPointEl.value;
    }
    let num = parseInt(prevValue);
    let updatedVal = num - 1
    console.log(updatedVal)
    numericalItemEl.textContent = updatedVal;
    startPointEl.value = '';
    if (updatedVal>0){
        romanNumeralEl.textContent = convertRoman(updatedVal);
    }else if(updatedVal<0){
        negValue = -1*updatedVal
        let rome = convertRoman(negValue)
        romanNumeralEl.textContent = '-'+rome;
    }else{
        romanNumeralEl.textContent = ''
    }
}

function onReset(){
    let updatedVal = 0
    numericalItemEl.textContent = updatedVal;
    romanNumeralEl.textContent = '';
}


function convertRoman(n){
    let numbers= [1,4,5,9,10,40,50,90,100,400,500,900,1000]
    let romans = ['I','IV','V','IX','X','XL','L','XC','C','CD','D','CM','M']
    let i = 12
    let romanNumeral = ''
    while(n!=0){
        if(numbers[i] <=n){
            romanNumeral = romanNumeral+romans[i]
            n = n - numbers[i]
        }else{
            i = i-1 
        }
    }
    return romanNumeral
}

let hideButtonEl = document.getElementById('hideButton');

hideButtonEl.onclick= function(){
    let romanNumberEq = document.getElementById("romanNumberEq");
    romanNumberEq.classList.toggle('hideRoman');
}





let startBtnEl = document.getElementById("startBtnEl");
let clearBtnEl = document.getElementById("clearBtnEl");
let pauseBtnEl = document.getElementById('pauseBtnEl');


let timerEl = document.getElementById('timer');


startBtnEl.onclick = function(){
    startFucntion();
}

function startFucntion(){
    let countDown = parseInt(document.getElementById('timerStart').value);
    let intervalId = setInterval(function(){
        if(countDown === 1){
            timerEl.textContent = countDown+' '+'second';
        }else{
            timerEl.textContent = countDown+' '+'seconds';
        }
        
        countDown = countDown-1;
        document.getElementById('timerStart').value = '';
        if(countDown === -1){
            clearInterval(intervalId);
            timerEl.textContent = 'time up';
        }
    },1000);
    pauseBtnEl.onclick = function(){
        clearInterval(intervalId);
        document.getElementById('timerStart').value = countDown;
    }
    clearBtnEl.onclick = function(){
        timerEl.textContent = '--';
        clearInterval(intervalId);
    }
}
 

