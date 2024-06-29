import React, { Component, Fragment } from 'react'
import About from './About'
import Banner from './Banner'
import Contact from './Contact'
import Cta from './Cta'
import Faqs from './Faqs'
import Project from './Project'
import Service from './Service'
import Statics from './Statics'
import Team from './Team'
import Testimonials from './Testimonials'
import Whyus from './Whyus'

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <Service />
                <About />
                <Project />
                <Faqs />
                <Statics />
                <Team />
                <Whyus />
                <Cta />
                <Testimonials />
                <Contact />
            </Fragment>
        );
    }
}

export default Content;