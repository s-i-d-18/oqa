
function InfoCard({ display, show }){



    return(
        <>
            <div className="text-[#c5c5c5] bg-[#212121] w-full h-full py-3 rounded-bl-2xl border-t-[0px] rounded-br-2xl border-[2px] border-[#565656]">

            {
                display.map((item, index) =>(
                    <>
                    <div className="flex  items-center justify-between px-3 py-2" key={index}>
                        <p >{item}</p>
                        
                        {
                            Array.isArray(show[index]) ? 
                            
                            <div className="flex gap-4">
                                {show[index].map((p, i) =>(
                                    <img src={`/parent_platforms/${p}.png`} alt="" key={i} className="h-6 rounded-full"/>
                                ))
                            }
                            </div>
                            
                             : 
                            
                            <div>

                                
                                    {
                                        item === "Genre" || item === "Developers" ? 
                                            <div className="bg-[#383838] px-2 rounded-sm text-center">
                                                {show[index]}
                                            </div> :
                                            <p>
                                                {show[index]}
                                            </p>
                                    }
                                
                            </div>

                           
                        }                            
                        

                    </div>
                    {(index!=(display.length)-1) &&
                        <div className="flex items-center justify-center">
                        <div className="h-[0.1px] w-[95%] bg-white/50">
                            <img src={`parent_platforms/PC.png`} alt="" />
                        </div>
                    </div>
            }
                    
                    </>
                
                ))
            }
            </div>
        </>
    )
}

export default InfoCard