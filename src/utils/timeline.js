import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faGraduationCap } from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
    return (
        <VerticalTimeline>
            {/* <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date=""
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faBriefcase} className="timeline-work-icon" />}
            >
                <h6 className="vertical-timeline-element-subtitle">To be continued...</h6>
            </VerticalTimelineElement> */}
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="july 2021 - present"
                dateClassName="text-dark mx-lg-2"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faBriefcase} className="timeline-work-icon" />}
            >
                <h3 className="vertical-timeline-element-title">FullStack Developer</h3>
             
                
            </VerticalTimelineElement>

            
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2014 - 2018"
                dateClassName="mx-lg-2"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faGraduationCap} className="timeline-grad-icon" />}
            >
                <h3 className="vertical-timeline-element-title mb-4">Bachelor of Mechanical Engineering</h3>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                date="2012 - 2014"
                dateClassName="mx-lg-2"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FontAwesomeIcon size="2x" icon={faGraduationCap} className="timeline-grad-icon" />}
            >
                <h3 className="vertical-timeline-element-title mb-4">XII-Department of Computer Science</h3>
            </VerticalTimelineElement>
        </VerticalTimeline>
    )
}

export default Timeline;
