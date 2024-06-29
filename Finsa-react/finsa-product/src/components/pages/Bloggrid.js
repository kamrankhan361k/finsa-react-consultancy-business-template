import React, { Component, Fragment } from 'react';
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Client from '../layouts/Client'
import Content from '../sections/bloggrid/Content'

class Bloggrid extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Finsa | Blog Grid</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: 'Blog Grid' }} />
                <Content />
                <section className="client-section">
                    <div className="container">
                        <div className="client-slider section-gap">
                            <Client />
                        </div>
                    </div>
                </section>
                <Footer />
            </Fragment>
        );
    }
}

export default Bloggrid;