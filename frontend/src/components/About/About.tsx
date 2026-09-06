import "./About.css";
import { Users, RadioTower, Wrench, MapPinned } from "lucide-react";
import { motion } from "framer-motion";

const data = [
  {
    icon: Users,
    number: "+30",
    title: "Especialistas técnicos",
    text: "Equipo operativo capacitado para atender servicios de telecomunicaciones."
  },
  {
    icon: RadioTower,
    number: "24/7",
    title: "Soporte operativo",
    text: "Atención técnica orientada a mantener la continuidad del servicio."
  },
  {
    icon: Wrench,
    number: "100%",
    title: "Gestión técnica",
    text: "Instalación, mantenimiento y ejecución de operaciones en campo."
  },
  {
    icon: MapPinned,
    number: "Perú",
    title: "Cobertura operativa",
    text: "Capacidad para desarrollar operaciones técnicas empresariales."
  }
];


export default function About() {

  return (

    <section className="about">

      <div className="about-header">

        <span>
          NUESTRA EMPRESA
        </span>

        <h2>
          Tecnología,
          <strong> experiencia </strong>
          y operación técnica
        </h2>

        <p>
          En LINK POINT desarrollamos soluciones de telecomunicaciones
          para empresas que necesitan conectividad confiable,
          soporte especializado y equipos técnicos preparados.
        </p>

      </div>


      <div className="about-grid">

        {
          data.map((item,index)=>{

            const Icon = item.icon;

            return(

              <motion.div
                className="about-card"
                key={index}
                whileHover={{
                  y:-8
                }}
              >

                <Icon/>

                <strong>
                  {item.number}
                </strong>

                <h3>
                  {item.title}
                </h3>

                <p>
                  {item.text}
                </p>


              </motion.div>

            )

          })
        }

      </div>


    </section>

  );

}