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


const OtherCard = (props) => {
    const {number, onRemove} = props;
    // 1) Keep track of all the current cards and update the state of the card so initially there is going to just be 1 card.
    const [otherCardCount, setOtherCardCount] = useState(1);

    // 2) add to the cardCount each time this function is called
    const handleOtherCard = () => {
        setOtherCardCount(otherCardCount => otherCardCount + 1);
    }
    
    return (
        // Whole purple backdrop card, later make this into a card.js and populate that, but for now this is good
        <div>
            <div className='info-card' >
                {/* below will be for the name and addIcon */}
    {/* First 2 input boxes in row 0 */}
    <HeaderContainer>
                    <Headers variant="subtitle1">Other Information: {number}</Headers>
        
                </HeaderContainer>
                <CoatFieldsContainer>
                <FormControl>
                  
                  <InputLabel > Select Deposition</InputLabel>
                  <CoatDropDowns>
                  <MenuItem value="dip">Dip Coating</MenuItem>
                  <MenuItem value="wire">Wire Bar Coating</MenuItem>
                  <MenuItem value="ink-jet">Ink Jet Coating</MenuItem>
                   <MenuItem value="spray">Spray</MenuItem>
                  </CoatDropDowns>
              </FormControl>
                    <FormControl>
                  
                        <InputLabel > Select Enviroment</InputLabel>
                        <CoatDropDowns>
                        <MenuItem value="air">Air</MenuItem>
                        <MenuItem value="nitrogen">Nitrogen</MenuItem>
                        <MenuItem value="argon">Argon</MenuItem>
                         <MenuItem value="Inert">Inert</MenuItem>
                        </CoatDropDowns>
                    </FormControl>
                    
                </CoatFieldsContainer>

                <CoatFieldsContainer> 
                <CoatTextFields
                      id="coat-speed"
                    label="Coating Speed"
                    variant="outlined">
                    </CoatTextFields>

                <CoatTextFields
                      id="temp"
                      label="Temperature"
                      variant="outlined">
                    </CoatTextFields>

                </CoatFieldsContainer>

                
                <CoatFieldsContainer> 
                <CoatTextFields
                        id="coat-direction"
                        label="Coating Direction"
                        variant="outlined">
                    </CoatTextFields>

                <CoatTextFields
                      id="description"
                      label="Description"
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
                      id="param1"
                      label="Param 1"
                      variant="outlined">
                    </CoatTextFields>

                </CoatFieldsContainer>

                <CoatFieldsContainer> 
                <CoatTextFields
                       id="param2"
                       label="Param 2"
                       variant="outlined">
                    </CoatTextFields>

                <CoatTextFields
                       id="meta1"
                       label="Meta Field 1"
                       variant="outlined">
                    </CoatTextFields>

                </CoatFieldsContainer>


                <CoatFieldsContainer> 
                <CoatTextFields
                     id="meta2"
                     label="Meta Field 2"
                     variant="outlined">
                    </CoatTextFields>

                </CoatFieldsContainer>
            </div>
        </div>
    );
}

export default OtherCard;