import React, { Component, Fragment } from 'react';
import MetaTags from 'react-meta-tags'
import Header from '../layouts/Header'
import Footer from '../layouts/Footer'
import Breadcrumbs from '../layouts/Breadcrumbs'
import Content from '../sections/shopdetail/Content'

class Productdetail extends Component {
    render() {
        return (
            <Fragment>
                <MetaTags>
                    <title>Finsa | Shop Detail</title>
                    <meta
                        name="description"
                        content="#"
                    />
                </MetaTags>
                <Header />
                <Breadcrumbs breadcrumb={{ pagename: 'Shop Detail' }} />
                <Content />
                <Footer />
            </Fragment>
        );
    }
}

export default Productdetail;