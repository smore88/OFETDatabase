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

export const Container = styled('div')`
    background-color: #a892ee;
    padding: 1rem;
    margin: 2rem auto;
    flex-direction: column;
    width: 50rem;
    max-width: 95%;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0 1px 8px rgba(0, 0, 0, 0.25);
    top: 50%;
    left: 50%;
`;

export const ContainerLabel = styled(Typography)`
  color: black;
  font-weight: bold;
  text-align: left;
  margin-left: 15px;
`;

export const CitationTypeDropdown = styled(Select)`
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
    width: 200px;
    color: black;
`;

export const FieldsContainer = styled('div')`
    display: flex;
    flex-direction: row;
    gap: 10px;
    justify-content: center;
    margin: 0 auto;
    margin-bottom: 10px
`;

export const CustomTextField = styled(TextField)`
    background-color: white;
    border-radius: 5px;
    box-shadow: 0 0 5px rgba(255, 255, 255, 0.3);
    width: 200px;
    height: 100%;
    margin-top: 10px;
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

export const NextPageButton = styled(Button)`
  background-color: #510674;
  color: white;
  font-weight: bold;
  border-radius: 8px;
  padding: 10px 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #a892ee;
  }
`;

export const NextPageButtonContainer = styled('div')`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

export const ButtonContainer = styled('div')`
    text-align: center;
`;

