import React, {useState, useEffect} from "react"
import Standard from "./calcs/standard"

function Calc() {

    const [calc, chooseCalc] = useState(<Standard />)

    function setCalc(e) {
        
        
        
    }

    return (
        <div className="calc">
            <select onChange={setCalc}>
                <option></option>
                <option value="normal">Normal</option>
                <option value="currency">Currency</option>
                <option values="measures">Measures</option>
            </select>
                

            {calc}
            

        </div>
    )

}



export default Calc