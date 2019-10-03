import React, { Component } from 'react';
import cursos from '../img/cursos.jpg'
import historia from '../img/historia.png'
import quienes from '../img/quienes.jpg'
import nosotros from '../img/nosotros.png'
import organigrama from '../img/organigrama.jpg'
import '../App.css';


class About extends Component{
  render(){
    return(
      <div className="wrapper">
          <div className="container mt-5">
            <h3 className="text-center">Nosotros</h3>
            <div className="row mt-2">
                <div className="col-sm-4 text-center">
                    <img src={nosotros} className="img-delimiter my-2"/>
                </div>
                <div className="col-sm-8">
                    <h5>Mision</h5>
                    <p className="font-weight-light text-justify">
                        Somos un grupo de jóvenes innovadores preocupados por la inclusión social mexicana, y ofrecemos los mejores contenidos sobre la lengua de señas mexicana.
                    </p>
                    <hr/>
                    <h5>Vision</h5>
                    <p className="font-weight-light text-justify">
                        Convertirnos en la plataforma web preferida de los niños de la Ciudad de México,en donde se pueda aprender de manera didáctica y sencilla la lengua de señas mexicana, generando una buena inclusión social.
                    </p>
                    <hr/>
                    <h5>Valores</h5>
                    <ul class="font-weight-light text-justify">
                        <li>
                            <strong>1. Eficacia:</strong>  Operamos con precisión y excelencia. Mejoramos y aprendemos
                            todos los días. Valoramos la simplicidad y adoptamos nuevas tecnologías.
                        </li>
                            <strong>2. Responsabilidad:</strong> Empoderamos, pedimos y rendimos cuentas, cuidando el
                            hoy y el mañana.
                        <li>
                            <strong>3. Integridad:</strong> Pensamos, decidimos y hacemos lo correcto. Actuamos siempre
                            cuidando el interés del Grupo Move your Hands. Valoramos la buena
                            voluntad del otro.
                        </li>
                        <li>
                            <strong>4. Colaboración:</strong> Conseguimos trabajar como un solo individuo, relacionando
                            todas las áreas e integrarlas en una empresa nacional.
                        </li>
                    </ul>
                </div>
            </div>

            <hr className="mb-0"/>
            <hr className="mt-0"/>
            <h5 className="text-center">Quienes somos</h5>
            
            <div className="row mt-1">
                <div className="col-sm-4 text-center">
                    <table class="table table-borderless bg-transparent">
                        <tr>
                            <td class="align-middle pt-3"><img src={quienes} className="img-delimiter my-2"/></td>
                        </tr>
                    </table>
                    
                </div>
                <div className="col-sm-8">
                    <p className="font-weight-light text-justify">
                        Somos una empresa mexicana, orientada a lograr la inclusión de las personas con discapacidades auditivas o del habla en edad escolar, mediante la oferta de cursos de calidad, en una plataforma web moderna y sencilla de utilizar, misma que se espera que se hablite en la mayor cantidad de escuelas posibles en la CDMX y Área Metropolitana como zona inicial. Con miras a la expansión nacional y eventualmente, con la debida adecuación a las distintas lenguas de señas del mundo, a nivel internacional.
                    </p>
                </div>
            </div>

            <hr className="mb-0"/>
            <hr className="mt-0"/>
            <h5 className="text-center">Historia</h5>
            
            <div className="row mt-1 ml-1">
                <div className="col-sm-8">
                    <p className="font-weight-light text-justify">
                        Move your hands surge como una idea de negocios para las unidades de aprendizaje de administración de proyectos y gestión empresarial en la ESCOM, del IPN. De ser una idea creció rapidamente hasta conseguir una ronda de inversión que nos permitió habilitar la plataforma en su primera etapa, la cual ya se encuentra siendo utilizada por casi 300 escuelas de la CDMX, con casi 8000 usuarios dados de alta.
                        <br/><br/>
                        Y seguimos creciendo y mejorando esta plataforma para poder unir las manos para poder ser escuchados.
                        <br/>
                        <strong>Mueve tus manos para ser parte de esta gran historia!</strong>
                    </p>
                    
                </div>
                <div className="col-sm-4">
                    <img src={historia} className="img-delimiter my-2"></img>
                </div>
            </div>

            <hr className="mb-0"/>
            <hr className="mt-0"/>
            <h5 className="text-center">Cursos que impartimos</h5>
            
            <div className="row mt-1">
                <div className="col-sm-4 text-center">
                    <img src={cursos} className="img-delimiter my-2"/>
                </div>
                <div className="col-sm-8">
                    <p className="font-weight-light text-justify">
                        Contamos con el curso de fundamentos de la LSM, el cual es todo un plan de aprendizaje, diseñado por un pedagogo con años de experiencia en el ámbito educativo, además de profesores altamente calificados, los cuales te guiarán en tu aprendizaje de manera sencilla y eficaz. Con este curso podrás entender y comunicarte con cualquier otra persona que entienda la LSM a un nivel más que suficiente para poder incluir en tu grupo social a individuos con discapacidades del habla o auditiva.
                    </p>
                </div>
            </div>
            <hr className="mb-0"/>
            <hr className="mt-0"/>
            <h4 className="font-weight-bold">Organigrama</h4>
            <center><img src={organigrama} className="my-5 img-organigrama"/></center>
            <br/><br/><br/><br/>
          </div>
      </div>
    )
  }
}

export default About;