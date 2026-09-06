import { motion } from "framer-motion";
import {
  RadioTower,
  Headphones,
  Settings,
  Network,
} from "lucide-react";

import "./Services.css";

const services = [
  {
    icon: RadioTower,
    title: "Instalación técnica",
    description:
      "Despliegue profesional de servicios de telecomunicaciones, activaciones y soluciones de conectividad empresarial.",
  },
  {
    icon: Headphones,
    title: "Soporte técnico",
    description:
      "Atención especializada para garantizar continuidad operativa y resolución eficiente de incidencias.",
  },
  {
    icon: Settings,
    title: "Operaciones en campo",
    description:
      "Gestión de equipos técnicos, mantenimiento y ejecución de servicios operativos.",
  },
  {
    icon: Network,
    title: "Conectividad empresarial",
    description:
      "Soluciones orientadas a empresas que requieren comunicación estable y alto rendimiento.",
  },
];

export default function Services() {
  return (
    <section className="services-section">

      <div className="services-header">

        <span className="services-tag">
          SERVICIOS ESPECIALIZADOS
        </span>

        <h2>
          Soluciones técnicas para
          <span> empresas conectadas</span>
        </h2>

        <p>
          Contamos con personal especializado para instalación,
          soporte y operaciones de telecomunicaciones.
        </p>

      </div>


      <div className="services-grid">

        {services.map((service, index) => {

          const Icon = service.icon;

          return (

            <motion.article
              key={service.title}
              className="service-box"

              initial={{
                opacity:0,
                y:40
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              transition={{
                duration:0.5,
                delay:index * 0.1
              }}

              viewport={{
                once:true
              }}
            >

              <div className="service-icon">
                <Icon size={28}/>
              </div>


              <h3>
                {service.title}
              </h3>


              <p>
                {service.description}
              </p>


              <div className="service-line"></div>


            </motion.article>

          );

        })}

      </div>

    </section>
  );
}