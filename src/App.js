// import React from 'react';
// // import JourneyForm from './components/JourneyForm';
// import SearchMetro from './components/SearchMetro';
// // import MetroStationsMap from './components/MetroStationsMap';
// import MetroMap from './components/MetroMap';
// import StationList from './components/StationList';
// import Info from './components/Info';
// import './components/styles.css';

// const App = () => {
//   return (
//     <div className="container">
      
//       <MetroMap />
      
//       <div className='search-info'>

//       <SearchMetro />
//       <Info />
//       </div>
      
//       <StationList />
      
//     </div>
//   );
// };

// export default App;

import React from 'react';
// import JourneyForm from './components/JourneyForm';
import SearchMetro from './components/SearchMetro';
// import MetroStationsMap from './components/MetroStationsMap';
import MetroMap from './components/MetroMap';
import StationList from './components/StationList';
import Info from './components/Info';
import './components/styles.css';

const App = () => {
  // Replace this with your actual Vercel dashboard URL
  // const DASHBOARD_URL = 'https://blog-website-eight-azure.vercel.app/';

  return (
    <div className="container">
      {/* Button to redirect to dashboard */}
      {/* <div className="top-right">
        <button
          className="redirect-button"
          onClick={() => window.location.href = DASHBOARD_URL}
        >
          Go to Dashboard
        </button>
      </div> */}

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

/* CSS for positioning the button */
/* Add this to your styles.css file */

/* styles.css */

