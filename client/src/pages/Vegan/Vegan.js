import { Component } from 'react';
import axios from 'axios'

class VeganPage extends Component {
  state = {
    veganFoodRecipe: {},
    selectedVeganFood: null,
  }

  getVeganRecipes = (recipeId) => {
    axios.get(`http://localhost:8080/vegan/${recipeId}`)
      .then(response => {
        this.setState({ selectedVeganFood: response.data, })
      })
      .catch(error => console.log(error))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getVeganRecipes(this.props.match.params.id)
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/vegan')
      .then((response) => {
        this.setState({
          veganFoodRecipe: response.data
        })
        const recipeId = response.data[0].id
        this.getVeganRecipes(recipeId)
      })
  }


  render() {
    if (!this.state.selectedVeganFood) {
      return <h2>Loading..</h2>
    }
    return (
      <section className="dish-section vegan">
        <div className="dish__image"></div>
        <div className="dish">
          <h3 className="dish__name">Name: <span>{this.state.selectedVeganFood.name}</span></h3>
          <h3 className="dish__serves">Serves: <span>{this.state.selectedVeganFood.serves}</span></h3>
          <h3 className="dish__prep-time">Prep-Time: <span>{this.state.selectedVeganFood.prepTime}</span></h3>
          <h3 className="dish__cook-time">Cook Time: <span>{this.state.selectedVeganFood.cookTime}</span></h3>
          <h3 className="dish__total-time">Total Time: <span>{this.state.selectedVeganFood.totalTime}</span></h3>
          <ul className="dish__ingredients">
            Ingredients:
            {this.state.selectedVeganFood.recipeIngredient.map(ingredient => (
              <li>{ingredient}</li>
            ))}
          </ul>
          <ol className="dish__instruction">
            Instruction:
            {this.state.selectedVeganFood.recipeInstruction.map(instruction => (
              <li>{instruction}</li>
            ))}
          </ol>
        </div>
      </section>
    );
  }
}

export default VeganPage;