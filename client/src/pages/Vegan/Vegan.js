import { Component } from 'react';
import axios from 'axios'
import './Vegan.scss';
import Hero from '../../components/Hero/Hero';
import SelectButton from '../../components/SelectButton/SelectButton';
import Header from '../../components/PageHeader/PageHeader';

class VeganPage extends Component {
  state = {
    veganFoodRecipe: {},
    selectedVeganFood: null,
  }



  getVeganRecipes = (id) => {
    axios.get(`http://localhost:8080/vegan/${id}`)
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
        const id = this.props.match.params.id || response.data[0].id;
        this.getVeganRecipes(id)
      })
  }


  render() {
    if (!this.state.selectedVeganFood) {
      return <h2>Loading..</h2>
    }
    return (
      <section className="dish-section vegan">
        <Header />
        <Hero />
        <SelectButton />
        <img src={this.state.selectedVeganFood.image} className="dish__image" alt={"Photo of " + `${this.state.selectedVeganFood.name}`} />
        <div className="dish">
          <div className='dish__flex'>
            <div className='dish__flex-info'>
              <h3 className="dish__name"><span className='dish__span'> Name:</span> <span>{this.state.selectedVeganFood.name}</span></h3>
              <h3 className="dish__serves"> <span className='dish__span'>Serves:</span> <span>{this.state.selectedVeganFood.serves}</span></h3>
              <h3 className="dish__prep-time"> <span className='dish__span'>Prep-Time:</span> <span>{this.state.selectedVeganFood.prepTime}</span></h3>
              <h3 className="dish__cook-time"> <span className='dish__span'>Cook Time:</span> <span>{this.state.selectedVeganFood.cookTime}</span></h3>
              <h3 className="dish__total-time"> <span className='dish__span'>Total Time: </span><span>{this.state.selectedVeganFood.totalTime}</span></h3>
            </div>
            <ul className="dish__ingredients">
              <h3 className='dish__ingredients-title'>Ingredients:</h3>
              {this.state.selectedVeganFood.recipeIngredient.map(ingredient => (
                <li className="dish__ingredients-list">{ingredient}</li>
              ))}
            </ul>
          </div>
          <ol className="dish__instruction">
            <h3 className='dish__ingredients-title'>Instruction:</h3>
            {this.state.selectedVeganFood.recipeInstruction.map(instruction => (
              <li className="dish__ingredients-list">{instruction}</li>
            ))}
          </ol>
        </div>
      </section>
    );
  }
}

export default VeganPage;