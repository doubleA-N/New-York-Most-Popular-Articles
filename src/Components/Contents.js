import React from 'react';
import {Card,CardDeck,Form,Dropdown, DropdownButton, InputGroup} from 'react-bootstrap/'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import { Link } from 'react-router-dom';

class Contents extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            data : [],
            section: [],
            checking: null,
            time: 'Yesterday (default)'
        };
   
    }

    componentDidMount(){
        fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=ufASDnGwv6yd2wSVsdkBejG5DUUWWPol',{
            method: "GET",
            cache: "no-cache",
            headers:{
                Accept: "application/json"
            },
        })
        .then(response => response.json())
        .then(jsonData => {
            this.setState({data : jsonData.results})
            // console.log(this.state.data)
        })       
    }
    
// Function to render arts section
    artsRender = () =>{
        return (
            this.state.data.map((item, i) =>(
                
                item.section.match('Arts') &&
                <div>
               
                <CardDeck id={item.id} className='mr-1 ml-1 mb-3'>
                    <Card style={{ width: '20rem'}}>
                    {item.media.length === 0?
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src='ny-time.png' /> 
                    </Link>
                    :
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src={item.media[0]["media-metadata"][2].url} />
                    </Link>
                    }
                        <Card.Body>
                        <Link to={{
                            pathname: `/details/${item.id}`,
                            state: {data:item}
                        }}
                        className="link"
                        >
                        <Card.Title>{item.title}</Card.Title>    
                        </Link>
                        <Card.Text>
                        {item.byline}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted date">Last Update: {item.updated}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                
                </div>         
            )
            )
        ) 
    }
// Function to render business section
    businessRender = () =>{
        return (
            this.state.data.map((item, i) =>(
                
                item.section.match('Business') &&
                <div>
               
                <CardDeck id={item.id} className='mr-1 ml-1 mb-3'>
                    <Card style={{ width: '20rem'}}>
                    {item.media.length === 0?
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src='ny-time.png' /> 
                    </Link>
                    :
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src={item.media[0]["media-metadata"][2].url} />
                    </Link>
                    }
                        <Card.Body>
                        <Link to={{
                            pathname: `/details/${item.id}`,
                            state: {data:item}
                        }}
                        className="link"
                        >
                        <Card.Title>{item.title}</Card.Title>    
                        </Link>
                        <Card.Text>
                        {item.byline}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted date">Last Update: {item.updated}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                
                </div>   
            )
            )
        ) 
    }
// Function to render health section
    healthRender = () =>{
        return (
            this.state.data.map((item, i) =>(
                
                item.section.match('Health') &&
                <div>
               
                <CardDeck id={item.id} className='mr-1 ml-1 mb-3'>
                    <Card style={{ width: '20rem'}}>
                    {item.media.length === 0?
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src='ny-time.png' /> 
                    </Link>
                    :
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src={item.media[0]["media-metadata"][2].url} />
                    </Link>
                    }
                        <Card.Body>
                        <Link to={{
                            pathname: `/details/${item.id}`,
                            state: {data:item}
                        }}
                        className="link"
                        >
                        <Card.Title>{item.title}</Card.Title>    
                        </Link>
                        <Card.Text>
                        {item.byline}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted date">Last Update: {item.updated}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                
                </div>          
            )
            )
        ) 
    }
// Function to render New York section
    nyRender = () =>{
        return (
            this.state.data.map((item, i) =>(
                
                item.section.match('New York') &&
                <div>
               
                <CardDeck id={item.id} className='mr-1 ml-1 mb-3'>
                    <Card style={{ width: '20rem'}}>
                    {item.media.length === 0?
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src='ny-time.png' /> 
                    </Link>
                    :
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src={item.media[0]["media-metadata"][2].url} />
                    </Link>
                    }
                        <Card.Body>
                        <Link to={{
                            pathname: `/details/${item.id}`,
                            state: {data:item}
                        }}
                        className="link"
                        >
                        <Card.Title>{item.title}</Card.Title>    
                        </Link>
                        <Card.Text>
                        {item.byline}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted date">Last Update: {item.updated}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                
                </div>      
            )
            )
        ) 
    }
// Function to render opinion section
    opinionRender = () =>{
        return (
            this.state.data.map((item, i) =>(
                
                item.section.match('Opinion') &&
                <div>
               
                <CardDeck id={item.id} className='mr-1 ml-1 mb-3'>
                    <Card style={{ width: '20rem'}}>
                    {item.media.length === 0?
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src='ny-time.png' /> 
                    </Link>
                    :
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src={item.media[0]["media-metadata"][2].url} />
                    </Link>
                    }
                        <Card.Body>
                        <Link to={{
                            pathname: `/details/${item.id}`,
                            state: {data:item}
                        }}
                        className="link"
                        >
                        <Card.Title>{item.title}</Card.Title>    
                        </Link>
                        <Card.Text>
                        {item.byline}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted date">Last Update: {item.updated}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                
                </div>        
            )
            )
        ) 
    }
