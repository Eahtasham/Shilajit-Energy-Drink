import { services } from "../constants"
import ServiceCard from "../components/ServiceCard"

function Services() {
  return (
    <section className="max-container ">
            <div className="flex flex-col
        justify-start gap-5">
                <h2 className="text-4xl font-bold font-palanquin">
                    Why
                    <span className="text-coral-red"> Choose </span>
                    us?
                </h2>
                <p className="lg:max-w-lg mt-2 mb-8
            font-montserrat text-slate-gray">Infused with premium ingredients, our drink boosts energy, health, 
            and taste for a refreshing experience.
                </p>
            </div>
      <div className="flex 
    justify-center flex-wrap gap-9">
      {
        services.map((service)=>(
          <ServiceCard key={service.label}
          {...service} />
        ))
      }
      </div>
    </section>
  )
}

export default Services