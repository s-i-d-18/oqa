import { useState } from "react"


function GeneralInfo({ display, show }){
    
    const [reqShow, setReqShow] = useState(false);

        function showReqs(){
            setReqShow(!reqShow);
        }
        // console.log(show);
    return(
        <>
            <div className="">
                {
                    display.map((d,i) => (
                        <>
                           <p className="text-[#7a7a7a] mt-3 text-xl">{d}</p>
                        <div className="text-white ml-5 ">

                        
                            {/* {show[i].join(", ")} */}
                            {Array.isArray(show[i]) ? 
                                        (i == 0 ? 
                                        <div className="">
                                            <div className="flex gap-4 mt-4
                                            ">
                                                {show[i][0].map((g, i) => (
                                                <div className="bg-[#383838] text-white px-2 pb-1 rounded-sm">
                                                    {g}
                                                </div>
                                            ))}

                                            </div>
                                        
                                            {/* <div className="bg-[#383838] p-10 flex ">
                                                <p>{show[i][0]}</p>
                                            </div> */}

                                            <p className="text-white mb-3">{show[i][1].join(", ")}</p>
                                        </div>
                                        
                                            
                                        :
                                            (i==4) ? 
                                                (reqShow ? 
                                                    <div className="">
                                                        {show[i].map((item, index) => (
                                                            <p>{item}</p>
                                                        ))}
                                                        <button className=" bg-transparent border-none text-white font-semibold underline " onClick={() => setReqShow(!reqShow)}>I've read enough</button>
                                                    </div>
                                                :
                                                    <div className="mb-3">
                                                        {show[i][0].slice(0, 100)}
                                                        <button className=" bg-transparent border-none text-white font-semibold underline" onClick={() => setReqShow(!reqShow)}>Show More</button>
                                                    </div>
                                                )
                                            :
                                                (<p className="mb-2">{show[i].join(", ")}</p>)
                                    )
                            :
                                (i==5 || i == 6 || i == 7)?
                                    (show[i] != "N/A") ? 
                                        <a href={show[i]} target="__blank" className="underline">{show[i]}</a> : <p>N/A</p>
                                    :
                                    // <p></p>
                                    null
                                
                            }
                        </div>
                             
                        </>
                        ))
                }
            </div>
        </>
    )
}

export default GeneralInfo