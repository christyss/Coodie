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
      <section className="western">
      <div className="western-dish__image"></div>
      <button className="dish-btn">Shuffle</button>
      <div className="western-dish">
        <h3 className="western-dish__name">Name: <span></span></h3>
        <h3 className="western-dish__serves">Serves: <span></span></h3>
        <h3 className="western-dish__prep-time">Prep-Time: <span></span></h3>
        <h3 className="western-dish__cook-time">Cook Time: <span></span></h3>
        <h3 className="western-dish__total-time">Total Time: <span></span></h3>
        <ul className="western-dish__ingredients">
          Ingredients:
          <li></li>
        </ul>
        <ol className="western-dish__instruction">
          Instruction:
          <li></li>
        </ol>
      </div>
    </section>
    );
  }
}

export default WesternPage;