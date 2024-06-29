import React, { Component, Fragment } from 'react'
import Cta from './Cta'
import Servicedetails from './Servicedetails'

class Content extends Component {
    render() {

        return (
            <Fragment>
                <Servicedetails />
                <Cta />
            </Fragment>
        );
    }
}

export default Content;