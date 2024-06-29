import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

// Preloader
import Preloader from './components/layouts/Preloader'
// Pages
import Home from './components/pages/Home'
import Hometwo from './components/pages/Hometwo'
import Homethree from './components/pages/Homethree'
import About from './components/pages/About'
import Bloggrid from './components/pages/Bloggrid'
import Blogstandard from './components/pages/Blogstandard'
import Blogdetail from './components/pages/Blogdetail'
import Portfolio from './components/pages/Portfolio'
import Portfoliotwo from './components/pages/Portfoliotwo'
import Portfoliodetail from './components/pages/Portfoliodetail'
import Service from './components/pages/Service'
import Servicetwo from './components/pages/Servicetwo'
import Servicedetail from './components/pages/Servicedetail'
import Shop from './components/pages/Shop'
import Productdetail from './components/pages/Productdetail'
import Team from './components/pages/Team'
import Teamdetail from './components/pages/Teamdetail'
import Careers from './components/pages/Careers'
import Contact from './components/pages/Contact'
import Faq from './components/pages/Faq'

export default () => {
  return (
    <Router basename={"/demo/react/finsa/"}>
      <Preloader />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/hometwo" component={Hometwo} />
        <Route path="/homethree" component={Homethree} />
        <Route path="/about" component={About} />
        <Route path="/bloggrid" component={Bloggrid} />
        <Route path="/blogstandard" component={Blogstandard} />
        <Route path="/blogdetail" component={Blogdetail} />
        <Route path="/portfolio" component={Portfolio} />
        <Route path="/portfoliotwo" component={Portfoliotwo} />
        <Route path="/portfoliodetail" component={Portfoliodetail} />
        <Route path="/service" component={Service} />
        <Route path="/servicetwo" component={Servicetwo} />
        <Route path="/servicedetail" component={Servicedetail} />
        <Route path="/shop" component={Shop} />
        <Route path="/shopdetail" component={Productdetail} />
        <Route path="/team" component={Team} />
        <Route path="/teamdetail" component={Teamdetail} />
        <Route path="/careers" component={Careers} />
        <Route path="/contact" component={Contact} />
        <Route path="/faq" component={Faq} />
      </Switch>
    </Router>
  )
}
