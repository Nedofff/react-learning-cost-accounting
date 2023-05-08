import NewCost from "./components/NewCost/NewCost";
import Costs from "./components/Costs/Costs";
import { useState } from "react";

const INITIAL_COST = [
  {
    id: 'c1',
    date: new Date(2023, 2, 12),
    description: 'Холодильник',
    amount: 999.99
  },
  {
    id: 'c2',
    date: new Date(2022, 4, 29),
    description: 'Анаконда',
    amount: 1245
  },
  {
    id: 'c3',
    date: new Date(2022, 12, 1),
    description: 'Пиколини',
    amount: 12.13
  }
]

function App() {
  const [costs, setCosts] = useState(INITIAL_COST)
  
  

  const addCostHandler = (cost) => {
    setCosts((prevState) => {
      return [cost, ...prevState]
    })
  }

  return (
    <div>
        <NewCost onAddCost={addCostHandler}/>
        <Costs costs={costs} />
    </div>
  );
}

export default App;
