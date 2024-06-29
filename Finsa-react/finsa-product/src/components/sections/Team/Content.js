import React, { Component, Fragment } from 'react'
import Skills from './Skills'
import Teamblock from './Teamblock'
import Video from './Video'

class Content extends Component {
    render() {

    return (
        <Fragment>
            <Teamblock />
            <Video />
            <Skills />
        </Fragment>
        );
    }
}

export default Content;