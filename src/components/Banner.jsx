// src/components/Banner.js
import React from 'react';

const Banner = () => {
  return (
    <div style={{ height: '14rem' }} className=" text-center text-white">
      <div>
        <img src='https://png.pngtree.com/background/20210710/original/pngtree-game-castle-dark-banner-picture-image_1005557.jpg' style={{height:'40vh',objectFit:'cover',position:'absolute',zIndex:-1,width:'100vw',left:'0px'}}/>
        <h1>Welcome to My Homepage</h1>
        <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
      </div>
    </div>
  );
};

export default Banner;
