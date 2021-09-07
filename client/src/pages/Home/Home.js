import {Component} from 'react';
import Hero from '../../components/Hero/Hero';
import SelectButton from '../../components/SelectButton/SelectButton';

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
      <section className="home">
      <div className="home-dish__image"></div>
      <button className="dish-btn">Shuffle</button>
      <div className="home-dish">
        <h3 className="home-dish__name">Name: <span></span></h3>
        <h3 className="home-dish__serves">Serves: <span></span></h3>
        <h3 className="home-dish__prep-time">Prep-Time: <span></span></h3>
        <h3 className="home-dish__cook-time">Cook Time: <span></span></h3>
        <h3 className="home-dish__total-time">Total Time: <span></span></h3>
        <ul className="home-dish__ingredients">
          Ingredients:
          <li></li>
        </ul>
        <ol className="home-dish__instruction">
          Instruction:
          <li></li>
        </ol>
      </div>
      </section>
    </div>
    );
  }
}

export default HomePage;