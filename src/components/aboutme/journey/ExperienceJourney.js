import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import PersonIcon from "@mui/icons-material/Person";
import { Link } from "react-router-dom";
import StarIcon from "@mui/icons-material/Star";
import Flip from "react-reveal/Flip";

function ExperienceJourney() {
  return (
    <div className="mt-5">
      <div>
        <Link className="btn btn-primary m-1" to="/educationjourney">
          Educational Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/experiencejourney">
          Internship Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/technicaljourney">
          Technical Journey
        </Link>
        <Link className="btn btn-primary m-1" to="/projectjourney">
          Project Journey
        </Link>
      </div>
      <div className="mt-5">
        <Flip top cascade>
          <h1>Internship Journey</h1>
        </Flip>
      </div>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderLeft: "7px solid  rgb(78 22 112)" }}
          date="21/11/2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
            TechnoHacks EduTech
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
            C++ programming Internship
          </h6>
          <p> This is a virtual internship program in this internship, I was given 9 tasks, out of which I had to complete 3 tasks.</p>
          <p>• Task 1 : Calculator.</p>
          <p>• Task 2 : Binary to Decimal Converter.</p>
          <p>• Task 3 : Random Password Generator.</p>
          
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="1/12/2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
           OCTANET SERVICES PVT LTD.
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
           Java Development Internship
          </h6>
          <p>This is a virtual internship program in this internship, I was given only 1 task.</p>
          <p>• Task - ATM Interface</p>
          <p>This is a java programming and also console-based application with five different classes. In order to use the system, the user must enter his or her user ID and pin when it starts. Once the details are entered successfully, ATM functionality is unlocked.</p>
         
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="1/12/2023"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
           OASIS INFOBYTE
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
           Web Development Internship
          </h6>
          <p>This is a virtual internship program in this internship, I was given only 1 task.</p>
          <p>• Task 1 - Landing Page </p>
          <p>About
          A landing page is one of the best web development projects for beginners. This project demands a foundational understanding of HTML and CSS. You will learn how to add columns, divide sections, arrange items, add headers, footers. Most importantly, you will use your creativity to make the page look impressive.</p>
         
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(78 22 112)" }}
          date="June - July 2024"
          iconStyle={{ background: "rgb(78 22 112)", color: "#fbd9ad" }}
          icon={<PersonIcon />}
        >
          <h5 className="vertical-timeline-element-title">
           CISCO AICTE VIRTUAL INTERNSHIP PROGRAM 2024
          </h5>
          <h6 className="vertical-timeline-element-subtitle mt-2">
           Cybersecurity Internship
          </h6>
          <p>This is a virtual internship program in this internship, I was given 3 tasks, out of which I had to complete only 1 task.</p>
          <p> Problem Scenario: </p>
          <p>• The college has discovered that students are misusing campus resources and accessing irrelevant sites. </p>
          <p>• They want a solution which will restrict access to only allowed categories of web content. </p>
          
        </VerticalTimelineElement>

        <VerticalTimelineElement
          iconStyle={{ background: "#fbd9ad", color: "rgb(78 22 112)" }}
          icon={<StarIcon />}
        />
      </VerticalTimeline>
    </div>
  );
}

export default ExperienceJourney;
