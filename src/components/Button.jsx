import React from 'react'

function Button({label,iconURL,backgroundColor,textColor,borderColor,fullWidth}) {
  return (
    <button
    className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
    ${
      backgroundColor
        ? `${backgroundColor} ${textColor} ${borderColor} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300`
        : "bg-coral-red text-white border-coral-red" 
    } rounded-full transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-light-red duration-300 ${fullWidth && "w-full"}`}
  >
        {label}        
        {iconURL &&<img 
            src={iconURL}
            alt="arrow right icon"
            className="ml-2 rounded-full w-4 h-5"
        />
        }

    </button>
  )
}

export default Button