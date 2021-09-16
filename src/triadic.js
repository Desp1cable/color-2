import { useContext } from "react";
import { ColorContext } from "./App";
import Tints from "./tints.js";

const Triadic = ( {color} ) => {
  const electricViolet = useContext(ColorContext)
  console.log(electricViolet);
  return (
    <div className="r">
      <div className="card">
        <div className="color-prev" style={{backgroundColor: color}}></div>
        <p className="color-code">{color}</p>
      </div>
      <div className="row">
        {electricViolet.tints.map(color => <Tints color={color}/>)}
      </div>
    </div>
  );
}
 
export default Triadic;