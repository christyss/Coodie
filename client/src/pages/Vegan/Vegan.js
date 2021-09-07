import {Component} from 'react';

class VeganPage extends Component{
  state = {
    veganFoodRecipe: [],
    selectedVeganFood: null,
  }

  getAllRecipes = (recipeId) => {
      axios
        .get(`http://localhost:8080/vegan`)
            .then(veganRecipe => {
                this.setState({
                    
                })
            })
  }

  render(){  
    return (
    <section className="vegan">
      <div className="vegan-dish__image"></div>
      <button className="dish-btn">Shuffle</button>
      <div className="vegan-dish">
        <h3 className="vegan-dish__name">Name: <span></span></h3>
        <h3 className="vegan-dish__serves">Serves: <span></span></h3>
        <h3 className="vegan-dish__prep-time">Prep-Time: <span></span></h3>
        <h3 className="vegan-dish__cook-time">Cook Time: <span></span></h3>
        <h3 className="vegan-dish__total-time">Total Time: <span></span></h3>
        <ul className="vegan-dish__ingredients">
          Ingredients:
          <li></li>
        </ul>
        <ol className="vegan-dish__instruction">
          Instruction:
          <li></li>
        </ol>
      </div>
    </section>
    );
  }
}

export default VeganPage;