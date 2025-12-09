import "./Comic.css"

export const Comic = ({ headerColor, header2Color, edificios }) => {
    return (
        <div className="Header ">

            <nav className={`navbar navbar-expand-lg ${headerColor}`} data-bs-theme="dark">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="./public/logo-blanco.png" alt="Bootstrap" width="80" height="80" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto fs-4">
                            <li className="nav-item navbar-light ">
                                <a className="nav-link" href="#">Acerca de</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Comic interactivo</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Tienda</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Quienes somos</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>


            <div>

                <div className={`${edificios}`}>
                    <section className="hero container" />

                    <div className="hero-top text-center m-auto " style={{ maxWidth: "660px" }}>
                        <h1>EL CALENTAMIENTO GLOBAL Y LA INDUSTRALIZACION</h1>
                        <p className="subtitle">
                            Un estudiante conocido como Ossian debe enfrentarse contra un nuevo riesgo para la sociedad, Asher,
                            un hombre planta que ha acabado con toda la humanidad sin sentir nada de remordimiento o miedo,
                            pero todavía hay un sobreviviente y él no lo sabe.
                        </p>
                    </div>
                </div>

                <section className="tarjetass container p-4">
                    <div className="row">
                        <div className="col ">
                            <div className="card m-auto  border-white" style={{ width: "23rem", height: "30rem" }}>
                                <img className="img4 m-auto" width="250" src="../portada1.gif" alt="" />
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-center">Hijos de los hombres(2006)</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card m-auto  border-white" style={{ width: "23rem", height: "30rem" }}>
                                <img className="img4 m-auto p-2" width="260" src="../portada2.gif" alt="" />
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-center">Love(2011)</p>
                                </div>
                            </div>
                        </div>

                        <div className="col">
                            <div className="card m-auto  border-white" style={{ width: "23rem", height: "30rem" }}>
                                <img className="img4 m-auto p-2" width="260" src="../portada3.gif" alt="" />
                                <div className="card-body">
                                    <p className="card-text d-flex justify-content-center">Little Shop of Horrors(1986)</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <div class="row row-cols-1 row-cols-md-3 g-4">
                <div class="col">
                    <div class="card h-100">
                        <img src="../asher.gif" class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with s.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Last updated 3 mins ago</small>
                            </div>
                    </div>
                </div>
                <div class="col">
                    <div class="card h-100">
                        <img src="..." class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-body-secondary">Last updated 3 mins ago</small>
                            </div>
                    </div>
                </div>
            </div>    


                <div className="container text-center py-5 my-5 border rounded shadow-sm"
                    style={{
                        backgroundColor: "white",
                        maxWidth: "900px"
                    }}>
                    <h2 className="fw-bold" style={{ letterSpacing: "2px" }}>
                        COMING SOON
                    </h2>
                </div>


                <div className="container my-5 p-4 rounded shadow-sm"
                    style={{
                        backgroundColor: "#e8d3b7",
                        maxWidth: "900px"
                    }}>
                    <h5 className="text-center mb-2 fw-bold">
                        INSTRUCCIONES PARA EL CÓMIC
                    </h5>

                    <div className="row text-center">

                        <div className="col">
                            <div className="p-3 border rounded bg-light">
                                <img src="../mesa.gif" width="60" className="mb-2" />
                                <p className="fw-semibold">Instruccion 2</p>
                                <p>Comience a leer el comic, es libre de interactuar con el raton.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="p-3 border rounded bg-light">
                                <img src="../mano.gif" width="60" className="mb-2" />
                                <p className="fw-semibold">Instruccion 1</p>
                                <p>Ingrese al comic, desplazandose hacia abajo.</p>
                            </div>
                        </div>

                        <div className="col">
                            <div className="p-3 border rounded bg-light">
                                <img src="../apagado.gif" width="60" className="mb-2" />
                                <p className="fw-semibold">Instruccion 3</p>
                                <p>El comic cuenta con botones interactivos, presionalos.</p>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="container my-5 p-4 border rounded shadow-sm"
                    style={{ maxWidth: "900px" }}>
                    <div className="row g-3">
                        <div className="col-4"><div className="border" style={{ height: "200px" }}></div></div>
                        <div className="col-4"><div className="border" style={{ height: "200px" }}></div></div>
                        <div className="col-4"><div className="border" style={{ height: "200px" }}></div></div>
                        <div className="col-4"><div className="border" style={{ height: "200px" }}></div></div>
                        <div className="col-4"><div className="border" style={{ height: "200px" }}></div></div>
                        <div className="col-4"><div className="border" style={{ height: "200px" }}></div></div>
                    </div>
                </div>
            </div>
            );
}