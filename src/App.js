
import { useState } from 'react';
import './App.css';
import User from './components/User/User';

function App() {

  const [familier, setFamilier] = useState(false);
  return (
    <div className='App-header'>
      <h1>Is Familier ? {familier.toString()}</h1>
      <button onClick={()=>setFamilier(!familier)}>Toggle</button>
     <User familier={familier}></User>

     
    </div>
  );
}

export default App;
