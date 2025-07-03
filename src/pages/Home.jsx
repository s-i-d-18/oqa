import { use, useEffect, useState } from "react";
import HomePageSlider from "../components/HomePageSlider";
import GameCard from "../components/GameCard";
import Subreddits from "../components/Subreddits";

function Home(){

    const baseurl = "https://api.rawg.io/api/";
    const apikey = "9dadaca7b9ac4b738bd26b9ff3658db1";

    const [games, setGames] = useState([]);
    const [gameDesc, setGameDesc] = useState([]);
    const [gameGenre, setGameGenre] = useState([]);
    const [playtime, setPlaytime] = useState([]);
    const [tags, setTags]  = useState([]);


    const currentYear = new Date().getFullYear();
    const dateRange = `${currentYear}-01-01,${currentYear}-12-31`;

    const [sortOption, setSortOption] = useState(0);
    const [clicked, setClicked] = useState(false);
    const [number, setNumber] = useState(10);

    const sortings = ["Popularity", "Metacritic", "Released", "Updated"];
    const apisortings = ["-added", "-metacritic", "-released", "-updated"];

    const [display, setDisplay] = useState([]);

    const [redditGames, setRedditGames] = useState([]);
    const [redditGameNames, setRedditGameNames] = useState([]);
    

    useEffect(() =>{
        const fetchpopularGames = async ()=>{

            try{
            const response = await fetch(`${baseurl}games?key=${apikey}&ordering=-rating&dates=${dateRange}&page_size=10`);
            const data = await response.json();


            setGames(data.results);

            } catch(error){
                console.log(error);
            }

        }
        fetchpopularGames();

        
    },[]);

    useEffect(() =>{
        const fetchGameDesc = async (slug, index) =>{
            try{
                const response = await fetch(`${baseurl}games/${slug}?key=${apikey}`);
                const data = await response.json();

                // console.log(data);

                setGameDesc(prev => {
                    const copy = [...prev];
                    copy[index] = data.description;
                    return copy;
                });

                setGameGenre(prev => {
                    const copy = [...prev];
                    copy[index] = data.genres[0].name;
                    return copy;
                });

                setPlaytime(prev =>{
                    const copy = [...prev];
                    copy[index] = data.playtime;
                    return copy;
                })

                setTags(prev =>{
                    const copy = [...prev];
                    if (data.tags && data.tags.length > 0){
                        copy[index*2] = data.tags[0].name == "" || undefined ? data.tags[2].name : data.tags[0].name;
                        copy[(index*2)+1] = data.tags[1].name;
                    } 
                    else {
                        if(data.genres.length >= 2){
                        copy[index*2] = data.genres[1].name;
                        copy[(index*2)+1] = data.genres.length >= 3 ? data.genres[2].name : "NA";
                        } else{
                            copy[index*2] = "NA";
                            copy[(index*2)+1] = "NA";
                        }
                            
                        
                    }
                    // else {
                    //     copy[index] = "";
                    // }
                    
                    return copy;
                })
            } catch(error){
                console.log(error);
            }
        }

        if(games.length){
            games.forEach((game, i) => {
            // console.log(tags);
            fetchGameDesc(game.slug, i); 
    });

    }
    }, [games]);


    useEffect(() => {

        const fetchData = async () => {
            const response = await fetch(`${baseurl}games?key=${apikey}&ordering=${apisortings[sortOption]}&page_size=${number}`);
            const data = await response.json();

            setDisplay(data.results);
            
        }
        fetchData()
    }, [sortOption, number]);
    
    
    useEffect(() => {

        // console.log(display)
        
        if(display){
        display.map((g, index) => {
        setRedditGames((prev) => {
            const copy = [...prev];
            copy[index] = g.slug;
            return copy;
        })

        setRedditGameNames((prev) => {
            const copy = [...prev];
            copy[index] = g.name;
            return copy;
        })

    })
}
    }, [display])


    // console.log(redditGames)

    return(
        <>
            {/* SLIDERS ↓ */}
            <HomePageSlider games={games} desc={gameDesc} genres={gameGenre} playtime={playtime} tags={tags} displaytext={"Trending"}/>
            
            {/* BROWSE GAMES ↓ */}
            <p className="mt-15 text-4xl text-white ml-5 font-bold">BROWSE GAMES</p>

            {/* BROWSE GAMES OPTION MENU */}
            <div className="mt-10 ml-5 mr-5 bg-[#1f1f1f] flex items-center justify-between rounded-xl py-5 border-none px-10 cursor-pointer" onClick={() =>{
                setClicked(!clicked);
            }}>
                <p className="text-[#949494] text-3xl font-semibold">Sort by: </p>
                <div className="text-[#949494] text-4xl mb-1 ">
                {sortings[sortOption] } 
                {`>`}
                </div>

            </div>

            {
                // clicked &&
                // <div className="bg-[#1f1f1f]  ml-[45%] mr-5 rounded-xl relative flex flex-col items-end gap-3 py-5 px-5 w-[50%] transition-all duration-300 ease-in-out" >
                <div className={`bg-[#1f1f1f]  ml-[50%] mr-5 rounded-xl relative flex flex-col items-end gap-3 py-5 px-5 w-[45%] transition-all duration-100 ease-in-out ${clicked ? "opacity-100 scale-100 " : "opacity-0 scale-95 pointer-events-none hidden"} absolute z-100`}>
                    <div className="text-white right-0 text-2xl bg-[#5d5d5d] p-5 rounded-full hover:bg-white hover:text-black transition-all ease-in-out cursor-pointer w-[100%] text-center" onClick={() => setSortOption(0)}>
                        {sortings[0]}
                    </div>
                    <div className="text-white right-0 text-2xl bg-[#5d5d5d] p-5 rounded-full hover:bg-white hover:text-black transition-all ease-in-out cursor-pointer w-[100%] text-center" onClick={() => setSortOption(1)}>
                        {sortings[1]}
                    </div>
                     <div className="text-white right-0 text-2xl bg-[#5d5d5d] p-5 rounded-full hover:bg-white hover:text-black transition-all ease-in-out cursor-pointer w-[100%] text-center" onClick={() => setSortOption(2)}>
                        {sortings[2]}
                    </div>
                     <div className="text-white right-0 text-2xl bg-[#5d5d5d] p-5 rounded-full hover:bg-white hover:text-black transition-all ease-in-out cursor-pointer w-[100%] text-center" onClick={() => setSortOption(3)}>
                        {sortings[3]}
                    </div>
 
                </div>
            }

            {/* GAMECARDS DISPLAY */}
            <div className="columns-1 lg:columns-4 gap-10 mt-15 relative z-0">
                {
                    display.map((g) => (
                        <div className="mb-4 break-inside-avoid ml-5 mr-5" key={g.id}>
                            <GameCard displayGame={g} />
                        </div>
                    ))
                    
                }
            </div>

            
            {/* BUTTON TO SHOW MORE */}
                <div className="mt-15 flex justify-center">
                {
                    (display.length - number == 0) &&
                    <button className="text-white bg-[#1d1d1d] text-4xl px-15 py-5 rounded-3xl text-center 
                                        hover:bg-[#e1dede] hover:text-black transition-all border-1 border-[#595858] cursor-pointer" onClick={() => setNumber(prev => prev + 10)}>
                        View More
                    </button>
                }
                </div>


            
            {/* SEARCH BY DIV
            <div className=" flex flex-col gap-15 items-center justify-center mt-15 ml-5 mr-5">

                {/* SEARCH BY TEXT */}
                    {/* <div className="bg-[#1d1d1d] p-5 rounded-2xl text-white text-4xl font-semibold border-1 border-[#464646]">
                        {`Search By>`}
                    </div> */}

                {/* DIVS OF HOW TO SEARCH */}
                    {/* <div className="bg-[#1d1d1d] py-10 px-3 flex flex-wrap w-[100%] rounded-2xl gap-5 justify-around">
                        <div className="bg-[#444444] flex gap-3 text-2xl px-3 rounded-lg text-white py-3 items-center justify-around w-[45%]">
                            <img src="/images/Platforms.png" alt=""  className="h-7"/>
                            <p>Platforms</p>
                        </div>

                        <div className="bg-[#444444] flex gap-5 text-2xl px-3 rounded-lg text-white py-3 items-center justify-around w-[45%]">
                            <img src="/images/Genres.png" alt=""  className="h-7"/>
                            <p>Genres</p>
                        </div>
                        
                        <div className="bg-[#444444] flex gap-5 text-2xl px-3 rounded-lg text-white py-3 items-center justify-around w-[45%]">
                            <img src="/images/Ratings.png" alt=""  className="h-7"/>
                            <p>Ratings</p>
                        </div>

                        <div className="bg-[#444444] flex gap-5 text-2xl px-3 rounded-lg text-white py-3 items-center justify-around w-[45%]">
                            <img src="/images/Stores.png" alt=""  className="h-7 rounded-full"/>
                            <p>Stores</p>
                        </div>                         

                        <div className="bg-[#444444] flex gap-5 text-2xl px-3 rounded-lg text-white py-3 items-center justify-around w-[45%]">
                            <img src="/images/Releases.png" alt=""  className="h-7 "/>
                            <p>Releases</p>
                        </div>                         
                        
                        <div className="bg-[#444444] flex gap-5 text-2xl px-3 rounded-lg text-white py-3 items-center justify-around w-[45%]">
                            <img src="/images/Tags.png" alt=""  className="h-7 rounded-full"/>
                            <p>Tags</p>
                        </div>                         
                                       
                    </div> */}
                    


            {/* </div>  */}


                {/* SUBREDDITS */}
                {/* SUBREDDITS TEXT */}
                    <div className="flex items-center mt-15 ml-5 mr-5 gap-5">
                        <img src="/reddit/redditIcon.png" alt="" className="h-15 rounded-full"/>
                        <p className="text-white font-bold text-5xl">Subreddits</p>
                    </div>


                {/* SUBREDDITS ↓ */}
                {/* {console.log(redditGames)} */}
                    <div className="mt- ml-5 mr-5">
                        {
                            redditGames.map((g, i) => (
                                <Subreddits game={g} name={redditGameNames[i]}/>
                            ))
                        }
                    </div>

            {/* for height */}
            <div className="h-20"></div>
        </>
    )
}

export default Home     