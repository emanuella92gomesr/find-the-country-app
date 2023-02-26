import { Button, Box, Card, CardContent, CardMedia, Typography } from '@mui/material';

const Country = ({
    darkMode, 
    name, 
    capital, 
    flag, 
    showDetails, 
    code
}) => {
    const handleShowDetails = () => {
        showDetails(code);
    };

    return(
        <Card 
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
                <Typography variant='h8' className='name'><b>{name}</b></Typography>
                <p>
                    Capital: {" "}
                    <span className={`values ${darkMode ? "dark-mode" : ""}`}>
                        {capital}
                    </span>
                </p>
            </CardContent>
            <Box sx={{display:'flex'}}>
                <Button 
                    onClick={handleShowDetails}
                    className={`card-options ${darkMode ? "dark-mode" : ""}`}  
                    sx={{textTransform: 'none'}}
                >
                    <Typography>More details</Typography>
                </Button>
                <Button 
                    onClick={null}
                    className={`card-options ${darkMode ? "dark-mode" : ""}`} 
                    sx={{textTransform: 'none'}}
                >
                    <Typography>Favorite</Typography>
                </Button>
            </Box>
        </Card>
    );
};

export default Country;