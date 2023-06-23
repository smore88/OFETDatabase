import React, { useState } from 'react';
import { Headers, 
    SolventTextFields, 
    InputFieldsContainer, 
    HeaderContainer,  
    SolventDropDowns} from '../CustomStyleComponents.js'

import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';


import { FormControl } from '@mui/material';


const SinglePolymerCard = ({number}) => {

    // 1) Keep track of all the current cards and update the state of the card so initially there is going to just be 1 card.
    const [solventCardCount, setSolventCardCount] = useState(1);

    // 2) add to the cardCount each time this function is called
    const handleSolventCard = () => {
        setSolventCardCount(solventCardCount => solventCardCount + 1);
        //updateContainerHeight();
    }

    // const updateContainerHeight = () => {
    //     const container = document.getElementById('solventContainer');
    //     const containerHeight = container.scrollHeight;
    //     container.style.height = `${containerHeight}px`;
    // };
    
    // need to update the solvent id: 1,2,3,4.....

    return (
        // Whole purple backdrop card, later make this into a card.js and populate that, but for now this is good
        <div>
                <div className='solvent-info-card' >
                    {/* below will be for the name and addIcon */}
                    <HeaderContainer>
                        <Headers variant="subtitle1">Polymer {number}</Headers> 
                    </HeaderContainer>

                    {/* First 2 input boxes in row 0 */}
                    <InputFieldsContainer>
                        <FormControl>
                            <InputLabel id="entity-type-label">Entity Type</InputLabel>
                            <SolventDropDowns
                                id="entity-type-select"
                                // value={age}
                                label="entity-type"
                                // onChange={handleChange}
                            >
                                <MenuItem value={"polymer"}>Polymer</MenuItem>
                            </SolventDropDowns>
                        </FormControl>
                        
                        <FormControl>
                            <InputLabel label="common-name-label">Common Name</InputLabel>
                            <SolventDropDowns
                                id="common-name-select"
                                // value={age}
                                // label="common-name"
                                // onChange={handleChange}
                            >
                                <MenuItem value={"P3HT"}>P3HT</MenuItem>
                                <MenuItem value={"DPP-DTT"}>DPP-DTT</MenuItem>
                                <MenuItem value={"N2200"}>N2200</MenuItem>
                                <MenuItem value={"PDPP4T"}>PDPP4T</MenuItem>
                                <MenuItem value={"PBTTT"}>PBTTT</MenuItem>
                                <MenuItem value={"PS"}>PS</MenuItem>
                                <MenuItem value={"PDMS"}>PDMS</MenuItem>
                                <MenuItem value={"PDMS"}>PDMS</MenuItem>
                                <MenuItem value={"PC70BM"}>PC70BM</MenuItem>
                            </SolventDropDowns>
                        </FormControl>
                    </InputFieldsContainer>

                    {/* First 2 input boxes in row 1 */}
                    <InputFieldsContainer>
                        <SolventTextFields
                            id="iupac_name"
                            label="Iupac Name"
                            variant="outlined">
                        </SolventTextFields>
                        
                        <SolventTextFields 
                            id="mn_"
                            label="mn (kDa)" 
                            variant="outlined">
                        </SolventTextFields>
                    </InputFieldsContainer>

                    {/* First 2 input boxes in row 2 */}
                    <InputFieldsContainer>
                        <SolventTextFields
                            id="mw_"
                            label="mw (kDa)" 
                            variant="outlined">
                        </SolventTextFields>
                        
                        <SolventTextFields 
                            id="dispersity_"
                            label="Dispersity" 
                            variant="outlined">
                        </SolventTextFields>
                    </InputFieldsContainer>

                    {/* First 2 input boxes in row 2 */}
                    <InputFieldsContainer>
                        <SolventTextFields
                            id="mw_"
                            label="mw (kDa)" 
                            variant="outlined">
                        </SolventTextFields>
                    </InputFieldsContainer>
                </div>
        </div>
    );
}

export default SinglePolymerCard;