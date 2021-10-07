import React, {useEffect, useState} from "react"

function Stoper() {

   

    const [Time, setTime] = useState({fh: 0, hour: 0, fm: 0, minutes: 0, fs: 0, seconds: 0, miliSeconds: 0})



    const [timeTable, addNewTime] = useState([])
    
    const [isRunning, setIsRunning] = useState(false)
    const [intervalId, setIntervalId] = useState(null)


    
       useEffect( () =>{
            if(isRunning) {
               const id = window.setInterval( () => {
                
                setTime(prevState => ({
                    ...prevState,
                    miliSeconds: prevState.miliSeconds + 1
                }))
               },100)

               setIntervalId(id)
            }
            else {
                window.clearInterval(intervalId)
            } 

       }, [isRunning])



      useEffect( () => {
            if(Time.miliSeconds > 9) {
                setTime( prevState => ({
                    ...prevState,
                    miliSeconds: 0,
                    seconds: prevState.seconds + 1
                }))

                if(Time.seconds === 9) {
                    setTime( prevState => ({
                        ...prevState,
                        seconds: 0,
                        fs: prevState.fs + 1
                    }))

                    if(Time.fs === 5) {
                        setTime( prevState => ({
                            ...prevState,
                            fs: 0,
                            minutes: prevState.minutes + 1
                        }))

                        if(Time.minutes === 9) {
                            setTime( prevState => ({
                                ...prevState,
                                minutes: 0,
                                fm: prevState.fm + 1
                            }))
                            if(Time.fm === 5) {
                                setTime( prevState => ({
                                    ...prevState,
                                    fm: 0,
                                    hour: prevState.hour + 1
                                }))
                                if(Time.hour === 9) {
                                    setTime( prevState => ({
                                        ...prevState,
                                        hour: 0,
                                        fh: prevState.fh + 1
                                    }))
                                }
                            }
                        }
                    }
                }
            }
      }, [Time.miliSeconds])

       console.log(Time)

       function Laps() {

        let actualTime =  Time.fh+""+ Time.hour +":"+ Time.fm +""+ Time.minutes+":"+ Time.fs +""+ Time.seconds  +"."+Time.miliSeconds; 
        
        addNewTime( oldArray => [...oldArray, actualTime])
        
       }
       function Reset() {
            setTime({fh: 0, hour: 0, fm: 0, minutes: 0, fs: 0, seconds: 0, miliSeconds: 0})
            addNewTime([])
       }

       

       let actualTime =  Time.fh+""+ Time.hour +":"+ Time.fm +""+ Time.minutes+":"+ Time.fs +""+ Time.seconds  +".";
      
        
       let mappedList = timeTable.map( (item, index) => 
       <li key={index+1}>{index+1}.  {item}</li> 
       )
       
       let button;
      if(isRunning) {
          button = <button onClick={() => Laps()} className="setButton lap">Time</button>
      } else {
          button = <button onClick={() => Reset()} className="setButton lap">Reset</button>
      }


    return (
        <div className = "box">

            <div className="time">
                <span style={{fontSize: "60px"}}>{actualTime}</span> <span>{Time.miliSeconds}</span>
            </div>
            

            <div className="buttons">


            <button className="setButton" onClick={() => {setIsRunning(!isRunning)}}> 
            {isRunning ? "Pause" : "Start"} 
            </button> 
            
           
            {button}

            </div>
           

            <ul>
                Rounds:
             {mappedList}
            </ul>
            
            

        </div>
    )

}



export default Stoper