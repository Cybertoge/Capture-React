import React from "react";
import clock from "../img/clock.svg";
import diaphram from "../img/diaphragm.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import home2 from "../img/home2.png";

const ServicesSection = () => {
  return (
    <div className="services">
      <div className="description">
        <h2>
          High <span>quality</span> services
        </h2>
        <div className="cards">
          <div className="card">
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Efficient</h3>
            </div>
            <p>lorem ipsum dolor sit amet</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>
            <p>lorem ipsum dolor sit amet</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={diaphram} alt="" />
              <h3>diaphram</h3>
            </div>
            <p>lorem ipsum dolor sit amet</p>
          </div>
          <div className="card">
            <div className="icon">
              <img src={money} alt="" />
              <h3>Money</h3>
            </div>
            <p>lorem ipsum dolor sit amet</p>
          </div>
        </div>
      </div>
      <img src={home2} alt="" />
    </div>
  );
};
export default ServicesSection;