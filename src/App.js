import logo from './logo.svg';

import Tile from './components/Tile/Tile';
import './App.css';

const score = 0;
const time = 0;
let tiles = [];
let currentValues = [0,0,0,0,0,0];

const randomNumber = (min,max) =>{
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

for(let i = 0; i < 4;i++){
  for(let j = 0; j < 3; j++){
    let randomV = randomNumber(1,6);
    while(currentValues[randomV-1] === 2){
      randomV = randomNumber(1,6);
    }
    currentValues[randomV-1]++;
    tiles.push(Tile({number: randomV}));
  }
}
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Score: {score}</h1>
        <h1>Time: {time}</h1>
      </header>
      <body>
        <div className="App-board">
          {tiles}
        </div>
      </body>
    </div>
  );
}

export default App;
