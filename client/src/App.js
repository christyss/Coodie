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
          <Route path="/mix" exact component={Home} />
          <Route path="/mix/:id" exact component={Home} />
          <Route path='/asian' exact component={Asian} />
          <Route path='/asian/:id' exact component={Asian} />
          <Route path='/vegan' exact component={Vegan} />
          <Route path='/vegan/:id' exact component={Vegan} />
          <Route path='/western' exact component={Western} />
          <Route path='/western/:id' exact component={Western} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
