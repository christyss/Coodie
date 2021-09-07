import {Component} from 'react';
import Hero from '../../components/Hero/Hero';
import SelectButton from '../../components/SelectButton/SelectButton';
import './Home.scss';

class HomePage extends Component{
//   state = {
//     allRecipes: [],
//     selectedFood: null
//   }

//   getAllRecipes = (recipeId) => {
//       axios
//         .get(`http://localhost:8080`)
//             .then(aallRecipe => {
//                 this.setState({
                    
//                 })
//             })
//   }

  render(){  
    return (
    <div className="Home">
      <Hero />
      <SelectButton />
      <section className="dish-section home">
      <img src="" className="dish__image" />
      <div className="dish">
        <h3 className="dish__name">Name: <span></span></h3>
        <h3 className="dish__serves">Serves: <span></span></h3>
        <h3 className="dish__prep-time">Prep-Time: <span></span></h3>
        <h3 className="home-dish__cook-time">Cook Time: <span></span></h3>
        <h3 className="dish__total-time">Total Time: <span></span></h3>
        <ul className="dish__ingredients">
          <h3>Ingredients:</h3>
          <li className="dish__ingredients-list"></li>
        </ul>
        <ol className="dish__instruction">
          <h3>Instruction:</h3>
          <li className="dish__instruction-list"></li>
        </ol>
      </div>
      </section>
    </div>
    );
  }
}

export default HomePage;