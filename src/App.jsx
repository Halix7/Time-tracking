import React, { useState } from 'react';
import './App.css';
import img from "./images/image-jeremy.png";
import data from './data.json';
import Boxes from './components/Boxes.jsx';

const App = () => {

    // ------handling the click ------
    const [object, setObject] = useState({
        objectChange:null,
        objectIndex: [ {id:0},{id:1},{id:2} ]
    });
    const [clicked, setClicked] = useState(false);
    // handling the click event 
    const handleClick=(index)=>{
        
        setObject({...object,objectChange:object.objectIndex[index]});

        setClicked(true);
    }

    //Handling the active class on change after clicked
    const handleActive=(index)=>{
        
        if(object.objectIndex[index] === object.objectChange){
            return "box active"
        }
        
        
        else{
            return "box"
        }
    }
    
   

    
    // getting the data from data.json 
    const strdata=JSON.stringify(data);
    const parseData=JSON.parse(strdata);
    console.log(parseData);

   

    return (
        <>
        
        <div className="container">
        <div className="box1">
            <div className="user-info">
                <img src={img} alt="user" />
                <div className="some">

                <p>
                    Report for
                </p>
                
                <h1>
                    Jeremy <br /> <span> Robson</span> 
                </h1>
                </div>
            </div>
            <div className="nav">
                
                    

                <div   className={handleActive(object.objectIndex[0].id)} onClick={()=>handleClick(object.objectIndex[0].id)} >
                    Daily
                </div>
                <div   className={clicked === false?
                 "box active" :handleActive(object.objectIndex[1].id)} onClick={()=>handleClick(object.objectIndex[1].id)} >
                    Weekly
                </div>
                <div   className={handleActive(object.objectIndex[2].id)} onClick={()=>handleClick(object.objectIndex[2].id)} >
                    Monthly
                </div>
                    
                
            </div>
        </div>
                <Boxes  
                getObject={object?.objectChange === null ? [{id:1}] : object.objectChange}  parseData={parseData}/>
        </div>
        </>
        
    )
};

export default App;
