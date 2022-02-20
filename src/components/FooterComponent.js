import React from "react";
import { Button,Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./FooterComponent.css"
class FooterComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className=" bg-dark text-light py-4"> 
          <div className="container-fluid">
            <div className="row row-flex">
              <div className="col-md-4">
                  <h3>GET IN TOUCH</h3>
                  <div>
                     <span>kr12@hotmail.com</span> 
                     <br/>
                      <span>0123456789</span>
                  </div>
              </div>

              <div className="col-md-4">
              <Button variant="outline-light">CONTACT ME</Button>

              </div>
              <div className="col-md-4">
                <div>  social icons </div>
                <p>  Copyright &copy; 2022 KR </p> 
              </div>
            </div>
          </div>
          </div>
      </>
    );
  }
}
export default FooterComponent;
