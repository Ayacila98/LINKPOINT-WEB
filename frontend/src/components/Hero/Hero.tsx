import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <span className="hero-tag">
          DISTRIBUIDOR AUTORIZADO • SOLUCIONES MOVISTAR
        </span>

        <h1>
          Conectamos empresas
          <br />
          con soluciones de
          <span> telecomunicaciones</span>
        </h1>

        <p>
          Instalación, soporte técnico y operaciones de conectividad
          para empresas que necesitan servicios confiables.
        </p>


        <div className="hero-buttons">
          <button className="btn-primary">
            Solicitar servicio →
          </button>

          <button className="btn-secondary">
            Conocer empresa
          </button>
        </div>


        <div className="services-mini">

          <div>
            <strong>⚡ Instalación</strong>
            <small>
              Despliegue y activación de servicios
            </small>
          </div>

          <div>
            <strong>⚙ Soporte técnico</strong>
            <small>
              Atención especializada
            </small>
          </div>

          <div>
            <strong>👥 Operaciones</strong>
            <small>
              Gestión y mantenimiento
            </small>
          </div>

        </div>


      </div>



      <div className="hero-visual">

        <div className="movistar-card">

          <div className="movistar-logo">
            M
          </div>

          <h3>
            +30
          </h3>

          <p>
            técnicos especializados
          </p>


          <ul>
            <li>✓ Instalación</li>
            <li>✓ Soporte técnico</li>
            <li>✓ Operaciones</li>
            <li>✓ Cobertura nacional</li>
          </ul>

        </div>


      </div>


    </section>
  );
}

export default Hero;