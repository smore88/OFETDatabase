import React, { useState } from 'react';

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
//import { NextPageButton, HelpContainer, ContainerMain } from './SolutionTreatmentStyleComponents';

import { FormControl } from '@mui/material';

//import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';

import { Headers, 
    DevTextFields, 
    DevFieldsContainer, 
    HeaderContainer,  
    DevDropDowns} from '../DeviceFabricationStyleComponents.js'

    import './Electrode.css';

const Electrode = (props) => {
    const {number, onRemove} = props;

    return (
        // Whole purple backdrop card, later make this into a card.js and populate that, but for now this is good
        <div>
            <div className='electrode-info-card' >
                <HeaderContainer>
                    <Headers variant="subtitle1">Electrode Contact Dimensions and Details: {number}</Headers>
                {/**   <RemoveCircleOutlineIcon onClick={onRemove}></RemoveCircleOutlineIcon> */} 
                </HeaderContainer>

                {/* First 2 input boxes in row 0 */}
                <DevFieldsContainer style={{ marginTop: 10 }}>
                    <FormControl>
                        <InputLabel id="elecConfig-label">Electrode Configuration</InputLabel>
                        <DevDropDowns
                            id="elecConfig-select"
                        >
                            <MenuItem value={"bgtc"}>BGTC</MenuItem>
                            <MenuItem value={"bgbc"}>BGBC</MenuItem>
                            <MenuItem value={"tgtc"}>TGTC</MenuItem>
                            <MenuItem value={"tgbc"}>TGBC</MenuItem>
                        </DevDropDowns>
                    </FormControl>
                       <DevTextFields
                        id="Channel Length"
                        label="Channel Length"
                        variant="outlined">
                    </DevTextFields>
        
                </DevFieldsContainer>

                {/* First 2 input boxes in row 1 */}
                <DevFieldsContainer>
                 
                    
                    <DevTextFields 
                       id="Channel Width"
                       label="Channel Width"
                        variant="outlined">
                    </DevTextFields>
                     <FormControl>
                        <InputLabel label="adhension-layer-label">Adhension Layer</InputLabel>
                        <DevDropDowns
                            id="adhension-layer-select" >
                            <MenuItem value={"cr"}>Cr</MenuItem>
                            <MenuItem value={"moo3"}>MoO3</MenuItem>
                        </DevDropDowns>
                    </FormControl>
                </DevFieldsContainer>
<DevFieldsContainer>
               

                    
                    <FormControl>
                        <InputLabel label="electrode-material-label">Electrode Material</InputLabel>
                        <DevDropDowns
                            id="electrode-material-select"
                        >
                            <MenuItem value={"au"}>Au</MenuItem>
                            <MenuItem value={"ag"}>Ag</MenuItem>
                        </DevDropDowns>
                    </FormControl>
                {/* First 2 input boxes in row 2 */}
            </DevFieldsContainer>

            </div>
        </div>
    );
}

export default Electrode;