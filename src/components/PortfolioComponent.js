import React from "react";
import "./PortfolioComponent.css";
import { Button, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import CardComponForPortfolio from "./CardComponForPortfolio";
class PortfolioComponent extends React.Component {
  constructor() {
    super();
  }
  render() {
    return (
      <>
        <div className="port-cont">
          <div className="container">
            <div className="row">
              <h2 className="h2port">Porfolio</h2>
            </div>

            <div className="row cards-cont">
             
              <CardComponForPortfolio sub={"DESIGN"}/>
              
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PortfolioComponent;
