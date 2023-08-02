import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NextPageButton, HelpContainer, ContainerMain } from './PostProcessingStyleComponents';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';


// Various Components in the page UI
import NavBar from '../GenericUI/NavBar';
import Box from './SelectTreatmentBox/Box';
import Annealing from './Annealing/Annealing';
import ChemicalTreat from './ChemicalTreatment/ChemicalTreatment';
import OtherSP from './OtherSP/OtherSP';


import { IconButton, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import ChemicalTreatment from './ChemicalTreatment/ChemicalTreatment';

const PostProcessing = (props) => {


    // 1) For all the possible cards
    const [allSteps, setAllSteps] = useState([]);

    const handleAnnealing = () => {
        setAllSteps((prevSteps) => [...prevSteps, { type: 'Annealing' }]);
    };

    const handleChemicalTreat = () => {
        setAllSteps((prevSteps) => [...prevSteps, { type: 'ChemicalTreat' }]);
    };

    const handleOther = () => {
        setAllSteps((prevSteps) => [...prevSteps, { type: 'OtherSP' }]);
    };
      
    const handleRemoveStep = (index) => {
        setAllSteps((prevSteps) => prevSteps.filter((_, i) => i !== index));
    };


    // 2) Need to be able to render a help icon button that has the details for some of the more confusing stuff

    const [isAlertOpen, setAlert] = useState(false);

    const handleHelpClick = () => {
        setAlert(true);
    };

    const handleCloseAlert = () => {
        setAlert(false);
    }

    const renderHelpButton = () => (
        <>
            <IconButton onClick={handleHelpClick}>
                <HelpContainer>
                    <QuestionMarkOutlinedIcon style={{ color: 'black', fontSize: '30px' }} />
                </HelpContainer>
            </IconButton>
            <Dialog open={isAlertOpen} onClose={handleCloseAlert}>
                <DialogTitle>
                    <Typography variant="h6" style={{ fontWeight: 'bold' }}>Need Some Help?</Typography>
                </DialogTitle>
                <DialogContent>
                    <Typography variant="body1">Here are some tips for filling out the Laboratory Section?</Typography>
                    <ul>
                        <li>
                        <Typography variant="body1">Tip 1: Date field is in mm/dd/yyyy</Typography>
                        </li>
                        <li>
                        <Typography variant="body1">Tip 2: Lab Notebook ID field enter in the Lab notebook number and page: ex.) RV_1.99</Typography>
                        </li>
                        <li>
                        <Typography variant="body1">Tip 3: Lab Sample ID field enter in the sample identifier in the lab notebook: ex.) M317_5gL</Typography>
                        </li>
                    </ul>
                </DialogContent>
                <DialogContent>
                    <Typography variant="body1">Here are some tips for filling out the Literature Section?</Typography>
                    <ul>
                        <li>
                        <Typography variant="body1">Tip 1: Publisher field will be the university name if it is a dissertation</Typography>
                        </li>
                        <li>
                        <Typography variant="body1">Tip 2: Location field will be the main author's major affiliation</Typography>
                        </li>
                        <li>
                        <Typography variant="body1">Tip 3: Citation Date is in mm/dd/yyyy</Typography>
                        </li>
                    </ul>
                </DialogContent>
            </Dialog>
        </>
    );

    // Show the Next Page button
    const [nextButton, setShowNextPageButton] = useState(false);

    const showButton = () => {
        setShowNextPageButton(true);
    };

    // Navigate to the next page here
    const navigateTo = useNavigate();
    const handleNext = () => {
        // Perform logic
        // ...
        // Navigate to the Device Measurement page
        navigateTo('/dev-measurement');
    };

    const handleCTButtonClick = () => {
        handleChemicalTreat();
        showButton();
    };
      
    const handleAnnButtonClick = () => {
        handleAnnealing();
        showButton();
    };

    const handleOtherButtonClick = () => {
        handleOther();
        showButton();
    };

    return (
        <div>
            <NavBar title="Post Processing"></NavBar>
            {renderHelpButton()}
            <ContainerMain>
                <Box 
                    handleAddCT={handleCTButtonClick}
                    handleAddAnn={handleAnnButtonClick}
                    handleAddOth={handleOtherButtonClick}
                ></Box>
                <div>
                    {/* Display all steps in the order they are added */}
                    {allSteps.map((step, index) => {
                        if(step.type === 'Annealing') {
                            return (
                                <Annealing
                                    key={index}
                                    number={index + 1}
                                    onRemove={() => handleRemoveStep(index)}
                                ></Annealing>
                            );
                        } else if(step.type === 'OtherSP') {
                            return (
                                <OtherSP
                                    key={index}
                                    number={index + 1}
                                    onRemove={() => handleRemoveStep(index)}
                                ></OtherSP>
                            );
                        } else if(step.type === 'ChemicalTreat') {
                            return (
                                <ChemicalTreatment
                                    key={index}
                                    number={index + 1}
                                    onRemove={() => handleRemoveStep(index)}
                                ></ChemicalTreatment>
                            );
                        }
                    })}
                </div>
            </ContainerMain>
            {nextButton && <NextPageButton onClick={handleNext}>Next</NextPageButton>}
        </div>
    );
};

export default PostProcessing;