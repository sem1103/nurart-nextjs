
import React from "react";
import { useEffect, useState } from "react"

export default function Counter(props) {

    let [count, setCount] = useState(0);
    let numb = props.numb.includes(' ') ? props.numb.split(' ').join(''): props.numb;


    useEffect(() => {
        const interval = setInterval(() => {      
            setCount(prevCount => {
                let step = Math.ceil(numb / 100);
                if(prevCount < numb - 1){
                    return prevCount + step;
                 } else {
                    clearInterval(interval)
                    return props.symbol ? props.numb + props.symbol : props.numb;
                 }
            });
        }, 30); 
        
      }, []); 
    
    return count
     
    
}