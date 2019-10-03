import React, { Component } from 'react';
import '../App.css';


class Contact extends Component{

    constructor(){
        super();
        this.alerta = this.alerta.bind(this);
    }
    
    alerta(){
        if( document.getElementById("name").value && 
            document.getElementById("email").value &&
            document.getElementById("asunto").value &&
            document.getElementById("mensaje").value
        )
        alert("Mensaje enviado");
        else alert("Faltan campos");
    }
    render(){
        return(
            <div className="App">
                <div className="container mt-5">
                    <h5>Contacto</h5>
                    <form className="form-group">
                        <label class="control-label mx-2 mt-3">Nombre: </label>
                        <input id="name" className="form-control-sm" type="text" placeholder="Tu nombre"/>
                        <br/>
                        <label class="control-label mt-3 mx-3">Correo: </label>
                        <input id="email" className="form-control-sm" type="text" placeholder="Tu correo"/>
                        <br/>
                        <label class="control-label mt-3 mx-3">Asunto: </label>
                        <input id="asunto" className="form-control-sm" type="text" placeholder="El asunto"/>
                        <br/>
                        <label className="control-label mt-3 mx-3">Mensaje: </label>
                        <textarea id="mensaje" className="form-control" rows="5" placeholder="Tu mensaje..."/>
                        <button className="btn btn-outline-primary btn-block my-3" onClick={this.alerta}>Enviar</button>
                    </form>
                    <div className="card my-3">
                        <div className="card-header">
                            Información adicional de contacto
                        </div>
                        <div className="card-body">
                            <strong>Dirección: </strong>
                            <p className="font-weight-light">Lindavista Vallejo III Secc, 07750 Ciudad de México, CDMX</p>
                            <strong>Email:</strong>
                            <p className="font-weight-light">moveyourhands@gmail.com</p>
                            <strong>Telefono:</strong>
                            <p className="font-weight-light">+52 5579121586</p>
                            <strong>Redes sociales</strong>
                            <p className="font-weight-light"><strong>Facebook: </strong> Move Your Hands</p>
                            <p className="font-weight-light"><strong>Twitter: </strong> MoveYour_Hands</p>
                            <p className="font-weight-light"><strong>Instagram: </strong>@move_your_hands</p>
                        </div>
                        <div className="card-footer">
                            Move your hands
                        </div>
                    </div>
                </div>
            </div>
        )
  }
}

export default Contact;