
import moment from 'moment'
import Marquee from "react-fast-marquee";
import { useState, useEffect } from 'react';
import './Slider.css'
import Button from '@mui/material/Button';

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
            <h3 className='time'>{currentTime.format('MMMM Do YYYY, h:mm:ss a')}</h3> 
            <Marquee>
                <div className='border rounded-lg w-full h-full font-poppins'>
                <Button variant="contained">Latest Job</Button> "Unlock Your Potential with the Right Job"
                </div>
            </Marquee>
        </div>
    )
}