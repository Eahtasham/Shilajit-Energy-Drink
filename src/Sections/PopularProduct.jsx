import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"


function PopularProduct() {
    return (
        <section id="products"
            className="max-container max-sm:mt-12">
            <div className="flex flex-col
        justify-start gap-5">
                <h2 className="text-4xl font-bold font-palanquin">
                    Our
                    <span className="text-coral-red"> Popular </span>
                    Products
                </h2>
                <p className="lg:max-w-lg mt-2
            font-montserrat text-slate-gray">Experience top notch what a good
                    ttile is here we are going to write someting else
                </p>
            </div>
            <div className="mt-16 grid lg:grid-cols-4 
            md:grid-cols-4 sm:grid-cols-2 grid-cols-1
            sm:gap-6 gap-14">
                {
                    products.map((product) => (
                        <PopularProductCard 
                            {...product.name} {...product}
                        />
                    ))
                }

            </div>
        </section>
    )
}

export default PopularProduct