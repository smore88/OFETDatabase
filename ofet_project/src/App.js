import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import DataOriginForm from './components/ExperimentalDataOriginScreen/DataOriginForm';
import Login from './components/LoginRegisterScreen/Login';
import SolMakeup from './components/SolutionMakeup/SolMakeup';
<<<<<<< HEAD
import Card from './components/UI/Card';
import DevF from './components/DeviceFabrication/DevF';
import SubPre from './components/SubstratePretreat/SubPre';
=======
// import Card from './components/UI/Card';
import SolMakeSolvent from './components/SolutionMakeup/SolMakeSolvent';
import AddSolventCard from './components/SolutionMakeup/AddSolventCard';
>>>>>>> 6491576a164e712479afff3a272a288d58350437

function App() {
  return (
    <div>
    <SubPre/>
      { /* <DevF/>
        <Routes>
          {/* <Route path="/" element={<Login></Login>}></Route>
          <Route path="/data-origin" element={<DataOriginForm></DataOriginForm>}></Route>
<<<<<<< HEAD
  </Routes>*/}
        {/* <SolMakeup></SolMakeup> */}
=======
          <Route path="/sol-makeup" element={<SolMakeup></SolMakeup>}></Route> */}
        </Routes>
        <SolMakeup></SolMakeup>
        <SolMakeSolvent></SolMakeSolvent>
>>>>>>> 6491576a164e712479afff3a272a288d58350437
    </div>
  );
};
export default App;
