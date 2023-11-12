import './App.css'
import { useInfoStore } from './states/store';

function App() {

  const infoStates = useInfoStore((state) => state.infoStates)

  return (
    <div>
      {infoStates.map((item) => (
        <div key={item.id}>
          <h3>{item.name}</h3>
          <h4>{item.job}</h4>
          <p>{item.info}</p>
        </div>
      ))}
    </div>
  )
}

export default App;