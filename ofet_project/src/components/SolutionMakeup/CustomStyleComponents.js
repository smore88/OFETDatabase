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

export const CustomButton = styled(Button)`
  color: black;
  border: 1px solid black;
`;