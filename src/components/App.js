import video from "../data/video.js";
import DisplayVideo from "./DisplayVideo"
import ButtonPlus from "./Buttons"
import ButtonMinus from "./-Button"
import Comment from "./Comment"



function App(props) {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      < DisplayVideo />
      < ButtonPlus /> <ButtonMinus />
      <div> 
      < Comment />
      </div>
      
      
      </div>
        
  );
}

export default App;


