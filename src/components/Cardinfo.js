import React from 'react';
import { useSpring, animated } from 'react-spring';
//import { animated } from 'react-spring/renderprops-universal';

function Cardinfo(props){

   const thestyle = useSpring({opacity: 1, from: {opacity: 0}});


   return(

      <animated.div className="j-card-info" thestyle = {thestyle}>
      <p className="j-card-title">{props.title}</p>
      <p className="j-card-sub-title">{props.subtitle}</p>
      <a href = {props.link} target= "_blank" rel="noopener noreferrer"> View </a>
      </animated.div>
    

   );

}

export default Cardinfo;