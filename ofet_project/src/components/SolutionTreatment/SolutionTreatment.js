import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { NextPageButton, HelpContainer, ContainerMain } from './SolutionTreatmentStyleComponents';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

import NavBar from '../GenericUI/NavBar';
import Box from './SelectTreatmentBox/Box';

import PoorSolvent from './PoorSolvent/PoorSolvent';
import Mixing from './Mixing/Mixing';
import Aging from './Aging/Aging';
import Sonication from './Sonication/Sonication';
import UVIrr from './UVIrradiation/UVIrr';

import { IconButton, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';

const SolutionTreatment = (props) => {


    // 1) For all the possible cards
    const [allSteps, setAllSteps] = useState([]);

    const handlePoorSolventCard = () => {
        setAllSteps((prevSteps) => [...prevSteps, { type: 'PoorSolvent' }]);
    };

    const handleMixingCard = () => {
        setAllSteps((prevSteps) => [...prevSteps, { type: 'Mixing' }]);
    };

    const handleUVIrradiation = () => {
        setAllSteps((prevSteps) => [...prevSteps, { type: 'UVIrr' }]);
    };

    const handleAging = () => {
        setAllSteps((prevSteps) => [...prevSteps, { type: 'Aging' }]);
    };

    const handleSonication = () => {
        setAllSteps((prevSteps) => [...prevSteps, { type: 'Sonication' }]);
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
    const [showNextPageButton, setShowNextPageButton] = useState(false);

    const showButton = () => {
        setShowNextPageButton(true);
    };


    // 3) Navigate to the next page here

    const navigateTo = useNavigate();
    const handleNext = () => {
        // Perform logic
        // ...
        // Navigate to the Device Fabrication page
        navigateTo('/dev-fabrication');
    };

    const handlePSButtonClick = () => {
        handlePoorSolventCard();
        showButton();
    };
    
    const handleMButtonClick = () => {
        handleMixingCard();
        showButton();
    };
    
    const handleUVIButtonClick = () => {
        handleUVIrradiation();
        showButton();
    };
      
    const handleAgingButtonClick = () => {
        handleAging();
        showButton();
    };
      
    const handleSonicationButtonClick = () => {
        handleSonication();
        showButton();
    };

    return (
        <div>
            <NavBar title="Solution Treatment"></NavBar>
            {renderHelpButton()}
            <ContainerMain>
                <Box 
                    handleAddPS={handlePSButtonClick}
                    handleAddM={handleMButtonClick}
                    handleAddUVI={handleUVIButtonClick}
                    handleAddAging={handleAgingButtonClick}
                    handleAddSonication={handleSonicationButtonClick}
                ></Box>
                <div>
                    {/* Display all steps in the order they are added */}
                    {allSteps.map((step, index) => {
                        if(step.type === 'PoorSolvent') {
                            return (
                                <PoorSolvent
                                    key={index}
                                    number={index + 1}
                                    onRemove={() => handleRemoveStep(index)}
                                ></PoorSolvent>
                            );
                        } else if(step.type === 'Mixing') {
                            return (
                                <Mixing
                                    key={index}
                                    number={index + 1}
                                    onRemove={() => handleRemoveStep(index)}
                                ></Mixing>
                            );
                        } else if(step.type === 'Aging') {
                            return (
                                <Aging
                                    key={index}
                                    number={index + 1}
                                    onRemove={() => handleRemoveStep(index)}
                                ></Aging>
                            );
                        } else if(step.type === 'Sonication') {
                            return (
                                <Sonication
                                    key={index}
                                    number={index + 1}
                                    onRemove={() => handleRemoveStep(index)}
                                ></Sonication>
                            );
                        } else if(step.type === 'UVIrr') {
                            return (
                                <UVIrr
                                    key={index}
                                    number={index + 1}
                                    onRemove={() => handleRemoveStep(index)}
                                ></UVIrr>
                            );
                        }
                    })}
                </div>
            </ContainerMain>
            {showNextPageButton && <NextPageButton onClick={handleNext}>Next</NextPageButton>}
        </div>
    );
};

export default SolutionTreatment;