import {React, useState} from "react"
import './App.css';
import data from "./fakeData/img"
import SmallApp from "./scripts/smallApp"
import Chuck from "./scripts/chuckNor"
import Stoper from "./scripts/stoper"
import Calc from "./scripts/calc"
import ColorPallete from "./scripts/colorPalletes"

function App() {

  const [generatetWeb, generate] = useState('')


  let chooseWeb = (id) => {
    
    let grabSelectedClass = document.querySelector("#k"+id)
    grabSelectedClass.style.opacity = "1"

    // add opacity lower to other components

    // eslint-disable-next-line default-case
    switch (id) {
      case 1: 
      generate( () => <ColorPallete />)
      break

      case 2: 
      generate( () => <Calc />)
      break

      case 3: 
      generate( () => <Stoper />)
      break

      case 4: 
      generate( () => <Chuck />)
      break

    }

    

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
