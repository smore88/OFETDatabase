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



const BladeCard = (props) => {
    const {number, onRemove} = props;
    // 1) Keep track of all the current cards and update the state of the card so initially there is going to just be 1 card.
    const [bladeCardCount, setBladeCardCount] = useState(1);

    // 2) add to the cardCount each time this function is called
    const handleBladeCard = () => {
        setBladeCardCount(bladeCardCount => bladeCardCount + 1);
    }

    return (
        // Whole purple backdrop card, later make this into a card.js and populate that, but for now this is good
        <div>
            <div className='info-card' >
                {/* below will be for the name and addIcon */}
    {/* First 2 input boxes in row 0 */}
    <HeaderContainer>
                    <Headers variant="subtitle1">Deposition Type: Blade {number}</Headers>
              
                </HeaderContainer>
                <CoatFieldsContainer>
                    <FormControl>
                        <InputLabel > Select Environment</InputLabel>
                        <CoatDropDowns>
                        <MenuItem value="air">Air</MenuItem>
                        <MenuItem value="nitrogen">Nitrogen</MenuItem>
                        <MenuItem value="argon">Argon</MenuItem>
                         <MenuItem value="Inert">Inert</MenuItem>
                        </CoatDropDowns>
                    </FormControl>

                     <CoatTextFields
                      id="coat-speed"
                      label="Coating Speed"
                      variant="outlined">
                    </CoatTextFields>
                </CoatFieldsContainer>
                <CoatFieldsContainer>
               
                    
                    <CoatTextFields
                   id="blade-angle"
                   label="Blade Angle"
                   variant="outlined">
                    </CoatTextFields>
                    <CoatTextFields
                   id="blade-material"
                   label="Blade Material"
                   variant="outlined">
                    </CoatTextFields>
                </CoatFieldsContainer>

                <CoatFieldsContainer>
                
                    
                    <CoatTextFields
                    id="blade-height"
                    label="Blade Height"
                    variant="outlined">
                    </CoatTextFields>
                     <CoatTextFields
                  id="temp"
                  label="Temperature"
                  variant="outlined">
                    </CoatTextFields>
                </CoatFieldsContainer>
                {/* First 2 input boxes in row 1 */}
                <CoatFieldsContainer>
               
                    
                    <CoatTextFields
                     id="freq"
                     label="Frequency"
                     variant="outlined">
                    </CoatTextFields>
                      <CoatTextFields
                   id="amp"
                   label="Amplitude"
                   variant="outlined">
                    </CoatTextFields>
                </CoatFieldsContainer>

                <CoatFieldsContainer>
              
                    
                    <CoatTextFields
                   id="deposited-Vol"
                   label="Deposited Volume"
                   variant="outlined">
                    </CoatTextFields>
                      <CoatTextFields 
                    id="description"
                    label="Description"
                    variant="outlined">
                </CoatTextFields>
                </CoatFieldsContainer>

            </div>
        </div>
    );
}

export default BladeCard;