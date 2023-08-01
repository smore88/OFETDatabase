import React, { useState } from 'react';
import { Headers, 
    CoatTextFields, 
    CoatFieldsContainer, 
    HeaderContainer,  
    CoatDropDowns} from '../CoatingProcessStyleComponents.js'
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';

import { NextPageButton, ContainerMain } from '../CoatingProcessStyleComponents';
import { useNavigate } from 'react-router';
import { FormControl } from '@mui/material';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';



const DropCard = (props) => {
    const {number, onRemove} = props;
    // 1) Keep track of all the current cards and update the state of the card so initially there is going to just be 1 card.
    const [dropCardCount, setDropCardCount] = useState(1);

    // 2) add to the cardCount each time this function is called
    const handleDropCard = () => {
        setDropCardCount(dropCardCount => dropCardCount + 1);
    }

    return (
        // Whole purple backdrop card, later make this into a card.js and populate that, but for now this is good
        <div>
            <div className='info-card' >
                {/* below will be for the name and addIcon */}
    {/* First 2 input boxes in row 0 */}
    <HeaderContainer>
                    <Headers variant="subtitle1">Deposition Type: Drop {number}</Headers>
                 
                </HeaderContainer>
                <CoatFieldsContainer>
                    <FormControl>
                  
                        <InputLabel > Select Enviroment</InputLabel>
                        <CoatDropDowns>
                        <MenuItem value="air">Air</MenuItem>
                        <MenuItem value="nitrogen">Nitrogen</MenuItem>
                        <MenuItem value="argon">Argon</MenuItem>
                         <MenuItem value="Inert">Inert</MenuItem>
                        </CoatDropDowns>
                    </FormControl>
                    
                     <CoatTextFields
                          id="deposited-Vol"
                          label="Deposited Volume"
                          variant="outlined">
                    </CoatTextFields>
                </CoatFieldsContainer>
                <CoatFieldsContainer>
               
                    
                </CoatFieldsContainer>

            </div>
        </div>
    );
}

export default DropCard;