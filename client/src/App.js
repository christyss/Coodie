import {Component} from 'react';
import Header from './components/PageHeader/PageHeader';
import SelectButton from './components/SelectButton/SelectButton.js';

class App extends Component{
  
  render(){  
    return (
    <div className="App">
      <Header />
      <SelectButton />
    </div>
    );
  }
}

export default App;
