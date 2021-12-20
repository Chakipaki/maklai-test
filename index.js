const inputsEl = document.querySelectorAll('[data-input-number]');
const selectOperationEl = document.querySelector('[data-select-operation]');
const calculationResult = document.querySelector('[data-calculation-result]');
const resetEl = document.querySelector('[data-reset-calculation]');

const addAction = (num1, num2) => {
    return num1 + num2;
}

const minusAction = (num1, num2) => {
    return num1 - num2;
}

const dilAction = (num1, num2) => {
    return num1 / num2;
}

const mnoAction = (num1, num2) => {
    return num1 * num2;
}

const resetCalculation = () => {
    selectOperationEl.value = 'default';
    inputsEl[0].value = '';
    inputsEl[1].value = '';
    calculationResult.textContent = '';
}

const isEntered = () => {
    return !(inputsEl[0].value === '' || inputsEl[1].value === '');
}

const calculate = (type) => {
    if (!isEntered()) {
        alert('Enter number');
        selectOperationEl.value = 'default';
        return false;
    }
    switch (type) {
        case '+':
            return addAction;
        case '-':
            return minusAction;
        case '/':
            return dilAction;
        case '*':
            return mnoAction;
        default:
            return false;
    }
}

selectOperationEl.addEventListener('change', (e) => {
    const calculateAction = calculate(e.target.value);
    const firstNum = inputsEl[0].value;
    const secondNum = inputsEl[1].value;
    if (calculateAction) {
        const result = calculateAction(+firstNum, +secondNum);
        calculationResult.textContent =`${firstNum} ${e.target.value} ${secondNum} = ${result}`;
        selectOperationEl.value = 'default';
        inputsEl[0].value = '';
        inputsEl[1].value = '';
    }
})

resetEl.addEventListener('click', resetCalculation)
