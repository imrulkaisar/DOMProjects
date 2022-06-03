/**
 * @project Requirements: Change background by clicking a button
 * 
 * Steps: 
 * 1) Create Oneload handeler
 * 2) RGB color generator function
 * 3) Collect all necessary referances 
 * 4) RGB to HEX converter function
 * 5) Handle the click event 
 * 6) Show the result
**/

// Step 1: Create Oneload handeler
 
window.onload = () => {

    main()
}

function main(){

    // Step 3: Collect all necessary referances
    let main = document.getElementById('main')
    let changeBtn = document.getElementById('change-bg')
    let hexColor = document.querySelector('.hex-code')
    let rgbColor = document.querySelector('.rgb-code')

    events(main, changeBtn)

}


// Step 2: RGB color generator function

function generateHEXColor(){

    let red, green, blue, color

    red = Math.floor(Math.random() * 255 + 1)

    green = Math.floor(Math.random() * 255 + 1)

    blue = Math.floor(Math.random() * 255 + 1)

    color = '#' + red.toString(16) + green.toString(16) + blue.toString(16)

    return color

}

function printResult(color){
    
    let hex = document.querySelector('.hex-code')
    let rgb = document.querySelector('.rgb-code')
    let rgbColor = document.getElementById('main').style.backgroundColor

    hex.innerHTML = `HEX CODE: ${color}`
    rgb.innerHTML = `RGB CODE: ${rgbColor}`

}

function events(container, selector){
    
    // Change background by clicking button
    selector.addEventListener('click', (e) => {
        let color = generateHEXColor().toUpperCase()
        container.style.background = color
        printResult(color)
    })

    // Change background by entering space button
    window.addEventListener('keypress', (e) => {
        if(e.key === ' '){
            let color = generateHEXColor().toUpperCase()
            container.style.background = color
            printResult(color)
        }
    })

}
