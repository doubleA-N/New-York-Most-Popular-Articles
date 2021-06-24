import React from 'react';
import {Nav,Navbar} from 'react-bootstrap'

// Navigation bar to let user go to the page that they wants
class Navigation extends React.Component {

    render(){
        return(
          <div >
            <Navbar className='navigation' variant="light" collapseOnSelect expand="lg">
            <Navbar.Brand href="/">
            <h5 className='navigation'>New York Time</h5>
            </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/"><h6 className='navigation'>Homepage</h6></Nav.Link>
              </Nav>
          </Navbar>
          </div>
            
        )
    }
}
export default Navigation;