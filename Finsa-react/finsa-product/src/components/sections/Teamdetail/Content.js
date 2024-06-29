import React, { Component, Fragment } from 'react'
import Memberdetail from './Memberdetail'
import Project from './Project'
import Teamskill from './Teamskill'

class Content extends Component {
    render() {

        return (
            <Fragment>
                <Memberdetail />
                <Teamskill />
                <div className="container">
                    <div className="line-bottom"></div>
                </div>
                <Project />
            </Fragment>
        );
    }
}

export default Content;