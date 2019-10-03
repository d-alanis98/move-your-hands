import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import About from './About';
import Landing from './Landing';
import Contact from './Contact';
import fb from '../img/fb.png';
import twitter from '../img/twitter.png';
import insta from '../img/insta.png';
import logo from '../img/logo.png';
import '../App.css';


class Navigation extends Component{
  
  render(){
    return(
      <div>
        <Router>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
          <Link to={'/'} className="navbar-brand">Move your hands</Link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>

          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            
            <ul class="navbar-nav mr-auto">
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Cursos
                </a>
                <div class="dropdown-menu bg-dark text-light border-0" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item text-light disabled" href="#">LSM</a>
                  <a class="dropdown-item" href="#"></a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item text-light disabled" href="#">Proximamente</a>
                </div>
              </li>
              <li class="nav-item">
                <Link to={'/about'} className="nav-link">Nosotros</Link>
              </li>
              <li class="nav-item">
                <Link to={'/contact'} className="nav-link">Contacto</Link>
              </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
              <input class="form-control mr-sm-2 form-control-sm" type="search" placeholder="Buscar..." aria-label="Search"/>
            </form>
            

          </div>
        </nav>
        <hr />
        <Switch>
          <Route exact path='/' component={About} />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </Switch>
        <footer class="section footer-classic context-dark bg-dark" >
        <div class="container mt-1">
          <div class="row row-30 pt-3">
            <div class="col-md-4 col-xl-5 text-center">
              <div class="pr-xl-4"><a class="brand" href="/"><img class="brand-logo-light" src={logo} alt="" width="100" height="100"/></a>
                <p class="mt-2">Uniendo las manos para ser escuchados</p>
                <p class="rights"><span>Made with ❤ by Move your hands</span><span>©  </span><span class="copyright-year">2019</span><span> </span><span>. </span><span>All Rights Reserved.</span></p>
              </div>
            </div>
            <div class="col-md-4 text-center">
              <h5>Info. de contacto</h5>
              <dl class="contact-list">
                <dt>Dirección:</dt>
                <dd>Lindavista Vallejo III Secc, 07750 Ciudad de México, CDMX</dd>
              </dl>
              <dl class="contact-list">
                <dt>e-mail:</dt>
                <dd><a href="mailto:#">moveyourhands@gmail.com</a></dd>
              </dl>
              <dl class="contact-list">
                <dt>Teléfonos:</dt>
                <dd><a href="tel:#">+52 5579121586</a> <span>o</span> <a href="tel:#">01(800)-MOVEYHANDS</a>
                </dd>
              </dl>
            </div>
          </div>
        </div>
        <div class="row no-gutters social-container">
          <div class="col"><a class="social-inner" href="https://facebook.com"><img src={fb} height="50px" width="50px"/></a></div>
          <div class="col"><a class="social-inner" href="https://twitter.com"><img src={twitter} height="40px" width="40px"/></a></div>
          <div class="col"><a class="social-inner" href="https://instagram.com"><img src={insta} height="40px" width="40px"/></a></div>
        </div>
      </footer>
        </Router>
      </div>
    )
    
  }
}

export default Navigation;
