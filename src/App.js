

import ItemCard from './ItemCard/ItemCard';
import './App.css';


// MUI

import Button from '@mui/material/Button';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p
        className='item-header'
        >Haylem Styles</p>

        
        <ItemCard />

        <Button />

      </header>
    </div>
  );
}

export default App;
