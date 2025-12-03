
import "./Comic.css"

export const Comic = ({ headerColor, header2Color,edificios }) => {
    return (
        <div className="Header ">
            <nav class={`navbar navbar-expand-lg  ${headerColor}`} data-bs-theme="dark">
                <div class="container ">
                    <a class="navbar-brand" href="#">
                        <img src="./public/logo-blanco.png" alt="Bootstrap" width="80" height="80" />
                    </a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNav">
                        <ul class="navbar-nav ms-auto fs-4">
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
           <div className={`${edificios}`}>

           </div>
        
        </div>
    )
}