import { OctagonPauseIcon } from "lucide-react";
import { useEffect, useState } from "react"

export const StarBackground=()=>{
    const [star,SetStar]=useState([]);
    useEffect(()=>{
generateStars();
    },[])
const generateStars=()=>{
    const numberOfStars=Math.floor(
      (  (window.innerWidth*window.innerHeight)/1000)
    );
    const newStars=[];
    for (let i=0;i<numberOfStars;i++){
    newStars.push({id:i,
    size: Math.random()*3+1,
    x:Math.random()*100,
    y:Math.random()*100,
    opacity:Math.random()*0.5+0.5,
    animationDuartion:Math.random()*4+2
    });
    SetStar(newStars);
}
}

    return(
        <div className="fixed inset-0 overfloe-hidden pointer-events-none z-0">
            {star.map((star)=>(
                <div className="star aniamte-pulse-subtle" style={{
                    width:star.size+"px",
                    height:star.size+"px",
                    top:star.y+"%",
                    left:star.x+"%",
                    opacity:star.opacity+"px",
                    animationDuartion:star.animationDuartion+"s"
                }} key="starts.id"/>
                    
            ))}
        </div>
    )
}