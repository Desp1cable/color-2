import { useContext } from "react";
import { ColorContext } from "./App";
import Triadic from "./triadic";

const Color = () => {
  const electricViolet = useContext(ColorContext)
  console.log(electricViolet);
  return (
    <div className="r">
      <div className="card">
        <div className="color-prev" style={{backgroundColor: electricViolet.hex}}></div>
        <p className="color-code">{electricViolet.hex}</p>
      </div>
      <div className="row">
        {electricViolet.triadic.map(color => <Triadic color={color}/>)}
      </div>
    </div> 
  );
}
 
export default Color;