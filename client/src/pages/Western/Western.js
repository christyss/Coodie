import {Component} from 'react';

class WesternPage extends Component{
  state = {
    westernFoodRecipe: [],
    selectedWesternFood: null, 
  }

  getAllRecipes = (recipeId) => {
      axios
        .get(`http://localhost:8080/western`)
            .then(westernRecipe => {
                this.setState({
                    
                })
            })
  }

  render(){  
    return (
      <section className="dish-section western">
      <div className="dish__image"></div>
      <div className="dish">
        <h3 className="dish__name">Name: <span></span></h3>
        <h3 className="dish__serves">Serves: <span></span></h3>
        <h3 className="dish__prep-time">Prep-Time: <span></span></h3>
        <h3 className="dish__cook-time">Cook Time: <span></span></h3>
        <h3 className="dish__total-time">Total Time: <span></span></h3>
        <ul className="dish__ingredients">
          Ingredients:
          <li></li>
        </ul>
        <ol className="dish__instruction">
          Instruction:
          <li></li>
        </ol>
      </div>
    </section>
    );
  }
}

export default WesternPage;