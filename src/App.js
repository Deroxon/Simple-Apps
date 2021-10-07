import {React, useState} from "react"
import './App.css';
import data from "./fakeData/img"
import SmallApp from "./scripts/smallApp"
import Chuck from "./scripts/chuckNor"
import Stoper from "./scripts/stoper"
import Calc from "./scripts/calc"

function App() {

  const [generatetWeb, generate] = useState('')


  let chooseWeb = (id) => {
    
    let name = ''
    let grabSelectedClass = document.querySelector("#k"+id)
    grabSelectedClass.style.opacity = "1"

    // add opacity lower to other components

    switch (id) {
      case 1: 
      name="RandomColor"
      break

      case 2: 
      name="Calc"
      break

      case 3: 
      name="Stoper"
      break

      case 4: 
      name="Chuck"
      break

    }

    generate( () => <Calc />)

  }

  

  const apps = data.map(item => <SmallApp key={item.id} item={item} chooseWeb={chooseWeb} /> )

  return (
    <div className="App">

     
      <div className="divs">
        {apps}
      </div>

      <div>
       {generatetWeb}
      </div>
    


    </div>
  );
}

export default App;
