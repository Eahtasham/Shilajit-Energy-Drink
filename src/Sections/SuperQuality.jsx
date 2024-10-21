import { shoe8 } from "../assets/images"
import Button from "../components/Button"
function SuperQuality() {
  return (
    <section id="about-us"
      className="flex justify-between
      items-center max-lg:flex-col
      gap-10 w-full max-container"
    >
      <div className="flex flex-1 flex-col">
                <h2 className=" font-palanquin 
                text-4xl capitalize font-bold">
                  We Provide You
                    <span
                    className=" text-coral-red "> Premiusm
                    </span>
                    <br/>
                    <span
                    className=" text-coral-red "> Quality </span>
                  Energy Drink
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                Our energy drink, crafted with care, delivers exceptional vitality and wellness. 
                Packed with quality ingredients like Shilajit, Saffron, and Zam Zam Water, it ensures unmatched energy.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                Our commitment to excellence guarantees your satisfaction.
                </p>
                <div className="mt-8">
                <Button label="Buy Now" />
                </div>
      </div>
      <div className="flex flex-1 items-stretch 
      justify-center">
        <img 
            src={shoe8}
            alt="Shoe8"
            width={570}
            height={522}
            className="object-contain rounded-xl"
        />
      </div>

    </section>
  )
}

export default SuperQuality