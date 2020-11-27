import React from 'react';
import Hero from '../components/Hero';
import thecontent from '../components/thecontent';


function AboutPage(props){

   return(
    <div>
        <Hero title={props.title}/>
        <thecontent>
       <p> Hey! I'm <strong>Juan</strong>. I am currently a computer science student at Lehman college and 
        I have a strong passion for Coding to the point where it has changed the way i 
        think and feel. It's not just about apps. Learning to code gave me <i>problem-solving skills</i>, 
        <i> critical thinkings skills</i>, and a way to communicate with others on a technical level. 
        I am self taught html web developer but also have skills in java and python. 
        In life there will always be a struggle and no matter what struggle or failure i encounter i will find a way to go around 
        it to keep succeeding and building up on my skills as a programmer and web developer.
       <b> There is no success until failure has been encountered</b></p>
        </thecontent>
    </div>    
     
   );


}

export default AboutPage;