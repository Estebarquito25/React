import React, { Component } from 'react'

//Este es le formulario para ingresar los registrados 
export default class CreateNote extends Component {
  render() {
    return (
      <div className='container d-flex justify-content-center align-items-center h-100'>
        <div className='container d-flex justify-content-center align-items-center '>
        <div className='row border border-3 p-4 main' style={{borderRadius: '1vw'}} >
          <form className='text-light'>
            <div class="mb-3">
              <label for="exampleInputEmail1" class="form-label">Correo</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              <div id="emailHelp" class="form-text">Ingresar un correo para el registro</div>
            </div>
            <div class="mb-3">
              <label for="exampleInputPassword1" class="form-label">Contraseña</label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <a href='http://localhost:3000' className='btn btn-outline-secondary rounded'>Registrarse</a>
          </form>
        </div>
        </div>
      </div>

    )
  }
}
