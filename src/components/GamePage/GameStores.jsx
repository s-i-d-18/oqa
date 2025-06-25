

function GameStores({ stores }){

    // console.log(stores);
    let urls = [];
    let images = [];
    if (stores != undefined) 
    {
        urls = stores.map((s,i) => s.url);
        images = stores.map((s,i) => s.store_id);
    }
    // console.log(urls);
    // console.log(images);
    return(
        <>
            <div className="bg-[#1f1f1f] p-10 flex items-center flex-col rounded-4xl border-1 border-[#454545] ">

                <p className="text-5xl text-white text-center font-bold">Game Stores</p>

                <div className="flex mt-15 items-center gap-15 flex-wrap justify-center">
                    {   
                        stores &&
                        images.map((img, i) => (
                            <a key={i} href={urls[i]} target="_blank" rel="noopener noreferrer">
                                {
                                    img == 2 || img == 7 ? 
                                        <img src={`/stores/${img}.png`} alt="" className=" h-15 rounded-full" /> 
                                        :
                                        <img src={`/stores/${img}.png`} alt="" className=" h-15" />


                                }
                            </a>
                            ))
                    }
                    {/* {images &&
                        <img src={`/stores/${images[0]}.png`} alt="" />
                    } */}
                </div>
            </div>
        </>
    )
}

export default GameStores