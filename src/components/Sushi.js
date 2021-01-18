import React, {useState} from "react";

function Sushi({ name, price, img_url, id, handleClickSale, }) {

  const[sold, setSold] = useState(false)

  return (
    <div className="sushi">
      <div className="plate" id = {id} onClick={()=>{
       if (handleClickSale(price)){
       setSold(true)}
      }}>
        
        {sold ? null : (
          <img
            src={img_url}
            alt={name}
            width="100%"
          />
        )}
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  );
}

export default Sushi;
