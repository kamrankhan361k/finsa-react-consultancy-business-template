import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import * as serviceWorker from './serviceWorker'

// Css
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/slick-carousel/slick/slick.css'
import '../node_modules/slick-carousel/slick/slick-theme.css'
import '../node_modules/animate.css/animate.css'
import '../node_modules/react-circular-progressbar/dist/styles.css'
import './assets/css/font-awesome.min.css'
import './assets/css/flaticon.css'
import './assets/css/style.css'
import '../node_modules/react-modal-video/scss/modal-video.scss'


ReactDOM.render(
  <BrowserRouter basename={'/demo/react/finsa/'}>
    <App />
  </BrowserRouter>,
  document.getElementById('finsa')
)

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
