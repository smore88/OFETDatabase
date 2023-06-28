import React from 'react';
import { styled } from '@mui/system';
import { AppBar, Toolbar, Typography } from '@mui/material';

const StyledAppBar = styled(AppBar)`
    width: 100vw;
    height: 92px;
    background-color: #a892ee;
`;

const StyledToolbar = styled(Toolbar)`
  display: flex;
  justify-content: center;
  align-items: center;

`;

const StyledTypography = styled(Typography)`
    text-align: center;
    margin-top: auto;
    color: black;
    font-size: 24px;
    font-weight: bold;
`;

const NavBar = ({ title }) => {
  return (
    <StyledAppBar position="static" color="primary">
      <StyledToolbar>
        <StyledTypography variant="h6">{title}</StyledTypography>
      </StyledToolbar>
    </StyledAppBar>
  );
};

export default NavBar;