import React from 'react';
import Tilt from 'react-parallax-tilt';

const HoloCard = ({ children }) => {
  return (
    <Tilt
      className="holo-tilt-container"
      perspective={1000}       // Lower = more extreme 3D depth
      glareEnable={true}       // Adds that shiny "glass" reflection
      glareMaxOpacity={0.45}   // How strong the reflection is
      glareColor="#ff0000"     // RED GLARE (Cyberpunk style)
      glarePosition="all"      // Glare moves everywhere
      scale={1.02}             // Popping out slightly on hover
      transitionSpeed={1500}   // Smooth physics
      tiltMaxAngleX={15}       // How much it can tilt up/down
      tiltMaxAngleY={15}       // How much it can tilt left/right
    >
      {children}
    </Tilt>
  );
};

export default HoloCard;