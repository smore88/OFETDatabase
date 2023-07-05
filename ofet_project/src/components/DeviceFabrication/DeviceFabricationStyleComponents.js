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
  transition: background-color 0.3s ease;
  margin: auto;

  /* Add the following styles for center alignment */
  display: flex;
  justify-content: center;

  &:hover {
    background-color: #a892ee;
  }
`;



// NEW THINGS HERE 

export const SolutionTreatmentBox = styled('div')`
  margin-left: 20px;
  margin-top: 32px;
  width: 300px;
  height: 400px;
  border: 5px solid #000000;
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
    height: 5px;
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

export const HelpContainer = styled('div')`
    background-color: #a892ee;
    padding: 1rem;
    margin: 2rem auto;
    width: 20px;
    height: 20px;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 111px;
    right: 40px;    
`;

export const ContainerMain = styled('div')`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  margin-left: 30px;
  margin-top: 0px;
  gap: 150px; /* Add space of 40px between the two components */
`;
