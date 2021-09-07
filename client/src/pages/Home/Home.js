import { Component } from 'react';
import Hero from '../../components/Hero/Hero';
import SelectButton from '../../components/SelectButton/SelectButton';
import './Home.scss';
import axios from 'axios'
import Header from '../../components/PageHeader/PageHeader';

class HomePage extends Component {
  state = {
    FoodRecipe: {},
    selectedFood: null,
  }

  getRecipes = (id) => {
    axios.get(`http://localhost:8080/mix/${id}`)
      .then(response => {
        this.setState({ selectedFood: response.data, })
      })
      .catch(error => console.log(error))
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.id !== this.props.match.params.id) {
      this.getRecipes(this.props.match.params.id)
    }
  }

  componentDidMount() {
    axios.get('http://localhost:8080/mix')
      .then((response) => {
        this.setState({
          FoodRecipe: response.data
        })

        const id = this.props.match.params.id || response.data[0].id;
        this.getRecipes(id)
      })
  }

  render() {
    if (!this.state.selectedFood) {
      return <h2>Loading..</h2>
    }
    return (
      <div className="Home">
        <section className="dish-section home">
        <Header className="header-home"/>
        <Hero />
        <SelectButton />
          <img src={this.state.selectedFood.image} alt={"Photo of " + `${this.state.selectedFood.name}`} className="dish__image" />
          <div className="dish">
            <h3 className="dish__name">Name: <span>{this.state.selectedFood.name}</span></h3>
            <h3 className="dish__serves">Serves: <span>{this.state.selectedFood.serves}</span></h3>
            <h3 className="dish__prep-time">Prep-Time: <span>{this.state.selectedFood.prepTime}</span></h3>
            <h3 className="home-dish__cook-time">Cook Time: <span>{this.state.selectedFood.cookTime}</span></h3>
            <h3 className="dish__total-time">Total Time: <span>{this.state.selectedFood.totalTime}</span></h3>
            <ul className="dish__ingredients">
              <h3>Ingredients:</h3>
              {this.state.selectedFood.recipeIngredient.map(ingredient => (
                <li className="dish__ingredients-list">{ingredient}</li>
              ))}
            </ul>
            <ol className="dish__instruction">
              <h3>Instruction:</h3>
              {this.state.selectedFood.recipeInstruction.map(instruction => (
                <li className="dish__instruction-list">{instruction}</li>
              ))}
            </ol>
          </div>
        </section>
      </div>
    );
  }
}

export default HomePage;