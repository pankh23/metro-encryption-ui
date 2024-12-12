import React, { useState } from 'react';
import metroMap from '../assets/metroMap.jpg';

const MetroMap = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const mouseX = e.clientX - left;
    const mouseY = e.clientY - top;

    setPosition({
      x: (mouseX / width) * 100,
      y: (mouseY / height) * 100,
    });
  };

  const DASHBOARD_URL = 'https://www.youtube.com/';

  return (
    <div
      style={{
        position: 'relative',
        textAlign: 'center',
        maxWidth: '100%',
      }}
    >
      {/* Header with the dashboard button */}
      <div style={{ position: 'relative', background: 'blue', height: '50px' }}>
        <h2
          style={{
            color: 'red',
            margin: '0',
            lineHeight: '50px', // Centers text vertically
          }}
        >
          Welcome to Delhi Metro
        </h2>
        {/* Button in the top-right corner */}
        <button
          className="redirect-button top-right"
          onClick={() => window.location.href = DASHBOARD_URL}
        >
          Dashboard
        </button>
      </div>

      <div
        style={{
          position: 'relative',
          display: 'inline-block',
          overflow: 'hidden',
          marginTop: '20px', // Added gap between the top blue line and map image
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={metroMap}
          alt="Delhi Metro Map"
          style={{
            width: '85vw',
            height: '92vh',
            objectFit: 'cover',
            transition: 'transform 0.3s ease-out',
            border: '2px solid black', // Added black border around the image
          }}
        />
        {isHovered && (
          <div
            style={{
              position: 'absolute',
              width: '250px',
              height: '250px',
              border: '2px solid #fff',
              borderRadius: '5px',
              pointerEvents: 'none',
              transform: 'translate(-50%, -50%)',
              top: `${position.y}%`,
              left: `${position.x}%`,
              backgroundImage: `url(${metroMap})`,
              backgroundSize: '800%',
              backgroundPosition: `${position.x}% ${position.y}%`,
              backgroundRepeat: 'no-repeat',
              backgroundColor: 'rgba(0, 0, 0, 0.5)',
            }}
          />
        )}
      </div>
    </div>
  );
};

export default MetroMap;
