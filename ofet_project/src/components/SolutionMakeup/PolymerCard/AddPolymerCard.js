import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/AddOutlined';
import Button from '@mui/material/Button';
import { CustomButton, ButtonContainer, ContentContainer, ParentContainer } from '../CustomStyleComponents';
import SinglePolymerCard from './SinglePolymerCard';
import '../SolutionInformation/SolutionInformation.css';

const AddPolymerCard = (props) => {
    // 1) Keep track of all the current cards and update the state of the card so initially there is going to just be 1 card.
    const [polymerCardCount, setPolymerCardCount] = useState([1]);

    // 2) add to the cardCount each time this function is called
    const handlePolymerCard = () => {
        setPolymerCardCount(prevPolymerCards => [...prevPolymerCards, {}]);
    }

    return (
        <ParentContainer>
            <div>
                {polymerCardCount.map((_, index) => (
                    <div key={index}>
                        <SinglePolymerCard number={index + 1}></SinglePolymerCard>
                    </div>
                ))}
            </div>
            <ButtonContainer>
                <CustomButton onClick={handlePolymerCard}>ADD POLYMER</CustomButton>
            </ButtonContainer>
        </ParentContainer>
    );
}

export default AddPolymerCard;
