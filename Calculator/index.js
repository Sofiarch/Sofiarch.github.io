const display = document.getElementById("display")

function addToDisplay(value){
    display.value += value
    display.focus()
}

function clearDisplay(){
    display.value = ""
    display.focus()
}
function deleteLastPos(){
    const len = display.value.length
    display.value = display.value.substring(0, len-1)
    display.focus()
}

function calculate(){
    
    try {
        
        const result = eval(display.value)
        display.value = String(result)
    } catch (e) {
        display.value = "Error"
    }
    display.focus()
}


