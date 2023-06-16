import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DataOriginForm from './components/ExperimentalDataOriginScreen/DataOriginForm';
import Login from './components/LoginRegisterScreen/Login';
import SolMakeup from './components/SolutionMakeup/SolMakeup';
import Card from './components/UI/Card';

function App() {
  return (
    <div>
        <Routes>
          <Route path="/" element={<Login></Login>}></Route>
          <Route path="/data-origin" element={<DataOriginForm></DataOriginForm>}></Route>
        </Routes>
        {/* <SolMakeup></SolMakeup> */}
    </div>
  );
};
export default App;
