/**
 * Project Name: Rotating Image Gallery
 * @author: Imrul Kaisar
 * Date: Jun 22, 2022
 */

// Globals 
const imageGallery = document.getElementsByClassName('image-gallery')[0]
const prevBtn = document.getElementById('prev')
const nextBtn = document.getElementById('next')

window.onload = () => {
    
    let currDeg = 0
    prevBtn.addEventListener('click', function(e){
        clearTimeout(timeInterval)
        rotateGallery(51.5)
    })
    nextBtn.addEventListener('click', function(){
        clearTimeout(timeInterval)
        rotateGallery(-51.5)
    })

    function rotateGallery(num){
        let deg = Math.sign(num) === 1 ? currDeg +=  Math.abs(num) : currDeg -=  Math.abs(num)
        imageGallery.style.transform = `perspective(1000px) rotateY(${deg}deg)`
        console.log(deg)
        timeInterval = setTimeout(function(){
            rotateGallery(-51.5)
        }, 3000)
        
    }

    rotateGallery(-51.5)
    
}