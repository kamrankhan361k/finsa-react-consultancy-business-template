import React from 'react'
import { Accordion, Card, Button } from 'react-bootstrap'

import illustration from '../../../assets/img/illustration/03.png'
import circleimg from '../../../assets/img/faq-circle.png'

function Faqs(props) {
    return (
        <section className="faq-section section-gap with-illustration with-shape grey-bg">
            <div className="container">
                <div className="faq-illustration-img">
                    <img src={illustration} alt="illustration" />
                </div>
                <div className="row justify-content-lg-end justify-content-center">
                    <div className="col-lg-6 col-md-10">
                        <div className="faq-content">
                            <div className="section-title mb-40 left-border">
                                <span className="title-tag">FAQ</span>
                                <h2 className="title">Frequently Asked Questions</h2>
                            </div>
                            {/* FAQ LOOP */}
                            <Accordion defaultActiveKey="0" className="faq-loop" id="faqAccordion">
                                <Card>
                                    <Accordion.Collapse eventKey="0" className="collapseparent">
                                        <Card.Body>
                                            But must explain to you how all this mistaken idea odenouncing pleasure and praising pain was born and will give
                                            </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                            How To Create A Mobile App In Expo And Firebase
                                                <span className="icons">
                                                <i className="far fa-plus" />
                                            </span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="1" className="collapseparent">
                                        <Card.Body>
                                            But must explain to you how all this mistaken idea odenouncing pleasure and praising pain was born and will give
                                            </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="1">
                                            Smashing Podcast Episode With Ben How ?
                                                <span className="icons">
                                                <i className="far fa-plus" />
                                            </span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="2" className="collapseparent">
                                        <Card.Body>
                                            But must explain to you how all this mistaken idea odenouncing pleasure and praising pain was born and will give
                                            </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="2">
                                            Learning Resources Challenging Workshops ?
                                                <span className="icons">
                                                <i className="far fa-plus" />
                                            </span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                                <Card>
                                    <Accordion.Collapse eventKey="3" className="collapseparent">
                                        <Card.Body>
                                            But must explain to you how all this mistaken idea odenouncing pleasure and praising pain was born and will give
                                            </Card.Body>
                                    </Accordion.Collapse>
                                    <Card.Header>
                                        <Accordion.Toggle as={Button} variant="link" eventKey="3">
                                            Micro-Typography: How To Space Kern ?
                                                <span className="icons">
                                                <i className="far fa-plus" />
                                            </span>
                                        </Accordion.Toggle>
                                    </Card.Header>
                                </Card>
                            </Accordion>
                            {/* End Faq LOOP */}
                        </div>
                    </div>
                </div>
                <div className="circle-img" style={{ backgroundImage: "url(" + circleimg + ")" }} />
            </div>
        </section>
    );
}

export default Faqs;