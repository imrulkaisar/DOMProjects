/**
 * Project Name: Statics Counter
 * @author: Imrul Kaisar
 * @date : Jun 21, 2022
 */

window.onload = () => {
    const allCounters = document.querySelectorAll('.count')
    const dataValues = [370, 972, 1479]

    allCounters.forEach( (ele, index) => {
        let value =  dataValues[index]
        ele.innerText = 0

        incrementNumber()
        
        function incrementNumber(){
            let currentNum = Number(ele.innerText)
            let minNum = Math.min(...dataValues)
            let increment = Math.ceil(value / minNum)
            currentNum += increment

            if(currentNum <= value){
                ele.innerText = currentNum
                setTimeout(incrementNumber, 5)
            } else {
                ele.innerText = value
            }
            
        }
    } )
    
}