import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AllPhone from './Componant/AllPhone/AllPhone';
import ManuBar from './Componant/ManuBar/ManuBar';

function App() {
  return (
    <div className="App" id='body'>
      <ManuBar></ManuBar>
    <AllPhone></AllPhone>
    </div>
  );
}

export default App;
