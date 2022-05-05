

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

        <Button 
        className='shop-now'
        sx={{
          // textAlign:'center', 
          // justifyContent:'center',
          // display:'flex',
          // position:'absolute',
          // align: 'center',
          bottom: '0',
          // margin: '0 auto',
          width: '85%',
          height: '50px',
          background:'#005b98',

          '&:hover': {
            backgroundColor: '#4444',

        },
        
        }}
        variant="contained"><span className='shop-text'>Shop Now</span></Button>

      </header>
    </div>
  );
}

export default App;
