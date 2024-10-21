import Button from "../components/Button"

function Subscribe() {
  return (
    <section  className="max-container flex justify-between items-center
    max-lg:flex-col gap-10" id="contact-us">
            <h3 className="text-4xl
            lg:max-w-md
            leading-[68px] font-palanquin font-bold">
     Stay energized with the  <span className="text-coral-red"> latest updates </span>  and offers
      </h3>
      <div className="lg:max-w-[40%]
      w-full flex items-center max-sm:flex-col
      gap-5 p-2.5 sm:border sm:border-slate-gray rounded-full">
        <input type="text"
        placeholder="Subscribe@developer.com"
        className="input"
        />
        <div className="flex max-sm:justify-end 
        max-sm:w-full items-center">
          <Button
            label="Sign Up" fullWidth
          />
        </div>
      </div>
    </section>
  )
}

export default Subscribe