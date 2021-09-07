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
    return(
      <section className="dish-section vegan">
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

export default VeganPage;