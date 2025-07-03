import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GameCard from "./GameCard";



function GameSearch(){

    const { slug } = useParams();

    // console.log(slug);
    const baseurl = "https://api.rawg.io/api/";
    const apikey = "9dadaca7b9ac4b738bd26b9ff3658db1";
    const [number, setNumber] = useState(10);

    const [searchGames, setSearchGames] = useState([]);
    


    useEffect(() => {
            const fetchData = async () => {
                try{
                    const response = await fetch(`${baseurl}games?search=${slug}&key=${apikey}&page_size=${number}`);
                    const data = await response.json();

                    setSearchGames(data.results);
                }catch(error){
                    console.log(error);
                    } 
            }
        fetchData();
    }, [number, slug])

    // console.log(searchGames);
    return(
        <>
            <div className="relative top-25 mr-5 ml-5">

                {/* SEARCH RESULTS TEXT */}
                <p className="text-white font-bold text-5xl text-center">Search Results for <span className="underline">{slug}</span></p>

                {/* GAMECARD */}
                <div className="columns-1 lg:columns-4 gap-10 mt-15  ">
                    {  
                    searchGames &&
                        searchGames.map((game) => (
                            <div className="mb-4 break-inside-avoid " key={game.id}>
                                <GameCard displayGame={game} />
                            </div>
                        ))
                    }
                </div>
                            
                {/* BUTTON TO SHOW MORE */}
                    <div className="mt-5 flex justify-center ">
                        {
                            searchGames.length - number == 0 &&
                            <button className="text-white bg-[#1d1d1d] text-4xl px-15 py-5 rounded-3xl text-center 
                                                hover:bg-[#e1dede] hover:text-black transition-all border-1 border-[#595858] cursor-pointer " onClick={() => setNumber(prev => prev + 10)}>
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

export default GameSearch