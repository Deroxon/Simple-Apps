import React from "react"
import randomcolor from "randomcolor"



function ColorPallete() {

    let arrayOfColors = ["", "", "", "", "",]
    let arrayOfAlerts = ["", "", "", "", "",]
    
    

 

    function copyToClipboard(e) {
        let copyValue = document.querySelector('.'+e.target.className)
        navigator.clipboard.writeText(copyValue.innerHTML);
        let number = e.target.className
        number = number.slice(-1)
        let grabAlert = document.querySelector('#alert'+number)
        grabAlert.style.visibility = "visible"
        setTimeout(() =>  grabAlert.style.visibility = "hidden", 1000)
        
    }
    

    function generatePallete(e) {
        let tableOfPallets = ["33", "66", "99", "CC", "FF"]
        let random = randomcolor() 
       
        for(let i =0; i < 5; i++) {
            let grabClass = document.querySelector(".color"+i)
                console.log("working")
            random = random.substring(0, random.length-2)
            random = random+tableOfPallets[i]
            grabClass.style.backgroundColor = random
            grabClass.innerHTML = random
        }

       


    }   

    let mappedAlerts = arrayOfAlerts.map( (item, index) => <div key={index} id={"alert"+index} className="alertedCopied">Value has been copied</div> )

    let mappedPallete = arrayOfColors.map( (item, index) => <li key={index}  className={"color"+index} onClick={copyToClipboard} >  </li> )

    return (
        <div className="palletes">

            <ul className="pal">
                {mappedAlerts}
            </ul>

            <ul className="pal">
                {mappedPallete}
            </ul>

            <button className="btn-generate" onClick={() => generatePallete()}>Change Pallete for Random</button>
            
           

        </div>
    )

}

export default ColorPallete