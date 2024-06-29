import React, { Component, Fragment } from 'react'
import Contact from './Contact'
import Faqs from './Faqs'

class Content extends Component {
    render() {
        return (
            <Fragment>
                <Faqs />
                <Contact />
            </Fragment>
        );
    }
}

export default Content;