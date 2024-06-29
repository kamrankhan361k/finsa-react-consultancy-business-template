import React, { Component, Fragment } from 'react';

class NavHelper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            togglemethod: false,
            classmethod: false,
            windowSize: "",
            stickyheader: 0,
            matches: window.matchMedia("(max-width: 992px)").matches
        };
        this.toggleClass = this.toggleClass.bind(this);
        this.canvasToggle = this.canvasToggle.bind(this);
        this.handleResize = this.handleResize.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }
    // Navigation
    toggleClass() {
        this.setState({
            togglemethod: !this.state.togglemethod
        });
    }
    // Canvas
    canvasToggle() {
        this.setState({
            classmethod: !this.state.classmethod
        });
    }
    handleResize() {
        const windowWidthSize = window.innerWidth;
        const thumbWidth = (windowWidthSize < 992);
        this.setState(prevState => {
            return {
                windowWidthSize,
                thumbWidth
            };
        });
    };
    handleScroll() {
        const windowHeightSize = window.scrollY;
        const stickyheader = (windowHeightSize > 110);
        this.setState(prevState => {
            return {
                stickyheader
            };
        });
    };
    handlerLoad = e =>  {
        this.setState({ matches: e.matches });
    }
    componentDidMount() {
        window.addEventListener("load", this.handleResize);
        window.addEventListener("resize", this.handleResize);
        window.addEventListener("scroll", this.handleScroll);
        window.matchMedia("(max-width: 992px)").addListener(this.handlerLoad);
    }
    componentWillUnmount() {
        window.removeEventListener("load", this.handleResize);
        window.removeEventListener("resize", this.handleResize);
        window.removeEventListener("scroll", this.handleScroll);
    }
    render() {
        return (
            <Fragment />
        );
    }
}

export default NavHelper;