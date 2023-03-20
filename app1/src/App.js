import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router,Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Phone from "./componets/Phone";
import Home from "./componets/home";
import Blocknative from "./componets/Blocknative"
function App() {
  return (
  <div className="App">
    
    <BrowserRouter>
        <Routes>
          <Route  path='/phone' element={<Phone/>}></Route>
          <Route  path='' element={<Home/>}></Route>
          <Route  path='/Block' element={<Blocknative/>}></Route>
       </Routes>
    </BrowserRouter>
    </div>
   );
}

export default App;