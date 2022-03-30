let numbers = []
let input = ""
let output = ""
let equal
let numberOutput = ""
let numberOfClicks = 0

let darkMode = 1

let inputElement = document.getElementById("input")
let outputElement = document.getElementById("output")


function addElementToInput(button)
{
    if (numberOfClicks == 0)
    {
        outputElement.style.backgroundColor = "rgba(134, 133, 133, 0.178)"
        input = ""
        output = ""
    }
    numberOfClicks += 1
    let value = button.getAttribute("data-value")
    input = input + value
    output = output + value
    inputElement.innerHTML = output
    numberOutput = numberOutput + value
    outputElement.innerHTML = numberOutput
}

function operator(button)
{
    outputElement.style.backgroundColor = "rgba(134, 133, 133, 0.178)"
    numberOfClicks += 1
    let op = button.getAttribute("data-value")
    if (numberOfClicks > 0)
    {
        numbers.push(parseInt(input))
    }
    else
    {
        outputElement.style.backgroundColor = "rgba(134, 133, 133, 0.178)"
        output += "0"
    }
    input = op
    output = output + op
    inputElement.innerHTML = output
    numberOutput = ""
}

function equals()
{
    outputElement.style.backgroundColor = "rgba(30, 231, 30, 0.3)"
    if (numberOfClicks != 0)
    {
        equal = Function("return "+ output)()
        outputElement.innerHTML = equal
        numbers = []
        input = ""
        output = ""
        equal = 0
        numberOutput = ""
        numberOfClicks = 0
    }
}

function back()
{
    outputElement.style.backgroundColor = "rgba(134, 133, 133, 0.178)"
    if (numberOfClicks != 0)
    {
        let newInput = input.slice(0, -1)
        console.log(newInput)
        input = newInput
        let newNumberOutput = numberOutput.slice(0,-1)
        console.log(newNumberOutput)
        numberOutput = newNumberOutput
        let newOutput = output.slice(0, -1)
        console.log(newOutput)
        output = newOutput
        
        if (output.length == 0)
        {
            inputElement.innerHTML = "0"
        }
        else
        {
            inputElement.innerHTML = output
        }

        if (numberOutput.length == 0)
        {
            outputElement.innerHTML = "0"
        }
        else
        {
            outputElement.innerHTML = numberOutput
        }
    }
}

function log(x, y) 
{
    return (Math.round(Math.log(y) / Math.log(x) * 1e6) / 1e6);
}

function logWrite()
{
    outputElement.style.backgroundColor = "rgba(134, 133, 133, 0.178)"
    if (numberOfClicks == 0)
    {
        output = "log"
        input = "log"
    }
    else
    {
        output += "log"
        input += "log"
    }
    numberOfClicks += 1
    inputElement.innerHTML = output
    outputElement.innerHTML = input
}

function stylesheeetChange()
{
    if (darkMode)
    {
        document.getElementById("dark-mode").rel = 'stylesheet alternate';
        document.getElementById("blue-mode").rel = 'stylesheet';
        darkMode = 0
    }
    else
    {
        document.getElementById("blue-mode").rel = 'stylesheet alternate';
        document.getElementById("dark-mode").rel = 'stylesheet';
        darkMode = 1
    }

}

function reset()
{
    outputElement.style.backgroundColor = "rgba(134, 133, 133, 0.178)"
    numbers = []
    input = "0"
    output = "0"
    equal = 0
    numberOutput = ""
    numberOfClicks = 0
    inputElement.innerHTML = output
    outputElement.innerHTML = input
}