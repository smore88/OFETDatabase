import React, { useState } from 'react';
import SolMakeSolvent from "./spinCard";
import AddIcon from '@mui/icons-material/AddOutlined';
import Button from '@mui/material/Button';
import { CustomButton, ButtonContainer, ContentContainer, ParentContainer } from '../CoatingProcessStyleComponents';
import SingleSpinCard from './spinCard';
//import { NextPageButton, ContainerMain } from './CoatingProcessStyleComponents';

const AddSpinCard = (props) => {
    // 1) Keep track of all the current cards and update the state of the card so initially there is going to just be 1 card.
    const [spinCardCount, setSpinCardCount] = useState([1]);

    // 2) add to the cardCount each time this function is called
    const handleBladeCard = () => {
        setSpinCardCount(prevSpinCards => [...prevSpinCards, {}]);
    }

    // 3) we have a remove icon so everytime that icon is clicked remove the card
    const handleSpinRemoveCard = (index) => {
        setSpinCardCount((prevSpinCards) =>
            prevSpinCards.filter((_, i) => i !== index)
        );
    }

    return (
  <ParentContainer>
            <div>
                {spinCardCount.map((_, index) => (
                    <div key={index}>
                        <singleSpinCard 
                            number={index + 1} 
                            onRemove={() => handleSpinRemoveCard(index)}
                        ></singleSpinCard>
                    </div>
                ))}
            </div>
            {/* <ButtonContainer>
                    <CustomButton onClick={handleSolventCard}>ADD SOLVENT</CustomButton>
            </ButtonContainer> */}
        </ParentContainer>
    );
};
export default AddSpinCard;
