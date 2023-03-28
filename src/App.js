import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import { Route, Routes } from 'react-router-dom';
import ViewStudent from './Components/ViewStudent';
import AddStudent from './Components/AddStudent';

function App() {
  return (
    <div className="App">
     
    
      <Navbar/>
      <Routes>
        <Route path='/' element={<ViewStudent/>}/>
        <Route path='/add' element={<AddStudent/>}/>
      </Routes>
    </div>
  );
}

export default App;
