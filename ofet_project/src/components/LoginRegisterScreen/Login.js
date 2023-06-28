import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import NavBar from '../GenericUI/NavBar';
import { Button, ButtonGroup, TextField } from '@mui/material';
import { ButtonContainer, CustomButton, ProtectedFieldsContainer, CustomUIField, PasswordFieldContainer, ToggleButton, LoginPageButton } from './CustomStyleComponents';
import FormControl from '@mui/material';

import IconButton from '@material-ui/core/IconButton';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

import './Login.css';


const Login = (props) => {

    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    const navigateTo = useNavigate();
    const handleLogin = () => {
        // Perform login logic
        // ...
        // Navigate to the data origin page
        navigateTo('/data-origin');
    };

    // For the password
    const [showPassword, setShowPassword] = useState(false);
    const [password, setPassword] = useState('');

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleTogglePassword = () => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    // Clicking the eye icon should unprotect the password field
    const unprotectPassField = (showPassword) => {
        if (showPassword) {
            return 'text';
        } else {
            return 'password';
        }
    };

    // Need to add some checks here basically where the password can only be between 10-16 characters must include:
    // Uppercase, lowercase, numbers, special characters

    return (
        <div>
            <div>
                <NavBar title="Login"></NavBar>
            </div>
            <div className='login-info-backdrop'>
                <div className='basic-text-info'>
                    <h2>OFET Data Sheet</h2>
                    <h3>Login to your account</h3>
                    <p>Select Method to Login:</p>
                </div>

                <ButtonContainer>
                    <CustomButton active={activeButton === 'userButton'} onClick={() => handleButtonClick('userButton')}>User</CustomButton>
                    <CustomButton active={activeButton === 'adminButton'} onClick={() => handleButtonClick('adminButton')}>Admin</CustomButton>
                </ButtonContainer>

                <ProtectedFieldsContainer>
                    <CustomUIField label='Email' variant='outlined'></CustomUIField>
                    <PasswordFieldContainer>
                        <CustomUIField label='Password' variant='outlined' type={unprotectPassField(showPassword)} onChange={handlePasswordChange}></CustomUIField>
                        <ToggleButton onClick={handleTogglePassword}>
                            {showPassword ? <Visibility/> : <VisibilityOff />}
                        </ToggleButton>
                    </PasswordFieldContainer>
                    
                </ProtectedFieldsContainer>
                
                <LoginPageButton onClick={handleLogin}>LOGIN</LoginPageButton>
            
                <div>
                    <p>
                        Don't have an account? <button className="signup-button">click here</button>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;