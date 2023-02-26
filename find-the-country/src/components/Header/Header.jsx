import { useState } from 'react';

import { Box, Typography } from '@mui/material';
import { DarkMode, Favorite, LightMode } from '@mui/icons-material';

const Header = ({ onClick, darkMode }) => {
    const [darkModeText, setDarkModeText] = useState(false);
    const switchText = () => setDarkModeText(!darkModeText);

    return(
        <Box className={`header ${darkMode ? "darkMode" : ""}`}>
            <Box className='header-container'>
                <Typography variant='h4' className='logo'>Find the Country</Typography>
                <Box className='favorite' onClick={null}>
                    <Favorite />
                    <Typography variant='h7' className='logo'>Favorite Countries</Typography>
                </Box>
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