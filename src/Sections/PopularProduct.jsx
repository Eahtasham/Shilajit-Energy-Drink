import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"
import {motion} from "framer-motion"
import { fadeIn } from "../variants";

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
            font-montserrat text-slate-gray">Experience the Ultimate Energy Boost. Discover the flavors that fuel your day!
                </p>
            </div>
            <motion.div 
            variants={fadeIn("up",0.1)}
            initial="hidden"
            whileInView={"show"}
            viewport={{once: false, amount: 0.5}}
            className="mt-16 grid lg:grid-cols-4 
            md:grid-cols-4 sm:grid-cols-2 grid-cols-1
            sm:gap-6 gap-14">
                {
                    products.map((product) => (
                        <PopularProductCard 
                            {...product.name} {...product}
                        />
                    ))
                }

            </motion.div>
        </section>
    )
}

export default PopularProduct