import React, { useEffect, useState } from "react"
import currencyTable from "../../fakeData/currency"

function Currency() {

    const [val, setVal] = useState("")
    const [firstVal, setFirstVal] = useState('EUR')
    const [secondVal, setSecondVal] = useState('EUR')
    const [numberOfAmount, setAmount] = useState(0)
    
    console.log(currencyTable)

    
       

        function Generate() {
            if(numberOfAmount === 0 ||numberOfAmount === '') {
                setAmount(1)
            }

            if(firstVal !== secondVal) {
                    console.log(numberOfAmount)
                    const host = 'api.frankfurter.app';
                fetch(`https://${host}/latest?amount=`+numberOfAmount+`&from=`+firstVal+`&to=`+secondVal)
                .then(resp => resp.json())
                .then((data) => {
                    let lol = data;
                    // we are taking third element of object named 'rates' and taking it to alert or innerHTML to show user result of convert
                    let firstElementObject = lol[Object.keys(lol)[3]];
                    firstElementObject = firstElementObject[Object.keys(firstElementObject)[0]]
                    
                    console.log(firstElementObject)

                    setVal(`${numberOfAmount} ${firstVal} = ${firstElementObject} ${secondVal}`)
                    
                })
                .catch((error) => {
                    console.log(error)
                    alert("I cannot convert this values, its probably beacuse we dont have one of currency in API. Check another one")
                  });
                ;

            }
            else { 
                alert("You cannot convert same values")
            }

            
            
            
            
            
            
        }


        let mappedListofCurrency = currencyTable.map( (item,index) => <option key={index} value={item.shortCut}> {item.shortCut} </option>)


    console.log(numberOfAmount)
    return (
        <div className="currContainer">

            <h3> {val} </h3>


            <div className="selects"> 

                <input type="number" autoFocus className="amount" onChange={e => setAmount(e.target.value)} placeholder="Enter number or default value is 1" />

                <select onChange={e => setFirstVal(e.target.value)}>
                    {mappedListofCurrency}
                </select>

                <select onChange={e => setSecondVal(e.target.value)}>
                    {mappedListofCurrency}
                </select>
                
                <button onClick={() => Generate()}>Convert</button>

            </div>
            
           

            
        </div>
    )
}

export default Currency