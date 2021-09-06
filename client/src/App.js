import { Component } from 'react';
import Header from './components/PageHeader/PageHeader';
import { Route, BrowserRouter, Switch } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Switch>
          <Route path="/" exact component={Home} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
