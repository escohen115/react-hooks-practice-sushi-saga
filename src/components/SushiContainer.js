import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from './Sushi'

function SushiContainer({sushiState, handleClickSale}) {

  const [sushisDisplayed, setSushisDisplayed] = useState(0)

  let sushisMapped = sushiState
  .slice(sushisDisplayed, (sushisDisplayed+4))
  .map((sushi)=> {
    return (
    <Sushi 
    img_url = {sushi.img_url}
    name = {sushi.name}
    price = {sushi.price}
    id = {sushi.id}
    key = {sushi.id}
    handleClickSale = {handleClickSale}
    />)
  } )

  return (
    <div className="belt">
      {sushisMapped}
      <MoreButton 
      sushisDisplayed ={sushisDisplayed} 
      setSushisDisplayed = {setSushisDisplayed}/>
    </div>
  );
}

export default SushiContainer;
