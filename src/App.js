import './App.css';
import Allcars from './Components/Allcars';
import Cars from './Components/Cars';
import Navbar from './Components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Searchbar from './Components/Searchbar';
function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element = {<Searchbar/>}></Route>
          <Route path='/search' element = {<Allcars/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<Cars page='1'/>}></Route>
        <Route path='/page/2' element = {<Cars page='2'/>}></Route>
        <Route path='/page/3' element = {<Cars page='3'/>}></Route>
        <Route path='/page/4' element = {<Cars page='4'/>}></Route>
        <Route path='/page/5' element = {<Cars page='5'/>}></Route>
        <Route path='/page/6' element = {<Cars page='6'/>}></Route>
        <Route path='/page/7' element = {<Cars page='7'/>}></Route>
        <Route path='/page/8' element = {<Cars page='8'/>}></Route>
        <Route path='/page/9' element = {<Cars page='9'/>}></Route>
        <Route path='/page/10'element = {<Cars page='10'/>}></Route>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;