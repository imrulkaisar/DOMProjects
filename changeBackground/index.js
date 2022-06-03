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

    changeBg(main, changeBtn)

}


// Step 2: RGB color generator function

function generateHEXColor(){

    let red, green, blue

    red = Math.floor(Math.random() * 255 + 1)

    green = Math.floor(Math.random() * 255 + 1)

    blue = Math.floor(Math.random() * 255 + 1)

    return '#' + red.toString(16) + green.toString(16) + blue.toString(16)

}

// RGB to HEX converter function

function hextoRgb(hex){
    hex = hex.slice(1,6)
    let red, green, blue
    red = '0x' + hex.charAt(0) + hex.charAt(1)
    green = '0x' + hex.charAt(2) + hex.charAt(3)
    blue = '0x' + hex.charAt(4) + hex.charAt(5)

    return `rgb(${red.toString(10)}, ${green.toString(10)}, ${blue.toString(10)})`
}

function changeBg(container, selector){
    
    // Change background by clicking button

    selector.addEventListener('click', (e) => {
        container.style.background = generateHEXColor()
    })

    // Change background by entering space button
    window.addEventListener('keypress', (e) => {
        if(e.key === ' '){
            container.style.background = generateHEXColor()
        }
    })

}

function printResult(hex, rgb){
    let hexColor = generateHEXColor()
    hex.innHTML = `HEX CODE: ${hexColor}`
    let rgbColor = rgbToHex(hexColor)
    rgb.innerHTML = `HEX CODE: ${rgbColor}`
}
