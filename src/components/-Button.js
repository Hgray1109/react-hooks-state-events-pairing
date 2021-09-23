import video from "../data/video"
import {useState} from "react"


function ButtonMinus () {
    const [min, SetMinus ] = useState(video.downvotes)
    console.log()
    
    function smashDisLike (){
        SetMinus((sub)=> sub-1)
    } 
    
    
    return (
      <button onClick= {smashDisLike}>{min}👿</button>
    )
}


export default ButtonMinus;

