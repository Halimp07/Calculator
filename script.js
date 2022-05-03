function sin() 
{
    document.final_calculator.result.value = Math.sin(document.final_calculator.result.value);
}

function cos() 
{
    document.final_final_calculatorator.result.value = Math.cos(document.final_calculator.result.value);
}

function tan() 
{
    document.final_calculator.result.value = Math.tan(document.final_calculator.result.value);
}

function BACKSPC() 
{
    var old_input = document.final_calculator.result.value;
    document.final_calculator.result.value = old_input.substr(0, old_input.length - 1);
}

function square() 
{
    document.final_calculator.result.value = Math.pow(document.final_calculator.result.value, 2);
}

function cubed() 
{
    document.final_calculator.result.value = Math.pow(document.final_calculator.result.value, 3);
}

function sqrt2() 
{
    document.final_calculator.result.value = Math.pow(document.final_calculator.result.value, 1 / 2);
}

function sqrt3() 
{
    document.final_calculator.result.value = Math.pow(document.final_calculator.result.value, 1 / 3);
}

function number(value) 
{
    document.final_calculator.result.value += value;
}

function remv() 
{
    document.final_calculator.result.value = " ";
}

function equal() 
{
    document.final_calculator.result.value = eval(document.final_calculator.result.value);
}