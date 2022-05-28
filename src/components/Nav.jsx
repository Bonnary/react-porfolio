import React from 'react'

export default function Nav() {
  return (
    <nav className="navbar navbar-expand-sm navbar-dark">
      <div className="container">
        <a className="navbar-brand heading" href="#Home">
          Vet Bonnary
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item text-center mx-4">
              <a
                className="nav-link active headingDc"
                aria-current="page"
                href="#Home"
              >
                Home
              </a>
            </li>
            <li className="nav-item text-center mx-4">
              <a className="nav-link headingDc" href="#Education">
                Education
              </a>
            </li>
            <li className="nav-item text-center mx-4">
              <a className="nav-link headingDc" href="#Project">
                Project
              </a>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
}
