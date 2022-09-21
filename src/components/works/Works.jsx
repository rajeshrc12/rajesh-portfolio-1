import React from 'react'
import GP from "../../assets/gp.jpg";
import P2 from "../../assets/p2.PNG";
import './works.css';
const Works = () => {
  return (
    <div name="works" className="works_container">
      <div className="subtitle">
        Works
      </div>
      <div className="works_image_container">
        <div className="works_image_div">
          <div className="work_image_data">
            <h3>Graphical Password</h3>
            <div>
              <button><a target="_blank" rel="noreferrer" href="https://github.com/rajeshrc12/graphicalpassword">Code</a></button>
              <button><a target="_blank" rel="noreferrer" href="https://graphicalpassworddemo.netlify.app/">Demo</a></button>
            </div>
          </div>
        <img className='works_image' src={GP} alt="" />
        </div>
        <div className="works_image_div">
          <div className="work_image_data">
            <h3>Portfolio Website</h3>
            <div>
              <button><a target="_blank" rel="noreferrer" href="https://github.com/rajeshrc12/graphicalpassword">Code</a></button>
              <button><a target="_blank" rel="noreferrer" href="https://graphicalpassworddemo.netlify.app/">Demo</a></button>
            </div>
          </div>
        <img className='works_image' src={P2} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Works