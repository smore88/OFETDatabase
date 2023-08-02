import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NextPageButton, HelpContainer, ContainerMain } from './SubstratePretreatStyleComponents';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import NavBar from '../GenericUI/NavBar';
import Box from './SelectTreatmentBox/Box';


import './SubstratePretreatStyleComponents';

import { IconButton, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import ChemicalTreat from './ChemicalTreat/ChemicalTreat';
import UVOzone from './UVOzone/UVOzone';
import OtherSP from './OtherSP/OtherSP';
import Annealing from './Annealing/Annealing';
import Plasma from './Plasma/Plasma';
import SAM from './SAM/SAM';

const SubstratePretreat = (props) => {

    // 1) For all the possible cards
    const [pretreatSteps, setSteps] = useState([]);

    const handleChemicalTreat = () => {
        setSteps((prevSteps) => [...prevSteps, { type: 'ChemicalTreat' }]);
    };

    const handleUVOzone = () => {
        setSteps((prevSteps) => [...prevSteps, { type: 'UVOzone' }]);
    };

    const handleSAM = () => {
        setSteps((prevSteps) => [...prevSteps, { type: 'SAM' }]);
    };

    const handlePlasma = () => {
        setSteps((prevSteps) => [...prevSteps, { type: 'Plasma' }]);
    };

    const handleAnnealing = () => {
        setSteps((prevSteps) => [...prevSteps, { type: 'Annealing' }]);
    };

    const handleOther = () => {
        setSteps((prevSteps) => [...prevSteps, { type: 'OtherSP' }]);
    };
      
    const handleRemoveStep = (index) => {
        setSteps((prevSteps) => prevSteps.filter((_, i) => i !== index));
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
    const [nextPageAfterButton, setShowNextPageButton] = useState(false);

    const showButton = () => {
        setShowNextPageButton(true);
    };

    // Navigate to the next page here
    const navigateTo = useNavigate();
    const handleNext = () => {
        // Perform logic
        // ...
        // Navigate to the Coating Process page
        navigateTo('/coat-process');
    };

    const handleCTButtonClick = () => {
        handleChemicalTreat();
        showButton();
    };
    
    const handleUVOButtonClick = () => {
        handleUVOzone();
        showButton();
    };
    
    const handleSAMButtonClick = () => {
        handleSAM();
        showButton();
    };
      
    const handlePlasButtonClick = () => {
        handlePlasma();
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
            <NavBar title="Substrate Pretreat"></NavBar>
            {renderHelpButton()}
            <ContainerMain>
                <Box 
                    handleAddCT={handleCTButtonClick}
                    handleAddUVO={handleUVOButtonClick}
                    handleAddSAM={handleSAMButtonClick}
                    handleAddPlas={handlePlasButtonClick}
                    handleAddAnn={handleAnnButtonClick}
                    handleAddOther={handleOtherButtonClick}>
                </Box>
                <div>
                    {/* Display all steps in the order they are added */}
                    {pretreatSteps.map((step, index) => {
                        if(step.type === 'ChemicalTreat') {
                            return (
                                <ChemicalTreat
                                    key={index}
                                    number={index + 1}
                                    onRemove={() => handleRemoveStep(index)}
                                ></ChemicalTreat>
                            );
                        } else if(step.type === 'UVOzone') {
                            return (
                                <UVOzone
                                    key={index}
                                    number={index + 1}
                                    onRemove={() => handleRemoveStep(index)}
                                ></UVOzone>
                            );
                        } else if(step.type === 'SAM') {
                            return (
                                <SAM
                                    key={index}
                                    number={index + 1}
                                    onRemove={() => handleRemoveStep(index)}
                                ></SAM>
                            );
                        } else if(step.type === 'Annealing') {
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
                        } else if(step.type === 'Plasma') {
                            return (
                                <Plasma
                                    key={index}
                                    number={index + 1}
                                    onRemove={() => handleRemoveStep(index)}
                                ></Plasma>
                            );
                        }
                    })}
                </div>
            </ContainerMain>

            {nextPageAfterButton && <NextPageButton onClick={handleNext}>Next</NextPageButton>}
        </div>
    );
};

export default SubstratePretreat;