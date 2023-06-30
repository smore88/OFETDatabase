import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/AddOutlined';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';


// Here will be the customed styled components using MaterialUI
export const Headers = styled(Typography)`
    font-weight: bold;
    text-align: left;
    margin-left: 30px;
`;
export const SolventTextFields = styled(TextField)`
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
    width: 200px;
    height: 100%;
`;

export const SolventDropDowns = styled(Select)`
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
    width: 200px;
    color: black;
`;

export const InputFieldsContainer = styled('div')`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 10px
`;

export const HeaderContainer = styled('div')`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const ParentContainer = styled('div')`
    display: flex;
    justify-content: center; /* Adjust as needed */
    align-items: flex-start; /* Adjust as needed */
`;


export const NextPageButton = styled(Button)`
    background-color:  #510674;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    padding: 10px 20px;
    transition: background-color 0.3s ease; /* Add transition for smooth hover effect */

    &:hover {
    background-color: #a892ee; /* Update to the desired hover color */
    }
`;



// NEW THINGS HERE 

export const SolutionTreatmentBox = styled('div')`
  margin-left: 20px;
  margin-top: 20px;
  width: 300px;
  height: 400px;
  border: 7px solid #000000;
  display: flex;
  flex-direction: column;
  border-radius: 8px; /* Add rounded border radius */

`;

export const HeaderBox = styled('div')`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #a892ee;
    width: 300px;
    height: 20%;
    position: relative;

    &::after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 7px;
    background-color: #000000;
    }
`;

export const ButtonContainer = styled('div')`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 80%;
  padding: 10px;
  box-sizing: border-box;
  overflow-y: auto;

  & > :not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const CustomButton = styled(Button)`
  background-color: #510674;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  padding: 10px 10px;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    background-color: #a892ee;
  }
`;