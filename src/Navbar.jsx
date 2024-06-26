import Logo from './assets/Lawrence.__2_-removebg-preview-copy-removebg-preview.png'

function NavBar(){

    return (
      <>
        <nav className="navbar navbar-expand-lg bg-transparent">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src={Logo} alt=""/>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Projects
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">
                    Testimonials
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
}

export default NavBar