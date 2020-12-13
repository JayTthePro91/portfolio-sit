import React from 'react';
import Sub from '../components/Sub';
import TheCarousel from '../components/Thecarousel';

function TheHomePage(props){

return(

<div>
<Sub title={props.title} subTitle={props.subTitle} text={props.text} />
<TheCarousel/>
</div>
);


}

export default TheHomePage;