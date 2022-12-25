// import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Navbar from './Navbar';
// import About from "./routes/About"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className='Content'>
        <Home />
      </div>

    </div>
  );
}

export default App;
