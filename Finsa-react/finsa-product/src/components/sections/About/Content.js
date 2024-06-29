import React, { Component, Fragment } from 'react';
import About from './About'
import Advancedtab from './Advancedtab'
import Service from './Service'
import Testimonials from './Testimonials'
import Video from './Video'

class Content extends Component {
    render() {
        return (
            <Fragment>
                <About />
                <Service />
                <Advancedtab />
                <Video />
                <Testimonials />
            </Fragment>
        );
    }
}

export default Content;