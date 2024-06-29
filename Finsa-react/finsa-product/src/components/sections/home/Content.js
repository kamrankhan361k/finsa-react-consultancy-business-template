import React, { Component, Fragment } from 'react'
import Client from '../../layouts/Client'
import About from './About'
import Banner from './Banner'
import Blog from './Blog'
import Counter from './Counter'
import Features from './Features'
import Service from './Service'
import Skills from './Skills'
import Team from './Team'
import Testimonials from './Testimonials'
import Video from './Video'
import Whyus from './Whyus'

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Banner />
                <About />
                <Service />
                <Video />
                <Features />
                <Whyus />
                <Counter />
                <Team />
                <Skills />
                <Testimonials />
                <section className="client-section">
                    <div className="container">
                        <div className="client-slider section-gap line-bottom">
                            <Client />
                        </div>
                    </div>
                </section>
                <Blog />
            </Fragment >
        );
    }
}

export default Content;