import React, { Component } from 'react';

class Preloader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // Load
            loading: true
        };
    }
    // Window Load
    PreloaderLoad = e => {
        this.setState({ loading: this.state.loading });
    };
    render() {
        const preloaderload = this.state.loading ? ' d-none' : '';
        return (
            <div id="preloader" className={`${preloaderload}`}>
                <div className="loader-cubes">
                    <div className="loader-cube1 loader-cube"></div>
                    <div className="loader-cube2 loader-cube"></div>
                    <div className="loader-cube4 loader-cube"></div>
                    <div className="loader-cube3 loader-cube"></div>
                </div>
            </div>
        );
    }
}

export default Preloader;