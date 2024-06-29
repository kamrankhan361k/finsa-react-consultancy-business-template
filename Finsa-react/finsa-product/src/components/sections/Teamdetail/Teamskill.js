import React from 'react'
import Progress from 'react-progressbar'
import VisibilitySensor from "react-visibility-sensor"

function Teamskill(props) {
    return (
        <section className="skill-section skill-section-two">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        {/* Skill Text Block */}
                        <div className="skill-text">
                            <div className="section-title mb-40 left-border">
                                <span className="title-tag">Company Skills</span>
                                <h2 className="title">We Have Experience <br /> For Business Planning</h2>
                            </div>
                            <p>
                                Sedut perspiciatis unde omnis iste natus error sit voluptat em accusantium doloremque
                                laudantium, totam raperiaeaque ipsa quae ab illo inventore veritatis et quasi
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10">
                        <div className="skill-progress-bars">
                            <div className="skill-progress">
                                <div className="title d-flex justify-content-between">
                                    <span>Marketing Strategy</span>
                                    <span>85%</span>
                                </div>
                                <div className="progressbar-wrap">
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const percentage = isVisible ? 85 : 0
                                            return (
                                                <Progress
                                                    completed={percentage}
                                                    animation={5000}
                                                    color='#ff4a17'
                                                    height={5}
                                                />
                                            )
                                        }}
                                    </VisibilitySensor>
                                </div>
                            </div>
                            <div className="skill-progress">
                                <div className="title d-flex justify-content-between">
                                    <span>Digital Marketing</span>
                                    <span>95%</span>
                                </div>
                                <div className="progressbar-wrap">
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const percentage = isVisible ? 95 : 0
                                            return (
                                                <Progress
                                                    completed={percentage}
                                                    animation={5000}
                                                    color='#ff4a17'
                                                    height={5}
                                                />
                                            )
                                        }}
                                    </VisibilitySensor>
                                </div>
                            </div>
                            <div className="skill-progress">
                                <div className="title d-flex justify-content-between">
                                    <span>Web Design</span>
                                    <span>72%</span>
                                </div>
                                <div className="progressbar-wrap">
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const percentage = isVisible ? 72 : 0
                                            return (
                                                <Progress
                                                    completed={percentage}
                                                    animation={5000}
                                                    color='#ff4a17'
                                                    height={5}
                                                />
                                            )
                                        }}
                                    </VisibilitySensor>
                                </div>
                            </div>
                            <div className="skill-progress">
                                <div className="title d-flex justify-content-between">
                                    <span>IT Consulting</span>
                                    <span>79%</span>
                                </div>
                                <div className="progressbar-wrap">
                                    <VisibilitySensor>
                                        {({ isVisible }) => {
                                            const percentage = isVisible ? 79 : 0
                                            return (
                                                <Progress
                                                    completed={percentage}
                                                    animation={5000}
                                                    color='#ff4a17'
                                                    height={5}
                                                />
                                            )
                                        }}
                                    </VisibilitySensor>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Teamskill;