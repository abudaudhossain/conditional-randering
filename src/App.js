
import { useState } from 'react';
import './App.css';
// import { useState } from 'react';
// import Users from './components/Users/Users';
import GrandFather from './components/GrandFather/GrandFather';

function App() {
  const [house, setHouse] = useState(2)
  
  return (
    <div className="App">
      <button onClick = {() => setHouse(house+1)}>Buy House</button>
      <GrandFather house = {house} ></GrandFather>
    </div>
  );
}

export default App;
