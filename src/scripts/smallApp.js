import react from "react"
import "../App.css"

function SmallApp(props) {
    

    return (
        <div className="pic" id={"k"+props.item.id} style={{backgroundImage: props.item.img }} onClick={ ()=> props.chooseWeb(props.item.id) }>
            <p>{props.item.name}</p>
        </div>
    )

}

export default SmallApp