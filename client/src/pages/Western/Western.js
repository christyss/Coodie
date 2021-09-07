import { Component } from 'react';
import axios from 'axios'
import Hero from '../../components/Hero/Hero';
import SelectButton from '../../components/SelectButton/SelectButton';
import './Western.scss';

class WesternPage extends Component {
  state = {
    westernFoodRecipe: [],
    selectedWesternFood: null,
  }

  getWesternRecipes = (recipeId) => {
    axios.get(`http://localhost:8080/western/${recipeId}`)
      .then(response => {
        this.setState({ selectedWesternFood: response.data, })
      })
      .catch(error => console.log(error))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getWesternRecipes(this.props.match.params.id)
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/western')
      .then((response) => {
        this.setState({
          WesternFoodRecipe: response.data
        })
        const recipeId = response.data[0].id
        this.getWesternRecipes(recipeId)
      })
  }

  render() {
    if (!this.state.selectedWesternFood) {
      return <h2>Loading...</h2>
    }
    return (
      <section className="dish-section western">
<<<<<<< HEAD
        <img className="dish__image" src={this.state.selectedWesternFood.image}></img>
        <button className="dish-btn">Shuffle</button>
=======
        <Hero />
        <SelectButton />
        <img src={this.state.selectedWesternFood.image} className="dish__image" alt={"Photo of " + `${this.state.selectedWesternFood.name}`} />
>>>>>>> develop
        <div className="dish">
          <h3 className="dish__name">Name: <span>{this.state.selectedWesternFood.name}</span></h3>
          <h3 className="dish__serves">Serves: <span>{this.state.selectedWesternFood.serves}</span></h3>
          <h3 className="dish__prep-time">Prep-Time: <span>{this.state.selectedWesternFood.prepTime}</span></h3>
          <h3 className="dish__cook-time">Cook Time: <span>{this.state.selectedWesternFood.cookTime}</span></h3>
          <h3 className="dish__total-time">Total Time: <span>{this.state.selectedWesternFood.totalTime}</span></h3>
          <ul className="dish__ingredients">
            <h3>Ingredients:</h3>
            {this.state.selectedWesternFood.recipeIngredient.map(ingredient => (
              <li className="dish__ingredients-list">{ingredient}</li>
            ))}
          </ul>
          <ol className="dish__instruction">
            <h3>Instruction:</h3>
            {this.state.selectedWesternFood.recipeInstruction.map(instruction => (
              <li className="dish__ingredients-list">{instruction}</li>
            ))}
          </ol>
        </div>
      </section>
    );
  }
}

export default WesternPage;