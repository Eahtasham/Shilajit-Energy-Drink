import { reviews } from "../constants"
import ReviewCard from "../components/ReviewCard"


function CustomerReview() {
  return (
    <section className="max-container">
      <h3 className="font-palanquin text-center text-4xl font-bold">
        What Our 
        <span className="text-coral-red"> Customers </span>
        Say?
      </h3>
      <p className="text-center info-text m-auto mt-4
      max-2-lg">Hear genuin story from our customers </p>

      <div className="mt-24 flex flex-1 justify-evenly 
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
      </div>
    </section>
  )
}

export default CustomerReview