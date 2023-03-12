import React from "react";
import { data, images } from "../../constants";
import { SubHeading, MenuItem } from "../../components";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title flex__center">
      <SubHeading title="Menu that fits your palatte"/>
      <h1 className="headtext__cormorant">Today&apos;s Special</h1>
    </div>

    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine">
        <p className="p__headtext">Wine & Beer</p>
        <div>
          {data.wines.map((wine,index)=>(
            <MenuItem key={wine.title+index} title={wine.title} price={wine.price} tags={wine.tags} />
          ))}
        </div>
      </div>

      <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div>

      <div className="app__specialMenu-menu_cocktail">
        <p className="p__headtext">Cocktails</p>
        <div>
          {data.cocktails.map((cocktail,index)=>(
            <MenuItem key={cocktail.title+index} title={cocktail.title} price={cocktail.price} tags={cocktail.tags} />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
