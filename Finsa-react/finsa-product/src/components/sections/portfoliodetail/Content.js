import React, { Component, Fragment } from 'react'
import Cta from './Cta'
import Details from './Details'

class Content extends Component {
    render() {

        return (
            <Fragment>
                <Details />
                <Cta />
            </Fragment>
        );
    }
}

export default Content;