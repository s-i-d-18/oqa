import { useEffect, useState } from "react";
import HomePageSlider from "../components/HomePageSlider";

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

    const [sortOption, setSortOption] = useState('popularity');


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

    return(
        <>
            {/* SLIDERS ↓ */}
            <HomePageSlider games={games} desc={gameDesc} genres={gameGenre} playtime={playtime} tags={tags} displaytext={"Trending"}/>
            
            {/* BROWSE GAMES ↓ */}
            <p className="mt-15 text-4xl text-white ml-5 font-bold">BROWSE GAMES</p>

            {/* BROWSE GAMES OPTION MENU */}
            <div className="mt-10 ml-5 mr-5 bg-[#1f1f1f] flex items-center justify-evenly rounded-3xl py-5 border-1 border-[#c4c4c4] focus:outline-none focus:ring-2 focus:ring-indigo-500">
                <p className="text-[#949494] text-3xl font-semibold">Sort by: </p>
                <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="p-2 rounded bg-[#1f1f1f] text-[#c5c5c5]  border-none text-3xl font-semibold"
                >
                        <option value="popularity">Popularity</option>
                        <option value="rating">Rating</option>
                        <option value="released">Release Date</option>
                        <option value="name">Name</option>
                </select>
                {/* {console.log(sortOption)} */}

            </div>


            {/* for height */}
            <div className="h-1000"></div>
        </>
    )
}

export default Home     