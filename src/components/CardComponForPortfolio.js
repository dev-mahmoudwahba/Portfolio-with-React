import React from "react";
import { Card } from "react-bootstrap";

class CardComponForPortfolio extends React.Component {
  constructor() {
    super();
  }

  cardArr = [
    "WEB DESIGN",
    "MOBILE DESIGN",
    "LOGO DESIGN",
    "WEB APP DEVELOPMENT",
    "MOBILE APP DEVELOP",
    "PWA DEVELOP",
  ];

  render() {
    return (
      <>
        {this.cardArr.map((item) => {
      
          return (
         
                <Card style={{ width: "14rem", height: "11rem" ,margin:"2rem" }}>
                  <Card.Body className="center my-4">
                    <Card.Title>{item} </Card.Title>
                    <hr />
                  </Card.Body>
                </Card>
              
    
          )
        })}
      </>
    );
  }
}

export default CardComponForPortfolio;
