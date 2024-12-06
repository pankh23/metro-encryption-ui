import React from 'react';
// import JourneyForm from './components/JourneyForm';
import SearchMetro from './components/SearchMetro';
// import MetroStationsMap from './components/MetroStationsMap';
import MetroMap from './components/MetroMap';
import StationList from './components/StationList';
import Info from './components/Info';
import './components/styles.css';

const App = () => {
  return (
    <div className="container">
      
      <MetroMap />
      
      <div className='search-info'>

      <SearchMetro />
      <Info />
      </div>
      
      <StationList />
      
    </div>
  );
};

export default App;
