import React from "react";
import "./SkillsComponent.css"
import ProgressComponent from "./ProgressComponent";
import { Button,ProgressBar } from "react-bootstrap";

class SkillsComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="container-fluid bg-dark text-light ">
          <div className="row">
            <div className="col-md-12">
              <h2 className="h2skills">Skills</h2>
            </div>
          </div>
          <div className="row rowskill">
            <div className="col-md-9">
              <p >
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor
                esse nisi amet recusandae labore commodi distinctio magni
                aliquam soluta vitae. Lorem, ipsum dolor sit amet consectetur
                adipisicing elit. Dolor esse nisi amet recusandae labore commodi
                distinctio magni aliquam soluta vitae.
              </p>
            </div>
          </div>

            <div className="row">
                    <div className="col-md-5">
                        <p>MY FOCUS</p>
                       <div className="hrskill"><hr/></div> 
                        <p>UI/UX Design</p>
                        <p>Responsive Design</p>
                        <p>Web Design</p>
                        <p>Mobile App Design</p>

                    </div>
                    <div className="col-md-7">

                        <div>   <ProgressComponent/> </div>
                  
                    </div>
            </div>

        </div>
      </>
    );
  }
}

export default SkillsComponent;
