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
      <section className="dish-section asian">
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

export default AsianPage;