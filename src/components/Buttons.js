import video from "../data/video"
import {useState} from "react"


function ButtonPlus () {
    const [plus, SetPlus ] = useState(video.upvotes)
    console.log()
    
    function smashLike (){
        SetPlus((add)=> add+1)
    } 
    
    
    return (
      <button onClick= {smashLike}>{plus}😈</button>
    )
}



export default ButtonPlus;



