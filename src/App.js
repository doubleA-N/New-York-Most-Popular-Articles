// Created by Thidarat Chaichana

import { BrowserRouter as Router, Route} from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// Components
import Navigation from './Components/Navigation'
import Contents from './Components/Contents'
import Details from './Components/Details'

function App() {
  return (
    <div>
     <Navigation />
    <div className="App">

      {/* Go to page that user want */}
    <Router>
      <Route path='/' exact={true} component={Contents} />
      <Route path='/details/:id' exact={true} component={Details}/>
    </Router>
    
   </div> 
    </div>
    
  );
}

export default App;
