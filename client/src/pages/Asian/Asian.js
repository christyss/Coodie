import {Component} from 'react';

class AsianPage extends Component{
  state = {
    asianFoodRecipe: [],
    selectedAsianFood: null,
  }

  getAsianRecipes = (recipeId) => {
      axios
        .get(`http://localhost:8080/asian`)
            .then(asianRecipe => {
                this.setState({
                    
                })
            })
  }
  
  render(){  
    return (
      <section className="asian">
      <div className="asian-dish__image"></div>
      <button className="dish-btn">Shuffle</button>
      <div className="asian-dish">
        <h3 className="asian-dish__name">Name: <span></span></h3>
        <h3 className="asian-dish__serves">Serves: <span></span></h3>
        <h3 className="asian-dish__prep-time">Prep-Time: <span></span></h3>
        <h3 className="asian-dish__cook-time">Cook Time: <span></span></h3>
        <h3 className="asian-dish__total-time">Total Time: <span></span></h3>
        <ul className="asian-dish__ingredients">
          Ingredients:
          <li></li>
        </ul>
        <ol className="asian-dish__instruction">
          Instruction:
          <li></li>
        </ol>
      </div>
    </section>
    );
  }
}

export default AsianPage;