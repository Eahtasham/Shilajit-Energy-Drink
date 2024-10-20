import React from 'react'
import { star } from '../assets/icons'

function ReviewCard({customerName,imgURL,rating,feedback}) {
  return (
    <div className="flex justify-center items-center flex-col">
            <img
                src={imgURL}
                alt="customer"
                className="rounded-full object-cover
                w-[120px] h-[120]"
            />
            <h3 className=" mt-2 font-bold text-3xl font-palanquin text-center">{customerName}</h3>
            <p className="mt-6 max-w-sm text-center info-text">{feedback}</p>
            <div className="mt-3 flex justify-center items-center gap-2.5">
                <img src={star} width={24} height={24} alt="rating" className="object-contain m-0"/>
                <p className=" text-xl text-slate-gray font-montserrat">{rating}</p>
            </div>

    </div>
  )
}

export default ReviewCard