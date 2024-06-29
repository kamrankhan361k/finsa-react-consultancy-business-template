import React, { Component, Fragment } from 'react'
import Cta from './Cta'
import Features from './Features'
import Service from './Service'
import Whyus from './Whyus'

class Content extends Component {
    render() {

        return (
            <Fragment>
                <Service />
                <Features />
                <Whyus />
                <Cta />
            </Fragment>
        );
    }
}

export default Content;