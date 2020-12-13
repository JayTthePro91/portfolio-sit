import React from 'react';
import { useSpring, animated } from 'react-spring';


function Cardinformation(props){

   const thestyle = useSpring({opacity: 1, from: {opacity: 0}});


   return(

      <animated.div className="j-card-info" thestyle = {thestyle}>
      <p className="j-card-title">{props.title}</p>
      <p className="j-card-sub-title">{props.subtitle}</p>
      <a href = {props.link} target= "_blank" rel="noopener noreferrer"> Click this to View </a>
      </animated.div>
    

   );

}

export default Cardinformation;