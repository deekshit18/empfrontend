import {Route, Routes } from 'react-router-dom';
import './App.css';
import HHeader from './components/HHeader';
import Dashboard from './pages/Dashboard';
import Emplist from './pages/Emplist';

function App() {
  return (
    <div className="App">
      <HHeader/>
     <Routes>
  {/* <Route path='/' element={<Home/>}></Route> */}
<Route path='/' element={<Dashboard/>}></Route>
<Route path='/list' element={<Emplist/>}></Route>

</Routes>
    </div>
  );
}

export default App;
