

// function to take value from select and loop to create more labels and 
function createEntry (){
    let numberOfDrinks = document.querySelector('#typesOfDrink').value
    
    for (let i = 0; i < numberOfDrinks; i ++) {
        // creating the div
        const div = document.createElement("div");
        div.classList.add(`alcohol-type${i+1}`)
        document.body.appendChild(div)
        // Creating the Alcohol Percentage Input and Label
        const abvLabel = document.createElement("label");
        abvLabel.innerHTML = 'Alcohol Percentage'
        div.appendChild(abvLabel);
        const abvInput = document.createElement("input");
        abvInput.type = 'text'
        abvInput.id = `abvInput${i+1}`
        div.appendChild(abvInput);
// Creating the volume Input and Label
        const volumeLabel = document.createElement("label");
        volumeLabel.innerHTML = 'Volume (in ml)'
        div.appendChild(volumeLabel);
        const volumeInput = document.createElement("input");
        volumeInput.type = 'text'
        volumeInput.id = `volumeInput${i+1}`
        div.appendChild(volumeInput);
// Creating the quantity of drinks Input and Label
    const quantityLabel = document.createElement("label");
    quantityLabel.innerHTML = 'Number of Drinks'
    div.appendChild(quantityLabel);
    const quantityInput = document.createElement("input");
    quantityInput.type = 'text'
    quantityInput.id = `quantityInput${i+1}`
    div.appendChild(quantityInput);
    }
    let drinkButton = document.createElement('button')
    drinkButton.innerHTML = 'Submit'
    drinkButton.id = 'alcoholCalculationButton'
    document.body.appendChild(drinkButton)
    document.getElementById("alcoholCalculationButton").addEventListener("click", alcohol)
    // making the button only clickable once
    document.getElementById("typeOfDrink__Button").disabled = true;
    }

    // document.getElementById("demo").id = "newid"; 

// function to take values and calculate volume then display result
function alcohol() {
    let finalResult = 0
    let abv1 = parseInt(document.querySelector("#abvInput1").value)/100
    let volume1 = parseInt(document.querySelector("#volumeInput1").value)
    let number1 = parseInt(document.querySelector("#quantityInput1").value)
// trying to get the code to run if the elements are on the page and not throw an error if they're not 
    if (document.querySelector('#typesOfDrink').value == 1) {
        finalResult = ((abv1*volume1)*number1)  
    }
    else if (document.querySelector('#typesOfDrink').value == 2) {
        let abv2 = parseInt(document.querySelector("#abvInput2").value)/100
        let volume2 = parseInt(document.querySelector("#volumeInput2").value)
        let number2 = parseInt(document.querySelector("#quantityInput2").value)
        firstResult = ((abv1*volume1)*number1) 
        let secondResult = ((abv2*volume2)*number2)
        finalResult = secondResult + firstResult 
    }
    else if (document.querySelector('#typesOfDrink').value == 3){
        let abv2 = parseInt(document.querySelector("#abvInput2").value)/100
        let volume2 = parseInt(document.querySelector("#volumeInput2").value)
        let number2 = parseInt(document.querySelector("#quantityInput2").value)
        let abv3 = parseInt(document.querySelector("#abvInput3").value)/100
        let volume3 = parseInt(document.querySelector("#volumeInput3").value)
        let number3 = parseInt(document.querySelector("#quantityInput3").value)
        firstResult = ((abv1*volume1)*number1) 
        let secondResult = ((abv2*volume2)*number2)
        let thirdResult = ((abv3*volume3)*number3)
        finalResult = secondResult + firstResult + thirdResult 
    }
    else if (document.querySelector('#typesOfDrink').value == 4){
        let abv2 = parseInt(document.querySelector("#abvInput2").value)/100
        let volume2 = parseInt(document.querySelector("#volumeInput2").value)
        let number2 = parseInt(document.querySelector("#quantityInput2").value)
        let abv3 = parseInt(document.querySelector("#abvInput3").value)/100
        let volume3 = parseInt(document.querySelector("#volumeInput3").value)
        let number3 = parseInt(document.querySelector("#quantityInput3").value)
        let abv4 = parseInt(document.querySelector("#abvInput4").value)/100
        let volume4 = parseInt(document.querySelector("#volumeInput4").value)
        let number4 = parseInt(document.querySelector("#quantityInput4").value)
        firstResult = ((abv1*volume1)*number1) 
        let secondResult = ((abv2*volume2)*number2)
        let thirdResult = ((abv3*volume3)*number3)
        let fourthResult = ((abv4*volume4)*number4)
        finalResult = secondResult + firstResult + thirdResult +fourthResult
    }
    // Displaying the results, and giving the user context as to how much they drank
    console.log(finalResult)
    let context = `This is equivalent to ${(Math.round(finalResult/17.75*10))/10} beers (355ml/5%) and ${(Math.round(finalResult/90*10))/10} bottle(s) of wine (750ml/12%)`
    console.log(context)

    const resultsDiv = document.createElement("div");
    resultsDiv.classList.add(`results`)
    document.body.appendChild(resultsDiv)

    const resulth3 = document.createElement('h3')
    resulth3.innerText = finalResult
    resultsDiv.appendChild(resulth3)

    const contextp = document.createElement('p')
    contextp.innerText = context
    resultsDiv.appendChild(contextp)







}


document.querySelector("#typeOfDrink__Button").addEventListener("click", createEntry)


