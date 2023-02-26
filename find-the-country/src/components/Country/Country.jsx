import { Box, Card, CardContent, CardMedia, Tooltip, Typography } from '@mui/material';

const Country = ({
    darkMode, 
    name, 
    capital, 
    population,
    region, 
    flag, 
    showDetails, 
    code
}) => {
    const handleShowDetails = () => {
        showDetails(code);
    };

    return(
        <Tooltip title="Click on the card to see more details">
            <Card 
                onClick={handleShowDetails}
                className={`country ${darkMode ? "dark-mode" : ""}`}
            >
                <Box className='flag-container'>
                    <CardMedia
                        component='img'
                        image={flag}
                        alt=''
                    />
                </Box>
                <CardContent className='details'>
                    <Typography variant='h5' className='name'>{name}</Typography>
                    <p>
                        Capital: {" "}
                        <span className={`values ${darkMode ? "dark-mode" : ""}`}>
                            {capital}
                        </span>
                    </p>
                </CardContent>
            </Card>
        </Tooltip>
    );
};

export default Country;