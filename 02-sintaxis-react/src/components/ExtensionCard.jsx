import "../stylesheets/ExtensionCard.css"

export const ExtensionCard = () => {
    return (
        <>
            <div className="card">
                <div className="top">
                    <div className="icono">
                        <div className="icon"></div>
                    </div>
                    <div className="texto">
                        <div className="titulo">DevLens</div>
                        <p className="desc">Quickly inspect page layouts and visualize element boundaries.</p>
                    </div>
                </div>

                <div className="but">
                    <div className="bot">Remove</div>
                    <div className="boton">⚙️

                        
                    </div>
                </div>
            </div>
        </>
    )
}