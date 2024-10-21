import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"
import {motion} from "framer-motion"
import { fadeIn } from "../variants";

function CustomerReview() {
  return (
    <section className="max-container">
      <motion.h3
      variants={fadeIn("down",0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.5}} className="font-palanquin text-center text-4xl font-bold">
        What Our 
        <span className="text-coral-red"> Customers </span>
        Say?
      </motion.h3>
      <p className="text-center info-text m-auto mt-4
      max-2-lg">Hear genuin story from our customers </p>

      <motion.div 
      variants={fadeIn("up",0.1)}
      initial="hidden"
      whileInView={"show"}
      viewport={{once: false, amount: 0.5}}
      className="mt-24 flex flex-1 justify-evenly 
      items-center max-lg:flex-col gap-14">
          {
            reviews.map((review)=>(
              <ReviewCard 
              key={review.className}
              customerName={review.customerName}
              imgURL={review.imgURL}
              rating={review.rating}
              feedback={review.feedback}
              />
            ))
          }
      </motion.div>
    </section>
  )
}

export default CustomerReview