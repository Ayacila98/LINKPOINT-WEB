import "./Operations.css";

import {
  Users,
  RadioTower,
  Wrench,
  MapPin
} from "lucide-react";

const operations = [
  {
    icon: Users,
    number: "+30",
    title: "Especialistas técnicos",
    text: "Equipo operativo capacitado para ejecutar servicios de telecomunicaciones."
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
    icon: MapPin,
    number: "Perú",
    title: "Cobertura operativa",
    text: "Capacidad para desarrollar operaciones técnicas empresariales."
  }
];


export default function Operations(){

  return (

    <section className="operations">

      <div className="operations-header">

        <span>
          CAPACIDAD OPERATIVA
        </span>

        <h2>
          Equipos técnicos preparados
          <br />
          <strong>
            para grandes operaciones
          </strong>
        </h2>


        <p>
          Contamos con personal especializado,
          experiencia operativa y capacidad técnica
          para atender proyectos de telecomunicaciones.
        </p>

      </div>


      <div className="operations-grid">


        {
          operations.map((item,index)=>{

            const Icon = item.icon;


            return (

              <div 
                className="operation-box"
                key={index}
              >

                <Icon />

                <h3>
                  {item.number}
                </h3>


                <h4>
                  {item.title}
                </h4>


                <p>
                  {item.text}
                </p>


              </div>

            )

          })
        }


      </div>


    </section>

  )

}