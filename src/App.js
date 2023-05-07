import Costs from "./components/Costs/Costs";

function App() {

  const costs = [
    {
      date: new Date(2023, 2, 12),
      description: 'Холодильник',
      amount: 999.99
    },
    {
      date: new Date(2022, 4, 29),
      description: 'Анаконда',
      amount: 1245
    },
    {
      date: new Date(2022, 12, 1),
      description: 'Пиколини',
      amount: 12.13
    }
  ]

  return (
    <div>
      <h1>Начнем же!!!</h1>
        <Costs costs={costs}/>
    </div>
  );
}

export default App;