// Function to render science section
    scienceRender = () =>{
        return (
            this.state.data.map((item, i) =>(
                
                item.section.match('Science') &&
                <div>
               
                <CardDeck id={item.id} className='mr-1 ml-1 mb-3'>
                    <Card style={{ width: '20rem'}}>
                    {item.media.length === 0?
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src='ny-time.png' /> 
                    </Link>
                    :
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src={item.media[0]["media-metadata"][2].url} />
                    </Link>
                    }
                        <Card.Body>
                        <Link to={{
                            pathname: `/details/${item.id}`,
                            state: {data:item}
                        }}
                        className="link"
                        >
                        <Card.Title>{item.title}</Card.Title>    
                        </Link>
                        <Card.Text>
                        {item.byline}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted date">Last Update: {item.updated}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                
                </div>       
            )
            )
        ) 
    }
// Function to render Sport section
    sportRender = () =>{
        return (
            this.state.data.map((item, i) =>(
                
                item.section.match('Sports') &&
                <div>
               
                <CardDeck id={item.id} className='mr-1 ml-1 mb-3'>
                    <Card style={{ width: '20rem'}}>
                    {item.media.length === 0?
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src='ny-time.png' /> 
                    </Link>
                    :
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src={item.media[0]["media-metadata"][2].url} />
                    </Link>
                    }
                        <Card.Body>
                        <Link to={{
                            pathname: `/details/${item.id}`,
                            state: {data:item}
                        }}
                        className="link"
                        >
                        <Card.Title>{item.title}</Card.Title>    
                        </Link>
                        <Card.Text>
                        {item.byline}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted date">Last Update: {item.updated}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                
                </div>     
            )
            )
        ) 
    }
// Function to render style section
    styleRender = () =>{
        return (
            this.state.data.map((item, i) =>(
                
                item.section.match('Style') &&
                <div>
               
                <CardDeck id={item.id} className='mr-1 ml-1 mb-3'>
                    <Card style={{ width: '20rem'}}>
                    {item.media.length === 0?
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src='ny-time.png' /> 
                    </Link>
                    :
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src={item.media[0]["media-metadata"][2].url} />
                    </Link>
                    }
                        <Card.Body>
                        <Link to={{
                            pathname: `/details/${item.id}`,
                            state: {data:item}
                        }}
                        className="link"
                        >
                        <Card.Title>{item.title}</Card.Title>    
                        </Link>
                        <Card.Text>
                        {item.byline}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted date">Last Update: {item.updated}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                
                </div>     
            )
            )
        ) 
    }
// Function to render U.S section
    usRender = () =>{
        return (
            this.state.data.map((item, i) =>(
                
                item.section.match('U.S') &&
                <div>
               
                <CardDeck id={item.id} className='mr-1 ml-1 mb-3'>
                    <Card style={{ width: '20rem'}}>
                    {item.media.length === 0?
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src='ny-time.png' /> 
                    </Link>
                    :
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src={item.media[0]["media-metadata"][2].url} />
                    </Link>
                    }
                        <Card.Body>
                        <Link to={{
                            pathname: `/details/${item.id}`,
                            state: {data:item}
                        }}
                        className="link"
                        >
                        <Card.Title>{item.title}</Card.Title>    
                        </Link>
                        <Card.Text>
                        {item.byline}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted date">Last Update: {item.updated}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                
                </div>       
            )
            )
        ) 
        
    }
// Function to render world section
    worldRender = () =>{
        return (
            this.state.data.map((item, i) =>(
                
                item.section.match('World') &&
                <div>
               
                <CardDeck id={item.id} className='mr-1 ml-1 mb-3'>
                    <Card style={{ width: '20rem'}}>
                    {item.media.length === 0?
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src='ny-time.png' /> 
                    </Link>
                    :
                    <Link to={{
                        pathname: `/details/${item.id}`,
                        state: {data:item}
                    }}
                    className="link"
                    >
                    <Card.Img variant="top" src={item.media[0]["media-metadata"][2].url} />
                    </Link>
                    }
                        <Card.Body>
                        <Link to={{
                            pathname: `/details/${item.id}`,
                            state: {data:item}
                        }}
                        className="link"
                        >
                        <Card.Title>{item.title}</Card.Title>    
                        </Link>
                        <Card.Text>
                        {item.byline}
                        </Card.Text>
                        </Card.Body>
                        <Card.Footer>
                        <small className="text-muted date">Last Update: {item.updated}</small>
                        </Card.Footer>
                    </Card>
                </CardDeck>
                
                </div>       
            )
            )
        ) 
        
    }

