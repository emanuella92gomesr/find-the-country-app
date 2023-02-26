import { useState } from 'react';

import { AppBar, Box, Typography } from '@mui/material';
import { DarkMode, LightMode } from '@mui/icons-material';

const Header = ({ onClick, darkMode }) => {
    const [darkModeText, setDarkModeText] = useState(false);
    const switchText = () => setDarkModeText(!darkModeText);

    return(
        <Box className={`header ${darkMode ? "darkMode" : ""}`}>
            <Box className='header-container'>
                <Typography  variant='h5' className='logo'>Find the Country</Typography>
                <Box className='switch-mode' onClick={onClick}>
                    {darkModeText ? (
                        <DarkMode onClick={switchText} />
                    ): (
                        <LightMode onClick={switchText}/>
                    )}
                    <Typography variant='h7' onClick={switchText}>
                        {darkModeText ? "Dark Mode" : "Light Mode"}
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Header;