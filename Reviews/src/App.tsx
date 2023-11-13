import './App.css'
import { useInfoStore } from './states/store';

function App() {
  const infoStates = useInfoStore((state) => state.infoStates);
  const index = useInfoStore((state) => state.index)
  const increase = useInfoStore((state) => state.increase)

  return (
    <div>
      <div key={infoStates[index].id}>
        <h3>{infoStates[index].name}</h3>
        <h4>{infoStates[index].job}</h4>
        <p>{infoStates[index].info}</p>
        <button>-</button>
        <button onClick={increase}>+</button>
      </div>
    </div>
  )
}

export default App;