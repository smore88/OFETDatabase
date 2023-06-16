import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './Login.css';

const Login = (props) => {

    // Selecting a button(User or Admin)
    // Selecting a button (User or Admin)
    const [selectUserAdmin, setSelectUserAdmin] = useState('');
    const [userButtonColor, setUserButtonColor] = useState('');
    const [adminButtonColor, setAdminButtonColor] = useState('');

    const handleUserAdminButtonSelect = (option) => {
        setSelectUserAdmin(option);
        if (option === 'User') {
            setUserButtonColor('blue');
            setAdminButtonColor('');
        } else if (option === 'Admin') {
            setUserButtonColor('');
            setAdminButtonColor('blue');
        }
    };

    const navigateTo = useNavigate();
    const handleLogin = () => {
        // Perform login logic
        // ...
        // Navigate to the data origin page
        navigateTo('/data-origin');
    };

    return (
        <div className='login-info-backdrop'>
            <div className='basic-text-info'>
                <h2>OFET Data Sheet</h2>
                <h3>Login to your account</h3>
                <p>Select Method to Login:</p>
            </div>
            <div className="user-admin-button">
                <div className='user-button'>
                    <button type='submit' 
                    style={{ backgroundColor: userButtonColor }}
                    onClick={() => handleUserAdminButtonSelect('User')}>
                        User
                    </button>
                </div>
                <div className='admin-button'>
                    <button type='submit' 
                    style={{ backgroundColor: adminButtonColor }}
                    onClick={() => handleUserAdminButtonSelect('Admin')}>
                        Admin
                    </button>
                </div>
            </div>
            <div className='protected-fields'>
                <div className="email-container">
                    <label>Email Address:</label>
                    <input type="text" />
                </div>
                <div className="password-container">
                    <label>
                        Password:
                    </label>
                    <input type="password" />
                </div>
            </div>
            
            <div className='login-button'>
                <button type='submit' onClick={handleLogin}>
                    Login
                </button>
            </div>
          
            <div>
                <p>
                    Don't have an account? <button className="signup-button">click here</button>
                </p>
            </div>
        </div>
    );
};

export default Login;