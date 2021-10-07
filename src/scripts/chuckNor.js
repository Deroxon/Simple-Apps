import React, { useEffect, useState } from "react"


function Chuck() {

    const [jokeData, setNewJoke] = useState("")
    const [counter, setCounter] = useState(0)

    useEffect( () => {
        fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => {
            
            setNewJoke(data)
        })
    }, [])
    

    useEffect( () => {
        fetch("https://api.chucknorris.io/jokes/random")
        .then(res => res.json())
        .then(data => {
            
            setNewJoke(data)
        })
    }, [counter])


    function setNewJokes() {
        setCounter(prevCount => prevCount + 1)
    }
    

   
    return (
        <div className="imgJoke" >
            
            <div className="text">{jokeData.value}</div>
            <button onClick={setNewJokes}>Random Joke</button>
        </div>
    )
}


export default Chuck