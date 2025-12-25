// program
const display = document.getElementById("display");

function appendtodisplay(input){
display.value+=input;
}
function cleardisplay(){
display.value=""
}
function calculate(){
    try{
display.value=eval(display.value)
    }
    catch(error){
        display.value="error"
    }
}
function backspace() {
    display.value = display.value.slice(0,-1);
}

// keyboard addition here 
document.addEventListener("keydown", function (event) {
    const key = event.key;
    if (!isNaN(key)) {
        appendtodisplay(key);
    } 
    else if ("+-*/.".includes(key)) {
        appendtodisplay(key);
    } 
    else if (key === "Enter") {
        event.preventDefault();
        calculate();
    } 
    else if (key === "Backspace") {
        backspace();
    } 
    else if (key === "Escape") {
        cleardisplay();
    }
});