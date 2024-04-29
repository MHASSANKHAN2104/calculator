const display=document.getElementById('display');

function fun(input)
{
    display.value+=input;
}

function clearDisplay()
{
    display.value="";
}

function calculate()
{
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="ERROR";
    }
}



document.addEventListener('keydown',(event)=>
{
    const key=event.key;
if(/[0-9\.+\-*/]/.test(key))
{
    fun(key);
}
else if(key==='Enter'){
    calculate();
}
else if(key==='Backspace')
{
    clearDisplay();
}
});