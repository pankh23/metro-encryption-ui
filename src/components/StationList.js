// src/components/StationList.js
import React from 'react';

const StationList = () => {
  const metroLines = [
    {
      name: 'Red Line',
      stations: ['Rithala', 'Shahdara', 'Dilshad Garden', 'Kashmere Gate'],
      color: 'red',
    },
    {
      name: 'Blue Line',
      stations: ['Dwarka', 'Rajiv Chowk', 'Noida City Centre', 'Vaishali'],
      color: 'aqua',
    },
    {
      name: 'Yellow Line',
      stations: ['Samaypur Badli', 'Vishwavidyalaya', 'Rajiv Chowk', 'Huda City Centre'],
      color: 'yellow',
    },
    {
      name: 'Green Line',
      stations: ['Inderlok', 'Kirti Nagar', 'Rajdhani Park', 'Bahadurgarh city'],
      color: 'green',
    },
    {
      name: 'Violet Line',
      stations: ['Jama Masjid', 'Khan Market', 'Kalkaji Mandir', 'Raja Nahar Singh'],
      color: 'blueviolet',
    },
    {
      name: 'Pink Line',
      stations: ['Shalimar Bagh', 'Rajouri Garden', 'Sarojini Nagar', 'Welcome'],
      color: 'violet',
    },
    {
      name: 'Grey Line',
      stations: ['Dwarka', 'Nangli', 'Najafgarh', 'Dhansa Bus Stand'],
      color: 'grey',
    },

    {
      name: 'Magenta Line',
      stations: ['Palam', 'Terminal 1', 'IIT', 'Hauz khas'],
      color: 'magenta',
    },
    {
      name: 'Orange Line',
      stations: ['New Delhi', 'Dhaula Kuan', 'Airport', 'Dwarka'],
      color: 'orange',
    },

    
  ];

  return (
    <div>
    <h2 style={{ textAlign: 'center' }}>Metro Lines</h2>
    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '15px' }}>
      {metroLines.map((line, index) => (
        <div key={index} style={{
          textAlign: 'center', backgroundColor: line.color, padding: '10px',
          borderRadius: '8px', width: '200px', color: 'black', marginBottom: '20px'
        }}>
          <h3>{line.name}</h3>
          <p>{line.direction}</p>
          <ul style={{ listStyleType: 'none', paddingLeft: '0' }}>
            {line.stations.map((station, idx) => (
              <li key={idx}>{station}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
);
};

export default StationList;
