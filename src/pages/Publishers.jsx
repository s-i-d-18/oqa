import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import GameCard from "../components/GameCard";
// import Masonry from 'react-masonry-css';


function Publishers(){

    const { slug } = useParams();

    const baseurl = "https://api.rawg.io/api/";
    const apikey = "9dadaca7b9ac4b738bd26b9ff3658db1";

    const [number, setNumber] = useState(10);
    
    const [studioDetails, setStudioDetails] = useState([]);

    const [gameData, setGameData] = useState([]);

    useEffect(() => {
        const fetchStudios = async () => {
            try{
                const response = await fetch(`${baseurl}games?developers=${slug}&key=${apikey}&page_size=${number}`);
                const data = await response.json();

                const studioresponse = await fetch(`${baseurl}developers/${slug}?key=${apikey}`);
                const studiodata = await studioresponse.json();

                setGameData(data.results);
                console.log(gameData);
                setStudioDetails(studiodata); 
            } catch(error) {
                console.log(error);
            }

        }

        fetchStudios()
    }, [number])

    useEffect(() => {
        // if (gameData) console.log(gameData)
        
    }, [studioDetails])

    return(
        <>  
            <div className="relative top-25 mr-5 ml-5">
                {/* GAMES FROM  */}
                <p className="text-white text-center font-black text-5xl">Games from {studioDetails.name}</p>

                {/* GAME DISPLAY CARDS */}
                <div className="columns-1 lg:columns-4 gap-10 mt-15  ">
                    {  
                    gameData &&
                        gameData.map((game) => (
                            <div className="mb-4 break-inside-avoid " key={game.id}>
                                <GameCard displayGame={game} />
                            </div>
                        ))
                    }
                </div>

                {/* BUTTON TO SHOW MORE */}
                
                    <div className="mt-5 flex justify-center">
                    {
                        gameData.length - number == 0 &&
                        <button className="text-white bg-[#1d1d1d] text-4xl px-15 py-5 rounded-3xl text-center 
                                            hover:bg-[#e1dede] hover:text-black transition-all border-1 border-[#595858]" onClick={() => setNumber(prev => prev + 10)}>
                            View More
                        </button>
                    }
                    </div>
               
            <div className="h-20 ">

            </div>
                
            </div>


        </>
    )
}

export default Publishers