// Search function to let users search articles
    search = (e) =>{
        
        const value = e.target.value
        const searchData = []
        
        if(value === ''){
            fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=ufASDnGwv6yd2wSVsdkBejG5DUUWWPol',{
            method: "GET",
            cache: "no-cache",
            headers:{
                Accept: "application/json"
            },
        })
        .then(response => response.json())
        .then(jsonData => {
            this.setState({data : jsonData.results})
        })     
        }
        
        else if(value !== ''){
        this.state.data.forEach((doc) =>{
            const article = doc.title
            if(article.match(value)){
                searchData.push(doc)
                this.setState({data : searchData}) 
                console.log(this.state.data)
            }
           
        })
        }
    }
// Dropdown function to let users select time period
    timeselection = () =>{
        
        return(
            <div>
                <h2 className='mt-4'>Most Popular Viewed - Viewed by {this.state.time}</h2>
                <InputGroup className='mt-2'>
                      <Form.Control
                        placeholder="Search the article"
                        aria-label=""
                        aria-describedby=""
                        onChange={this.search}
                        value={this.state.checking}                       
                      />

                      <DropdownButton
                        as={InputGroup.Append}
                        variant="outline-secondary"
                        title="Time"
                        id="input-group-dropdown"
                        
                      >
                        <Dropdown.Item 
                        onSelect={this.timePeriod}
                        eventKey='1'
                        
                        >
                          YesterDay
                        </Dropdown.Item>
                        <Dropdown.Divider />

                        <Dropdown.Item 
                        onSelect={this.timePeriod}
                        eventKey='7'
                        >
                          This Week
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item 
                        onSelect={this.timePeriod}
                        eventKey='30'
                        >
                          This Month
                        </Dropdown.Item>
                        
                    </DropdownButton>
                </InputGroup>
            </div>
            
        )
    }
// Function to GET data from NY time by period
    timePeriod = (e) =>{
        
       if(e === '1'){
        fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=ufASDnGwv6yd2wSVsdkBejG5DUUWWPol',{
            method: "GET",
            cache: "no-cache",
            headers:{
                Accept: "application/json"
            },
        })
        .then(response => response.json())
        .then(jsonData => {
            this.setState({data : jsonData.results, time: 'Yesterday'})
            
        })       
       }
       else if(e === '7'){
        fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/7.json?api-key=ufASDnGwv6yd2wSVsdkBejG5DUUWWPol',{
            method: "GET",
            cache: "no-cache",
            headers:{
                Accept: "application/json"
            },
        })
        .then(response => response.json())
        .then(jsonData => {
            this.setState({data : jsonData.results, time: 'This Week'})
            
        })       
       }

       else if(e === '30'){
        fetch('https://api.nytimes.com/svc/mostpopular/v2/viewed/30.json?api-key=ufASDnGwv6yd2wSVsdkBejG5DUUWWPol',{
            method: "GET",
            cache: "no-cache",
            headers:{
                Accept: "application/json"
            },
        })
        .then(response => response.json())
        .then(jsonData => {
            this.setState({data : jsonData.results, time: 'This Month'})
           
        })       
       }
    }
// to render each components  
    render(){
        return(
            <div>
            <Container>
           
                {this.timeselection()}
                
                {/* render each section */}
                <h3 className='mt-2'>Arts</h3>
                <Row className=""> 
                {this.artsRender()}
                </Row>

                <h3 className='mt-2'>Business</h3>
                <Row className=""> 
                {this.businessRender()}
                </Row>

                <h3 className='mt-2'>Health</h3>
                <Row className=""> 
                {this.healthRender()}
                </Row>

                <h3 className='mt-2'>Science</h3>
                <Row className=""> 
                {this.scienceRender()}
                </Row>

                <h3 className='mt-2'>Sports</h3>
                <Row className=""> 
                {this.sportRender()}
                </Row>

                <h3 className='mt-2'>Style</h3>
                <Row className=""> 
                {this.styleRender()}
                </Row>

                <h3 className='mt-2'>New York</h3>
                <Row className=""> 
                {this.nyRender()}
                </Row>

                <h3 className='mt-2'>Opinion</h3>
                <Row className=""> 
                {this.opinionRender()}
                </Row>

                <h3 className='mt-2'>U.S</h3>
                <Row className="">
                {this.usRender()}
                </Row>

                <h3 className='mt-2'>World</h3>
                <Row className="">
                {this.worldRender()}
                </Row>
            </Container>
            </div>
        )
    }
}
export default Contents;