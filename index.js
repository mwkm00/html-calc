let numbers = []
let input = ""
let output = ""
let equal
let numberOutput = ""
let numberOfClicks = 0

let inputElement = document.getElementById("input")
let outputElement = document.getElementById("output")

function addElementToInput(button)
{
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
    let op = button.getAttribute("data-value")
    if (numberOfClicks > 0)
    {
        numbers.push(parseInt(input))
    }
    else
    {
        output += "0"
    }
    input = op
    output = output + op
    inputElement.innerHTML = output
    numberOutput = ""
}

function equals()
{
    if (numberOfClicks != 0)
    {
        equal = Function("return "+ output)()
        outputElement.innerHTML = equal
        pressedEquals = True
        outputElement.style.backgroundColor = "green"
        numberOutput = ""
        input = ""
        output = ""
        equal = 0
        numbers = []
        numberOfClicks = 0
    }
}

function back()
{
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
    return Math.log(y) / Math.log(x);
}

function logWrite()
{
    output += "log"
    input += "log"
    inputElement.innerHTML = output
    outputElement.innerHTML = input
}