import React from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import images from "../../constants/images"
import './Header.css';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id="Home">
    <div className='app__wrapper_info'>
      <SubHeading title="Chase the new Flavour"/>
      <h1 className='headtext__cormorant'>The Key To Fine Dining</h1>
      <p className='p__opensans' style={{marginTop:'2rem'}}>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat
        morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet
        tellus.</p>
        <button className='custom__button'>Explore Menu</button>
    </div>
    <div className='app__wrapper_img'>
      <img src={images.welcome} alt="header_img"/>
    </div>
  </div>
);

export default Header;
