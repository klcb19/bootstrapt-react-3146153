
import "./Comic.css"

export const Comic = ({ headerColor, header2Color, edificios }) => {
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
                <section className="hero container" />
                <div className="hero-top text-center m-auto " style={{ maxWidth: "772" }}>
                    <h1>EL CALENTAMIENTO GLOBAL Y LA INDUSTRALIZACION</h1>
                    <p className="subtitle">Un estudiante conocido como Ossian debe enfrentarse contra un nuevo riesgo para la sociedad, Asher, un hombre planta que ha acabado con toda la humanidad sin sentir nada de remordimiento o miedo, pero todavía hay un sobreviviente y él no lo sabe.</p>
                </div>

            </div>
            <div class="card-group">
                <div class="card">
                    <img src="../portada1.gif" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                </div>
                <div class="card">
                    <img src="../portada2.gif" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                </div>
                <div class="card">
                    <img src="../portada3.gif" class="card-img-top" alt="..."/>
                        <div class="card-body">
                            <h5 class="card-title">Card title</h5>
                            <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                        </div>
                </div>
            </div>
        </div>

    )
}