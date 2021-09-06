import {Component} from 'react';

class HomePage extends Component{
  state = {
    asianFoodRecipe: [],
    westernFoodRecipe: [],
    veganFoodRecipe: [],
    selectedFood: null,  
  }

  getAsianRecipes = (recipeId) => {
      axios
        .get(`http://localhost:8080/asian`)
            .then(asianRecipe => {
                this.setState({
                    
                })
            })
  }
  getWesternRecipes = (recipeId) => {
    axios
      .get(`http://localhost:8080/western`)
          .then(westernRecipe => {
              this.setState({
                  
              })
          })
  }

  render(){  
    return (
    <div className="App">
      
    </div>
    );
  }
}

export default HomePage;