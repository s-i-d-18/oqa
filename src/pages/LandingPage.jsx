
import Slide1 from "../components/LandingSlideshow/Slide1";
import Slide2 from "../components/LandingSlideshow/Slide2.jsx";
import Slide3 from "../components/LandingSlideshow/Slide3.jsx";
import Slide4 from "../components/LandingSlideshow/Slide4.jsx";
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';

import Navbar from "../components/Navbar.jsx";

    const slides = [<Slide1/>, <Slide2/>, <Slide3/>, <Slide4/>];

function LandingPage(){

    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(1);


    function nextSlide() {
    setDirection(1);
    setIndex((prev) => (prev + 1) % slides.length);
  }

  function prevSlide() {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + slides.length) % slides.length);
  }
    const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

    return(
        <>
            <div className="h-screen flex flex-col justify-center items-center relative overflow-hidden lg:h-[100vh]">
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                    key={index}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="absolute w-full h-full flex justify-center items-center"
                    >
                        {slides[index]}
                    </motion.div>
                </AnimatePresence>
            
        </div>
    <div className="  absolute top-[45vh]  w-full flex justify-between ">
        <button
            className="z-10 bg-[#171717] px-4 py-2 rounded cursor-pointer text-white"
            onClick={prevSlide}>
            {"<"}
        </button>
        <button
            className="z-10 bg-[#171717] px-4 py-2 rounded cursor-pointer text-white"
            onClick={nextSlide}>
            {">"}
        </button>
    </div>
        
        </>
    )
}

export default LandingPage