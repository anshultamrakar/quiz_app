import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Finalscore from './Finalscore';
import Test from './Test'
import Form from './Form'



const App = () => {
  return (
    <Router>
     <Switch>
     <Route exact={true} path="/" component={Form} />
        <Route path="/test" component={Test} />
        <Route path="/finalscore" component={Finalscore} />
     </Switch>
    </Router>
  )
}

export default App


 ReactDOM.render(<App/>,document.getElementById('root'));
