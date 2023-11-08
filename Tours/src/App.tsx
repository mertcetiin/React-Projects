import './App.css'
import { Routes, Route } from 'react-router-dom';
import ToursPage from './components/ToursPage';

function App() {


  return (
    <Routes>
      <Route path='' element={<ToursPage />} />
    </Routes>
  )
}

export default App;