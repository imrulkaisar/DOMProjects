/**
 * @project Requirements: Change background by clicking a button
 * 
 * Steps: 
 * 1) Create Oneload handeler
 * 2) HEX color generator function
 * 3) Collect all necessary referances 
 * 4) RGB to HEX converter function
 * 5) Handle the click event 
 * 6) Show the result
 * 7) Implement color input feature
**/

// Step 1: Create Oneload handeler
 
window.onload = () => {
    
    main()
    defaultAction()
}

function main(){

    // Step 3: Collect all necessary referances
    let main = document.getElementById('main')
    let changeBtn = document.getElementById('change-bg')
    let hexColor = document.querySelector('.hex-code')
    let rgbColor = document.querySelector('.rgb-code')

    events(main, changeBtn)

    inputFunc()

}

function defaultAction(){

    let main = document.getElementById('main')
    let color = colorGenerator()
    printResult(color)
    main.style.backgroundColor = color.rgb
    
}

// Color Generator Function
function colorGenerator(){
    let red, green, blue

    red = Math.floor(Math.random() * 255 + 1)

    green = Math.floor(Math.random() * 255 + 1)

    blue = Math.floor(Math.random() * 255 + 1)

    function makeTwoChar(value){
        let char = value.toString(16)
        return char.length === 1 ? `0${char}`:char
    }

    return {
        rgb: `rgb(${red}, ${green}, ${blue})`,
        hex: `#${makeTwoChar(red)}${makeTwoChar(green)}${makeTwoChar(blue)}`.toUpperCase()
    }
}

function printResult(color){
    
    let hex = document.querySelector('.hex-code')
    let rgb = document.querySelector('.rgb-code')
    
    hex.innerHTML = `HEX CODE: ${color.hex} <span id="copy-hex" class="copy"><img src="./src/copy.png" alt="copy" srcset=""></span>`
    rgb.innerHTML = `RGB CODE: ${color.rgb} <span id="copy-rgb" class="copy"><img src="./src/copy.png" alt="copy" srcset=""></span>`

    copyColor(hex, color.hex) 
    copyColor(rgb, color.rgb)


}

function copyColor(selector, value){
    selector.addEventListener('click', function(){
        navigator.clipboard.writeText(value)
        let result = document.querySelector('.result')
        let notic = document.getElementById('copied')
        notic.innerText = 'Code Copied'
        result.style.borderColor = '#ff0000'
        setTimeout(function(){
            notic.innerText = ''
            result.style.borderColor = '#ffffff'
        }, 1000)
    })
}

// Color code validation function
function validColor(color){
    let len = color.length
    let code = color.substring(1)
    return (color[0] === '#' && len === 7 && /^[0-9A-Fa-f]{6}$/i.test(code)) ? true : false
}

function inputColors(bg, text){
    let inpColor = document.getElementById('inpColor')
    let inputArea = document.getElementById('input-area')
    
    inpColor.style.backgroundColor = bg
    inpColor.style.color = text
}

function events(container, selector){
    
    // Change background by clicking button
    selector.addEventListener('click', (e) => {
        changeBg(e)
    })

    // Change background by entering space button
    window.addEventListener('keypress', (e) => {
        if(e.key === ' '){
            changeBg(e)
        }
    })
    
    function changeBg(e){

        let color = colorGenerator()
        container.style.background = color.rgb
        printResult(color)

        inputColors('#ffffff', '#000000')
    }
    

}


// Change background by inputing color code
function inputFunc(){

    let main = document.getElementById('main')
    let inpColor = document.getElementById('inpColor')
    let inputArea = document.getElementById('input-area')

    inputArea.addEventListener('click', function(e){
        inpColor.removeAttribute('disabled')
        inpColor.style.textTransform = 'uppercase'
    })

    inpColor.addEventListener('input', (e) => {codeChangeBg(e)})

    function codeChangeBg(e){
        let value = e.target.value
        let notice = document.getElementById('wrong-hex') 
        notice.innerText = ''

        inputColors('#ffffff', '#000000')
        
        if(!validColor(value)){
            notice.innerText = 'HEX code is not valid'
            inputColors('#ff0000','#ffffff')
        } else {
            main.style.background = value
            let valueObj = {
                hex: value.toUpperCase(),
                rgb: main.style.background
            }
            printResult(valueObj)
        }
    }


}