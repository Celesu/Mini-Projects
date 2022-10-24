// import {putHistory, renderHistory} from "storage.js";

console.log("Selamat Anda berhasil menggunakan JavaScript pada Website");

alert("Selamat Datang!")
alert("Aku adalah Calc, yang merupakan kalkulator dasar yang dikembangkan oleh Reza!\nSelamat mencoba~ :D")
// const firstName = prompt("What's your first name?");
// const lastName = prompt("Then, what's your last name?");
// const language = prompt("What language do you speak?");
 
// const user = {
//    name: {
//        first: firstName,
//        last: lastName,
//    },
//    language: language
// };
 
// if (user.language === "English") {
//    alert("Nice to meet you " + user.name.first + " " + user.name.last + "!");
// } else if (user.language === "French") {
//    alert("Ravi de vous rencontrer " + user.name.first + " " + user.name.last + "!");
// } else if (user.language === "Japan") {
//    alert("Hajimemashite, " + user.name.first + " " + user.name.last + "-san!");
// } else {
//    alert("Senang bertemu dengan Anda " + user.name.first + " " + user.name.last + "!");
// }

const calculator = {
    displayNumber: '0',
    operator: null,
    firstNumber: null,
    isWaitForSecondNumber: false,
    calculated: false,
};

function updateDisplay() {
    document.querySelector('#displayNumber').innerText = calculator.displayNumber;
}

function clearCalculator() {
  calculator.displayNumber = '0';
  calculator.operator = null;
  calculator.firstNumber = null;
  calculator.isWaitForSecondNumber = false;
  calculator.calculated = false;
}

function updateOperator(operator = calculator.operator) {
    document.querySelector('#operator').innerText = operator;
}


function inputDigit(digit) {
    if (calculator.displayNumber === '0') {
      calculator.displayNumber = digit;
    } else if (calculator.calculated == true) {
      calculator.displayNumber = digit;
      calculator.firstNumber = calculator.displayNumber;
      calculator.calculated = false;
    } else {
      calculator.displayNumber += digit;
    }
}
   
function inverseNumber() {
    if (calculator.displayNumber === '0') {
      return;
    }
    calculator.displayNumber = calculator.displayNumber * -1;
}

function handleOperator(operator) {
    if (!calculator.isWaitForSecondNumber) {
      calculator.operator = operator;
      calculator.firstNumber = calculator.displayNumber;
   
      
    } else {
      // alert('Operator sudah ditetapkan');
      calculator.operator = operator;
    }
    calculator.isWaitForSecondNumber = true;
    // mengatur ulang nilai display number supaya tombol selanjutnya dimulai dari angka pertama lagi
    calculator.displayNumber = '0';
    updateDisplay()
    updateOperator()
}



function performCalculation() {
  if (calculator.firstNumber == null || calculator.operator == null) {
      alert("Anda belum menetapkan operator");
      return;
  }

  let result = 0;
  if (calculator.operator === "+") {
      result = parseInt(calculator.firstNumber) + parseInt(calculator.displayNumber);
  } else {
      result = parseInt(calculator.firstNumber) - parseInt(calculator.displayNumber)
  }

  // objek yang akan dikirimkan sebagai argumen fungsi putHistory()
  const history = {
      firstNumber: calculator.firstNumber,
      secondNumber: calculator.displayNumber,
      operator: calculator.operator,
      result: result
  }
  putHistory(history);
  calculator.displayNumber = result;
  renderHistory();

  calculator.firstNumber = result;
  // calculator.isWaitForSecondNumber = false;
  calculator.operator = null;
  calculator.calculated = true;
  updateOperator('');
}


// MASIH BAYAK KEKURANGAN, BISA DIKEMBANGKAN LAGI!

const buttons = document.querySelectorAll('.button');

for (const button of buttons) {

    button.addEventListener('click', function(event) {
      // mendapatkan objek elemen yang diklik
      const target = event.target;
   
      if (target.classList.contains('clear')) {
        clearCalculator();
        updateDisplay();
        updateOperator();
        return;
      }
  
      if (target.classList.contains('negative')) {
        inverseNumber();
        updateDisplay();
        return;
      }
   
      if (target.classList.contains('equals')) {
        performCalculation();
        updateDisplay();
        return;
      }
   
      if (target.classList.contains('operator')) {
        handleOperator(target.innerText);
        return;
      }
      
      inputDigit(target.innerText);
      updateDisplay();
    });
}

const clearHistoryButton = document.querySelector('.buttonRiwayat');
clearHistoryButton.addEventListener('click', function(event) {
  clearHistory();
});
    