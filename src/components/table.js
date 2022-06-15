import React, { Component } from 'react'

export default class CreateUser extends Component {
  render() {
    return (
      <div className='container d-flex justify-content-center align-items-center h-100 p-4'>
        <div className='container d-flex justify-content-center align-items-center '>
          <div className='row border border-3 p-4 main' style={{ borderRadius: '1vw' }} >
            <table className="table text-light">
              <thead>
                <tr>
                  <th scope="col"></th>
                  <th scope="col">Nombre</th>
                  <th scope="col">Correo</th>
                  <th scope="col">ID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Alexander</td>
                  <td>alexcs252002@gmail.com</td>
                  <td>1.005.969.090</td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Lucas</td>
                  <td>lucas01@gmail.com</td>
                  <td>1.003.567.343</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Andres</td>
                  <td>andres123@gmail.com</td>
                  <td>94.301.223</td>
                </tr>
              </tbody>
            </table>
            <a href='http://localhost:3000' className='btn btn-outline-secondary rounded'>Regresar</a>
          </div>
        </div>
      </div>

    )
  }
}
