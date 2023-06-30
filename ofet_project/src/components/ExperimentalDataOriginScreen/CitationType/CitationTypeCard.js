import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CitationTypeContainer, ContainerLabel, CitationTypeDropdown, Container, NextPageButton, 
    NextPageButtonContainer} from '../DataOriginStyleComponents';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import LiteratureCard from '../LitLabCards/LiteratureCard';
import LaboratoryCard from '../LitLabCards/LaboratoryCard';
import '../DataOriginForm.css'

const CitationTypeCard = () => {

    const [citationType, setCitationType] = useState('');

    const handleCitation = (event) => {
        setCitationType(event.target.value);
    };

    /*
    Conditionally rendering the Lit/Lab Card
    1) When someone clicks on the Literature dropdown I want the literature card to pop up
    2) Vice versa for the lab card
    */

    const navigateTo = useNavigate();
    const handleNext = () => {
        // Perform logic
        // ...
        // Navigate to the solution makeup page
        navigateTo('/sol-makeup');
    };

    const renderLiteratureComponents = (citationType) => {
        if (citationType === 'literature') {
          return (
                <>
                    <LiteratureCard />
                    <NextPageButtonContainer>
                        <NextPageButton onClick={handleNext}>Next</NextPageButton>
                    </NextPageButtonContainer>
                </>
          );
        } else if (citationType === 'laboratory') {
            return (
                <>
                    <LaboratoryCard />
                    <NextPageButtonContainer>
                        <NextPageButton onClick={handleNext}>Next</NextPageButton>
                    </NextPageButtonContainer>              
                </>
            );
          }
        return null;
    }

    return (
        <div>
            <Container>
                <ContainerLabel>Select Citation Type</ContainerLabel>
                <FormControl>
                    <InputLabel id="citation-type">Citation Type</InputLabel>
                    <CitationTypeDropdown 
                    value={citationType} 
                    onChange={handleCitation}
                    id="citation-type-select"
                    label="citation-type">

                        <MenuItem value="literature">Literature</MenuItem>
                        <MenuItem value="laboratory">Laboratory</MenuItem>
                    </CitationTypeDropdown>
                </FormControl>
            </Container>
            {renderLiteratureComponents(citationType)}
        </div>
    );
};

export default CitationTypeCard;