import React, {useState, useEffect} from "react"
import Standard from "./calcs/standard"
import Currency from "./calcs/currency"

function Calc() {

    const [calc, chooseCalc] = useState(<Standard />)

    function setCalc(e) {

        let grabSelector = document.querySelector('.selector').value

        // eslint-disable-next-line default-case
        switch (grabSelector) {
            case "normal": 
            chooseCalc(<Standard />)
            break;
            case "currency": 
            chooseCalc(<Currency />)
            break;

        }
        
    }

    return (
        <div className="calc">
            <select className="selector" onChange={setCalc}>
                <option></option>
                <option value="normal">Normal</option>
                <option value="currency">Currency</option>
            </select>
                

            {calc}
            

        </div>
    )

}



export default Calc