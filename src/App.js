import React, { Component } from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';

import MainTemplate from "./components/mainLayout/template/mainTemplate";
import Home from "./components/home/home";
import test from "./components/test/test"

class App extends Component {
  constructor(props){
    super(props);
  }

  render() {

    return (
<BrowserRouter>
<MainTemplate>
               <Switch>
                   <Route exact path='/' component={Home}/>
                   <Route exact path='/test' component={test}/>

               </Switch>
            </MainTemplate>
</BrowserRouter>
    );
  }
}

export default App;
