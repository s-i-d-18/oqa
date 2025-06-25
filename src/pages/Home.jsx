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
            <HomePageSlider games={games} desc={gameDesc} genres={gameGenre} playtime={playtime} tags={tags} displaytext={"Trending"}/>
            
                
        </>
    )
}

export default Home     