import { useEffect, useState } from 'react';

import './App.css';

function App() {
  const [count, setCounter] = useState<number>(0);

  useEffect(() => {
    if (count <= 0) {
      setCounter(0);
    }
  }, [count]);

  // fetch data and save to variable called 'data'
  const [data, setData] = useState<any>(null);
  const fetchData = async () => {
    const response = await fetch('http://localhost:5000/users');
    const data = await response.json();
    setData(data);
  };

  return (
    <>
      <button onClick={() => setCounter(count + 1)}>increase count</button>
      <p>{count <= 0 ? <p>lmao cant go lower</p> : count}</p>

      <button onClick={() => setCounter(count - 1)}>decrease count</button>

      <button onClick={() => fetchData()}>fetch data</button>
      {data && (
        <div>
          <h2>{data.recipeName}</h2>
          <p>Author: {data.author}</p>
          <p>Prep Time: {data.prepTime}</p>
          <p>Cook Time: {data.cookTime}</p>
          <h3>Ingredients:</h3>
          <ul>
            {data.ingredients.map((ingredient: any) => (
              <li key={ingredient.name}>
                {ingredient.quantity} {ingredient.unit} {ingredient.name}
              </li>
            ))}
          </ul>
          <h3>Instructions:</h3>
          <ol>
            {data.instructions.map((instruction: any) => (
              <li key={instruction.step}>{instruction.description}</li>
            ))}
          </ol>
        </div>
      )}
    </>
  );
}

export default App;
