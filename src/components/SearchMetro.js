import React, { useState } from 'react';
import './SearchMetro.css'; 

const metroData = {
    "HINDON RIVER": { line: 'Blue Line', direction: 'East Delhi' },
    "NOIDA CITY CENTER": { line: 'Blue Line', direction: 'East Delhi' },
    "VAISHALI": { line: 'Blue Line', direction: 'East Delhi' },
    "RITHALA": { line: 'Red Line', direction: 'North Delhi' },
    "SHAHDARA": { line: 'Red Line', direction: 'North Delhi' },
    "RAJIV CHOWK": { line: 'Yellow Line', direction: 'Central Delhi' },
    "HUDA CITY CENTRE": { line: 'Yellow Line', direction: 'Gurgaon' },
    "KASHMERE GATE": { line: 'Red Line', direction: 'North Delhi' },
    "JAMA MASJID": { line: 'Violet Line', direction: 'Old Delhi' },
    "DWARKA SECTOR 21": { line: 'Blue Line', direction: 'South West Delhi' },
    "AIRPORT EXPRESS": { line: 'Orange Line', direction: 'IGI Airport' },
    "PALAM": { line: 'Magenta Line', direction: 'South Delhi' },
    "NAJAFGARH": { line: 'Grey Line', direction: 'West Delhi' },
    "SHAHEED STHAL": { line: 'Red Line', direction: 'Ghaziabad' },
    "OKHLA BIRD SANCTUARY": { line: 'Magenta Line', direction: 'South East Delhi' },
    "BOTANICAL GARDEN": { line: 'Blue Line', direction: 'Noida' },
    "SECTOR 18 NOIDA": { line: 'Blue Line', direction: 'Noida' },
    "HAUZ KHAS": { line: 'Yellow Line', direction: 'South Delhi' },
    "AIIMS": { line: 'Yellow Line', direction: 'South Delhi' },
    "SAKET": { line: 'Yellow Line', direction: 'South Delhi' },
    "SARAI KALE KHAN": { line: 'Pink Line', direction: 'South Delhi' },
    "MOTI NAGAR": { line: 'Blue Line', direction: 'West Delhi' },
    "KIRTI NAGAR": { line: 'Blue Line', direction: 'West Delhi' },
    "INDRALOK": { line: 'Green Line', direction: 'North West Delhi' },
    "MUNDKA": { line: 'Green Line', direction: 'North West Delhi' },
    "RAJOURI GARDEN": { line: 'Pink Line', direction: 'West Delhi' },
    "SAROJINI NAGAR": { line: 'Pink Line', direction: 'South Delhi' },
    "NEHRU PLACE": { line: 'Violet Line', direction: 'South Delhi' },
    "KALKAJI MANDIR": { line: 'Violet Line', direction: 'South Delhi' },
    "TERMINAL 1 IGI AIRPORT": { line: 'Magenta Line', direction: 'South West Delhi' },
    "BAHADURGARH CITY": { line: 'Green Line', direction: 'Haryana' },
    "PEERAGARHI": { line: 'Green Line', direction: 'West Delhi' },
    "KHAN MARKET": { line: 'Violet Line', direction: 'Central Delhi' },
    "AKSHARDHAM": { line: 'Blue Line', direction: 'East Delhi' },
    "CHANDNI CHOWK": { line: 'Yellow Line', direction: 'Central Delhi' },
    "IIT DELHI": { line: 'Magenta Line', direction: 'South Delhi' },
  };
  

const SearchMetro = () => {
  const [searchResults, setSearchResults] = useState([]);

  const searchMetro = (e) => {
    const query = e.target.value.toLowerCase();
    const results = Object.keys(metroData).filter((station) =>
      station.toLowerCase().includes(query)
    );
    setSearchResults(results);
  };

  return (
    <section id="search-metro" className="search-container">
      <h2>Search Metro Station</h2>
      <input
        type="text"
        id="search"
        placeholder="Search for a metro station..."
        onInput={searchMetro}
        className="search-input"
      />
      <ul id="search-results" className="search-results">
        {searchResults.map((station) => (
          <li key={station} className="search-result-item">
            <strong>{station}</strong>: {metroData[station].line} - {metroData[station].direction}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SearchMetro;
