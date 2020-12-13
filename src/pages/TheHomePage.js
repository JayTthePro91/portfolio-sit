import React from 'react';
import Sub from '../components/Sub';
import Carousel from '../components/Thecarousel';

function HomePage(props){

return(

<div>
<Sub title={props.title} subTitle={props.subTitle} text={props.text} />
<Carousel/>
</div>
);


}

export default HomePage;