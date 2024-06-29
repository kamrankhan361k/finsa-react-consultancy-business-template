import React, { Component } from 'react';
import { Link } from 'react-router-dom'

const navigationmenu = [
    {
        id: 1,
        linkText: 'Home',
        child: true,
        submenu: [
            {
                id: 11,
                link: '/',
                linkText: 'Home One'
            },
            {
                id: 12,
                link: '/hometwo',
                linkText: 'Home Two'
            },
            {
                id: 13,
                link: '/homethree',
                linkText: 'Home Three'
            },
        ]
    },
    {
        id: 2,
        linkText: 'Pages',
        child: true,
        submenu: [
            {
                id: 21,
                link: '/about',
                linkText: 'About us'
            },
            {
                id: 22,
                link: '/team',
                linkText: 'Our Team'
            },
            {
                id: 23,
                link: '/teamdetail',
                linkText: 'Team Details'
            },
            {
                id: 24,
                link: '/careers',
                linkText: 'Careers'
            },
            {
                id: 25,
                link: '/faq',
                linkText: 'FAQ'
            },
        ]
    },
    {
        id: 3,
        linkText: 'Services',
        child: true,
        submenu: [
            {
                id: 31,
                link: '/service',
                linkText: 'Services'
            },
            {
                id: 32,
                link: '/servicetwo',
                linkText: 'Services Two'
            },
            {
                id: 33,
                link: '/servicedetail',
                linkText: 'Services Details'
            },
        ]
    },
    {
        id: 4,
        linkText: 'Blog',
        child: true,
        submenu: [
            {
                id: 41,
                link: '/blogstandard',
                linkText: 'Blog Standard'
            },
            {
                id: 42,
                link: '/bloggrid',
                linkText: 'Blog Grid'
            },
            {
                id: 43,
                link: '/blogdetail',
                linkText: 'Blog Details'
            },
        ]
    },
    {
        id: 5,
        linkText: 'Portfolio',
        child: true,
        submenu: [
            {
                id: 51,
                link: '/portfolio',
                linkText: 'Portfolio'
            },
            {
                id: 52,
                link: '/portfoliotwo',
                linkText: 'Portfolio Two'
            },
            {
                id: 53,
                link: '/portfoliodetail',
                linkText: 'Portfolio Details'
            },
        ]
    },
    {
        id: 6,
        linkText: 'Shop',
        child: true,
        submenu: [
            {
                id: 61,
                link: '/shop',
                linkText: 'Shop'
            },
            {
                id: 62,
                link: '/shopdetail',
                linkText: 'Product Details'
            },
        ]
    },
    {
        id: 7,
        linkText: 'Contact',
        link: '/contact'
    },
]

class Navmenu extends Component {
    render() {
        const getNextSibling = (elem, selector) => {
            // Get the next sibling element
            var sibling = elem.nextElementSibling
            // If there's no selector, return the first sibling
            if (!selector) return sibling
            // If the sibling matches our selector, use it
            // If not, jump to the next sibling and continue the loop
            while (sibling) {
                if (sibling.matches(selector)) return sibling
                sibling = sibling.nextElementSibling
            }
        }

        const triggerChild = (e) => {
            let subMenu = ''
            subMenu = (getNextSibling(e.target, '.submenu') !== undefined) ? getNextSibling(e.target, '.submenu') : null
            if (subMenu !== null && subMenu !== undefined && subMenu !== '') {
                subMenu.classList = subMenu.classList.contains('d-block') ? 'submenu' : 'submenu d-block'
            }
        }
        return (
            <ul>
                {navigationmenu.length > 0 ? navigationmenu.map((item, i) => (
                    <li key={i} className={`${item.child ? 'has-submemu' : ''} `} onClick={triggerChild}>
                        {item.child ? <> <Link onClick={e => e.preventDefault()} to="/"> {item.linkText} </Link> <span className="dd-trigger"><i className="fal fa-angle-down"></i></span> </> : <Link to={item.link}> {item.linkText} </Link>}
                        {item.child ?
                            <ul className="submenu" role="menu">
                                {item.submenu.map((sub_item, i) => (
                                    <li key={i} className={`${sub_item.child ? 'has-submemu' : ''} `}>
                                        {sub_item.child ? <> <Link onClick={e => e.preventDefault()} to="/"> {sub_item.linkText} </Link> <span className="dd-trigger"><i className="fal fa-angle-down"></i></span> </> : <Link to={sub_item.link}> {sub_item.linkText} </Link>}
                                        {sub_item.submenu ?
                                            <ul className="submenu">
                                                {sub_item.submenu.map((third_item, i) => (
                                                    <li key={i}><Link
                                                        to={third_item.link}>{third_item.linkText}</Link>
                                                    </li>
                                                ))}
                                            </ul> : null}
                                    </li>
                                ))}
                            </ul>
                            : null
                        }
                    </li>
                )) : null}
            </ul>
        );
    }
}

export default Navmenu;