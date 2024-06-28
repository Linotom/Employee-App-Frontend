import logo from './logo.svg';
import './App.css';
import AddEmployee from './components/AddEmployee';
import DeleteEmployee from './components/DeleteEmployee';
import Searchemployee from './components/Searchemployee';
import HeaderEmployee from './components/HeaderEmployee';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
<BrowserRouter>
<Routes>
  <Route path='/' element={<AddEmployee/>}/>
  <Route path='/delete' element={<DeleteEmployee/>}/>
  <Route path='/search' element={<Searchemployee/>}/>
</Routes>
</BrowserRouter>

  );
}

export default App;
