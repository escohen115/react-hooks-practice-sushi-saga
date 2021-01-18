import React from "react";

function MoreButton({setSushisDisplayed, sushisDisplayed}) {
  return <button onClick={
    ()=>setSushisDisplayed(()=>sushisDisplayed+4)
  }>More sushi!</button>;
}

export default MoreButton;
