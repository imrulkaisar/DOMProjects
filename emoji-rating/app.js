/**
 * Project Name: Emoji Rating
 * @author Imrul Kaisar
 * Date: Jun 21, 2022
 */


// Globals
const emojiContainer = document.getElementById('emoji-container')
const emojis = document.getElementById('emojis')
const comment = document.querySelector('.comment')
const ratingStars = document.querySelectorAll('.ratings .fa-solid')

const colorsArr = [
    '#E74C3C',
    '#9B59B6',
    '#3498DB',
    '#1ABC9C',
    '#2ECC71'
]

const commentsArr = [
    'Very Bad!',
    'Not Good!',
    'Okay!',
    'Good!',
    'Love It!'
]

/**
 * Window ready function
 */
window.onload = () => {
    main()

}

/**
 * Main container. 
 * All Function will run here.
 */
function main(){
    ratingStars.forEach( (ele, index) => {
        
        value = parseInt(localStorage.getItem('rating'))
        updateRating(value || 1)
        
        ele.addEventListener('mouseover', function(){
            updateRating(index)
        })
        ele.addEventListener('click', function(){
            localStorage.setItem('rating', index)
            updateRating(index)
        })

    } )

}


// Event Listener functions 


// DOM Functions

/**
 * Update Emoji, comment and rating stars color
 * @param {number} value 
 */
function updateRating(value){
    emojis.style.transform = `translateY(-${52 * value}px)`
    emojis.style.color = colorsArr[value]
    comment.innerText = commentsArr[value]

    ratingStars.forEach((starEle, index) => {
        if(index <= value){
            starEle.classList.add('active')
        } else {
            starEle.classList.remove('active')
        }
    })
}


// Util Functions