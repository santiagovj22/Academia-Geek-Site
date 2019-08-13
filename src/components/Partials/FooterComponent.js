import React from 'react';
import './styles/PartialStyle.css';
import 'bootstrap/dist/css/bootstrap.min.css';
class Footer extends React.Component {
    render(){

        return(
            <footer class="section footer-classic context-dark bg-dark">
            <div class="container">
              <div class="row row-30">
                <div class="col-md-4 col-xl-5">
                  <div class="pr-xl-4"><a class="brand" href="index.html"><img class="brand-logo-light" src="images/agency/logo-inverse-140x37.png" alt="" width="140" height="37" srcset="images/agency/logo-retina-inverse-280x74.png 2x"/></a>
                    <p>Queremos innovacion, somos una organizacion diferente Donte te ayudamos a acercarte al mundo laboral y que tengas los conocimientos y habilidades para trabajar en una empresa</p>
                    
                    <p class="rights"><span>©  </span><span class="copyright-year">2019</span><span> </span><span>Academia Geek</span><span>. </span><span>All Rights Reserved.</span></p>
                  </div>
                </div>
                <div class="col-md-4">
                  <h5>Donde encontrarnos:</h5>
                  <dl class="contact-list">
                    <dt>Direccion:</dt>
                    <dd>Carrera 48 No. 7 – 151 | El Poblado </dd>
                  </dl>
                  <dl class="contact-list">
                    <dt>email:</dt>
                    <dd><a href="mailto:#">academiaGeek@gmail.com</a></dd>
                  </dl>
                  <dl class="contact-list">
                    <dt>Telefonos:</dt>
                    <dd><a href="tel:#">+91 7568543012</a> <span>--</span> <a href="tel:#">+91 9571195353</a>
                    </dd>
                  </dl>
                </div>
                <div class="col-md-4 col-xl-3">
                  <ul class="nav-list">
                    <li><a href="a">Acerca de</a></li>
                    <li><a href="a">Cursos</a></li>
                    <li><a href="a">Proyectos</a></li>
                    <li><a href="a">Actualizaciones</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="row no-gutters social-container">
              <div class="col"><a class="social-inner" href="a"><span>Facebook</span></a></div>
              <div class="col"><a class="social-inner" href="a"><span>instagram</span></a></div>
              <div class="col"><a class="social-inner" href="a"><span>twitter</span></a></div>
              <div class="col"><a class="social-inner" href="a"><span>google</span></a></div>
            </div>
          </footer>
        );
    
    }
}

export default Footer;