import Card from './component/card';
import Data from "./component/props.json";

function App() {

  return (
    <>{
    Data.map((card)=>{
      return <Card
      title = {card.Title}
      year = {card.Released}
      runTime = {card.Runtime}
      Genre = {card.Genre}
      plot = {card.Plot}
      Img = {card.Poster}
      />
    })
  }
    </>
  );
}

export default App;
