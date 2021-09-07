import { Component } from 'react';
import Header from './components/PageHeader/PageHeader';
import Home from './pages/Home/Home';
import { Route, BrowserRouter, Switch } from 'react-router-dom'
import Asian from './pages/Asian/Asian'
import Vegan from './pages/Vegan/Vegan'
import Western from './pages/Western/Western'
class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path='/asian' exact component={Asian} />
          <Route path='/asian/:recipeId' component={Asian} />
          <Route path='/vegan' exact component={Vegan} />
          <Route path='/vegan/:recipeId' component={Vegan} />
          <Route path='/western' exact component={Western} />
          <Route path='/western/:recipeId' component={Western} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
