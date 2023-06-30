import React from 'react';
import SolutionInformation from './SolutionInformation/SolutionInformation';
import AddSolventCard from './SolventCard/AddSolventCard';
import AddPolymerCard from './PolymerCard/AddPolymerCard';
import { useNavigate } from 'react-router-dom';
import { NextPageButton } from './SolutionMakeupStyleComponents';
import NavBar from '../GenericUI/NavBar';


const SolutionMakeUpScreen = (props) => {

    const navigateTo = useNavigate();
    const handleNext = () => {
        // Perform logic
        // ...
        // Navigate to the solution treatment page
        navigateTo('/sol-treatment');
    };

    return (
        <div>
            <NavBar title="Solution Makeup"></NavBar>
            <SolutionInformation></SolutionInformation>
            <AddSolventCard></AddSolventCard>
            <AddPolymerCard></AddPolymerCard>
            <NextPageButton onClick={handleNext}>NEXT</NextPageButton>
        </div>
    );
};

export default SolutionMakeUpScreen;