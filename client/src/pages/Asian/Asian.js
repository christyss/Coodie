import { Component } from 'react';
import axios from 'axios'

class AsianPage extends Component {
  state = {
    asianFoodRecipe: {},
    selectedAsianFood: null,
  }

  getAsianRecipes = (recipeId) => {
    axios.get(`http://localhost:8080/asian/${recipeId}`)
      .then(response => {
        this.setState({ selectedAsianFood: response.data, })
      })
      .catch(error => console.log(error))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getAsianRecipes(this.props.match.params.id)
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/asian')
      .then((response) => {
        this.setState({
          asianFoodRecipe: response.data
        })
        const recipeId = response.data[0].id
        this.getAsianRecipes(recipeId)
      })
  }



  render() {
    if (!this.state.selectedAsianFood) {
      return <h2>Loading...</h2>
    }
    return (
      <section className="dish-section-asian">
        <img className="dish__image" src={this.state.selectedAsianFood.image}></img>
        <button className="dish-btn">Shuffle</button>
        <div className="dish">
          <h3 className="dish__name">Name:<span> {this.state.selectedAsianFood.name}</span></h3>
          <h3 className="dish__serves">Serves: <span>{this.state.selectedAsianFood.serves}</span></h3>
          <h3 className="dish__prep-time">Prep-Time: <span>{this.state.selectedAsianFood.prepTime}</span></h3>
          <h3 className="dish__cook-time">Cook Time: <span>{this.state.selectedAsianFood.cookTime}</span></h3>
          <h3 className="dish__total-time">Total Time: <span>{this.state.selectedAsianFood.totalTime}</span></h3>
          <ul className="dish__ingredients">
            Ingredients:
            {this.state.selectedAsianFood.recipeIngredient.map(ingredient => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <ol className="dish__instruction">
            Instruction:
            {this.state.selectedAsianFood.recipeInstruction.map(instruction => (
              <li>{instruction}</li>
            ))}
          </ol>
        </div>
      </section>
    );
  }
}

export default AsianPage;