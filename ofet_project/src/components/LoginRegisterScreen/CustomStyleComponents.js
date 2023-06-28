import { styled } from '@mui/system';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/AddOutlined';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';


// Here will be the customed styled components using MaterialUI

export const CustomButton = styled(Button)`
    background-color:  #40005d;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    padding: 10px 20px;
    width: 200px;
    margin-left: 10px;

    &:hover {
        background-color: #510674;
        color: white; // Set the text color to white for better visibility
    }

    ${({ active }) =>
        active &&
        `
        background-color: #740451;
    `}
`;

export const ButtonContainer = styled('div')`
    text-align: center;
`;

export const LoginPageButton = styled(Button)`
    background-color:  #40005d;
    color: white;
    font-weight: bold;
    border-radius: 8px;
    padding: 10px 20px;
    transition: background-color 0.3s ease; /* Add transition for smooth hover effect */

    &:hover {
        background-color: #510674;
        color: white; // Set the text color to white for better visibility
    }

    margin: 10px auto;
`;

export const ProtectedFieldsContainer = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
`;

export const CustomUIField = styled(TextField)`
  margin-top: 10px;
  width: 200px;
  background-color: white; /* Set the background color to white */
  border-radius: 8px;
  border: 2px solid black;
  border-width: 2px; /* Set the border width to bold */
`;

export const PasswordFieldContainer = styled('div')`
    display: flex;
    align-items: center;
`;

export const ToggleButton = styled(IconButton)`
    margin-left: -40px;
    margin-top: 10px;

    svg {
        color: black; /* Set the color of the toggle icon to black */
    }
`;