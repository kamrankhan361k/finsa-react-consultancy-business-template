import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import CountUp from "react-countup"
import Masonry from 'react-masonry-component'
import VisibilitySensor from "react-visibility-sensor"

const factlist = [
    { icon: 'fas fa-check', text: 'There are many variations of passages of LoreIpsum available, but the majority have suffered' },
    { icon: 'fas fa-check', text: 'It uses a dictionary of over 200 Latin wor combined with a handful of model sentence structure' },
    { icon: 'fas fa-check', text: 'Richard McClintock, a Latin profe hampden-sydney College in Virginia, looked up one more' },
]

const counterblock = [
    { icon: 'flaticon-graphic', count: '3568', title: 'Project Compalte' },
    { icon: 'flaticon-plan', count: '7859', title: 'Satisfied Clients', mtclass: "mt-30" },
    { icon: 'flaticon-target-1', count: '6352', title: 'International Awards', mtclass: "mt-30" },
    { icon: 'flaticon-teamwork', count: '7856', title: 'Expert Team Members', mtclass: "mt-30" },
]

function Statics(props) {
    const [focus, setFocus] = useState(false)
    const imagesLoadedOptions = {
        itemSelector: '.col-tiny-12',
        percentPosition: false,
        resize: true,
        fitWidth: true
    }
    return (
        <section className="fact-section-three section-gap">
            <div className="container">
                <div className="row align-items-center justify-content-center">
                    <div className="col-lg-6 col-md-10 order-2 order-lg-1">
                        <div className="fact-text">
                            <div className="section-title left-border mb-40">
                                <span className="title-tag">Company Statistics</span>
                                <h2 className="title">We Are Established For Business &amp; Consulting Since 25 Years</h2>
                            </div>
                            <ul className="fact-list">
                                {factlist.map((item, i) => (
                                    <li key={i}> <i className={item.icon} /> {item.text}</li>
                                ))}
                            </ul>
                            <Link to="/about" className="main-btn">Learn More</Link>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-10 order-1 order-lg-2">
                        <Masonry className="fact-boxes row" id="factIsotpe" imagesLoadedOptions={imagesLoadedOptions}>
                            {counterblock.map((item, i) => (
                                <div key={i} className="col-6 col-tiny-12">
                                    <div className={"fact-box fact-box-three text-center " + item.mtclass + ""}>
                                        <div className="icon">
                                            <i className={item.icon} />
                                        </div>
                                        <CountUp start={focus ? 0 : null} end={parseInt(item.count)} duration={5} redraw={true}>
                                            {({ countUpRef }) => (
                                                <div>
                                                    <span className="counter" ref={countUpRef} />
                                                    <VisibilitySensor
                                                        onChange={isVisible => {
                                                            if (isVisible) {
                                                                setFocus(true)
                                                            }
                                                        }}
                                                    >
                                                        <span className="plus-icon">+</span>
                                                    </VisibilitySensor>
                                                </div>
                                            )}
                                        </CountUp>
                                        <p className="title">{item.title}</p>
                                    </div>
                                </div>
                            ))}
                        </Masonry>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Statics;