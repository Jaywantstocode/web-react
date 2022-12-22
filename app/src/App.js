import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from "./routes/About"

function App() {
  const title = "NEW BLOG";
  return (
    <div className="App">
      <div className="content">
        <h1>App Component</h1>
        <h2>{title}</h2>
      </div>
      <Routes>
        <Route path="/about" element={About}></Route>
      </Routes>

    </div>
  );
}

export default App;
