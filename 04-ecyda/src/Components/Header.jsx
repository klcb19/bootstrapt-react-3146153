import "../Components/Header.css"

export const Header = ({ headerColor , header2Color }) => {
  return (
    <div className="Header ">
      <nav class={`navbar navbar-expand-lg  ${headerColor}`} data-bs-theme="dark">
        <div class="container ">
          <a class="navbar-brand" href="#">
            <img src="./logo-blanco.png" alt="Bootstrap" width="60" height="50"/>
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav ms-auto">
              <li class="nav-item navbar-light ">
                <a class="nav-link" href="#">Acerca de</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Comic interactivo</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Tienda</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Quienes somos</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
       <section className="Mitad">
        <img src="image.png" alt="Bootstrap"  />
       </section>
      <div className={`text-white text-center fs-5 ${header2Color}`}>Lo normal fue lo primero en morir</div>
    </div>
  )
}
