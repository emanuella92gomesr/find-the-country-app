import { ArrowBack } from '@mui/icons-material';
import { useNavigate, useParams } from 'react-router';
import { Box, Button, Typography } from '@mui/material';

const CountryDetails = ({ darkMode, countries }) => {
  const params = useParams();
  const navigate = useNavigate();

  let name;
  let flagImg;
  let nativeName;
  let capital;
  let population;
  let languages = [];
  let currencies = [];
  let region;

  countries.forEach((country) => {
    if (country.alpha3Code === params.countryCode) {
      name = country.name;
      flagImg = country.flag;
      nativeName = country.nativeName;
      capital = country.capital;
      population = country.population;
      region = country.region;

      country.languages?.forEach((language) => {
        languages.push(language.name);
      });
      
      country.currencies?.forEach((currency) => {
        currencies.push(currency.name);
      });
    }
  });

  const goBack = () => {
    navigate(`/`);
  };

  return (
    <Box className='country-details'>
      <Button 
        onClick={goBack} 
        className={`back ${darkMode ? "dark-mode" : ""}`} 
        sx={{
          color: '#333333', 
          textTransform: 'none',  
        }}
      >
        <ArrowBack />
        <Typography variant="h6">Back</Typography>
      </Button>

      <Box className='country-details-body'>
        <Box className='img-container'>
          <img src={flagImg} alt="" />
        </Box>

        <Box className='info'>
          <Typography variant='h2'>{name}</Typography>
          <Box className='info-container'>
            <Box className='left-info'>
              <p>
                Native Name:{" "}
                <span className={`values ${darkMode ? "dark-mode" : ""}`}>
                  {nativeName}
                </span>
              </p>
              <p>
                Capital:{" "}
                <span className={`values ${darkMode ? "dark-mode" : ""}`}>
                  {capital}
                </span>
              </p>
              <p>
                Population:{" "}
                <span className={`values ${darkMode ? "dark-mode" : ""}`}>
                  {population}
                </span>
              </p>
              <p>
                Region:{" "}
                <span className={`values ${darkMode ? "dark-mode" : ""}`}>
                  {region}
                </span>
              </p>
            </Box>
            <Box className='right-info'>
              <p>
                Language:
                <span className={`values ${darkMode ? "dark-mode" : ""}`}>
                  {languages.map((language) => {
                    if (languages.indexOf(language) !== languages.length - 1) {
                      return (
                        <span
                          key={language}
                          className={`values ${darkMode ? "dark-mode" : ""}`}
                        >
                          {" "}
                          {language},
                        </span>
                      );
                    } else {
                      return (
                        <span
                          key={language}
                          className={`values ${darkMode ? "dark-mode" : ""}`}
                        >
                          {" "}
                          {language}
                        </span>
                      );
                    }
                  })}
                </span>
              </p>
              <p>
                Currency:
                {currencies.map((currency) => {
                  if (currencies.indexOf(currency) !== currencies.length - 1) {
                    return (
                      <span
                        key={currency}
                        className={`values ${darkMode ? "dark-mode" : ""}`}
                      >
                        {" "}
                        {currency},
                      </span>
                    );
                  } else {
                    return (
                      <span
                        key={currency}
                        className={`values ${darkMode ? "dark-mode" : ""}`}
                      >
                        {" "}
                        {currency}
                      </span>
                    );
                  }
                })}
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default CountryDetails;