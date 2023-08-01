import React, { useState } from 'react';
import { Container, ContainerLabel, 
    InputFieldsContainer, CustomTextField, SolventDropDowns} from './DeviceFabricationStyleComponents';
import { Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { Form } from 'react-router-dom';

const MaterialDetails = () => {

    return (
        <div>
			<div className='solvent-info-card'>
				<ContainerLabel>Substrate Material Details</ContainerLabel>
				
				<InputFieldsContainer>
					<FormControl>
						<InputLabel label="gate_material">Gate Material</InputLabel>
						<SolventDropDowns
							id="gate_material"
							// value={age}
							// label="common-name"
							// onChange={handleChange}
						>
							<MenuItem value={"n-doped_Si"}>n-doped Si</MenuItem>
							<MenuItem value={"glass"}>glass</MenuItem>
							<MenuItem value={"PET"}>PET</MenuItem>
						</SolventDropDowns>
					</FormControl>
					
					<FormControl>
						<InputLabel label="dielectric_1_material">Dielectric 1 Material</InputLabel>
						<SolventDropDowns
							id="dielectric_1_material"
							// value={age}
							// label="common-name"
							// onChange={handleChange}
						>
							<MenuItem value={"sio2"}>SiO2</MenuItem>
                            <MenuItem value={"si3n4"}>Si3N4</MenuItem>
                            <MenuItem value={"Shellac"}>Shellac</MenuItem>
                            <MenuItem value={"pvp"}>PVP</MenuItem>
                            <MenuItem value={"pmma"}>PMMA</MenuItem>
                            <MenuItem value={"pan"}>PAN</MenuItem>
                            <MenuItem value={"cytop"}>CYTOP</MenuItem>
                            <MenuItem value={"6fda-dabc"}>6FDA-DABC</MenuItem>
						</SolventDropDowns>
					</FormControl>
				</InputFieldsContainer>

				<InputFieldsContainer>
					<CustomTextField
						id="dielectric_1_thickness"
						label="Dielectric 1 Thickness"
						variant="outlined">
					</CustomTextField>

					<FormControl>
						<InputLabel label="dielectric_2_material">Dielectric 2 Material</InputLabel>
						<SolventDropDowns
							id="dielectric_2_material"
							// value={age}
							// label="common-name"
							// onChange={handleChange}
						>
							<MenuItem value={"sio2"}>SiO2</MenuItem>
                            <MenuItem value={"si3n4"}>Si3N4</MenuItem>
                            <MenuItem value={"Shellac"}>Shellac</MenuItem>
                            <MenuItem value={"pvp"}>PVP</MenuItem>
                            <MenuItem value={"pmma"}>PMMA</MenuItem>
                            <MenuItem value={"pan"}>PAN</MenuItem>
                            <MenuItem value={"cytop"}>CYTOP</MenuItem>
                            <MenuItem value={"6fda-dabc"}>6FDA-DABC</MenuItem>
						</SolventDropDowns>
					</FormControl>

				</InputFieldsContainer>

				<InputFieldsContainer>
					<CustomTextField
						id="dielectric_2_thickness"
						label="Dielectric 2 Thickness"
						variant="outlined">
					</CustomTextField>
				</InputFieldsContainer>
			</div>
        </div>
    );
};

export default MaterialDetails;