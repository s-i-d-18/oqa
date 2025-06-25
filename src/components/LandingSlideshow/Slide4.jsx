import { Link } from 'react-router-dom';
import michael from '../../images/Slide4/michael.png';
import circle from '../../images/Slide4/Ellipse.png';
import gta from '../../images/Slide4/gtalogo.png';
import GSButton from '../GSButton';

function Slide4(){

    return(
        <>
            <div className='h-[100vh] mt-15 relative lg:w-full w-full flex justify-center items-center'>
               
                <img src={gta} alt="" className='  absolute
                                                    top-[5%] lg:top-[13%]
                                                    h-[20%] lg:h-[25%]
                                                    left-[5%] lg:left-[18%]
                                                '/>

                <img src={circle} alt="" className='transform -translate-x-1/2 absolute
                                                    left-1/2 xl:left-[70%]
                                                    h-[30%] lg:h-[60%]
                                                    top-[18%] lg:top-[25%]
                                                    z-0
                                                    '/>

                
                <img src={michael} alt="" className=' z-1 transform -translate-x-1/2 absolute
                                                    left-[50%] lg:left-1/2 xl:left-[70%]
                                                    h-[35%] lg:h-[60%]
                                                    top-[15%] lg:top-[25%]
                                                    '/>
                

                <div className='absolute transform -translate-x-1/2 mt-3 grid lg:h-full
                                grid-cols-1 lg:grid-rows-2 
                                w-[90%] lg:w-[80%]
                                top-[50%] lg:top-[35%]
                                left-1/2 lg:left-[60%]
                                bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] lg:bg-none
                                
                                p-5 rounded-2xl 
                                
                                '>
                    <h1 className=' outlined-text text-white text-3xl lg:absolute
                                    
                                    lg:text-5xl xl:text-7xl 
                                    lg:left-[35%] xl:left-[-0%]
                                    text-center lg:text-right   
                    '   
                    style={{ fontFamily: '"Libre Baskerville", sans-serif' }}
                    >
                        Maintain Your<br></br>Profile
                    </h1>
                    
                    <p className=' text-white text-center my-4 lg:absolute
                                    lg:my-15 lg:text-lg lg:text-right xl:text-right
                                    lg:left-[45%] lg:right-[10%]  xl:left-[-15%] xl:right-[55%]
                                    lg:top-[10%] xl:top-[14%]
                                    '>
                        Earn currency by participating in the community. Comment, share, and help players. The more your contributions are liked and appreciated by others, the more you earn. Use your currency to customize your avatar, upgrade your profile, and showcase your journey. Real engagement, real rewards.                    
                    </p>

                </div>
                
                        
                <div className='absolute transform -translate-x-1/2
                                left-1/2 lg:left-[15%] xl:left-[20%]
                                top-[38%] lg:top-[25%] xl:top-[30%]
                                '>
                    <Link to="/home">
                        <GSButton />
                    </Link> 
                </div>
                
                
                   
            </div>
        </>
    )
}

export default Slide4