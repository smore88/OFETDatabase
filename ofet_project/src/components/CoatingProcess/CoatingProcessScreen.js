import React, { useState } from 'react';
//import SolutionInformation from './SolutionInformation/SolutionInformation';
import { useNavigate } from 'react-router-dom';
import { NextPageButton, ContainerMain } from './CoatingProcessStyleComponents';
import NavBar from '../GenericUI/NavBar';
import CoatBox from './SelectSegmentBox/segmentBox';
import SpinCard from './B-Card/bladeCard';
import BladeCard from './S-Card/spinCard';
import DropCard from './D-Card/dropCard';
import OtherCard from './O-Card/otherCard';
import { IconButton, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import QuestionMarkOutlinedIcon from '@mui/icons-material/QuestionMarkOutlined';
import { HelpContainer } from './CoatingProcessStyleComponents';

    const CoatingProcessPage = (props) => {
        // For the polymer Cards
        const [spinCards, setSpinCards] = useState([1]);
        const [showSpinCard, setShowSpinCard] = useState(false);
      
        const handleSpinCard = () => {
          setSpinCards([...spinCards, {}]);
          setShowSpinCard(true);
          setShowBladeCard(false);
          setShowDropCard(false);
          setShowOtherCard(false);
        };
      
        const handleRemoveSpinCard = (index) => {
          setSpinCards((spinCards) => spinCards.filter((_, i) => i !== index));
        };
      
        // For solvent cards
        const [bladeCards, setBladeCards] = useState([1]);
        const [showBladeCard, setShowBladeCard] = useState(false);
      
        const handleBladeCard = () => {
          setBladeCards([...bladeCards, {}]);
          setShowBladeCard(true);
          setShowSpinCard(false);
          setShowDropCard(false);
          setShowOtherCard(false);
        };
      
        const handleRemoveBladeCard = (index) => {
          setBladeCards((bladeCards) => bladeCards.filter((_, i) => i !== index));
        };
      
        const [dropCards, setDropCards] = useState([1]);
        const [showDropCard, setShowDropCard] = useState(false);
      
        const handleDropCard = () => {
          setDropCards([...dropCards, {}]);
          setShowDropCard(true);
          setShowSpinCard(false);
          setShowBladeCard(false);
          setShowOtherCard(false);
        };
      
        const handleRemoveDropCard = (index) => {
          setDropCards((dropCards) => dropCards.filter((_, i) => i !== index));
        };
      
        const [otherCards, setOtherCards] = useState([1]);
        const [showOtherCard, setShowOtherCard] = useState(false);
      
        const handleOtherCard = () => {
          setOtherCards([...otherCards, {}]);
          setShowOtherCard(true);
          setShowSpinCard(false);
          setShowBladeCard(false);
          setShowDropCard(false);
        };
      
        const handleRemoveOtherCard = (index) => {
          setOtherCards((otherCards) => otherCards.filter((_, i) => i !== index));
        };
      
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

    // Navigate to different things
    const navigateTo = useNavigate();
    const handleNext = () => {
        // Perform logic
        // ...
        // Navigate to the solution treatment page
        navigateTo('/sol-treatment');
    };

    return (
        <div>
          <NavBar title="Coating Process" />
          {/* Render the help button */}
          {renderHelpButton()}
    
          <ContainerMain>
            {/* Render the CoatBox */}
            <CoatBox
              handleSpin={handleSpinCard}
              handleBlade={handleBladeCard}
              handleDrop={handleDropCard}
              handleOther={handleOtherCard}
            />
    
            <div>
              {/* Show or hide the components based on the state */}
              {showBladeCard && (
                <BladeCard
                  /* ...props or other attributes... */
                  onRemove={() => setShowBladeCard(false)}
                />
              )}
    
              {showSpinCard && (
                <SpinCard
                  /* ...props or other attributes... */
                  onRemove={() => setShowSpinCard(false)}
                />  
                
              )}
   
              {showDropCard && (
                <DropCard
                  /* ...props or other attributes... */
                  onRemove={() => setShowDropCard(false)}
                />
              )}
    
              {showOtherCard && (
                <OtherCard
                  /* ...props or other attributes... */
                  onRemove={() => setShowOtherCard(false)}
                /> 
              )}
              
            </div>
          </ContainerMain>
    
          {/* Render the NextPageButton */}
        </div>
      );
    };
    export default CoatingProcessPage;