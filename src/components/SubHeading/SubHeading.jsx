import React from 'react';
import images from '../../constants/images'

const SubHeading = ({title}) => (
  <div style={{color:"white"}}>
    <p style={{fontSize: "20px"}}>{title}</p>
    <img src={images.spoon} alt="spoon" />
  </div>
);

export default SubHeading;
