import React, { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


import { FormControl } from '@mui/material';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import './UVOzone.css';

import { Headers, 
    SolventTextFields, 
    InputFieldsContainer, 
    HeaderContainer,  
    SolventDropDowns} from '../SubstratePretreatStyleComponents'

const UVOzone = (props) => {
    const {number, onRemove} = props;

    return (
        // Whole purple backdrop card, later make this into a card.js and populate that, but for now this is good
        <div>
            <div className='uvozo-info-card'>
                <HeaderContainer>
                    <Headers variant="subtitle1">Treatment Step {number}: UV Ozone</Headers>
                    <RemoveCircleOutlineIcon onClick={onRemove}></RemoveCircleOutlineIcon>
                </HeaderContainer>                

                {/* First 2 input boxes in row 1 */}
                <InputFieldsContainer>
                    <SolventTextFields
                        id="time"
                        label="Time"
                        variant="outlined">
                    </SolventTextFields>
                    
                    <SolventTextFields 
                        id="equipment_model"
                        label="Equipment Model" 
                        variant="outlined">
                    </SolventTextFields>
                </InputFieldsContainer>

                <InputFieldsContainer>
                    <SolventTextFields
                        id="intensity_"
                        label="Intensity"
                        variant="outlined">
                    </SolventTextFields>

					<SolventTextFields
                        id="description"
                        label="Description"
                        variant="outlined">
                    </SolventTextFields>
                </InputFieldsContainer>
            </div>
        </div>
    );
}

export default UVOzone;