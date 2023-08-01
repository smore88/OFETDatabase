import React, { useState } from 'react';

import { Headers, 
    CoatTextFields, 
    CoatFieldsContainer, 
    HeaderContainer, 
    CustomButton, 
    CoatDropDowns,
    ButtonContainer } from '../CoatingProcessStyleComponents.js'
    import { NextPageButton, ContainerMain } from '../CoatingProcessStyleComponents';
    import { useNavigate } from 'react-router';
import AddIcon from '@mui/icons-material/AddOutlined';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';


import './spinCard.css';
import { FormControl } from '@mui/material';


const SpinCard = (props) => {
    const {number, onRemove} = props;

    return (
        // Whole purple backdrop card, later make this into a card.js and populate that, but for now this is good
        <div>
            <div className='info-card' >
                {/* below will be for the name and addIcon */}
                <HeaderContainer>
                    <Headers variant="subtitle1">Deposition Type: Spin {number}</Headers>
       
                </HeaderContainer>

                {/* First 2 input boxes in row 0 */}
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
                     id="spin-rate"
                     label="Spin Rate"
                     variant="outlined">
                    </CoatTextFields>
                </CoatFieldsContainer>

                <CoatFieldsContainer>
                  
                    <CoatTextFields
                   id="spin-time"
                   label="Spin Time"
                   variant="outlined">
                    </CoatTextFields>

                     <CoatTextFields
                     id="deposite-vol"
                     label="Deposited Volume"
                     variant="outlined">
                    </CoatTextFields>
                </CoatFieldsContainer>

                <CoatFieldsContainer>
                    <CoatTextFields
                     id="temp"
                     label="Temperature"
                     variant="outlined">
                    </CoatTextFields>
                    
                      <CoatTextFields
                    id="inject-method"
                    label="Injection Method"
                    variant="outlined">
                    </CoatTextFields>
                </CoatFieldsContainer>
                {/* First 2 input boxes in row 1 */}
                <CoatFieldsContainer>
              
                    
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

export default SpinCard;