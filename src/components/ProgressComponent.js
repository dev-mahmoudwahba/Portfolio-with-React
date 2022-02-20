import React from "react";

class ProgressComponent extends React.Component {
  constructor() {
    super();
  }
  skills = [
    { Name: "HTML", Digree: "90%" },
    { Name: "CSS", Digree: "70%" },
    { Name: "JS", Digree: "80%" },
    { Name: "Angular", Digree: "80%" },
    { Name: "MongDB", Digree: "50%" },
    { Name: "React", Digree: "70%" },
    { Name: "NodeJS", Digree: "85%" },
  ];
  render() {
    return (
      <>
        {this.skills.map((item) => {
          return (
            <div style={{height:"2rem"}}   class="progress m-3">
              <div
                class="progress-bar  bg-secondary "
                role="progressbar"
                style={{width:item.Digree}}

                aria-valuenow="75"
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {item.Name} {item.Digree}
              </div>
            </div>
          );
        })}
      </>
    );
  }
}
export default ProgressComponent;