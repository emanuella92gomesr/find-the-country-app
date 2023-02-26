import { ArrowBack } from "@mui/icons-material";
import { Typography } from "@mui/material";

import { useState } from 'react';
import { useNavigate, useParams } from 'react-router';

const CountryDetails = ({ darkMode, countries }) => {
    const params = useParams();
    const [country, setCountry] = useState([]);
    const navigate = useNavigate();

    let name;
    let flagImg;
    let capital;
    let population;
    let languages = [];
    let currencies = [];
    let region;

    countries.forEach((country) => {
        if(country.alpha3code === params.countryCode) {
            name = country.name;
            flagImg = country.flag;
            capital = country.capital;
            population = capital.population;
            region = capital.region;

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

    return(
        <Box className='country-details'>
            <Button onClick={goBack} className={`back ${darkMode ? "darkMode":""}`}>
                <ArrowBack />
                <p>Back</p>    
            </Button>
            <Box className='country-details-body'>
                <Box className='img-container'>
                    <img src={flagImg}/>
                </Box>
                <Box className='info'>
                    <Typography variant='h2'>
                        {name}
                    </Typography>
                    <Box className='info-container'>
                        <Box className='left-info'>
                            <p>
                                Capital:{" "}
                                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                                    {capital}
                                </span>
                            </p>
                            <p>
                                Population:{" "}
                                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                                    {population}
                                </span>
                            </p>
                            <p>
                                Region:{" "}
                                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                                    {region}
                                </span>
                            </p>
                            <p>
                                Language:{" "}
                                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                                    {languages.map((language) => {
                                        if(languages.indexOf(language) !== languages.length -1){
                                            return(
                                                <span
                                                    key={language}
                                                    className={`values ${darkMode ? "darkMode" : ""}`}
                                                >
                                                    {" "}
                                                    {language},
                                                </span>
                                            );
                                        }
                                        else {
                                            return(
                                                <span
                                                    key={language}
                                                    className={`values ${darkMode ? "darkmode" : ""}`}
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
                                Currency:{" "}
                                <span className={`values ${darkMode ? "darkMode" : ""}`}>
                                    {currencies.map((currency) => {
                                        if(currencies.indexOf(currency) !== currencies.length -1){
                                            return(
                                                <span
                                                    key={currency}
                                                    className={`values ${darkMode ? "darkMode" : ""}`}
                                                >
                                                    {" "}
                                                    {currency},
                                                </span>
                                            );
                                        }
                                        else {
                                            return(
                                                <span
                                                    key={currency}
                                                    className={`values ${darkMode ? "darkmode" : ""}`}
                                                >
                                                    {" "}
                                                    {currency}
                                                </span>
                                            );
                                        }
                                    })}
                                </span>
                            </p>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default CountryDetails;