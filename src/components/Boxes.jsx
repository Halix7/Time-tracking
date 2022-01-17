import React, { useEffect, useState } from 'react'
// import { Img1,Img2,Img3,Img4,Img5,Img6 } from '../images';
import Ellipsis from "../images/icon-ellipsis.svg"
import './boxes.css';
const Boxes = ({ parseData,getObject}) => {
   
    
    
    const [time, setTime] = useState('weekly');
    console.log(getObject);

    
    useEffect(()=>{
        
            parseData.map((Parsed,index) => {
                console.log(Parsed.timeframes.weekly);
                if(getObject.id === 0){
                    setTime('daily');
                }
                else if(getObject.id === 2){
                    setTime('monthly');
                }
                else{
                    setTime('weekly');
                }
               
            });
               
            
          
        
    },[getObject]);
    const guessWhat=(index)=>{
        if(time === 'daily'){
            return  parseData[index].timeframes.daily
        }
        else if(time === 'monthly'){
            return  parseData[index].timeframes.monthly
        }
        else{
            return  parseData[index].timeframes.weekly
        }
        
    }

    
  
    return (
        <>
        {
            parseData.map((element,index)=>(

            <div className={`sub-box ${element.title}`}>
                <div className={`img ${element.title}`}>

                    {/* <img src={} alt="Not Found" /> */}
                </div>
                <div className="sub-box_body">

                <div className="sub-box-header">
                    <h1>{`${element.title}`}</h1>
                    <img src={Ellipsis} alt="Not Found"  />
                </div>
                <div className="sub-box-main">
                    <h1>{`${guessWhat(index).current}hrs`}</h1>
                    <p>{`last week-${guessWhat(index).previous}hrs`}</p> 
                </div>
                </div>
            </div>
            ))
        }
        
        </>
            
        
    )
}

export default Boxes;
