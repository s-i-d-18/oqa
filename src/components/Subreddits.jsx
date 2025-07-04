import { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function Subreddits({ game, name }){

    const baseurl = "https://api.rawg.io/api/";
    const apikey = "9dadaca7b9ac4b738bd26b9ff3658db1";

    const [subreddit, setSubreddit] = useState({});


    useEffect(() => {
        const fetchData = async () =>{

            const response = await fetch(`${baseurl}games/${game}/reddit?key=${apikey}`);
            // console.log(`${baseurl}games/${game}/reddit?key=${apikey}`);    
            const data = await response.json();
            // if (data) console.log(data);
            setSubreddit(data.results[0]);

        }

        fetchData();

    }, [game]);

    // console.log(subreddit)
        const stripHTML = (html) => {
        const doc = new DOMParser().parseFromString(html, "text/html");
        return doc.body.textContent || "";
    };

        const truncate = (text) => {
        if (!text) return "";
        return text.length > 150 ? text.slice(0, 150) + "..." : text;
    };

    return(
        <>  
        
        
        
        {
            
            (subreddit) && (subreddit.username != "") &&
        
            <a href={subreddit.url} target="__blank" rel="noopener noreferrer">
               <div className="bg-[#1d1d1d] mt-10 py-5 rounded-2xl ">


                    {/* LOGO AND USERNAME */}
                    <div className="flex gap-3 w-fit  bg-[#444444] ml-5 px-3 py-1 rounded-lg font-bold">
                        <img src="/reddit/redditor.png" alt="" className="h-7"/>
                        {
                            subreddit &&
                            <span className="text-white">{subreddit.username}</span>
                        }
                    </div>
                    

                    {/* TITLE OF THE POST */}
                    <div className="ml-5 mr-5 mt-5 text-xl font-semibold">
                        {
                            subreddit &&
                            <p className="text-white">{`${subreddit.name}`}</p>
                        }                   
                    </div>

                    {/* TEXT FOR THE POST */}
                    <div className="text-white ml-5 mr-5 mt-2">
                        {
                            subreddit &&
                            <p>{truncate(stripHTML(subreddit.text))}</p>
                        }
                    </div>


                    {/* GAME FOR THE POST */}
                    <div className="text-lg text-white bg-[#444444] w-fit mt-5 ml-5 px-3 rounded-md">
                        {name}
                    </div>

                </div>
            </a>
      
}

            
        </>
    )
}

export default Subreddits