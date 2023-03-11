import React, {useEffect,useState} from 'react';
import './App.css';
import Recipie from './Recipie';

function App() {
  
  const app_id="fa66bcfa";
  const app_key="bbdfb56ae66884d7e1e59b6750d02ef3";
   
  const [recipiesstate,setRecipies] = useState([]);

  useEffect(() => {
    getRecipies();
  }, []);

  const getRecipies = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=chicken&app_id=${app_id}&app_key=${app_key}&from=0&to=3&calories=591-722&health=alcohol-free`);
    const data = await response.json();
    console.log(data.hits);
;    setRecipies(data.hits);
  }
   
  return (
    <div className="App">
      <form className="search-form">
        <input type="text" className='text' placeholder='Search'></input>
        <button type='submit' className='sugmit'>Submit</button>

      </form>
      {recipiesstate.map(recipie => (
        
          <Recipie
            key={recipie.recipe.label}
            title={recipie.recipe.label}
            calories={recipie.recipe.calories}
            image={recipie.recipe.image}
            cautions={recipie.recipe.cautions}
          />
    
    ))}

    </div>
  );
}

export default App;
