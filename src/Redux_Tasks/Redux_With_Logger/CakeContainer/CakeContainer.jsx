import { buyCake } from "../Redux/Cake/CakeActions";
import { connect } from "react-redux";

function CakeContainer(props) {
    return(
        <div>
            <h2>Number of Cake - {props.numofCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
        </div>
    )
}

let mapStapeToProps = (state) => {
    return{
        numofCakes:state.numofCakes
    }
}

let mapDispatchToProps = (disptch) => {
    return{
        buyCake:(()=> {return (disptch(buyCake()))})
    }
}

export default connect(mapStapeToProps,mapDispatchToProps)(CakeContainer)