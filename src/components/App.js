import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Layout from '../components/Partials/LayoutComponent';
import NavBar from '../components/Partials/NavBarComponent';





function App() {
  return (
    <BrowserRouter>
    <React.Fragment>
    <Layout>
    <Switch>  
    <Route exact path = "/home" component={NavBar} />

    
    </Switch>
    </Layout>   
   </React.Fragment>
    
   </BrowserRouter>
  );
}

export default App;
