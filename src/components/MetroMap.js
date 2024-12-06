// src/components/MetroMap.js
import React from 'react';
import metroMap from '../assets/metroMap.jpg';

const MetroMap = () => {
  return (
    <div style={{ textAlign: 'center',

      maxWidth:'100%',
     }}>
      <h2 style={{background: 'blue', color:'red',

        height:'50px',
        marginTop:'0',
        paddingTop:'10px',
        // paddingBottom:'20px',
        marginBottom:'0',
        textAlign:'center'
      }}>Welcome to Delhi Metro</h2>
      <img
        src={metroMap} // Static map URL
        alt="Delhi Metro Map"
        style={{ width: '85vw', height: '92vh' }}
      />
    </div>
  );
};

export default MetroMap;
