import React, { useState } from 'react';
import SolMakeSolvent from "./SingleSolventCard";
import AddIcon from '@mui/icons-material/AddOutlined';
import Button from '@mui/material/Button';
import { CustomButton, ButtonContainer, ContentContainer, ParentContainer } from '../SolutionMakeupStyleComponents';
import SingleSolventCard from './SingleSolventCard';

const AddSolventCard = (props) => {
    // 1) Keep track of all the current cards and update the state of the card so initially there is going to just be 1 card.
    const [solventCardCount, setSolventCardCount] = useState([1]);

    // 2) add to the cardCount each time this function is called
    const handleSolventCard = () => {
        setSolventCardCount(prevSolventCards => [...prevSolventCards, {}]);
    }

    // 3) we have a remove icon so everytime that icon is clicked remove the card
    const handleRemoveCard = (index) => {
        setSolventCardCount((prevSolventCards) =>
            prevSolventCards.filter((_, i) => i !== index)
        );
    }

    return (
        <ParentContainer>
            <div>
                {solventCardCount.map((_, index) => (
                    <div key={index}>
                        <SingleSolventCard number={index + 1} onRemove={() => handleRemoveCard(index)}></SingleSolventCard>
                    </div>
                ))}
            </div>
            <ButtonContainer>
                <CustomButton onClick={handleSolventCard}>ADD SOLVENT</CustomButton>
            </ButtonContainer>
        </ParentContainer>
    );
};

export default AddSolventCard;
