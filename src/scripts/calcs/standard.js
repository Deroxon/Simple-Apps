import React, {useState, useEffect} from "react"


function Standard() {

        const [calculations, setCalculations] = useState([])
        const [mathSymbol, setMathSymbol] = useState([])
        const [history, setHistory] = useState({first: "", second: "", third: "", bool: true, isResult: false, result: ''})
        const [result, setResult] = useState("")
    // bool meaning the first number was added
        

        let x =document.getElementsByClassName("doMath")


        document.onkeypress = function (e) {
            e = e || window.event;
            let grabInput = document.querySelector('.math');

            grabInput.value = grabInput.value + e.key
            console.log(e.key)

            
            
            // use e.keyCode
        };
      

        function MathSym(e) {
            console.log(e.target.className)
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
                    selectedOperation = 'end'
                break;
            }

            



            getValue = Number(getValue)

            

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
            
            <input type="number"  className="math" />
                <div className="procent" onClick={MathSym}>%</div>
                <div className="clear" onClick={MathSym}>Clear </div>
                <div className="del" onClick={MathSym}>Delete1 </div>
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