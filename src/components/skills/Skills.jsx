import React from 'react'
import Html from "../../assets/html.png";
import Css from "../../assets/css.png";
import Javascript from "../../assets/javascript.png";
import Reactjs from "../../assets/react.png";
import './skills.css';
const Skills = () => {
  return (
    <div name="skills" className="skills_container">
      <div className="subtitle">
        Skills
      </div>
      <div className="skills_image_container">
        <img className='skills_image' src={Html} alt="" />
        <img className='skills_image' src={Css} alt="" />
        <img className='skills_image' src={Javascript} alt="" />
        <img className='skills_image' src={Reactjs} alt="" />
      </div>
    </div>
  )
}

export default Skills