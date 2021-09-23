import video from "../data/video"
import { useState } from "react"


function Comment(){
    const [ hide, SetHide ] = useState(true)
    
    function hideComment(){
        SetHide(!hide)
       
    }

//     <>
//     <h2>{props.user}</h2>
//     <p>{props.comment}</p>
// </> 

    return(
    
     <> 
     <button onClick={hideComment}> {hide? "Hide Comments"  : "Show Comments"} </button>
     <div> 
        <h2>{video.comments.length} Comments</h2>
        {hide ? 
            video.comments.map(comment => (
                <Card user={comment.user} comment={comment.comment}/>
            ))
         : 
           null
        }
        
    </div>
     
     
     </>       
    )
}

export default Comment;

