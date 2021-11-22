import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom'


export const Navbar = () => {

  const settings = useSelector((store) => store.settings);

  return (

    <div className="w-100 navbar justify-content-end py-5 d-lg-flex col-10 m-auto">
      <nav className="col-10 d-flex justify-content-end m-auto">
        <ul className="nav">
          <li className="nav-item">
            <Link className="nav-link active sspro-regular fs-14" to={ settings.base_url }>Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link sspro-regular fs-14" to={ settings.base_url + "desarrollos" }>Desarrollos</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link sspro-regular fs-14" to={ settings.base_url + "nosotros" }>Nosotros</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link sspro-regular fs-14" to={ settings.base_url + "contacto" }>Contacto</Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}
