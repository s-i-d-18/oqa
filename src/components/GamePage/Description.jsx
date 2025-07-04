import { useState } from "react";


function Description({ description }){
    
            const [len, setLen] = useState(200);

            const stripHTML = (html) => {
            const doc = new DOMParser().parseFromString(html, "text/html");
            return doc.body.textContent || "";
            }
            
            const truncate = (text, length) => {
            if (!text) return "loading";
            return text.length > length ? text.slice(0, len) + "..." : text;
            }
            
            const newDescription = stripHTML(description);

            const displayText = truncate(newDescription, len);

            

            function showMore(){
                setLen((prev) => {
                    if(newDescription.length - prev > 300)
                        return prev + 300;
                    else
                        return newDescription.length;
                });
            }

        function hideDesc(){
            setLen(200);
        }


 
        
    return(
        <>
            <div className="">
                <p className="text-white ">
                    {description ? displayText : "Cooking..."}


                </p>
                {
                    displayText.length &&
                    (
                        displayText.length > 200 ? 
                        (
                            displayText.length === newDescription.length ? 
                            
                            <button className="text-white bg-transparent border-none font-semibold underline cursor-pointer" onClick={hideDesc} >I've read enough</button>
                            :
                            <button className="text-white bg-transparent border-none font-semibold underline cursor-pointer" onClick={showMore}>Read More</button>
                        )
                        :
                        <p></p>
  
                    )
              }
            </div>
        </>
    )
}

export default Description