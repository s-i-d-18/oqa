import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Genres from "./Genres";
import Playtime from "./Playtime";
import AddButton from "./SliderButtons/AddButton";
import SeeGame from "./SliderButtons/SeeGame";
import { Link } from "react-router-dom";


function HomePageSlider({ games, desc, genres, playtime, tags, displaytext}){


    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setIndex((prev) => (prev + 1) % games.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setIndex((prev) => (prev - 1 + games.length) % games.length);
    };
    
    const stripHTML = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };


    const truncate = (text) => {
        if (!text) return "";
        return text.length > 200 ? text.slice(0, 200) + "..." : text;
    };

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
            x: dir < 0 ? 300 : -300,
            opacity: 0,
        }),
    };


    //AUTO SWIPE
    // useEffect(() => {
    //     if (!games.length) return;

    //     const interval = setInterval(() => {
    //         setIndex(prev => (prev + 1) % games.length);
    //     }, 5000);

    //     return () => clearInterval(interval);
    //     }, [games]);


    return(
        <>  
            <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
                <AnimatePresence custom={direction} mode="wait">
                    <motion.div
                    key={index}
                    className="w-full flex flex-col items-center justify-center"
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.2 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    onDragEnd={(e, info) => {
                        if (info.offset.x > 100) {
                            prevSlide();
                        } else if (info.offset.x < -100) {
                            nextSlide();
                        }
                    }}
                    > 
                    {/* above this is the code for the motion */}



{/* display code begins       */}
                <p className="text-white mt-20 ml-5 text-4xl">#{index+1} {displaytext}</p>
                <div className="mt-10 flex flex-col items-center justify-center ">
                {games.length ? 
                    <div>
                        <div className="flex flex-col justify-center items-center lg:flex-row ">
                            <img src={games[index].background_image} alt="" className="rounded-3xl max-w-[95%] max-h-70 lg:max-h-[70%] lg:h-100 lg:mx-10" /> 
                                
                                <div className="lg:flex lg:flex-col">
                                    <p className="text-white text-5xl my-6 ml-0 text-center">{games[index].name}</p>
                                
                                    {
                                        desc.length ? 
                                        <p className="text-white w-[95%] ml-5 mr-5">{truncate(stripHTML(desc[index]))}
                                        
                                        {
                                            !(truncate() == "") ? <strong> Show More</strong>: ""
                                        }
                                        </p>
                                        : <p></p>
                                    }
                                                    {
                        desc.length >1 && 
                            <div>
                                <div className="mt-5 ml-2 flex flex-wrap gap-3">
                                    {/* {
                                        genres.map((genre, index) => <Genres text={genres[index]} />)
                                    } */}
                                    <Genres text={genres[index]} />
                                    <Genres text={tags[index*2]} />
                                    <Genres text={tags[(index*2) + 1]} />
                                    <Playtime text={playtime[index]} />
                                    {/* {console.log(tags)} */}

                                    
                                </div>
                                <div className="flex items-center justify-center gap-10 mt-8">
                                    <AddButton />
                                    <Link to={`/game/${games[index].slug}`} key={games[index].id}>
                                        <SeeGame />
                                    </Link>
                                    
                                </div>
                            </div>
                            
                        }
                                </div>
                                
                        </div>

                        
                    </div>
                    
                : 
                <p className="text-white">Loading...</p>}
            </div>
{/* display code ends */}
            </motion.div>
         </AnimatePresence>

           <div className="absolute top-[400px] left-4 ">
    <button onClick={prevSlide} className="text-white text-3xl">←</button>
  </div>
  <div className="absolute top-[400px] right-4 ">
    <button onClick={nextSlide} className="text-white text-3xl">→</button>
  </div>
   </div>             
            
        </>)
}

export default HomePageSlider