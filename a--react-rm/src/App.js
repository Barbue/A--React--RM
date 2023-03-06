
import './App.css';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Header from './Header'


  
 
function App() {

const [characters, setCharacters] = useState([]);

useEffect(() => {
	const fetchData = async () => {
   try {

	const {data} = await axios.get('https://rickandmortyapi.com/api/character/')

	setCharacters(data.results)
} catch (error) {
	console.error(error)
}
}
fetchData() 
}, [])



return (
 <div className="App">
<Header />
<div className="results"> 
	
{characters.map(character => (
    <div class="flip-card">
    <div class="flip-card-inner">
    <div class="flip-card-front">
      <img src={character.image} alt={character.name}/>
	  <h2>{character.name}</h2>
      <h4>{`Gender: ${character.gender}`}</h4>
	  <h4>{`Species: ${character.species}`}</h4>
      <h4>{`Status: ${character.status}`}</h4>
    </div>
    <div class="flip-card-back">
	<p>{`Episodes: ${character.episode.length}`}</p>
	   <br></br>
    <p>{`Location: ${character.location.name}`}</p>
	   <br></br>
    <p>{`Origin: ${character.origin.name}`}</p>
      
    </div>
  </div>

  
</div>
))}
</div>
</div>
);
}



  
  


export default App;













{/* <div className="results">
      

	  {characters.map(character => (
		<div>
			
		<img src={character.image} alt={character.name}/> 
		<br></br>

		<p>
		<h>{character.name} </h>
		<br></br>
		{`Gender: ${character.gender}`}
		<br></br>
		{`Species: ${character.species}`}
		<br></br>
		{`Status: ${character.status}`}
		</p>
    </div>
))}
</div> */}