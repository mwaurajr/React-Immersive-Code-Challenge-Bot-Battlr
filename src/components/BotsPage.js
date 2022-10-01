import React, {useState, useEffect} from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";

function BotsPage() {
  //start here with your code for step one
const [bots, useBot ] = useState ([])
useEffect(()=>{
  fetch("http://localhost:8002/bots")
  .then((response) => response.json())
  .then(bots=>setBots(bots))
 },[])
 console.log (bots)
  return (
    <div>
      <YourBotArmy />
      <BotCollection />
    </div>
  )
}

export default BotsPage;
