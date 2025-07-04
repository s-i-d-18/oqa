import { Link } from 'react-router-dom';
import ellie from '../../images/Slide2/TLOU.png';
import circle from '../../images/Slide2/Ellipse2.png';
import tlou from '../../images/Slide2/tloulogo.png';
import GSButton from '../GSButton';

function Slide2(){

    return(
        <>
            <div className='h-[100vh] mt-15 relative lg:w-full w-full' >
               
                <img src={tlou} alt="" className='  absolute
                                                    top-[5%] lg:top-[15%]
                                                    h-[20%] lg:h-[25%]
                                                    left-[17%] lg:left-[22%]
                                                '/>

                <img src={circle} alt="" className='transform -translate-x-1/2 absolute
                                                    left-1/2
                                                    h-[30%] lg:h-[60%]
                                                    top-[18%] lg:top-[25%]
                                                    z-0
                                                    '/>

                
                <img src={ellie} alt="" className=' z-1 transform -translate-x-1/2 absolute
                                                    left-[57%] lg:left-1/2
                                                    h-[35%] lg:h-[60%]
                                                    top-[13%] lg:top-[25%]
                                                    '/>
                

                <div className='absolute transform -translate-x-1/2 mt-3 grid lg:h-full
                                grid-cols-1 lg:grid-rows-2 
                                w-[90%] lg:w-[70%]
                                top-[50%] lg:top-[35%]
                                left-1/2 lg:left-[65%]
                                bg-none
                                
                                p-5 rounded-2xl 
                                '>
                    <h1 className=' outlined-text text-white text-3xl lg:absolute
                                    
                                    lg:text-6xl xl:text-7xl
                                    lg:left-[32%]
                                    text-center lg:text-left
                    '   
                    style={{ fontFamily: '"Libre Baskerville", sans-serif' }}
                    >
                        Share <br></br> Experiences
                    </h1>
                    
                    <p className=' text-white text-center my-4 lg:absolute
                                    lg:my-15 lg:text-lg
                                    lg:left-[40%] lg:right-[10%]
                                    lg:top-[10%] xl:top-[14%]
                                    z-'>
                        Post your best plays, drop screenshots, and share your thoughts with the community. Whether you're celebrating a big win or just vibing in a new world, OQA makes it easy to connect and create memories with other players
                    </p>

                </div>
                
                        
                <div className='absolute transform -translate-x-1/2
                                left-1/2 lg:left-[15%] xl:left-[20%]
                                top-[38%] lg:top-[25%] xl:top-[20%]
                                '>
                    <Link to="/home">
                        <GSButton />
                    </Link> 
                </div>
                
                
                   
            </div>
        </>
    )
}

export default Slide2