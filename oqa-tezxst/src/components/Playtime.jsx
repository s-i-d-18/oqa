

 
function Playtime({text}){
    const ran = text + 5;
    return(
        <>
            <div className="pb-0.5 px-2 bg-gradient-to-r from-[#65756C] to-[#050E0D] text-white rounded-lg flex flex-col items-center justify-center">
                {`${text}-${ran} hrs`}
            </div>
        </>
    )
}

export default Playtime