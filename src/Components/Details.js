import React from 'react';
import {Container,Row,Card,Image,Badge } from 'react-bootstrap/'
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import '../App.css';

// Component to show detail of each article based on users selected
const Details = _ => {
    const { state } = useLocation();
  
    return (
      <div>
        <Container>
        <h2 className='title mt-5'>"{state.data.title}"</h2>
        
        <Row className="">
            <Row>
            {state.data.media.length === 0?
             <h2 className='title mt-5'>NO Image Available</h2>
            :
            <>
            <Image className='img' src={state.data.media[0]["media-metadata"][2].url} fluid />
            <small className='img'>{state.data.media[0].caption}</small>    
            </>
            }
            
            </Row>
            <Card className='article'>
            <Card.Header>Abstract</Card.Header>
            <Card.Body>
                <blockquote className="blockquote mb-0">
                <p>
                    {' '}
                    {state.data.abstract}.{' '}
                </p>
                <footer className="blockquote-footer">
                   {state.data.byline} {' '}
                   at <cite title="Source Title">{state.data.source}</cite>
                </footer>
                </blockquote>
            </Card.Body>
            </Card>
          
        </Row>
        <Badge className='update' pill variant="secondary">
         Last update: {state.data.updated}
        </Badge>
        <Badge className='update' pill variant="dark">
            Published Date: {state.data.published_date}
            </Badge>
            <Badge className='update' pill variant="secondary">
                {state.data.section}
            </Badge> {' '}
        <Row>
        <a href={state.data.url} >Read more at {state.data.url}</a>
        </Row>
        
        
        </Container>
        {/* {console.log(state)} */}
      </div>
    );
  };
export default Details;