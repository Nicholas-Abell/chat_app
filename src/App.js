import { useState, useRef } from 'react';
import './App.css';
import Auth from './components/Auth';

import Cookies from 'universal-cookie';
const cookies = new Cookies();


function App() {

  const [isAuth, setIsAuth] = useState(cookies.get('auth-token'));
  const [room, setRoom] = useState('');

  const roomInputRef = useRef(null);

  if (!isAuth) {
    return (
      <div className="App">
        <Auth />
      </div>
    );
  }

  return (
    <div>
      {room
        ? (<div>Chat</div>)
        : (
          <div className='room'>
            <label>Enter Room Name</label>
            <input type='text' />
            <button>Enter Chat</button>
          </div>
        )}
    </div>
  );
}

export default App;
