import { Box, Typography } from '@mui/material';

const NotFoundCountry = () => {
    return(
        <Box className='not-found'>
            <Typography variant='h5'>Sorry, we couldn't find any results.</Typography>
        </Box>
    );
};

export default NotFoundCountry;