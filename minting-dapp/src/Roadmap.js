// import "./App.css";
import { ReactComponent as WorkIcon } from "./work.svg";
import { ReactComponent as SchoolIcon } from "./school.svg";

import timelineElements from "./timelineElements";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";

function Roadmap() {
  let workIconStyles = { background: "#FF0000" };
  let schoolIconStyles = { background: "#FF0000" };
  const styleObj = {color: "#dd3db5"}
  const titleSize = {fontSize: 80,
    color: "#dd3db5",
    textAlign: "center",
    paddingTop: "100px",}
  const bodySize = {fontSize: 30,
    color: "#dd3db5",
    textAlign: "center",
    paddingTop: "100px",}

  return (
    
    <div>
        <br></br><br></br><br></br><br></br>
        <hr style={styleObj}/>
        <h1 style={titleSize} >Road map </h1>
        <br></br><br></br><br></br><br></br>
      <VerticalTimeline>
        {timelineElements.map((element) => {
          let isWorkIcon = element.icon === "work";
          let showButton =
            element.buttonText !== undefined &&
            element.buttonText !== null &&
            element.buttonText !== "";

          return (
            <VerticalTimelineElement
              key={element.key}
              date={element.date}
              dateClassName="date"
              iconStyle={isWorkIcon ? workIconStyles : schoolIconStyles}
              icon={isWorkIcon ? <WorkIcon /> : <SchoolIcon />}
            >
              <h3 className="vertical-timeline-element-title">
                {element.title}
              </h3>
              <h5 className="vertical-timeline-element-subtitle">
                {element.location}
              </h5>
              <p id="description">{element.description}</p>
              {showButton && (
                <a
                  className={`button ${
                    isWorkIcon ? "workButton" : "schoolButton"
                  }`}
                  href="/"
                >
                  {element.buttonText}
                </a>
              )}
            </VerticalTimelineElement>
          );
        })}
      </VerticalTimeline>
        <br></br><br></br><br></br><br></br>
        <hr style={styleObj}/>
        <h1 style={titleSize} >About </h1>
        <h6 style={bodySize}>The Peaky Panthers a collection of 8,888 unique and hand crafted NFT's living on the Avalanche C-Chain. The Panthers team and community strives to be leaders in the NFT space on Avalanche. Peaky Panther's hodlers will have access to insane value through the community including things such as cash giveaways, games, competitions, and events. Get involved today and cement yourself as an OG in the Peaky Panthers community! </h6>
        <br></br><br></br><br></br><br></br>
    </div>
  );
}

export default Roadmap;