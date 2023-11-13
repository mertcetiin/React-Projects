import './App.css'
import { useInfoStore } from './states/store';

function App() {
  const infoStates = useInfoStore((state) => state.infoStates);
  const index = useInfoStore((state) => state.index)

  const increase = useInfoStore((state) => state.increase)
  const decrease = useInfoStore((state) => state.decrease)

  const randomBtn = useInfoStore((state) => state.randomBtn)


  return (
    <div>
      <div key={infoStates[index].id}>
        <h3>{infoStates[index].name}</h3>
        <h4>{infoStates[index].job}</h4>
        <p>{infoStates[index].info}</p>
        <button onClick={decrease}>-</button>
        <button onClick={increase}>+</button>
      </div>
      <br />
      <button onClick={randomBtn}>Random</button>
    </div>
  )
}

export default App;