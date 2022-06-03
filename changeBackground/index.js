/**
 * @project Requirements: Change background by clicking a button
 * 
 * Steps: 
 * 1) Create Oneload handeler
 * 2) RGB color generator function
 * 3) Collect all necessary referances 
 * 4) Handle the click event
**/

// Step 1: Create Oneload handeler
 
window.onload = () => {

    main()
}

function main(){

    // Step 3: Collect all necessary referances
    let main = document.getElementById('main')
    let changeBtn = document.getElementById('change-bg')

    changeBg(main, changeBtn)
}


// Step 2: RGB color generator function

function generateColor(){

    let red, green, blue

    red = Math.floor(Math.random() * 255 + 1)

    green = Math.floor(Math.random() * 255 + 1)

    blue = Math.floor(Math.random() * 255 + 1)

    return `rgb(${red}, ${green}, ${blue})`

}

function changeBg(container, selector){
    
    // Change background by clicking button

    selector.addEventListener('click', (e) => {
        container.style.background = generateColor()
    })

    // Change background by entering space button
    window.addEventListener('keypress', (e) => {
        if(e.key === ' '){
            container.style.background = generateColor()
        }
    })

}