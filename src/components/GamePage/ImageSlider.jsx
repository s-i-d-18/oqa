import { motion } from "framer-motion";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";


function ImageSlider({ screenshots }){

    // console.log(screenshots)
    const images = screenshots.map((p, i) => p.image);
    // console.log(images);

    const [selectedImage, setSelectedImage] = useState(null);


  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    if (index < images.length - 1) setIndex(index + 1);
  };

  const prevSlide = () => {
    if (index > 0) setIndex(index - 1);
  };

  return (
    <>
            

    {/* <div className="mt-10 flex  items-center gap-3 overflow-auto ml-7 mr-7">
        {
          images.map((img, index) => (
            <img src={img} alt="" className="w-[90%] rounded-2xl " onClick={() => setSelectedImage(img)}/>
          ))
        }


        {selectedImage && (
  <div
    className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
    onClick={() => setSelectedImage(null)} // closes on click
  >
    <img
      src={selectedImage}
      className="max-h-[90vh] max-w-[90vw] rounded-xl"
    />
  </div>
)}

    </div> */}


{/* IMAGE GALLERY WITH MOTION */}
<div className="flex overflow-x-auto gap-4 mt-10 mx-5">
  {images.map((img, i) => (
    <motion.img
      key={img}
      src={img}
      layoutId={img}
      onClick={() => setSelectedImage(img)}
      className="w-[90%] object-cover rounded-2xl cursor-pointer"
    />
  ))}
</div>

<AnimatePresence>
  {selectedImage && (
    <motion.div
      className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelectedImage(null)}
    >
      <motion.img
        src={selectedImage}
        layoutId={selectedImage}
        className="max-h-[90vh] max-w-[90vw] rounded-xl"
      />
    </motion.div>
  )}
</AnimatePresence>

    
    </>
  );
}


export default ImageSlider