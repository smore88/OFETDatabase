import React from 'react';
import SolutionInformation from './SolutionInformation/SolutionInformation';
import AddSolventCard from './SolventCard/AddSolventCard';
import AddPolymerCard from './PolymerCard/AddPolymerCard';

const SolutionMakeUpScreen = (props) => {

    return (
        <div>
            <SolutionInformation></SolutionInformation>
            <AddSolventCard></AddSolventCard>
            <AddPolymerCard></AddPolymerCard>
        </div>
    );
};

export default SolutionMakeUpScreen;