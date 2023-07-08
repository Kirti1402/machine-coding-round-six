import logo from './logo.svg';
import './App.css';
import Home from './Component/Home';
import {Routes,Route} from "react-router-dom"
import RestuarantPage from './Component/RestuarantPage';

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/resturants" element={<RestuarantPage/>} />
        </Routes>
    </div>
  );
}

export default App;
