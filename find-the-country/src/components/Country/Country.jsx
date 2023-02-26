import { Box, Typography } from "@mui/material";

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
        <Box 
            onClick={handleShowDetails}
            className={`country ${darkMode ? "darkMode" : ""}`}
        >
            <Box className='flag-container'>
                <img src={flag} alt=''/>
            </Box>

            <Box className='details'>
                <Typography variant='h3' className='name'>{name}</Typography>
                <p>
                    Capital: {" "}
                    <span className={`values ${darkMode ? "darkMode" : ""}`}>
                        {capital}
                    </span>
                </p>
            </Box>
        </Box>
    );
};

export default Country;