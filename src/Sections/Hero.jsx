import React from "react"
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes,statistics } from "../constants";
import ShoeCard from "../components/ShoeCard";
import { bigShoe1, bigShoe2, bigShoe3 } from "../assets/images";
import { useState } from "react";
import {motion} from "framer-motion"
import { fadeIn } from "../variants";

function Hero() {
    const [bigShoeImg,setBigShoeImg]=useState(bigShoe2)

  return (
    <section 
        id="home"
        className="w-full flex xl:flex-row flex-col justify-center
        p-2 min-h-screen gap-10 max-container"
        >
            <div className="relative xl:w-2/5 flex flex-col
            justify-center items-start w-full max-xl:padding-x 
            pt-28">
                <p className="text-xl font-montserrat 
                text-coral-red">Meet Our Product</p>

                <h1 className="mt-10 font-palanquin 
                text-8xl
                max-sm:text-[72px] max-sm:leading-[82px] 
                font-bold">
                    <span className="xl:bg-white xl:whitespace-nowrap relative
                    z-10 pr-10">The Best Boost!</span>
                    <br />
                    <motion.span
                    variants={fadeIn("down",0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.7}}
                    className=" text-coral-red 
                    inline-block mt-3">Shilajit
                    </motion.span>
                    <br />
                    <motion.span
                    variants={fadeIn("down",0.1)}
                    initial="hidden"
                    whileInView={"show"}
                    viewport={{once: false, amount: 0.7}}
                    className=" text-coral-red 
                    inline-block mt-3">Energy Drink
                    </motion.span>
                    
                </h1>
                <p 
                className="font-montserrat text-slate-gray
                text-lg leading-8 mt-6 mb-14 sm:max-w-sm"> 
                Boost stamina, enhance vitality, and recharge naturally with every sip!</p>
                <Button label="Buy Now" iconURL={arrowRight} />

                <div className="flex justify-start 
                items-start flex-wrap
                w-full mt-20 gap-16">
                    {statistics.map((stat,index) => (
                        <motion.div key={index}
                        variants={fadeIn("up",0.15)}
                        initial="hidden"
                        whileInView={"show"}
                        viewport={{once: false, amount: 0.7}}
                        >
                            <p className="text-4xl font-bold font-palanquin">{stat.value}</p>
                            <p className="font-montserrat text-slate-gray leading-7">{stat.label}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            

            <div className="flex-1 flex 
            relative justify-center
            items-center xl:min-h-screen
            max-xl:py-40 bg-primary bg-hero bg-cover bg-center">
                <img src={bigShoeImg}
                    alt="shoe collection"
                    width={610}
                    height={502}
                    className="object-contain relative z-10"
                />
                <div className="flex sm:gap-6 gap-4 
                absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
                    {shoes.map((shoe,index) => (
                        <div key={index}>
                            <ShoeCard 
                                index={index}
                                imgURL={shoe}
                                ChangeBigShoeImg={(shoe)=> 
                                    setBigShoeImg(shoe)}

                                bigShoeImg={bigShoeImg}
                            
                            />
                        </div>
                    ))}


                </div>    
            </div>

    </section>
  );
}

export default Hero