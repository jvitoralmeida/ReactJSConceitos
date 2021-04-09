import React, { useState } from "react";

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState(["Repositório 1"]);
  const [counter, setCounter] = useState(2);

  function handleAddRepository() {
    setRepositories([...repositories, `Repositório ${counter}`]);
    setCounter((counter) => counter + 1);
  }

  function handleRemoveRepository(index) {
    const clone = [...repositories];
    clone.splice(index, 1);

    setRepositories(clone);
  }

  return (
    <div>
      <ul data-testid="repository-list">
        {repositories.map((repositorie, index) => {
          return (
            <div key={index}>
              <li>{repositorie}</li>
              <button onClick={() => handleRemoveRepository(index)}>
                Remover
              </button>
            </div>
          );
        })}
      </ul>

      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
