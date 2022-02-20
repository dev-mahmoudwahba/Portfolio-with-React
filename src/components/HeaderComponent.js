import React from "react";
import "./HeaderComponent.css";
import { Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

class HeaderComponent extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        <div className="container-fluid cont-fl ">
          <div className="row">
            <div className="col-md-5 colm5">
              <h1>Katie Reed</h1>
              <p className="headp">Web Developer &amp; Designer</p>
              <Button variant="outline-light">CONTACT ME</Button>

            </div>
          </div>
        </div>
      </>
    );
  }
}

export default HeaderComponent;
