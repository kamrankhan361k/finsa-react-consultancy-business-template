import React, { Component, Fragment } from 'react';
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Client from '../layouts/Client'
import Content from '../sections/Teamdetail/Content'

class Teamdetail extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Finsa | Team Detail</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: 'Team Detail' }} />
                <Content />
                <section className="client-section">
                    <div className="container">
                        <div className="client-slider section-gap line-top">
                            <Client />
                        </div>
                    </div>
                </section>
                <Footer />
            </Fragment>
        );
    }
}

export default Teamdetail;