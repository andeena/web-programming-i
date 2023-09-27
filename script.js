// function insert(num){
//     document.form.textarea.value = document.form.textarea.value + num;
// }

// function equal(){
//     var hasil = document.form.textarea.value;
//     document.form.textarea.value = eval(hasil);
// }

// function clear(){
//     document.form.textarea.value = '0';
// }

let currentExpression = '';

function addNumber(num) {
    currentExpression += num;
    document.getElementById('display').value = currentExpression;
}

function addOperator(operator) {
    currentExpression += operator;
    document.getElementById('display').value = currentExpression;
}

function clearDisplay() {
    currentExpression = '';
    document.getElementById('display').value = '';
}

function result() {
    try {
        const result = eval(currentExpression);
        document.getElementById('display').value = result;
        currentExpression = String(result);
    } catch (error) {
        document.getElementById('display').value = 'Error';
        currentExpression = '';
    }
}



