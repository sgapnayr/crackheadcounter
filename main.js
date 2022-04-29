/* Displays */
let display = document.getElementById('display-div')
let saveDisplay = document.getElementById('save-div')
const storedInput = localStorage.getItem('count') || 0
display.innerText = storedInput
saveDisplay.innerText = `CrackHead Count: ${storedInput}`

/* Buttons */
const increaseBtn = document.getElementById('increase')
const decreaseBtn = document.getElementById('decrease')
const saveBtn = document.getElementById('save')
const resetBtn = document.getElementById('reset')

/* Variables */
let count = localStorage.getItem('count') || 0

/* Local Storage */
const saveToLocalStorage = () => {
    localStorage.setItem('count', count)
}

/* Event Listeners */
increaseBtn.addEventListener('click', () => {
    count++
    display.innerText = count
})
decreaseBtn.addEventListener('click', () => {
    if (count > 0) {
        count--
    } else {
        return NaN
    }
    display.innerText = count
})
saveBtn.addEventListener('click', saveToLocalStorage => {
    localStorage.setItem('count', count)
    saveDisplay.innerText = `CrackHead Count: ${count}`
})
resetBtn.addEventListener('click', () => {
    count = 0
    localStorage.clear()
    display.innerText = count
    saveDisplay.innerText = `CrackHead Count: ${count}`
})
