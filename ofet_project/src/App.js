import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DataOriginForm from './components/ExperimentalDataOriginScreen/DataOriginForm';
import Login from './components/LoginRegisterScreen/Login';
import SolMakeup from './components/SolutionMakeup/SolMakeup';
// import Card from './components/UI/Card';
import SolMakeSolvent from './components/SolutionMakeup/SolMakeSolvent';
import AddSolventCard from './components/SolutionMakeup/AddSolventCard';

function App() {
  return (
    <div>
        <Routes>
          {/* <Route path="/" element={<Login></Login>}></Route>
          <Route path="/data-origin" element={<DataOriginForm></DataOriginForm>}></Route>
          <Route path="/sol-makeup" element={<SolMakeup></SolMakeup>}></Route> */}
        </Routes>
        <SolMakeup></SolMakeup>
        <SolMakeSolvent></SolMakeSolvent>
    </div>
  );
};
export default App;
