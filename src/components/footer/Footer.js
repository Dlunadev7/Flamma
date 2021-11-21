import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer p-4">
      <div className="col-10 m-auto">
        <ul className="d-flex flex-column align-items-center flex-lg-row justify-content-lg-between list-unstyled text-center">
          <li className="my-2 montserrat-regular fs-18">
            Flamma Real Estate Partners
          </li>
          <li className="my-2 montserrat-regular fs-18">
            Plataforma MediaCore® by <span className="mediahaus link-footer"> Mediahaus </span>
          </li>
          <li className="my-2 montserrat-regular fs-18">
            2021. Todos los derechos reservados
          </li>
        </ul>
      </div>
    </footer>
  )
}
