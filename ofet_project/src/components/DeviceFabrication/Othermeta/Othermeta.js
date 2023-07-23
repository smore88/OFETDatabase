import React, { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


import { FormControl } from '@mui/material';

import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import './Othermeta.css';

import { Headers, 
    DevTextFields, 
    DevFieldsContainer, 
    HeaderContainer,  
    DevDropDowns} from '../DeviceFabricationStyleComponents.js'



const Othermeta = (props) => {
    const {number, onRemove} = props;

    return (
        // Whole purple backdrop card, later make this into a card.js and populate that, but for now this is good
        <div>
            <div className='other-info-card' >
                <HeaderContainer>
                    <Headers variant="subtitle1">Include Other Metadata Here: {number}</Headers>
                {/**   <RemoveCircleOutlineIcon onClick={onRemove}></RemoveCircleOutlineIcon>*/}
                </HeaderContainer>

                {/* First 2 input boxes in row 0 */}
                <DevFieldsContainer style={{ marginTop: 10 }}>
                <DevTextFields 
                        id="dielectric1-capac"
                        label="Dielectric 1 Capacitance" 
                        variant="outlined">
                    </DevTextFields>
                
                    
                    <DevTextFields 
                       id="dielectric2-capac"
                       label="Dielectric 2 Capacitance" 
                        variant="outlined">
                    </DevTextFields>
                </DevFieldsContainer>

                {/* First 2 input boxes in row 1 */}
                <DevFieldsContainer>
                    <DevTextFields
                        id="metadata1"
                        label="Metadata 1"
                        variant="outlined">
                    </DevTextFields>
                    
                    <DevTextFields 
                        id="metadata2"
                        label="Metadata 2" 
                        variant="outlined">
                    </DevTextFields>
                </DevFieldsContainer>

                {/* First 2 input boxes in row 2 */}
                <DevFieldsContainer>
                    <DevTextFields
                       id="metadata3"
                       label="Metadata 3"
                        variant="outlined">
                    </DevTextFields>
                
                </DevFieldsContainer>

                {/* First 2 input boxes in row 2 */}
            </div>
        </div>
    );
}

export default Othermeta;