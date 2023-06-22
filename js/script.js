var inputVal = document.getElementById('degree-input');
var outputVal = document.getElementById('output');
var unitInput = document.getElementById('unit-input')
var unitOutput = document.getElementById('unit-output')


const celcius = {scale : 5, titikBeku : 0}
const reamur = {scale : 4, titikBeku : 0}
const kelvin = {scale :5, titikBeku : 273.15}
const fahrenheit = {scale :9, titikBeku : 32}

function InputConversion(){
    var input = unitInput.value
    
    switch (input){
        case 'F':
            return fahrenheit
        case 'C':
            return celcius
        case 'K':
            return kelvin
        case 'R':
            return reamur
    }
}

function OutputConversion(){
    var output = unitOutput.value
    
    switch (output){
        case 'F':
            return fahrenheit
        case 'C':
            return celcius
        case 'K':
            return kelvin
        case 'R':
            return reamur
    }
}

function Convert(){
    var resultElement = document.getElementById("output");
    var input = InputConversion()
    var output = OutputConversion()
    var ratio = output.scale/input.scale

    var Explanation = document.getElementById('Explanation')
    while (Explanation.firstChild) {
        Explanation.removeChild(Explanation.firstChild);
    }
    
    let res = 0
    if(isNaN(inputVal.value)){
        resultElement.innerText = "Input tidak valid";
    }
    else{
        res = ((inputVal.value - input.titikBeku) * ratio + output.titikBeku).toFixed(2)
        resultElement.innerText = res

        Explanation = document.getElementById('Explanation')
        
        var line = document.createElement('hr')
        var br = document.createElement('br')
        var Header = document.createElement('h2')
        var paragraph1 = document.createElement('p')
        var paragraph2 = document.createElement('pre')

        var headerContent = "How to convert:\n"
        var text = document.createTextNode(headerContent)
        Header.appendChild(text)

        var paragraphContent = "Suhu " + 
                            unitOutput.value + 
                            " dikurangi dengan titik bekunya sama dengan nilai suhu " 
                            + unitInput.value + " dikurangi dengan titik bekunya, kemudian dikali dengan "  
                            + ratio + "\n"
        var text = document.createTextNode(paragraphContent)
        paragraph1.appendChild(text)
        
        paragraphContent = "Kalkulasi : \n" + unitOutput.value + " - " + output.titikBeku + " = (" + unitInput.value + " - " + input.titikBeku + ")" + " x " + ratio.toFixed(2) +"\n" 
        paragraphContent += unitOutput.value + " - " + output.titikBeku + " = (" + inputVal.value + " - " + input.titikBeku + ")" + " x " + ratio.toFixed(2) +"\n" 
        paragraphContent += unitOutput.value + " - " + output.titikBeku + " = " + (res + output.titikBeku) +"\n" 
        paragraphContent += unitOutput.value + " = " + res
        var text = document.createTextNode(paragraphContent)
        paragraph2.appendChild(text)

        Explanation.appendChild(Header)
        Explanation.appendChild(line)
        Explanation.appendChild(paragraph1)
        Explanation.appendChild(paragraph2)
    }
}


function clearInput(){
    inputVal.value = ""
    unitInput.selectedIndex = -1
    unitOutput.selectedIndex = -1
    outputVal.value = ""
    var Explanation = document.getElementById('Explanation')
    while (Explanation.firstChild) {
        Explanation.removeChild(Explanation.firstChild);
    }
}

function reverse(){
    while (Explanation.firstChild) {
        Explanation.removeChild(Explanation.firstChild);
    }
    inputVal.value = outputVal.value
    // outputVal.value = ""

    var tempUnit = unitInput.value
    unitInput.value = unitOutput.value
    unitOutput.value = tempUnit

    Convert()

}