import { Link } from 'react-router-dom';
import jin from '../../images/Slide3/Jin.png';
import circle from '../../images/Slide3/Ellipse.png';
import got from '../../images/Slide3/gotlogo.png';
import GSButton from '../GSButton';

function Slide3(){

    return(
        <>
            <div className='h-[100vh] mt-15 relative lg:w-full w-full'>
               
                <img src={got} alt="" className='  absolute
                                                    top-[5%] lg:top-[7%]
                                                    h-[12%] lg:h-[17%]
                                                    left-[17%] lg:left-[12%]
                                                '/>
    
    
                <img src={circle} alt="" className='transform -translate-x-1/2 absolute
                                                    left-1/2 lg:left-[35%]
                                                    h-[30%] lg:h-[50%]
                                                    top-[18%] lg:top-[25%]
                                                    z-0
                                                    '/>

                
                <img src={jin} alt="" className=' z-1 transform -translate-x-1/2 absolute
                                                    left-[50%] lg:left-[35%]
                                                    h-[30%] lg:h-[50%]
                                                    top-[18%] lg:top-[25%] 
                                                    '/>
             

                <div className='absolute transform -translate-x-1/2 mt-3 grid lg:h-full
                                grid-cols-1 lg:grid-rows-2 
                                w-[90%] lg:w-[70%]
                                top-[50%] lg:top-[35%]
                                left-1/2 lg:left-[65%]
                                bg-gradient-to-b from-[#0f0f0f] to-[#0a0a0a] lg:bg-none
                                
                                p-5 rounded-2xl 
                                '>
                    <h1 className=' outlined-text text-white text-3xl lg:absolute
                                    
                                    lg:text-6xl xl:text-7xl
                                    lg:left-[25%]
                                    text-center lg:text-left
                    '   
                    style={{ fontFamily: '"Libre Baskerville", sans-serif' }}
                    >
                        Build Genuine <br></br> Connections
                    </h1>
                    
                    <p className=' text-white text-center my-4 lg:absolute
                                    lg:my-15 lg:text-lg
                                    lg:left-[38%] lg:right-[0%]
                                    lg:top-[10%] xl:top-[14%]
                                    z-'>
                         Share your journey, offer advice, celebrate wins, and connect with others who share your passion for gaming. Whether it's through helping someone discover a hidden quest or sharing a memory from a favorite game, every interaction helps build genuine connections.
                    </p>

                </div>
                
                        
                <div className='absolute transform -translate-x-1/2
                                left-1/2 lg:left-[10%] xl:left-[13%]
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

export default Slide3