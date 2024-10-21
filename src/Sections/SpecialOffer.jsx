import { arrowRight } from "../assets/icons"
import { offer } from "../assets/images"
import Button from "../components/Button"

function SpecialOffer() {
  return (
    <section className="flex justify-wrap
    item-center max-xl:flex-col-reverse
    gap-10 max-container">
        <div className="flex-1 scroll-smooth focus:scroll-auto">
          <img src={offer} alt="special offer"
            width={773} height={687}
            className="object-contain w-full rounded-xl"
            />
        </div>
        <div className="flex flex-1 flex-col">
                <h2 className=" font-palanquin 
                text-4xl capitalize font-bold">
                    <span
                    className=" text-coral-red "> Special </span>
                     Offer
                </h2>
                <p className="mt-4 lg:max-w-lg info-text">
                Embark on a drinking journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, 
                we offer unparalleled value that sets us apart.
                </p>
                <p className="mt-6 lg:max-w-lg info-text">
                Experience unbeatable deals on the best energy drinks in the market!
                </p>
                <div className="mt-8 flex flex-wrap gap-4">
                <Button label="Shop Now" iconURL={arrowRight}/>
                <Button
                    label='Learn more'
                    backgroundColor='bg-white'
                    borderColor='border-slate-gray'
                    textColor='text-slate-gray'
                  />
                </div>
      </div>
    </section>
  )
}

export default SpecialOffer