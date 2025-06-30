import { useEffect, useState } from 'react';
import Genres from './Genres.jsx';
import { Link } from 'react-router-dom';

function GameCard( {displayGame} ){

    // console.log(displayGame[0]);
    // const [showGame, setShowGame] = useState([]);
    const [showGame, setShowGame] = useState({});

    useEffect(() => {
        if(displayGame) 
            setShowGame(displayGame);
        // console.log(displayGame);
        // console.log(showGame);
    },[displayGame]);

    return(
        <> 
        
        {/* {
        
        showGame.length &&
            showGame.map((p,i) => (

            <Link to={`/game/${p.slug}`}>
                <div className="flex flex-wrap mt-10 max-w-100">
                <img src={p?.background_image} alt="" className=" w-full rounded-tl-4xl rounded-tr-4xl "/>


                <div className="w-full pt-3 pb-5 bg-[#1d1d1d] rounded-bl-4xl rounded-br-4xl px-3 flex flex-col gap-5 border-t-0 border-3 border-[#595858]">
                    <div className="flex gap-3">
                        {
                            p?.parent_platforms?.map((p, i) => (
                                <img src={`/parent_platforms/${p?.platform?.name}.png`} alt="" className="h-5 rounded-full"/>
                            ))
                        }
                    </div>
                    <div>
                        <p className="text-white text-3xl font-bold">{p?.name}</p>
                    </div>
                    <div className="h-3 w-[40%] bg-gradient-to-r from-[#181818] to-[#474747] ml-3  rounded-full">
                        
                    </div>

                    <div className="flex gap-3 flex-wrap">
                        {p.genres[0] &&
                            <Genres text={p?.genres[0]?.name} />
                        }
                        {p.tags[0] &&
                            <Genres text={p?.tags[0]?.name} />
                        }
                        {p.tags[1] &&
                            <Genres text={p?.tags[Math.floor(Math.random() * (p.tags.length )) + 1]?.name} />
                        }
                    </div>
                    <div className='flex flex-wrap  gap-5 text-white'>
                        <div className='bg-[#505050] px-2 pb -1 rounded-md'>
                            {
                                (p.added ? p.added : "N/A") + " Added"
                            }
                        </div>
                        <div className='bg-[#505050] px-2 pb-1 rounded-md '>
                            {
                                (p.added_by_status ? p.added_by_status.playing : "N/A") + " playing"
                            }
                        </div>
                        <div className='bg-[#505050] px-2 pb- rounded-md'>
                            {
                                (p.rating ? p.rating : "N/A") + "/5.00"
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
            </Link>
            ))
            } */}

            {
                showGame &&
            
            <Link to={`/game/${showGame.slug}`}>
                <div className="flex flex-wrap mt-10 max-w-100 hover:scale-[105%] transition-all ">
                    
                    <img src={showGame?.background_image} alt="" className=" w-full rounded-tl-4xl rounded-tr-4xl "/>

                <div className="w-full pt-3 pb-5 bg-[#1d1d1d] rounded-bl-4xl rounded-br-4xl px-3 flex flex-col gap-5 border-t-0 border-3 border-[#595858]">
                    <div className="flex gap-3">
                        {
                            showGame?.parent_platforms?.map((p, i) => (
                                <img src={`/parent_platforms/${p?.platform?.name}.png`} alt="" className="h-5 rounded-full"/>
                            ))
                        }
                    </div>
                    <div>
                        <p className="text-white text-3xl font-bold">{showGame?.name}</p>
                    </div>
                    <div className="h-3 w-[40%] bg-gradient-to-r from-[#181818] to-[#474747] ml-3  rounded-full">
                        
                    </div>

                    <div className="flex gap-3 flex-wrap">
                        {showGame.genres &&
                            <Genres text={showGame?.genres[0]?.name} />
                        }
                        {showGame.tags &&
                            <Genres text={showGame?.tags[0]?.name} />
                        }
                        {showGame.tags &&
                            <Genres text={showGame?.tags[Math.floor(Math.random() * (showGame.tags.length )) + 1]?.name} />
                        }
                    </div>
                    <div className='flex flex-wrap  gap-5 text-white'>
                        <div className='bg-[#505050] px-2 pb -1 rounded-md'>
                            {
                                (showGame.added ? showGame.added : "N/A") + " Added"
                            }
                        </div>
                        <div className='bg-[#505050] px-2 pb-1 rounded-md '>
                            {
                                (showGame.added_by_status ? showGame.added_by_status.playing : "N/A") + " playing"
                            }
                        </div>
                        <div className='bg-[#505050] px-2 pb- rounded-md'>
                            {
                                (showGame.rating ? showGame.rating : "N/A") + "/5.00"
                            }
                        </div>
                    </div>
                    
                </div>
            </div>
            </Link>
            }
                


        
        
        </>
    )
}

export default GameCard