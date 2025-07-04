import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import InfoCard from "../components/InfoCard";
import { getAnimatableNone } from "framer-motion";
import ImageSlider from "../components/GamePage/ImageSlider";
import RatingsInfo from "../components/GamePage/RatingsInfo";
import Description from "../components/GamePage/Description";
import GameStores from "../components/GamePage/GameStores";
import GeneralInfo from "../components/GamePage/GeneralInfo";
import GameCard from "../components/GameCard";
import { Link } from "react-router-dom";




function GamePage(){
    
    const baseurl = "https://api.rawg.io/api/";
    const apikey = "9dadaca7b9ac4b738bd26b9ff3658db1";

    const { slug } = useParams();
    const [game, setGame] = useState([]);

    
    const display = ["Platforms", "Genre", "Released", "Developers", "Playtime"];
    const [show, setShow] = useState([[]]);
    const [parentPlatforms, setParentPlatforms] = useState([]);
    const [screenshots, setScreenshots] = useState([]);
    const [ratings, setRatings] = useState("NA");

    const rateDisplay = ["Added", "Exceptional", "Recommended", "Meh", "Skip"];
    const [rateShow, setRateShow] = useState([]);

    const [desc, setDesc] = useState("N/A");

    const [stores, setStores] = useState([]);
    
    const details = ["Genres & Tags", "Platforms", "Developers", "Publishers", "Requirements", "Website", "Subreddit", "Metacritc"];
    const [showDetails, setShowDetails] = useState([]);

    const [gameSeries, setGameSeries] = useState([]);

    const [showSeriesGames, setShowSeriesGames] = useState(false);

    const [devSlugs, setDevSlugs] = useState([]);
    const [pubSlugs, setPubSlugs] = useState([]);

    const [devName, setDevName] = useState([]);
    const [pubName, setPubName] = useState([]);


    useEffect(() => {

            const fetchGame = async () =>{
                try{
                    const response = await fetch(`${baseurl}games/${slug}?key=${apikey}`);
                    const data = await response.json();

                    const response2 = await fetch(`${baseurl}games/${slug}/screenshots?key=${apikey}`);
                    const data2 = await response2.json();

                    const getstores = await fetch(`${baseurl}games/${slug}/stores?key=${apikey}`);
                    const datastores = await getstores.json();

                    const getseries = await fetch(`${baseurl}games/${slug}/game-series?key=${apikey}`);
                    const dataseries = await getseries.json();


                    setScreenshots((prev, index) =>{
                        const copy = [...prev];
                        copy[index] = data2.results[index];
                        return copy;
                    })
                    setScreenshots(data2.results);

                    // data2.results.map((p, i) => )
                    
                    setGame(data);

                    // console.log(dataseries.results);
                    setGameSeries(dataseries.results);
                    // console.log(gameSeries)

                    // setShowStudios(datastudio)
                    // console.log(data);



                    // const newseries = dataseries?.[0]?.slug || [];

                    // setGameSeries(newseries);
                    // console.log(gameSeries)

                    setStores(datastores);
                    } catch(error){
                        console.log(error);
                    }
                    
                }
        fetchGame();
    }, [slug]);

    // console.log(stores);

    // if (screenshots.length > 0) console.log(screenshots);

//     useEffect(() => {
//         if (!game || !game.parent_platforms || !game.genres) return;

//         const extracted = game.parent_platforms.map(p => p.platform.name);
//         setParentPlatforms(extracted);

//         show[1] = game.genres[0].name; 
//   }, [game]);

//     // console.log(parentPlatforms);
//     show[0] = parentPlatforms;
//     console.log(show[0]);
//     console.log(show[1]);


// THE DATA IS SENT TO INFOCARD TO DISPLAY THE INFO THERE ↓
useEffect(() => {
  if (!game) return;
  
  
  const platforms = game.parent_platforms?.map(p => p.platform.name) || [];

  const genre = game.genres?.[0]?.name || "N/A";
  const released = game.released || "N/A";
  const developers = game.developers?.[0]?.name || "N/A";
  const playtime = game.playtime || "N/A"; 
  
  const rating = game.metacritic;

  const added = game.added;
  const exceptional = game.ratings?.[0]?.count || "N/A";
  const recommended = game.ratings?.[1]?.count || "N/A";
  const meh = game.ratings?.[2]?.count || "N/A";
  const skip = game.ratings?.[3]?.count || "N/A";

  const description = game.description;

                    const devslugs = game?.developers?.map((d, i) => d.slug);
                    const pubslugs = game?.publishers?.map((p, i) => p.slug);
                    const devnames = game?.developers?.map((d, i) => d.name);
                    const pubnames = game?.publishers?.map((p, i) => p.name);
                    
                    if(devslugs) setDevSlugs(devslugs);
                    if(pubslugs) setPubSlugs(pubslugs);

                    if(devnames) setDevName(devnames);
                    if(pubnames) setPubName(pubnames);



//   DATA FOR THE DETAILS ↓
// console.log(game);   
// let detGenres = [];
// let detTags = [];
//     if(game.genres != undefined){
//         detGenres = game.genres.map((g, i) => (g.name));
//     }

//     if(game.tags != undefined){
//         detTags = game.tags.map((t,i) =>(t.name));
//     }

    const detGenres = game.genres?.map(g => g.name) || [];
    const detTags = game.tags?.map(g => g.name) || [];
    // console.log(detTags);
    // console.log(GenTags)
    const detPlat = game.platforms?.map(p => p.platform.name) || [];
    const devs = game.developers?.map(d => d.name) || [];
    const pubs = game.publishers?.map(d => d.name) || [];
    const minreqs = game.platforms?.[0]?.requirements?.minimum || ["N/A"];
    const recreqs = game.platforms?.[0]?.requirements?.recommended || ["N/A"];
    const website = game?.website || "N/A";
    const subreddit = game?.reddit_url || "N/A";
    const metacritic = game?.metacritic_url || "N/A";
    
    // console.log(minreqs)

    const newShowDetails = [
        [detGenres, detTags], //0
        detPlat,              //1
        devs,                 //2
        pubs,                 //3
        [minreqs, recreqs],   //4
        website,              //5
        subreddit,            //6
        metacritic            //7
    ]
    // console.log(newShowDetails)
    setShowDetails(newShowDetails);

    // console.log(detPlat)


    // const GenTags = [detGenres, detTags];

    

  const newRatings = [
    added,
    exceptional,
    recommended,
    meh,
    skip
  ]

  const newShow = [
    platforms,   
    genre,       
    released,         
    developers,   
    playtime      
  ];
//   console.log(rating);
  setShow(newShow);
  setRatings(rating);

  setRateShow(newRatings);
  setDesc(description);
//   console.log(desc);

// console.log(detGenres)
}, [game]);

// console.log(gameSeries)
// console.log(show);

    // useEffect(() => {
    //     const fetchGameDetails = async (index) =>{
    //             try{
    //                 const response = await fetch(`${baseurl}games/${slug}?key=${apikey}`);
    //                 const data = await response.json();
                    
    //                 setParentPlatforms(prev => {
    //                     const copy = [...prev];
    //                     copy[index] = data.parent_platforms[index].platform.name;
    //                     return(copy);
    //                 })
    //                 console.log(parentPlatforms)

    //                 } catch(error){
    //                     console.log(error);
    //                 }
    //             }
    //     fetchGameDetails();
    // }, [game]);
    
    // SANITY CHECKS↓
    // console.log(`${baseurl}games/${slug}?key=${apikey}`);
    // console.log(game.background_image); 
    // console.log(slug);
//   if (!game) return <div className="text-white">Loading...</div>;

    return(
        <>  
            
             {/* DOO NOT TOUCH -> THIS IS THE BACKGROUND BLUR DIV ↓ */}
            <div className="relative w-[100%] z-10 top-30">
                <img
                    src={game.background_image}
                    alt=""
                    className=" absolute inset-0 w-full h-100 object-cover opacity-40 "
                />
                
            </div>


            <div className="sticky bg-gradient-to-b from-transparent via-[#0f0f0f] to-[#0f0f0f]  w-full z-10 flex flex-col items-center justify-end ">
                <p className="text-5xl text-white font-bold text-center mt-40 lg:text-7xl lg:mb-5">{game.name}</p>
                <div className="lg:flex lg:flex-row lg:items-center ">
                    <div className="">
                        <div className="flex flex-col items-center justify-end h-full gap-8 mt-10">

                            <img src={game.background_image} alt={`${slug}'s image`} className="w-[90%] max-h-[110%]  object-cover rounded-tr-2xl rounded-tl-2xl lg:w-[50%]"/>
                                    
                        </div>
                        
                        <div className="w-full flex flex-col items-center justify-center text-center">

                            <div className="w-[90%] lg:w-[50%]">
                                <InfoCard display={display} show={show}/>
                            </div >

                        </div>
                    </div>    
                        <div className="">
                            {
                                // screenshots.length &&
                                <ImageSlider screenshots={screenshots}/>

                            }
                        </div>   

                </div>


                
            </div>
                
            <div className="lg:flex lg:items-start lg:justify-around lg:mt-20">
                {/* RATINGS ↓ */}
                <div className="mt0 ml-5 mr-5 lg:w-fit">
                    {/* THIS IS FOR THE "RATINGS HEADING AND THE RATING INFO" */}
                    <div className="flex items-center justify-between">
                    <p className="text-white text-7xl font-semibold ">Ratings</p>
                    <div className="text-green-600 bg-transparent border-green-600 border-2 px-4 top-10 rounded-sm font-bold lg:ml-10">
                        <p className="">
                            {
                            // {/* { game &&  */}
                                ratings ? ratings : "NA"
                            }
                        </p>
                    </div>
                    </div>
                    
                    {/* THIS IS THE RATING CARD */}
                    <div className="mt-10">
                        <RatingsInfo display={rateDisplay} show={rateShow} />
                    </div>
                </div>


                {/* ABOUT ↓ */}
                    <div className="ml-5 mr-5 mt-7 lg:w-100">
                        <p className="text-white text-6xl font-bold">About</p>
                        <div className="mt-5">
                            <Description description={desc} />
                        </div>

                    </div>
                              
                               {/* GAME LINKS ↓ */}
                    <div className="mt-10 ml-5 mr-5 lg:w-fit lg:mt-30">
                        {
                            // stores &&
                             <GameStores stores={stores.results} />
                        }
                        
                    </div>      

            </div>



                
                {/* GAME GENERAL INFO ↓ */}
                    <div className="mt-10 ml-5 mr-5 ">
                        <GeneralInfo display={details} show={showDetails} />
                    </div>  

                {/* GAMES PART OF THE SERIES ↓*/}
            <div className="lg:flex lg:items-center lg:flex-col">
                {
                    

                    showSeriesGames ? 
                        <button className="text-4xl text-center text-[#a3a3a3] mt-10  cursor-pointer font-bold border-none p-5 ml-2 mr-2 rounded-4xl underline" onClick={() =>setShowSeriesGames(!showSeriesGames)}>Hide games part of this series</button>
                        
                        :

                        <button className="text-4xl text-center text-[#a3a3a3] mt-10  cursor-pointer font-bold border-none p-5 ml-2 mr-2 rounded-4xl underline" onClick={() =>setShowSeriesGames(!showSeriesGames)}>Show games part of this series</button>
                }

                {
                    showSeriesGames && 
                    (gameSeries.length ?
                            // <div className="mt-10 ml-5 mr-5">
                            //     <GameCard displayGame={gameSeries} />
                            // </div> 
                            
                            gameSeries.map((game) => (
                                <div className="columns-1 lg:columns-4 gap-10 ml-5 mr-5">
                                    <GameCard displayGame={game} />
                                </div>
                            ))
                            :
                            <p className="text-[#b6b6b6] text-center mt-5 text-2xl font-bold ml-15 mr-15 bg-[#313131] rounded-2xl p-3 lg:w-fit">This game isn't a part of a series...Yet</p>                                                   

                            )
                        
                }
            </div >

            
                {/* MORE GAMES FROM THE STUDIOS ↓ */}
                <div className="lg:flex lg:flex-col lg:items-center">

                <div className="mt-10 ml-5 mr-5 bg-[#1d1d1d]   p-10 rounded-4xl border-1 border-[#595858] lg:w-fit">
                    <p className="text-center text-5xl font-black text-white mb-5">More Games from</p>
                    
                    <div className="px-10 flex flex-wrap gap-10 mt-10 justify-center">
                    
                    {
                        devName.map((d, i) => (
                            <Link to={`/developers/${devSlugs[i]}`}>
                                <div className="bg-[#4c4c4c] gap-10 px-10 py-1  rounded-2xl text-3xl font-semibold text-white text-center border-2 border-[#212121]">
                                    {d}
                                </div>
                            </Link>
                            
                        ))
                    }
                    {
                        pubName.map((d, i) => (
                            <Link to={`/publishers/${pubSlugs[i]}`}>

                            <div className="bg-[#4c4c4c] gap-10 px-10 py-1  rounded-2xl text-3xl font-semibold text-white text-center border-2 border-[#212121]">
                                {d}
                            </div>
                            </Link>

                        ))
                    }        
                    </div>
                </div>   
                </div>



                {/* EMPTY DIV TO GIVE HEIGHT */}
                <div className="bg-transparent h-10"></div>                
        </>
    )
}

export default GamePage