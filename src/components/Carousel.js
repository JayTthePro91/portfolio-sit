import React from 'react';
import linkedin from '../assets/images/Linkedin.png';
import Youtube from '../assets/images/youtube.png';
import github from '../assets/images/Github.png';
import Card from '../components/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component{

constructor(props){
    super(props);
        this.state= {

            items: [
                {
                    id: 0,
                    title: 'Linkedin',
                    subTitle: 'Professional Networking Site',
                    imgSrc: linkedin,
                    link: 'https://www.linkedin.com/in/juan-alvarez-6a30a212b/',
                    selected: false
                },
                {
                    id: 1,
                    title: 'youtube',
                    subTitle: 'Tech YouTube channel',
                    imgSrc: Youtube,
                    link: 'https://www.youtube.com/channel/UChHTcItUCzRGDr4H3RAzfIQ',
                    selected: false
                },
                {
                    id: 2,
                    title: 'Github',
                    subTitle: 'A network for college students and developers',
                    imgSrc: github,
                    link: 'https://github.com/JayTthePro91',
                    selected: false
                },
            ]
    }

}

handleCardClick = (id, card) => {

    

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
        if(item.id !== id) {
            item.selected = false;
        }
    });

    this.setState({
        items
    });
}


makeItems = (items) => {
    return items.map(item => {
        return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
    })
}

render(){

return(
      //<p> Carousel works</p>

      <Container fluid={true}>

        <Row className='justify-content-around'>

                {this.makeItems(this.state.items)}      
        </Row>


      </Container>
);

}



}

export default Carousel