import "./Hero.css";

import { motion } from "framer-motion";

import {
  MapPin,
  Network,
} from "lucide-react";


export default function Hero() {

  return (

    <section className="hero">


      <div className="hero-grid"></div>



      <motion.div

        className="hero-content"

        initial={{
          opacity:0,
          y:30
        }}

        animate={{
          opacity:1,
          y:0
        }}

        transition={{
          duration:0.8
        }}

      >


        <div className="hero-tag">

          <span></span>

          DISTRIBUIDOR AUTORIZADO MOVISTAR

        </div>




        <h1>

          Conectamos empresas

          <br />

          con soluciones de

          <span>
            telecomunicaciones
          </span>

        </h1>




        <p>

          Instalación, soporte técnico y operaciones de conectividad

          para empresas que necesitan servicios confiables.

        </p>





        <div className="hero-actions">


          <button className="primary-btn">

            Solicitar servicio →

          </button>



          <button className="secondary-btn">

            Conocer empresa

          </button>


        </div>


      </motion.div>






      <motion.div

        className="hero-operation"

        initial={{
          opacity:0,
          scale:.9
        }}

        animate={{
          opacity:1,
          scale:1
        }}

        transition={{
          duration:1
        }}

      >



        <div className="network-lines">

          <Network/>

        </div>





        <div className="operation-card">



          <div className="movistar-badge">

            M

          </div>




          <strong>

            +30

          </strong>




          <p>

            Especialistas técnicos

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





          <div className="operation-footer">


            <MapPin size={17}/>


            Operación técnica


          </div>



        </div>


      </motion.div>



    </section>

  );

}