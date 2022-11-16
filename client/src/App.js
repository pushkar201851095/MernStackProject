import './App.css';
import { Navbar } from './components/Navbar';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Signin } from './components/Signin';
import { Signup } from './components/Signup';
import { Home } from './components/Home';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>} ></Route>
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/signin' element={<Signin/>} />
        

      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
