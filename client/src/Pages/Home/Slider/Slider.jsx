
import moment from 'moment'
import Marquee from "react-fast-marquee";
import { useState, useEffect } from 'react';

export default function Slider(){
    const [currentTime, setCurrentTime] = useState(moment());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(moment());
    }, 1000); // Update the time every second

    return () => clearInterval(intervalId); // Clean up the interval on component unmount
  }, []);

    return(
        <div>
        
            <p className='font-poppins'>Journilsm without Fear at Favour</p>
            <p className='font-poppins'>{currentTime.format('MMMM Do YYYY, h:mm:ss a')}</p> 
            
            <Marquee>
                <div className='border rounded-lg w-full h-full font-poppins'>
                <button className="btn btn-active btn-secondary w-1/7 h-1/7 ">Latest News</button> Welcome you will get latest Job
                </div>
            </Marquee>
        </div>
    )
}