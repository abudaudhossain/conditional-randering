
import './App.css';
import { useState } from 'react';
import Users from './components/Users/Users';

function App() {
  const [familier, setFamilier] = useState(false)
  const handleFamiler = () =>{
    setFamilier(!familier);
  }
  
  return (
    <div className="App">
      <h1>familier : {familier.toString()}</h1>
      <button onClick={handleFamiler}>familier taggel</button>
      <Users familier = {familier}></Users>
    </div>
  );
}

export default App;
