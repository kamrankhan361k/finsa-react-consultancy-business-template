import React, { Component, Fragment } from 'react'
import Blocks from './Blocks'
import Cta from './Cta'

class Content extends Component {
    render() {

        return (
            <Fragment>
                <Blocks />
                <Cta />
            </Fragment>
        );
    }
}

export default Content;