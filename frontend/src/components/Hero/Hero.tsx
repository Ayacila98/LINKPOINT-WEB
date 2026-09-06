import "./Hero.css";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-content">

        <p className="eyebrow">
          DISTRIBUIDOR AUTORIZADO • SOLUCIONES MOVISTAR
        </p>

        <h1>
          Conectamos empresas
          <br />
          con soluciones de
          <span> telecomunicaciones</span>
        </h1>


        <p className="description">
          Instalación, soporte técnico y operaciones de conectividad
          para empresas que necesitan servicios confiables.
        </p>


        <div className="buttons">

          <button className="primary">
            Solicitar servicio →
          </button>

          <button className="secondary">
            Conocer empresa
          </button>

        </div>


        <div className="services">

          <article>
            <h3>Instalación</h3>
            <p>
              Despliegue técnico y activación de servicios.
            </p>
          </article>


          <article>
            <h3>Soporte técnico</h3>
            <p>
              Atención especializada para continuidad operativa.
            </p>
          </article>


          <article>
            <h3>Operaciones</h3>
            <p>
              Gestión técnica y mantenimiento.
            </p>
          </article>


        </div>


      </div>



      <div className="hero-right">

        <div className="image-placeholder">

          <div className="floating-card">

            <div className="movistar">
              M
            </div>

            <strong>
              +30
            </strong>

            <p>
              técnicos especializados
            </p>


            <ul>
              <li>Instalación</li>
              <li>Soporte técnico</li>
              <li>Operaciones</li>
              <li>Cobertura nacional</li>
            </ul>


          </div>


        </div>


      </div>



    </section>
  );
}

export default Hero;