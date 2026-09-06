import { motion } from "framer-motion";
import {
  RadioTower,
  Headset,
  Settings,
  MapPin,
} from "lucide-react";

import "./Hero.css";


const services = [
  {
    icon: <RadioTower size={22} />,
    title: "Instalación",
    text: "Despliegue técnico y activación de servicios.",
  },
  {
    icon: <Headset size={22} />,
    title: "Soporte técnico",
    text: "Atención especializada para continuidad operativa.",
  },
  {
    icon: <Settings size={22} />,
    title: "Operaciones",
    text: "Gestión técnica y mantenimiento.",
  },
];


export default function Hero() {

  return (

    <section className="hero">

      <div className="hero-grid"></div>


      <motion.div
        className="hero-container"
        initial={{opacity:0, y:30}}
        animate={{opacity:1,y:0}}
        transition={{duration:0.8}}
      >


        <div className="hero-content">


          <div className="hero-label">

            <span className="status-dot"></span>

            DISTRIBUIDOR AUTORIZADO MOVISTAR

          </div>



          <h1>

            Conectamos empresas
            <br/>

            con soluciones de

            <span>
              telecomunicaciones
            </span>

          </h1>



          <p className="hero-description">

            Instalación, soporte técnico y operaciones
            de conectividad para empresas que necesitan
            servicios confiables.

          </p>



          <div className="hero-buttons">

            <button className="primary-btn">
              Solicitar servicio →
            </button>


            <button className="secondary-btn">
              Conocer empresa
            </button>

          </div>



          <div className="service-list">


            {
              services.map((item,index)=>(

                <motion.div

                  className="service-card"

                  key={index}

                  whileHover={{
                    y:-6
                  }}

                >

                  <div className="service-icon">
                    {item.icon}
                  </div>


                  <h3>
                    {item.title}
                  </h3>


                  <p>
                    {item.text}
                  </p>


                </motion.div>

              ))
            }


          </div>


        </div>





        <motion.div

          className="operation-card"

          initial={{
            opacity:0,
            x:40
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            delay:.3,
            duration:.8
          }}

        >


          <div className="movistar-mark">
            M
          </div>



          <strong>
            +30
          </strong>


          <p>
            técnicos especializados
          </p>



          <ul>

            <li>
              Instalación
            </li>

            <li>
              Soporte técnico
            </li>

            <li>
              Operaciones
            </li>

            <li>
              Cobertura nacional
            </li>


          </ul>



          <div className="coverage">

            <MapPin size={16}/>

            Operación técnica

          </div>


        </motion.div>



      </motion.div>


    </section>

  );

}