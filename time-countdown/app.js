/**
 * Project Name: Time Counter
 * @author: Imrul Kaisar
 * Date: Jun 22, 2022
 */

window.onload = () => {
    // Globals
    const target = document.getElementById('target')
    const daysCount = document.querySelector('#days .counts')
    const hoursCount = document.querySelector('#hours .counts')
    const minsCount = document.querySelector('#minutes .counts')
    const secsCount = document.querySelector('#seconds .counts')

    const targetDate = setTimeTwoDaysAhead()
    target.innerText = targetDate.toDateString()
    countTime()

    function countTime(){
        const seconds = 1000
        const minutes = seconds * 60
        const hours = minutes * 60
        const day = hours * 24

        const presentTime = new Date()
        const targetTime = convertToMilli(targetDate)
        const timeDiff = Math.abs(targetTime - presentTime.getTime())

        const getDays = Math.floor(timeDiff / day)
        const getHours = Math.floor( (timeDiff % day ) / hours )
        const getMinutes = Math.floor( (timeDiff % hours ) / minutes )
        const getSeconds = Math.floor( (timeDiff % minutes ) / seconds )

        daysCount.innerText = makeTwoDigit(getDays)
        hoursCount.innerText = makeTwoDigit(getHours)
        minsCount.innerText = makeTwoDigit(getMinutes)
        secsCount.innerText = makeTwoDigit(getSeconds)

        setTimeout(function(){
            countTime()
        }, 1000)
    }

}

/**
 * Convert any date to milliseconds 
 * @param {date} date 
 * @returns Milliseconds 
 */

function convertToMilli(date){
    let d = new Date(date)
    return d.getTime()
}

/**
 * Convert Single digit to double digit
 * @param {number} num 
 * @returns {string} two digit string
 */
function makeTwoDigit(num){
    let digit = num.toString()
    return digit.length === 1 ? `0${digit}` : digit
}

function setTimeTwoDaysAhead(){
    let d = new Date()
    d.setDate(d.getDate() + 5)
    d.setHours(0)
    d.setMinutes(0)
    d.setSeconds(0)
    const getDate = d.getTime()

    console.log(d)

    return new Date(getDate)
}