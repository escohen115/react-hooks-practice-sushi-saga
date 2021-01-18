import React,{useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";

const API = "http://localhost:3001/sushis";

function App() {

  const [sushiState, setSushiState] = useState([])
  const [numberOfSushisEaten, setNumberOfSushisEaten] = useState([])
  const [userMoney, setUserMoney] = useState(100)

  useEffect(()=>{
    fetch(API)
    .then(response => response.json())
    .then(data => setSushiState(data))
  },[])
  
  function handleClickSale(price){
    if (userMoney - price < 0){
      return false
    }
    else{
    setNumberOfSushisEaten([...numberOfSushisEaten, price])
    setUserMoney(() => userMoney-price)
    return true
  }
  }

  return (
    <div className="app">
      <SushiContainer
      sushiState = {sushiState}
      handleClickSale={handleClickSale} />
      <Table 
      plates = {numberOfSushisEaten}
      userMoney ={userMoney}/>
    </div>
  );
}

export default App;
