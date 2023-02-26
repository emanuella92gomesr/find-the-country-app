import { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Header from "./components/Header/Header";
import Country from "./components/Country/Country";
import CountryDetails from "./components/CountryDetails/CountryDetails";
import NotFoundCountry from "./components/NotFoundCountry/NotFoundCountry";

import "./App.css";
import { Box } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [countries, setCountries] = useState([]);
  const [allCountries, setAllCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const switchMode = () => {
    setDarkMode((prevState) => !prevState);
  };

  useEffect(() => {
    setLoading(true);
    fetch("https://restcountries.com/v2/all")
      .then((res) => res.json())
      .then((countries) => {
        setAllCountries(countries);
        setFiltered(countries);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <Box className="load">
        <p className="loading">Loading...</p>;
      </Box>
    );
  }

  const searchCountries = (e) => {
    const inputValue = e.target.value.toLowerCase();
    if (allCountries.length > 0) {
      const filteredItems = allCountries.filter((item) =>
        item.name.toLowerCase().includes(inputValue)
      );
      if (filteredItems.length > 0) {
        setError(false);
        setFiltered(filteredItems);
      } else if (filteredItems.length === 0 && inputValue !== "") {
        setError(true);
      } else if (inputValue === "") {
        setError(false);
        setFiltered(allCountries);
      }
    }
  };

  const showDetails = (code) => {
    navigate(`/${code}`);
  };

  return (
    <Box className={`app ${darkMode ? "dark-mode" : ""}`}>
      <Header onClick={switchMode} darkMode={darkMode} />

      <Routes>
        <Route
          path="/"
          element={
            <Box className="app-body">
              <Box className="inputs">
                <Box className={`search-input ${darkMode ? "dark-mode" : ""}`}>
                  <SearchIcon />
                  <input
                    type="text"
                    placeholder="Search for a country"
                    onChange={(e) => searchCountries(e)}
                  />
                </Box>
              </Box>

              <Box className="countries">
                {" "}
                {!error ? (
                  filtered.map((country) => {
                    return (
                      <Country
                        darkMode={darkMode}
                        key={country.alpha3Code}
                        code={country.alpha3Code}
                        name={country.name}
                        capital={country.capital}
                        population={country.population}
                        region={country.region}
                        flag={country.flag}
                        showDetails={showDetails}
                      />
                    );
                  })
                ) : (
                  <NotFoundCountry />
                )}{" "}
              </Box>
            </Box>
          }
        />

        <Route
          path="/:countryCode"
          element={
            <CountryDetails
              darkMode={darkMode}
              countries={allCountries}
              refetch={fetch("https://restcountries.com/v2/all")
                .then((res) => res.json())
                .then((countries) => {
                  setCountries(countries);
                })
                .catch((error) => {
                  console.log(error);
                })}
            />
          }
        />
      </Routes>
    </Box>
  );
}

export default App;