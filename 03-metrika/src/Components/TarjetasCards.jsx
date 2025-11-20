
import "./Tarjetas.css";


export const TarjetasCards = () => {
  return (
    <div className="cards-container">

      {/* 🟩 COLUMNA 1 */}
      <div className="cards-col">
        <div className="cards-row">

          <div className="card-small" style={{ background: "#5cb3a1" }}>
            <i className="bi bi-book card-icon"></i>
            <h2>About Us</h2>
          </div>

          <div className="card-small" style={{ background: "#69b190" }}>
            <i className="bi bi-people card-icon"></i>
            <h2>Our Team</h2>
          </div>

          <div className="card-large" style={{ background: "#c25b47" }}>
            <i className="bi bi-download card-icon"></i>
            <h2>Resume</h2>
          </div>

        </div>
      </div>

      {/* 🟩 COLUMNA 2 */}
      <div className="cards-col">
        <div className="card-xl" style={{ background: "#3aa1d8" }}>
          <i className="bi bi-images card-icon"></i>
          <h2>Our Works</h2>
        </div>
      </div>

      {/* 🟩 COLUMNA 3 */}
      <div className="cards-col">
        <div className="cards-row">

          <div className="card-large" style={{ background: "#c05a78" }}>
            <i className="bi bi-geo-alt card-icon"></i>
            <h2>Contacts</h2>
          </div>

          <div className="card-small" style={{ background: "#d87535" }}>
            <i className="bi bi-pencil-square card-icon"></i>
            <h2>Blog</h2>
          </div>

          <div className="card-small" style={{ background: "#e29e35" }}>
            <i className="bi bi-envelope card-icon"></i>
            <h2>Feedback</h2>
          </div>

        </div>
      </div>

    </div>
  );
}; 