import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState('olive');
  function changeColor(color) {
    setColor(color);
  }
  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <h1 className='text-7xl text-center text-white'>Set a desired background color</h1>
      <div className="fixed flex flex-wrap justify-center bottom-12 -inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
            onClick={() => changeColor('red')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: 'red' }}
          >
            red
          </button>
          <button
            onClick={() => changeColor('blue')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-white"
            style={{ backgroundColor: 'blue' }}
          >
            blue
          </button>
          <button
            onClick={() => changeColor('violet')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            style={{ backgroundColor: 'violet' }}
          >
            violet
          </button>
          <button
            onClick={() => changeColor('green')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            style={{ backgroundColor: 'green' }}
          >
            green
          </button>
          <button
            onClick={() => changeColor('orange')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            style={{ backgroundColor: 'orange' }}
          >
            orange
          </button>
          <button
            onClick={() => changeColor('yellow')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            style={{ backgroundColor: 'yellow' }}
          >
            yellow
          </button>
          <button
            onClick={() => changeColor('beige')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            style={{ backgroundColor: 'beige' }}
          >
            beige
          </button>
          <button
            onClick={() => changeColor('grey')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            style={{ backgroundColor: 'grey' }}
          >
            grey
          </button>
          <button
            onClick={() => changeColor('#722F37')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-red-300"
            style={{ backgroundColor: '#722F37' }}
          >
            wine
          </button>
          <button
            onClick={() => changeColor('#008080')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-teal-200"
            style={{ backgroundColor: '#008080' }}
          >
            teal
          </button>
          <button
            onClick={() => changeColor('crimson')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-red-100"
            style={{ backgroundColor: 'crimson' }}
          >
            crimson
          </button>
          <button
            onClick={() => changeColor('magenta')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-black"
            style={{ backgroundColor: 'magenta' }}
          >
            magenta
          </button>
          <button
            onClick={() => changeColor('purple')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-purple-200"
            style={{ backgroundColor: 'purple' }}
          >
            purple
          </button>
          <button
            onClick={() => changeColor('seagreen')}
            className="outline-none px-4 py-1 rounded-full shadow-lg text-green-200"
            style={{ backgroundColor: 'seagreen' }}
          >
            seagreen
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
