import { useEffect, useState } from 'react';
import Genres from './Genres.jsx';

function GameCard( {displayGame} ){

    // console.log(displayGame[0]);
    const [showGame, setShowGame] = useState([]);

    useEffect(() => {
        if(displayGame) 
            setShowGame(displayGame);
        // console.log(showGame)
    },[displayGame]);

    return(
        <> 

        {
        
        showGame.length &&
            showGame.map((p,i) => (
                <div className="flex flex-col mt-10">
                <img src={p?.background_image} alt="" className="rounded-tl-4xl rounded-tr-4xl "/>


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
                    <div className="h-3 w-[40%] bg-gradient-to-r from-[#343434] to-[#474747] ml-3  rounded-full">
                        
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
                    <div className='flex gap-5 text-white'>
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
            ))
            
        
            
            }
        </>
    )
}

export default GameCard