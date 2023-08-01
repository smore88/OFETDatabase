import React, { useState } from 'react';
import { Container, ContainerLabel, 
    InputFieldsContainer, CustomTextField, SolventDropDowns} from './DeviceFabricationStyleComponents';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';

const Electrode = () => {

    return (
        <div>
			<div className='solvent-info-card'>
				<ContainerLabel>Electrode Contact Dimensions & Details</ContainerLabel>
				
				<InputFieldsContainer>
					<FormControl>
						<InputLabel label="electron_config">Electron Configuration</InputLabel>
						<SolventDropDowns
							id="electron_config"
							// value={age}
							// label="common-name"
							// onChange={handleChange}
						>
							<MenuItem value={"BGTC"}>BGTC</MenuItem>
							<MenuItem value={"BGBC"}>BGBC</MenuItem>
							<MenuItem value={"TGTC"}>TGTC</MenuItem>
							<MenuItem value={"TGBC"}>TGBC</MenuItem>
						</SolventDropDowns>
					</FormControl>
					
					<CustomTextField 
						id="channel_length"
						label="Channel Length" 
						variant="outlined">
					</CustomTextField>
				</InputFieldsContainer>

				<InputFieldsContainer>
					<CustomTextField
						id="channel_width"
						label="Channel Width"
						variant="outlined">
					</CustomTextField>

					<FormControl>
						<InputLabel label="adhesion_layer">Adhesion Layer</InputLabel>
						<SolventDropDowns
							id="adhesion_layer"
							// value={age}
							// label="common-name"
							// onChange={handleChange}
						>
							<MenuItem value={"Cr"}>Cr</MenuItem>
							<MenuItem value={"MoO3"}>MoO3</MenuItem>
						</SolventDropDowns>
					</FormControl>
				</InputFieldsContainer>

				<InputFieldsContainer>
					<FormControl>
						<InputLabel label="electrode_material">Electrode Material</InputLabel>
						<SolventDropDowns
							id="electrode_material"
							// value={age}
							// label="common-name"
							// onChange={handleChange}
						>
							<MenuItem value={"Au"}>Au</MenuItem>
							<MenuItem value={"Ag"}>Ag</MenuItem>
						</SolventDropDowns>
					</FormControl>
				</InputFieldsContainer>
			</div>
        </div>
    );
};

export default Electrode;