export const SectionCard = () => {
  return (
    <div className="container mt-4">
      <div className="row g-4">
        {sections.map((section, index) => (
          <div className="col-md-4" key={index}>
            <div className={`card text-white bg-${section.color} h-100 section-card`}>
              <div className="card-body d-flex flex-column justify-content-center align-items-center">
                <i className={`bi ${section.icon} fs-1 mb-3`}></i>
                <h5 className="card-title">{section.label}</h5>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
