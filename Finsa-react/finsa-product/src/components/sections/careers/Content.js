import React, { Component, Fragment } from 'react'
import Jobcategory from './Jobcategory'
import Joblist from './Joblist'

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Jobcategory />
                <Joblist />
            </Fragment>
        );
    }
}

export default Content;