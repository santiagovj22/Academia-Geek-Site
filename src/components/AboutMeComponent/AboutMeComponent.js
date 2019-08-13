import React, { Component } from 'react'
import './styles/AboutMeStyles.css'
import Image1 from '../../images/Hello.jpg'
import Image2 from '../../images/image2.jpg';
import Image3 from '../../images/image3.jpg';

export default class About extends Component {
    render() {
        return (
            <div className="container">
                <h4 className="center">¡Academia Geek te de la bienvenida!</h4>
                <br/>
                <div className="row">
                    <div className="col-sm center">
                    <div className="card div">
                    <div className="container-fluid">
                        <img src={Image1} className="card-img-top mt-2" alt="..."/>
                    </div>
                        <div className="card-body">
                            <h6 className="center">¿Quiénes somos?</h6>
                            <p className="h6">Somos una alianza entre MAKAIA, Agile Innova y E-volution:
                             tres organizaciones que trabajan con tecnología, innovación y 
                             soluciones digitales que han decidido compartir conocimiento a 
                             través de una Academia de Código y Programación.</p>
                        </div>
                        
                        </div>
                    </div>
                    <div className="col-sm center">
                    <div className="card div">
                    <div className="container-fluid">
                        <img src={Image2} className="card-img-top mt-2" alt="..."/>
                    </div>
                        <div className="card-body">
                        <h6 className="center">¿Qué hacemos?</h6>
                            <p className="h6">Te ayudamos a que en 8 semanas logres adquirir y practicar 
                            competencias de desarrollo junior de aplicaciones web, preparándote así para comenzar tu 
                            camino en el emprendimiento tecnológico o trabajar con alguno de nuestros aliados.</p>
                        </div>
                        
                        </div>
                    </div>
                    <div className="col-sm center">
                    <div className="card div">
                    <div className="container-fluid">
                        <img src={Image3} className="card-img-top mt-2" alt="..."/>
                    </div>
                        <div className="card-body">
                        <h6 className="center">¿Qué aprenderás?</h6>
                            <p className="h6">Además de programar, fortalecerás otras 
                            competencias y trabajarás con metodologías ágiles de desarrollo
                             de software y emprendimiento TIC. Además te apoyaremos en la 
                             búsqueda de empleo y relacionamiento con empresas.</p>
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
                
        )
    }
}