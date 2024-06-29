import React, { Component, Fragment } from 'react'
import Advancedtab from './Advancedtab'
import Cta from './Cta'
import Service from './Service'
import Video from './Video'
import Workingprocess from './Workingprocess'

class Content extends Component {
    render() {

        return (
            <Fragment>
                <Workingprocess />
                <Service />
                <Advancedtab />
                <Video />
                <Cta />
            </Fragment>
        );
    }
}

export default Content;