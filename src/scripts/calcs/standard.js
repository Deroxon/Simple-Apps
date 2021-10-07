import React, {useState, useEffect} from "react"


function Standard() {

        const [calculations, setCalculations] = useState([])
        const [mathSymbol, setMathSymbol] = useState([])
        const [history, setHistory] = useState({first: "", second: "", third: "", bool: true, isResult: false, result: ''})
        const [result, setResult] = useState("")
    // bool meaning the first number was added
        

        let x =document.getElementsByClassName("doMath")

        // from 0 to 9 function
        useEffect( () => {

            for(let i =0; i <= 9; i++) {
                let grabDiv = document.querySelector(".n"+i)
               
    
                grabDiv.addEventListener("click", (event) => {
                    
                    let grabInput = document.querySelector(".math")
                    grabInput.value = grabInput.value + event.target.innerHTML


                } )
            }
    

        }, [])

        

        
        function Clear(e) {

            let selectedOperation = e.target.className

            console.log(selectedOperation)

            let grabInput = document.querySelector(".math")
            let some = grabInput.value;

            if(selectedOperation === "del") {
                some = some.substring(0, some.length-1)
                grabInput.value = some
            }
            else if (selectedOperation === "clear") {
                some = some.substring(0, some.length- some.length)
                grabInput.value = some
                setHistory(prevState => ({
                    ...prevState,
                    first: '',
                    second: '',
                    third: '',
                    bool: true,
                    isResult: false,
                    result: ''
                }))

            }

        } 
          

        function MathSym(e) {
           
            let getValue = document.querySelector(".math").value
            let getHistory = document.querySelector(".history").value
          
            let selectedOperation = e.target.className
        
            switch (selectedOperation) {
                case 'divide':
                    selectedOperation = '/'

                    break;
                
                case 'multiple': 
                selectedOperation = "*"
                break;

                case 'add': 
                selectedOperation= "+"
                break;

                case "minus": 
                selectedOperation = "-"
                break

                case "equal":
                    selectedOperation = '='
                break;
            }

            



            getValue = Number(getValue)

            
            // clicked if hisotry.first is empty
            if(history.bool) {

                if(selectedOperation === "procent") {
                    getValue = getValue / 100

                    setHistory(prevState => ({
                        ...prevState,
                        bool: false,
                        first: getValue,
                        
                    }))

                }

                else {
                    setHistory(prevState => ({
                        ...prevState,
                        bool: false,
                        first: getValue,
                       
                    }))
                }


               
            }

            // clicked everything else
            else if (!history.bool) {

                if(selectedOperation === "procent") {
                    getValue = getValue / 100
                }

                if(history.isResult) {
                    console.log(typeof(history.result))
                    history.first = history.result
                    history.second = selectedOperation
                }
                



                    setHistory( prevState => ({
                        ...prevState,
                        third: getValue,
                        second: selectedOperation
                    }))

              

                
                

                let res = ''

               

                switch (selectedOperation) {
                    case "+":
                    res = history.first + getValue
                    break;

                    case "-":
                        res = history.first - getValue
                    break;

                    case "*":
                        res = history.first * getValue
                    break;

                    case "/":
                        res = history.first / getValue
                    break;

                    
                    
                }

                res = Number(res)
                res = res.toFixed(6)
                res = Number(res)


                
                setHistory( prevState => ({
                    ...prevState,
                    result: res,
                    isResult: true
                }))


                let grabInputField = document.querySelector(".math")
               
                grabInputField.value = res



               

            }
               
           
            
            console.log(history.first)

            
            
            


            
        }
      
       
        console.log(result)
        console.log(history)

    return (
        <div className="mathe">Obliczenia
            <h3 className="history">{history.first } {history.second} {history.third} {history.result ? "=" : ''} <b>{history.result}</b> </h3>
            
            <input type="number"  className="math" autoFocus />
                <div className="procent" onClick={MathSym}>%</div>
                <div className="clear" onClick={Clear}>Clear </div>
                <div className="del" onClick={Clear}>Delete1 </div>
                <div className="divide" onClick={MathSym}>\ </div>
                

                <div className="n9">9</div> <div className="n8">8</div>
                <div className="n7">7</div> <div className="multiple" onClick={MathSym}>* </div>
                <div className="n6">6</div> <div className="n5">5</div>
                <div className="n4">4</div> <div className="minus" onClick={MathSym}>- </div>
                <div className="n3">3</div> <div className="n2">2</div>
                <div className="n1">1</div> <div className="add" onClick={MathSym}>+ </div>
                <div className="nothing"></div> <div className="n0">0</div>
                 <div className="dot">,</div> <div className="equal" onClick={MathSym}>= </div>

            </div>
        
    )
}


export default Standard